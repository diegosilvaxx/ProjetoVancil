import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from 'services/history';
import api from '~/services/api';
import { setClienteList } from './actions';
import { setGrupo, setMunicipio, setEstado } from './actions';
import store from '~/store';

export function* insertCliente({ payload }) {
  try {
    const data = {
      Retorno: {
        CodRetorno: 100,
        MsgRetorno: 'OK',
      },
      Codigo: '',
      Nome: payload.nomeCliente,
      Grupo: parseInt(payload.grupo),
      Telefone1: payload.telefone,
      Telefone2: payload.ddd,
      Celular: payload.celular,
      Email: payload.email,
      Ativo: true,
      Tipo: 'Cliente',
      NomeFantasia: payload.nomeFantasia,
      SaldoConta: 0,
      EntregaMercadoria: 0,
      Pedidos: 0,
      Observacoes: payload.observacoes,
      Vendedor: '1',
      Territorio: payload.territorio,
      Enderecos: [
        {
          ID: payload.idEndereco,
          Tipo: payload.tipoEndereco,
          TipoLogradouro: payload.tipoLogradouro,
          Logradouro: payload.nomeRua,
          Numero: payload.numero,
          Bairro: payload.bairro,
          Cidade: payload.cidade,
          Municipio: parseInt(payload.municipio),
          Estado: payload.estado,
          CEP: payload.cep,
          Complemento: payload.complemento,
        },
      ],
      Fiscal: {
        CNAE: payload.cnae,
        CNPJ: payload.cnpj,
        IE: payload.inscricaoEstadual,
        IsentoIE: payload.insentoInscricaoEstadual,
        CPF: payload.cpf,
      },
      Pagamento: {
        CondicaoPagamento: -1,
      },
      Contatos: [
        {
          ID: payload.idContato,
          PrimeroNome: payload.nome,
          SegundoNome: payload.segundoNome,
          Sobrenome: payload.sobrenome,
          Telefone: payload.telefonePessoaContato,
          Email: payload.emailPessoaContato,
        },
      ],
    };

    //CHAMADA API
    const { token } = store.getState().auth;

    if (!token) {
      toast.error('Falha na autenticação, verifique seus dados!');
      return;
    }

    const result = yield call(api.put, `HUB/HUB/InserirCliente/${token}`, data);
    console.log(result);
    toast.success('Dados inserido com sucesso!');
    history.push('/cadastroCliente');
  } catch (err) {
    toast.error('Falha ao inserir, verifique seus dados!');
  }
}

export function* getGrupoSaga() {
  //CHAMADA API

  const { token } = store.getState().auth;
  const {
    MunicipioCombox,
    EstadoCombox,
    GrupoCombox,
    TerritorioCombox,
  } = store.getState().cadastroCliente;

  if (!token) {
    toast.error('Falha na autenticação, verifique seus dados!');
    return;
  }
  //GRUPO or Territorio
  if (GrupoCombox == undefined || TerritorioCombox == undefined) {
    const resultGrupo = yield call(
      api.get,
      `HUB/HUB/ListaGrupoCliente/${token}`
    );
    const resultTerritorio = yield call(
      api.get,
      `HUB/HUB/ListaTerritorios/${token}`
    );
    yield put(setGrupo(resultGrupo, resultTerritorio));
  }

  //MUNICIPIO
  if (MunicipioCombox == undefined) {
    const resultMunicipio = yield call(
      api.get,
      `HUB/HUB/ListaMunicipios/${token}`
    );
    yield put(setMunicipio(resultMunicipio));
  }

  //ESTADO
  if (EstadoCombox == undefined) {
    const resultEstado = yield call(api.get, `HUB/HUB/ListaUF/${token}`);
    yield put(setEstado(resultEstado));
  }
}

//CLIENTE
export function* getClienteByName({ payload }) {
  //CHAMADA API
  const pesquisa = payload;
  debugger;
  const { token, codigoVendedor } = store.getState().auth;

  if (!token) {
    toast.error('Falha na autenticação, verifique seus dados!');
    return;
  }

  debugger;
  const result = yield call(
    api.get,
    `/HUB/HUB/ListaCliente/${codigoVendedor},${pesquisa},${token}`
  );

  debugger;
  if (result.statusText === 'OK') {
    yield put(setClienteList(result.data.Clientes));
    toast.success('Clientes carregado com sucesso!');
  }
}

export default all([
  takeLatest('@cadastroCliente/INSERT_CLIENTE', insertCliente),
  takeLatest('@cadastroCliente/GET_GRUPO', getGrupoSaga),
  takeLatest('@cadastroCliente/GET_MUNICIPIO', getGrupoSaga),
  takeLatest('@cadastroCliente/GET_ESTADO', getGrupoSaga),
  takeLatest('@cadastroCliente/GET_CLIENTE', getClienteByName),
]);
