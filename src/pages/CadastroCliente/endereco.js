import React, { useState, useEffect } from 'react';
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
  const [selecionoMunicipio, setSelecionoMunicipio] = useState(true);
  const [carregoDados, setCarregoDados] = useState(false);
  const [seleciono, setSeleciono] = useState(true);
  const options = [
    { id: 'Cobrança', title: 'Cobrança' },
    { id: 'Entrega', title: 'Entrega' },
  ];

  var Carregando = [{ id: 'Carregando', title: 'Carregando...' }];

  //MUNICIPIO
  const [optionsMunicipio, setOptionsMunicipio] = useState([
    { id: 'Carregando', title: 'Carregando' },
  ]);

  //ESTADO
  const [optionsEstado, setOptionsEstado] = useState([
    { id: 'Carregando', title: 'Carregando' },
  ]);

  const stateCadastroCliente = useSelector(state => state.cadastroCliente);
  if (carregoDados == false) {
    dispatch(getMunicipio());
    dispatch(getEstado());
    setCarregoDados(true);
  }

  //CARREGA MUNICIPIO
  async function loadMunicipio() {
    let resultMunicipio = [{ id: 'Carregando', title: 'Carregando' }];
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
    let resultEstado = [{ id: 'Carregando', title: 'Carregando' }];
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

  //htmlForca carregar municipio
  if (optionsMunicipio.length <= 1 && stateCadastroCliente.estado != '') {
    loadMunicipio();
  }

  //htmlForca carregar estado
  if (optionsEstado.length <= 1) {
    loadEstado();
  }

  //setEstadoSelecionado

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

  async function setMunicipioelecionadoEndereco() {
    if (selecionoMunicipio) {
      if (stateCadastroCliente.MunicipioSelecionado[0].id == undefined) {
        const result = document.getElementById('municipio').value;
        if (result != '' && optionsMunicipio.length > 1) {
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

  return (
    <>
      <div style={{ display: 'flex' }} key={'gfd'}>
        <div className={'inputWidth'}>
          <label htmlFor="name" className="">
            Id endereço
          </label>
          <Input name="idEndereco" type="text" placeholder="Id endereço" />
        </div>
        <div className={'inputWidth'} key={'gfdfgh'}>
          <label htmlFor="name" className="">
            Tipo endereço (cobrança/entrega)
          </label>
          <Form.Group
            controlId="FormCliente"
            key={'KeyFormGrupoEndereco'}
            className={'comboboxGroup'}
          >
            <Select
              name="tipoEndereco"
              options={options.length <= 1 ? Carregando : options}
              className={'comboboxControl'}
              placeholder={'Selecione'}
              key={'KeyFormGrupoSelectEndereco'}
            />
          </Form.Group>
        </div>
        <div className={'inputWidth'}>
          <label htmlFor="name" className="">
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
          <label htmlFor="name" className="">
            Nome da Rua
          </label>
          <Input name="nomeRua" type="text" placeholder="Rua" />
        </div>
        <div className={'inputWidth'}>
          <label htmlFor="name" className="">
            Nº
          </label>
          <Input name="numero" type="text" placeholder="Numero" />
        </div>
        <div className={'inputWidth'}>
          <label htmlFor="name" className="">
            Complemento
          </label>
          <Input name="complemento" type="text" placeholder="Complemento" />
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div className={'inputWidth'}>
          <label htmlFor="name" className="">
            CEP (Apenas numero)
          </label>
          <Input name="cep" type="text" placeholder="CEP" />
        </div>
        <div className={'inputWidth'}>
          <label>Bairro</label>
          <Input name="bairro" type="text" placeholder="Bairro" />
        </div>
        <div className={'inputWidth'}>
          <label>Estado</label>
          <Form.Group
            controlId="FormCliente"
            key={'KeyFormFroupEstado'}
            className={'comboboxGroup'}
          >
            <Select
              key={'selectEstadoComboBoxKey'}
              name="estado"
              options={
                optionsEstado.length <= 1
                  ? Carregando
                  : stateCadastroCliente.EstadoSelecionado[0].id == undefined
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
        <div className={'inputWidth'} onMouseOver={loadMunicipio}>
          <label htmlFor="name" className="">
            Município
          </label>
          <Form.Group controlId="htmlFormCliente" className={'comboboxGroup'}>
            <Select
              name="municipio"
              options={
                optionsMunicipio.length <= 1
                  ? Carregando
                  : stateCadastroCliente.MunicipioSelecionado[0].id == undefined
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
          <label htmlFor="name" className="">
            Cidade
          </label>
          <Input name="cidade" type="text" placeholder="Cidade" />
        </div>
      </div>
    </>
  );
};

export default Endereco;
