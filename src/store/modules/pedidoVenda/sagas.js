import { all, takeLatest, put, call } from "redux-saga/effects";
import store from "~/store";
import { toast } from "react-toastify";

import api from "~/services/api";

import {
  setPedidoList,
  setProdutoList,
  setClienteList,
  setEndereco,
  getGrupoProduto,
  setPedido
} from "./actions";

//PEDIDO
export function* getPedidoByName({ payload }) {
  //CHAMADA API
  const { token, codigoVendedor } = store.getState().auth;

  if (!token) {
    toast.error("Falha na autenticação, verifique seus dados!");
    return;
  }

  const result = yield call(
    api.get,
    `/HUB/HUB/PedidoVenda/ListarPedidos/${codigoVendedor},${token}`
  );

  // GRUPO PRODUTO
  const grupoProduto = yield call(api.get, `/HUB/HUB/ListaGrupo/${token}`);

  if (grupoProduto.statusText === "OK") {
    yield put(getGrupoProduto(grupoProduto.data.GruposProduto));
  }

  // GRUPO PRODUTO

  debugger;
  if (result.statusText === "OK") {
    yield put(setPedidoList(result.data.Pedidos));
    toast.success("Pedidos carregado com sucesso!");
  }
}

//GET PEDIDO ALL
export function* getPedidoAllSaga({ payload }) {
  //CHAMADA API
  const { token } = store.getState().auth;

  if (!token) {
    toast.error("Falha na autenticação, verifique seus dados!");
    return;
  }

  const result = yield call(
    api.get,
    `/HUB/HUB/PedidoVenda/Pesquisar/${payload.NumeroPedido},${token}`
  );

  debugger;
  if (result.statusText === "OK") {
    debugger;
    yield put(setPedido(result.data));
    toast.success("Pedidos carregado com sucesso!");
  }
}

//PRODUTO
export function* getProdutoByName({ payload }) {
  //CHAMADA API
  const { token } = store.getState().auth;
  const { CodigoCliente } = store.getState().pedidoVenda;

  if (!token) {
    toast.error("Falha na autenticação, verifique seus dados!");
    return;
  }

  debugger;
  const result = yield call(
    api.get,
    `/HUB/HUB/ListaProdutosGrupo/${token}?CardCode=${CodigoCliente}&GrupoItem=${payload}`
  );

  debugger;
  if (result.statusText === "OK") {
    yield put(setProdutoList(result.data.Produtos));
    debugger;
    toast.success("Produtos carregado com sucesso!");
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
    `/HUB/HUB/ListaCliente/${codigoVendedor},${pesquisa + "busca"},${token}`
  );

  // GRUPO PRODUTO
  const grupoProduto = yield call(api.get, `/HUB/HUB/ListaGrupo/${token}`);

  if (grupoProduto.statusText === "OK") {
    yield put(getGrupoProduto(grupoProduto.data.GruposProduto));
  }

  // GRUPO PRODUTO

  debugger;
  if (result.statusText === "OK") {
    yield put(setClienteList(result.data.Clientes));
    debugger;
    toast.success("Clientes carregado com sucesso!");
  }
}

//INSERIR PEDIDO
export function* inserirPedido({ payload }) {
  //CHAMADA API
  const { token, codigoVendedor } = store.getState().auth;
  const produtos = store.getState().pedidoVenda;

  debugger;

  if (!token) {
    toast.error("Falha na autenticação, verifique seus dados!");
    return;
  }
  const data = {
    DocEntry: "",
    Serie: "",
    Status: "",
    CardCode: payload.data.codigoCliente,
    CardName: payload.data.nome,
    NumCliente: payload.data.refCliente,
    DataLancamento: "2019-12-15T16:33:07.381Z",
    DataDocumento: "2019-12-15T16:33:07.381Z",
    DataEntrega: payload.data.dataEntrega,
    Comentarios: payload.data.comentario,
    Vendedor: codigoVendedor,
    CondPgto: -1,
    FormaPgto: "",
    IDEndEntrega: "",
    IDEndCobranca: "",
    ItensPedido: produtos.ProdutosSelecionado
  };

  debugger;
  const result = yield call(
    api.put,
    `/HUB/HUB/PedidoVenda/Inserir/${token}`,
    data
  );

  debugger;
  if (result.data.Retorno.MsgRetorno === "OK") {
    toast.success("Pedido de Venda realizado com sucesso!");
  } else {
    toast.error(result.data.Retorno.MsgRetorno);
  }
}

//CARREGA ENDERECOS DE COBRANÇA / ENTREGA
export function* setEnderecos({ payload }) {
  console.log(payload);
  const { token } = store.getState().auth;
  debugger;
  const resultEndereco = yield call(
    api.get,
    `/HUB/HUB/Cliente/${
      payload.Codigo != undefined ? payload.Codigo : payload.CodigoCliente
    },${token}`
  );

  debugger;
  if (resultEndereco.statusText === "OK") {
    yield put(setEndereco(resultEndereco.data.Enderecos));
    debugger;
  }
}

export default all([
  takeLatest("@pedidoVenda/GET_PEDIDO", getPedidoByName),
  takeLatest("@pedidoVenda/GET_PRODUTO", getProdutoByName),
  takeLatest("@pedidoVenda/GET_CLIENTE", getClienteByName),
  takeLatest("@pedidoVenda/INSERIR_PEDIDO", inserirPedido),
  takeLatest("@pedidoVenda/GET_ENDERECO", setEnderecos),
  takeLatest("@pedidoVenda/GET_PEDIDO_ALL", getPedidoAllSaga)
]);
