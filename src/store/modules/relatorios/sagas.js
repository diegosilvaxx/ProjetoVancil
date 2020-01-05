import { all, takeLatest, put, call } from "redux-saga/effects";
import store from "~/store";
import { toast } from "react-toastify";
import history from "services/history";

import api from "~/services/api";

import { setRelatorio } from "./actions";

//RELATORIO
export function* getRelatorioSaga({ payload }) {
  //CHAMADA API
  debugger;
  const { token, codigoVendedor } = store.getState().auth;

  if (!token) {
    toast.error("Falha na autenticação, verifique seus dados!");
    return;
  }

  const result = yield call(
    api.get,
    `/HUB/HUB/Relatorios/Comissao/${23},${payload.dataInicio},${
      payload.dataFim
    }` //codigoVendedor
  );

  debugger;

  if (result.statusText === "OK") {
    if (result.data.Notas.length == 0) {
      toast.error(
        "Falha ao carregar Relatório, nenhum registro encontrado, tente aumentar o período entre a Data Inicio e a Data Fim"
      );
    } else {
      yield put(setRelatorio(result.data));
      debugger;
      toast.success("Relatório carregado com sucesso!");
      history.push("/dashboard");
    }
  }
}

export default all([takeLatest("@relatorio/GET_RELATORIO", getRelatorioSaga)]);
