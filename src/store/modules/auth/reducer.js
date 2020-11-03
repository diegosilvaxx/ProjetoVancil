import produce from 'immer';
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_FAILURE, SIGN_OUT } from './actionTypes';

const INITIAL_STATE = {
  token: null,
  signed: false,
  failLogin: false,
  loading: false,
  email: undefined,
  codigo: undefined,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return produce(state, draft => {
        draft.loading = true;
      });
    case SIGN_IN_SUCCESS:
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        draft.email = action.payload.email;
        draft.codigo = action.payload.codigo;
      });
    case SIGN_FAILURE:
      return produce(state, draft => {
        draft.failLogin = true;
        draft.signed = false;
        draft.loading = false;
      });
    case SIGN_OUT:
      return produce(state, draft => {
        draft.token = null;
        draft.signed = action.payload;
      });
    default:
      return state;
  }
}
