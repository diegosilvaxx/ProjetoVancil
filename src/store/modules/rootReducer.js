import { combineReducers } from 'redux';

import auth from './auth/reducer';
import gridVenda from './gridVenda/reducer';

export default combineReducers({
  auth,
  gridVenda,
});
