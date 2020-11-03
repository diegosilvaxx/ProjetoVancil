import { SET_STATE_PESQUISA_DEBITO, GET_PESQUISA_DEBITO } from './actionTypes';

export function setState(action) {
  return {
    type: SET_STATE_PESQUISA_DEBITO,
    payload: action
  };
}

export function getPesquisaDebito(action) {
  return {
    type: GET_PESQUISA_DEBITO,
    payload: action
  };
}



