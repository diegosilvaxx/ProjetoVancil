import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from 'services/history';
import api from '~/services/api';

export function* insertCliente({ payload }) {
  try {
    const data = payload;

    //CHAMADA API
    const response = yield call(api.post, 'HUB/HUB/Authenticate', {
      appID: 1,
      AppKey: 'ABC123',
    });

    const { Token } = response.data;

    if (!Token) {
      toast.error('Falha na autenticação, verifique seus dados!');
      return;
    }

    yield call(api.post, `HUB/HUB/InserirCliente/${Token}`, data);
    toast.success('Dados inserido com sucesso!');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha ao inserir, verifique seus dados!');
  }
}

export default all([takeLatest('@auth/INSERT_CLIENTE', insertCliente)]);
