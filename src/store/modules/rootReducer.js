import { combineReducers } from "redux";

import auth from "./auth/reducer";
import cadastroCliente from "./cadastroCliente/reducer";
import pedidoVenda from "./pedidoVenda/reducer";
import pedidoCompra from "./pedidoCompra/reducer";
import relatorio from "./relatorios/reducer";

export default combineReducers({
  auth,
  cadastroCliente,
  pedidoVenda,
  pedidoCompra,
  relatorio
});
