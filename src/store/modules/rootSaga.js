import { all } from "redux-saga/effects";
import auth from "./auth/sagas";
import pesquisaDebito from "./pesquisaDebito/sagas";

function* rootSaga() {
  return yield all([
    auth,
    pesquisaDebito,
  ]);
}

export default rootSaga;
