import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from 'services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  const { usuario, password } = payload;

  //CHAMADA API
  const response = yield call(api.post, 'HUB/HUB/Authenticate', {
    appID: '1',
    AppKey: 'ABC123',
  });

  const { Token } = response.data;

  if (!Token) {
    toast.error('Falha na autenticação, verifique seus dados!');
    yield put(signFailure());
    return;
  }

  const result = yield call(api.post, `/HUB/HUB/Login?Token=${Token}`, {
    Usuario: usuario,
    Senha: password,
  });

  if (result.data.MsgRetorno === 'OK') {
    yield put(signInSuccess(Token));
    history.push('/dashboard');
  } else {
    toast.error('Usuário ou senha incorreto, verifique seus dados!');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
