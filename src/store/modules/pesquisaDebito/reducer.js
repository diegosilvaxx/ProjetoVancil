import produce from "immer";
import Merge from "~/components/Merge";
import { SET_STATE_PESQUISA_DEBITO } from './actionTypes';

const INITIAL_STATE = {
  dataVencimento: undefined,
  quantidadeParcela: undefined,
  valorOriginal: undefined,
  diasAtraso: undefined,
  valorJuros: undefined,
  valorFinal: undefined,
  telefone: undefined,
  dia: undefined,
};

export default function pesquisaDebito(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_STATE_PESQUISA_DEBITO:
      let { payload } = action;
      return produce(state, draft => {
        draft.quantidadeParcela = payload.quantidadeParcela;
        draft.diasAtraso = payload.diasAtraso;
        draft.valorFinal = payload.valorFinal;
        draft.valorJuros = payload.valorJuros;
        draft.valorOriginal = payload.valorOriginal;
        draft.dataVencimento = payload.dataVencimento;
      });
    default:
      return state;
  }
}
