import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import history from "services/history";
import api from "~/services/api";
import { setClienteList, setCliente } from "./actions";
import { setGrupo, setMunicipio, setEstado } from "./actions";
import store from "~/store";

export function* insertCliente({ payload }) {
  try {
    const data = {
      Retorno: {
        CodRetorno: 100,
        MsgRetorno: "OK"
      },
      Codigo: "",
      Nome: payload.nomeCliente,
      Grupo: parseInt(payload.grupo),
      Telefone1: payload.telefone,
      Telefone2: payload.ddd,
      Celular: payload.celular,
      Email: payload.email,
      Ativo: true,
      Tipo: "Cliente",
      NomeFantasia: payload.nomeFantasia,
      SaldoConta: 0,
      EntregaMercadoria: 0,
      Pedidos: 0,
      Observacoes: payload.observacoes,
      Vendedor: "1",
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
          Complemento: payload.complemento
        },
        payload.idEnderecoComplemento0 != ""
          ? {
              ID: payload.idEnderecoComplemento0,
              Tipo: payload.tipoEnderecoComplemento0,
              TipoLogradouro: payload.tipoLogradouroComplemento0,
              Logradouro: payload.nomeRuaComplemento0,
              Numero: payload.numeroComplemento0,
              Bairro: payload.bairroComplemento0,
              Cidade: payload.cidadeComplemento0,
              Municipio: parseInt(payload.municipioComplemento0),
              Estado: payload.estadoComplemento0,
              CEP: payload.cepComplemento0,
              Complemento: payload.complementoComplemento0
            }
          : null,
        payload.idEnderecoComplemento1 != undefined
          ? {
              ID: payload.idEnderecoComplemento1,
              Tipo: payload.tipoEnderecoComplemento1,
              TipoLogradouro: payload.tipoLogradouroComplemento1,
              Logradouro: payload.nomeRuaComplemento1,
              Numero: payload.numeroComplemento1,
              Bairro: payload.bairroComplemento1,
              Cidade: payload.cidadeComplemento1,
              Municipio:
                payload.municipioComplemento1 != undefined
                  ? parseInt(payload.municipioComplemento1)
                  : undefined,
              Estado: payload.estadoComplemento1,
              CEP: payload.cepComplemento1,
              Complemento: payload.complementoComplemento1
            }
          : null,
        payload.idEnderecoComplemento2 != undefined
          ? {
              ID: payload.idEnderecoComplemento2,
              Tipo: payload.tipoEnderecoComplemento2,
              TipoLogradouro: payload.tipoLogradouroComplemento2,
              Logradouro: payload.nomeRuaComplemento2,
              Numero: payload.numeroComplemento2,
              Bairro: payload.bairroComplemento2,
              Cidade: payload.cidadeComplemento2,
              Municipio:
                payload.municipioComplemento2 != undefined
                  ? parseInt(payload.municipioComplemento2)
                  : undefined,
              Estado: payload.estadoComplemento2,
              CEP: payload.cepComplemento2,
              Complemento: payload.complementoComplemento2
            }
          : null
      ],
      Fiscal: {
        CNAE: payload.cnae,
        CNPJ: payload.cnpj,
        IE: payload.inscricaoEstadual,
        IsentoIE: payload.insentoInscricaoEstadual,
        CPF: payload.cpf
      },
      Pagamento: {
        CondicaoPagamento: -1
      },
      Contatos: [
        {
          ID: payload.idContato,
          PrimeroNome: payload.nome,
          SegundoNome: payload.segundoNome,
          Sobrenome: payload.sobrenome,
          Telefone: payload.telefonePessoaContato,
          Email: payload.emailPessoaContato
        }
      ]
    };

    for (let i = 0; i <= data.Enderecos.length; i++) {
      if (data.Enderecos[1] == null) {
        data.Enderecos.pop();
      }
    }

    console.log(data);
    debugger;

    //CHAMADA API
    const { token } = store.getState().auth;

    if (!token) {
      toast.error("Falha na autenticação, verifique seus dados!");
      return;
    }

    const result = yield call(api.put, `HUB/HUB/InserirCliente/${token}`, data);
    if (result.data.MsgRetorno == "OK") {
      toast.success("Dados inserido com sucesso!");
      history.push("/cadastroCliente");
    } else {
      toast.error(result.data.MsgRetorno);
    }
  } catch (err) {
    toast.error("Falha ao inserir, verifique seus dados!");
  }
}

export function* getGrupoSaga() {
  //CHAMADA API

  const { token } = store.getState().auth;
  const {
    MunicipioCombox,
    EstadoCombox,
    GrupoCombox,
    TerritorioCombox
  } = store.getState().cadastroCliente;

  if (!token) {
    toast.error("Falha na autenticação, verifique seus dados!");
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
    toast.error("Falha na autenticação, verifique seus dados!");
    return;
  }

  debugger;
  const result = yield call(
    api.get,
    `/HUB/HUB/ListaCliente/${codigoVendedor},${pesquisa + " busca"},${token}`
  );

  debugger;
  if (result.statusText === "OK") {
    yield put(setClienteList(result.data.Clientes));
    toast.success("Clientes carregado com sucesso!");
  }
}

//CLIENTE COMPLETO
export function* getClienteByNameCompleto({ payload }) {
  //CHAMADA API
  debugger;
  const { token } = store.getState().auth;

  if (!token) {
    toast.error("Falha na autenticação, verifique seus dados!");
    return;
  }

  debugger;
  const result = yield call(
    api.get,
    `/HUB/HUB/Cliente/${payload.Codigo},${token}`
  );

  debugger;
  if (result.statusText === "OK") {
    yield put(setCliente(result.data));
    toast.success("Cliente carregado com sucesso!");
  }
}

export default all([
  takeLatest("@cadastroCliente/INSERT_CLIENTE", insertCliente),
  takeLatest("@cadastroCliente/GET_GRUPO", getGrupoSaga),
  takeLatest("@cadastroCliente/GET_MUNICIPIO", getGrupoSaga),
  takeLatest("@cadastroCliente/GET_ESTADO", getGrupoSaga),
  takeLatest("@cadastroCliente/GET_CLIENTE", getClienteByName),
  takeLatest("@cadastroCliente/GET_CLIENTE_COMPLETO", getClienteByNameCompleto)
]);
