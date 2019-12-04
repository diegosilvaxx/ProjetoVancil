import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import cadastroCliente from './cadastroCliente/sagas';

function* rootSaga() {
  return yield all([auth, cadastroCliente]);
}

export default rootSaga;
