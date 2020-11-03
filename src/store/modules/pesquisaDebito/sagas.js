import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { CALCULAR_PESQUISA_DEBITO, GET_PESQUISA_DEBITO } from './actionTypes';
import api from "~/services/api";
import { setState } from "./actions";
import store from "~/store";

export function* getDebito({ payload }) {
  const { token, codigo } = store.getState().auth;

  if (!token) {
    toast.error("Falha na autenticação, verifique seus dados!");
    return;
  }

  try {
    const result = yield call(
      api.get,
      `pesquisadebito/${codigo}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    yield put(setState(result.data));
    toast.success("Debito carregado com sucesso!");

  } catch (error) {
    toast.error("Erro ao Pesquisar Debito!");
  }
}

export default all([
  takeLatest(GET_PESQUISA_DEBITO, getDebito),
]);
