import { all, takeLatest, put, call } from 'redux-saga/effects';
import store from '~/store';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { setPedidoList, setProdutoList } from './actions';

//PEDIDO
export function* getPedidoByName({ payload }) {
  //CHAMADA API
  const { token, codigoVendedor } = store.getState().auth;

  if (!token) {
    toast.error('Falha na autenticação, verifique seus dados!');
    return;
  }

  const result = yield call(
    api.get,
    `/HUB/HUB/PedidoCompra/ListarPedidos/${codigoVendedor},${token}`
  );

  debugger;
  if (result.statusText === 'OK') {
    yield put(setPedidoList(result.data.Pedidos));
    toast.success('Pedidos carregado com sucesso!');
  }
}

//PRODUTO
export function* getProdutoByName({ payload }) {
  //CHAMADA API
  const { token } = store.getState().auth;
  const { CodigoCliente } = store.getState().pedidoVenda;

  if (!token) {
    toast.error('Falha na autenticação, verifique seus dados!');
    return;
  }

  debugger;
  const result = yield call(
    api.get,
    `/HUB/HUB/ListaProdutos/${token}?CardCode=${CodigoCliente}`
  );

  debugger;
  if (result.statusText === 'OK') {
    yield put(setProdutoList(result.data.Produtos));
    debugger;
    toast.success('Produtos carregado com sucesso!');
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
    debugger;
    toast.success('Clientes carregado com sucesso!');
  }
}

export default all([
  takeLatest('@pedidoVenda/GET_PEDIDO', getPedidoByName),
  takeLatest('@pedidoVenda/GET_PRODUTO', getProdutoByName),
  takeLatest('@pedidoVenda/GET_CLIENTE', getClienteByName),
]);
