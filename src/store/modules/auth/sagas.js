import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from 'services/history';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { usuario, password } = payload;

  //CHAMADA API
  const response = yield call(api.post, 'HUB/HUB/Authenticate', {
    appID: usuario,
    AppKey: password,
  });

  const { Token } = response.data;

  if (!Token) {
    toast.error('Falha na autenticação, verifique seus dados!');
    return;
  }

  yield put(signInSuccess(Token));
  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
