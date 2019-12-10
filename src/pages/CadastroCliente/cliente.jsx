import React, { useState } from 'react';
import { Input, Select } from '@rocketseat/unform';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { getGrupo } from '~/store/modules/cadastroCliente/actions';

const Cliente = () => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState([{}]);
  const stateCadastroCliente = useSelector(state => state.cadastroCliente);

  async function loadGrupo() {
    await dispatch(getGrupo());
    let resultGrupo = [{ id: undefined, title: undefined }];
    if (stateCadastroCliente.GrupoCombox != undefined) {
      stateCadastroCliente.GrupoCombox.forEach(element => {
        resultGrupo.push({
          id: element.Codigo,
          title: element.Descricao,
        });
      });
      resultGrupo.splice(0, 1);
      setOptions(resultGrupo);
    }
  }

  if (options.length <= 1) {
    loadGrupo();
  }

  var Carregando = [{ id: 'Carregando', title: 'Carregando...' }];

  return (
    <>
      <div style={{ display: 'flex' }} key={'fgdf'}>
        <div
          className={'inputWidth'}
          style={{ width: '40px', marginRight: '20px' }}
        >
          <label htmlFor="name">DDD</label>
          <Input
            name="ddd"
            type="text"
            placeholder="(99)"
            style={{
              width: '40px',
              marginRight: '20px',
              padding: '0',
              textAlign: 'center',
            }}
          />
        </div>
        <div className={'inputWidth'}>
          <label htmlFor="name">Telefone</label>
          <Input name="telefone" type="text" placeholder="9999-9999" />
        </div>
        <div className={'inputWidth'}>
          <label htmlFor="name">Celular</label>
          <Input name="celular" type="text" placeholder="(99) 99999-9999" />
        </div>
        <div className={'inputWidth'}>
          <label htmlFor="name" className="">
            Email
          </label>
          <Input name="email" type="email" placeholder="Email" />
        </div>
      </div>
      <div style={{ display: 'flex' }} key={'teste3123'}>
        <div className={'inputWidth'}>
          <label htmlFor="name" className="">
            Observações
          </label>
          <Input name="observacoes" type="text" placeholder="Observações" />
        </div>
        <div className={'inputWidth'}>
          <label>Território *</label>
          <Input name="territorio" type="text" placeholder="Território" />
        </div>
        <div className={'inputWidth'} key={'teste'}>
          <label htmlFor="name" className="" key={'teste33'}>
            Grupo
          </label>
          <Form.Group
            key={'clientehtmlFormGroupSelectComboBox'}
            controlId="grupo"
            className={'comboboxGroup'}
          >
            <Select
              name="grupo"
              options={options.length <= 1 ? Carregando : options}
              className={'comboboxControl'}
              placeholder={'Selecione'}
            />
          </Form.Group>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className={'inputWidth'}>
          <label htmlFor="name" className="">
            Nome do Cliente
          </label>
          <Input name="nomeCliente" type="text" placeholder="Nome do Cliente" />
        </div>
        <div className={'inputWidth'}>
          <label htmlFor="name" className="">
            Nome Fantasia
          </label>
          <Input name="nomeFantasia" type="text" placeholder="Nome Fantasia" />
        </div>
      </div>
    </>
  );
};

export default Cliente;
