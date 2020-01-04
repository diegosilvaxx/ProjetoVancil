import { all, takeLatest, put, call } from "redux-saga/effects";
import store from "~/store";
import { toast } from "react-toastify";

import api from "~/services/api";

import { setRelatorio } from "./actions";

//RELATORIO
export function* getRelatorioSaga({ payload }) {
  //CHAMADA API
  const { token, codigoVendedor } = store.getState().auth;

  if (!token) {
    toast.error("Falha na autenticação, verifique seus dados!");
    return;
  }

  const result = yield call(
    api.get,
    `/HUB/HUB/Relatorios/Comissao/${codigoVendedor},${"DataInicio"},${"DataFim"}`
  );

  debugger;
  if (result.statusText === "OK") {
    yield put(setRelatorio(result.data));
    toast.success("Relatório carregado com sucesso!");
  }
}

export default all([
  takeLatest("@pedidoVenda/GET_RELATORIO", getRelatorioSaga)
]);
