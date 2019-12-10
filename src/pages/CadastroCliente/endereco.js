import React, { useState } from 'react';
import { Input, Select } from '@rocketseat/unform';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMunicipio,
  getEstado,
  setEstadoSelecionado,
  setMunicipioSelecionado,
} from '~/store/modules/cadastroCliente/actions';

const Endereco = () => {
  const dispatch = useDispatch();
  //MUNICIPIO
  const [optionsMunicipio, setOptionsMunicipio] = useState([{}]);

  //ESTADO
  const [optionsEstado, setOptionsEstado] = useState([{}]);

  const stateCadastroCliente = useSelector(state => state.cadastroCliente);

  //CARREGA MUNICIPIO
  async function loadMunicipio() {
    await dispatch(getMunicipio());
    let resultMunicipio = [{}];
    if (stateCadastroCliente.MunicipioCombox != undefined) {
      stateCadastroCliente.MunicipioCombox.forEach(element => {
        resultMunicipio.push({
          id: element.Codigo,
          title: element.Nome + ' ' + element.Estado,
          estado: element.Estado,
        });
      });
      resultMunicipio.splice(0, 1);
      const resultMunicipioFiltrado = resultMunicipio.filter(
        element => element.estado == stateCadastroCliente.estado
      );
      setOptionsMunicipio(resultMunicipioFiltrado);
    }
    setEstadoSelecionadoEndereco();
    setMunicipioelecionadoEndereco();
  }

  //CARREGA ESTADO
  async function loadEstado() {
    await dispatch(getEstado());
    let resultEstado = [{}];
    if (stateCadastroCliente.EstadoCombox != undefined) {
      stateCadastroCliente.EstadoCombox.forEach(element => {
        resultEstado.push({
          id: element.Codigo,
          title: element.Nome + ' - ' + element.Codigo,
        });
      });
      resultEstado.splice(0, 1);
      setOptionsEstado(resultEstado);
      loadMunicipio();
    }
  }

  //forca carregar municipio
  if (optionsMunicipio.length <= 1 && stateCadastroCliente.estado != '') {
    loadMunicipio();
  }

  //forca carregar estado
  if (optionsEstado.length <= 1) {
    loadEstado();
  }

  //setEstadoSelecionado
  const [seleciono, setSeleciono] = useState(true);
  async function setEstadoSelecionadoEndereco() {
    if (seleciono) {
      if (stateCadastroCliente.EstadoSelecionado[0].id == undefined) {
        const result = document.getElementById('estado').value;
        if (result != '') {
          if (optionsEstado.length <= 1) {
            loadEstado();
          } else {
            const estadoSelecionado = [
              {
                id: result,
                title: optionsEstado.find(x => x.id == result).title,
              },
            ];
            await dispatch(setEstadoSelecionado(estadoSelecionado));
          }
        }
      }
      setSeleciono(false);
    } else {
      await dispatch(setEstadoSelecionado(optionsEstado));
    }
  }

  //setMunicipioSelecionado
  const [selecionoMunicipio, setSelecionoMunicipio] = useState(true);
  async function setMunicipioelecionadoEndereco() {
    if (selecionoMunicipio) {
      if (stateCadastroCliente.MunicipioSelecionado[0].id == undefined) {
        const result = document.getElementById('municipio').value;
        if (result != '') {
          const municipioSelecionado = [
            {
              id: result,
              title: optionsMunicipio.find(x => x.id == result).title,
              estado: optionsMunicipio.find(x => x.id == result).estado,
            },
          ];
          await dispatch(setMunicipioSelecionado(municipioSelecionado));
        }
      }
      setSelecionoMunicipio(false);
    } else {
      if (optionsMunicipio.length > 1) {
        await dispatch(setMunicipioSelecionado(optionsMunicipio));
      }
    }
  }

  const options = [
    { id: 'Cobrança', title: 'Cobrança' },
    { id: 'Entrega', title: 'Entrega' },
  ];
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div className={'inputWidth'}>
          <label for="name" class="">
            Id endereço
          </label>
          <Input name="idEndereco" type="text" placeholder="Id endereço" />
        </div>
        <div className={'inputWidth'}>
          <label for="name" class="">
            Tipo endereço (cobrança/entrega)
          </label>
          <Form.Group controlId="formCliente" className={'comboboxGroup'}>
            <Select
              name="tipoEndereco"
              options={options}
              className={'comboboxControl'}
              placeholder={'Selecione'}
            />
          </Form.Group>
        </div>
        <div className={'inputWidth'}>
          <label for="name" class="">
            Tipo Logradouro (Rua,viela e etc)
          </label>
          <Input
            name="tipoLogradouro"
            type="text"
            placeholder="Tipo Logradouro"
          />
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div className={'inputWidth'}>
          <label for="name" class="">
            Nome da Rua
          </label>
          <Input name="nomeRua" type="text" placeholder="Rua" />
        </div>
        <div className={'inputWidth'}>
          <label for="name" class="">
            Nº
          </label>
          <Input name="numero" type="text" placeholder="Numero" />
        </div>
        <div className={'inputWidth'}>
          <label for="name" class="">
            Complemento
          </label>
          <Input name="complemento" type="text" placeholder="Complemento" />
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div className={'inputWidth'}>
          <label for="name" class="">
            CEP (Apenas numero)
          </label>
          <Input name="cep" type="text" placeholder="CEP" />
        </div>
        <div className={'inputWidth'}>
          <label for="name" class="">
            Bairro
          </label>
          <Input name="bairro" type="text" placeholder="Bairro" />
        </div>
        <div className={'inputWidth'}>
          <label for="name" class="">
            Estado
          </label>
          <Form.Group controlId="formCliente" className={'comboboxGroup'}>
            <Select
              name="estado"
              options={
                stateCadastroCliente.EstadoSelecionado[0].id == undefined
                  ? optionsEstado
                  : stateCadastroCliente.EstadoSelecionado
              }
              className={'comboboxControl'}
              placeholder={'Selecione'}
              onClick={loadMunicipio}
              onChange={setEstadoSelecionadoEndereco}
            />
          </Form.Group>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div className={'inputWidth'}>
          <label for="name" class="">
            Município
          </label>
          <Form.Group controlId="formCliente" className={'comboboxGroup'}>
            <Select
              name="municipio"
              options={
                stateCadastroCliente.MunicipioSelecionado[0].id == undefined
                  ? optionsMunicipio
                  : stateCadastroCliente.MunicipioSelecionado
              }
              className={'comboboxControl'}
              placeholder={'Selecione o Estado primeiro'}
              onClick={loadMunicipio}
            />
          </Form.Group>
        </div>
        <div className={'inputWidth'}>
          <label for="name" class="">
            Cidade
          </label>
          <Input name="cidade" type="text" placeholder="Cidade" />
        </div>
      </div>
    </>
  );
};

export default Endereco;
