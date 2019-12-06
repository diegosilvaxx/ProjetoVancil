import { all, takeLatest, put, call } from 'redux-saga/effects';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { setClienteList } from './actions';

export function* getClienteByName({ payload }) {
  const retorno = payload;

  //CHAMADA API
  const response = yield call(api.post, 'HUB/HUB/Authenticate', {
    appID: '1',
    AppKey: 'ABC123',
  });

  const { Token } = response.data;

  if (!Token) {
    toast.error('Falha na autenticação, verifique seus dados!');
    return;
  }

  const result = yield call(
    api.get,
    `/HUB/HUB/ListaCliente/${retorno},${Token}`
  );

  if (result.statusText === 'OK') {
    yield put(setClienteList(result.data.Clientes));
    toast.success('Clientes carregado com sucesso!');
  }
}

export default all([takeLatest('@pedidoVenda/GET_CLIENTE', getClienteByName)]);
