import { combineReducers } from "redux";

import auth from "./auth/reducer";
import pesquisaDebito from "./pesquisaDebito/reducer";
import modal from "./modal/reducer";

export default combineReducers({
  auth,
  pesquisaDebito,
  modal
});
