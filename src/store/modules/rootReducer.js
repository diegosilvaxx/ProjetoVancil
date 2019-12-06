import { combineReducers } from 'redux';

import auth from './auth/reducer';
import gridVenda from './gridVenda/reducer';
import cadastroCliente from './cadastroCliente/reducer';
import pedidoVenda from './pedidoVenda/reducer';

export default combineReducers({
  auth,
  gridVenda,
  cadastroCliente,
  pedidoVenda,
});
