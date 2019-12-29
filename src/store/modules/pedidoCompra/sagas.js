import { all, takeLatest, put, call } from "redux-saga/effects";
import store from "~/store";
import { toast } from "react-toastify";

import api from "~/services/api";

import { setPedidoList, setProdutoList } from "./actions";

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
    `/HUB/HUB/PedidoCompra/ListarPedidos/${codigoVendedor},${token}`
  );

  debugger;
  if (result.statusText === "OK") {
    yield put(setPedidoList(result.data.Pedidos));
    toast.success("Pedidos carregado com sucesso!");
  }
}

//PRODUTO
export function* getProdutoByName({ payload }) {
  //CHAMADA API
  const { token } = store.getState().auth;

  if (!token) {
    toast.error("Falha na autenticação, verifique seus dados!");
    return;
  }

  debugger;
  const result = yield call(api.get, `/HUB/HUB/ListaDespesas/${token}`);

  debugger;
  if (result.statusText === "OK") {
    yield put(setProdutoList(result.data.Despesas));
    debugger;
    toast.success("Produtos carregado com sucesso!");
  }
}

//INSERIR PEDIDO
export function* inserirPedido(ListaPedidos) {
  //CHAMADA API
  const { payload, incluirAtualizar } = ListaPedidos;
  debugger;
  const { token, codigoVendedor } = store.getState().auth;
  const produtos = store.getState().pedidoCompra;

  const resultProduto = [];
  produtos.ProdutosSelecionado.forEach(data => {
    resultProduto.push({
      CodigoItem: data.data.Codigo,
      Quantidade: data.Quantidade,
      ValorUnitario: parseFloat(data.Desconto),
      Utilizacao: 0,
      UM: "",
      Deposito: "",
      PercDesconto: 0
    });
  });

  debugger;

  if (!token) {
    toast.error("Falha na autenticação, verifique seus dados!");
    return;
  }
  const data = {
    DocEntry: "",
    Serie: "",
    Status: "",
    CardCode: "",
    CardName: "",
    NumCliente: "",
    DataLancamento: "2019-12-15T16:33:07.381Z",
    DataDocumento: "2019-12-15T16:33:07.381Z",
    DataEntrega: "2019-12-15T16:33:07.381Z",
    Comentarios: payload.comentario,
    Vendedor: codigoVendedor,
    CondPgto: -1,
    FormaPgto: "",
    IDEndEntrega: "",
    IDEndCobranca: "",
    ItensPedido: resultProduto,
    Finalizado: incluirAtualizar
  };

  debugger;
  const result = yield call(
    api.put,
    `/HUB/HUB/PedidoCompra/Inserir/${token}`,
    data
  );

  debugger;
  if (result.data.Retorno.CodRetorno === 100) {
    toast.success("Pedido enviado com sucesso!");
  } else {
    toast.error(result.data.Retorno.MsgRetorno);
  }
}

export default all([
  takeLatest("@pedidoCompra/GET_PEDIDO", getPedidoByName),
  takeLatest("@pedidoCompra/GET_PRODUTO", getProdutoByName),
  takeLatest("@pedidoCompra/INSERIR_PEDIDO", inserirPedido)
]);
