import { all } from "redux-saga/effects";
import auth from "./auth/sagas";
import cadastroCliente from "./cadastroCliente/sagas";
import pedidoVenda from "./pedidoVenda/sagas";
import pedidoCompra from "./pedidoCompra/sagas";

function* rootSaga() {
  return yield all([auth, cadastroCliente, pedidoVenda, pedidoCompra]);
}

export default rootSaga;
