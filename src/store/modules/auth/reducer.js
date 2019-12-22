import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  failLogin: false,
  loading: false,
  codigoVendedor: undefined,
  nomeVendedor: undefined,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        draft.nomeVendedor = action.payload.nomeVendedor;
        draft.codigoVendedor = action.payload.codigoVendedor;
      });
    case '@auth/SIGN_FAILURE':
      return produce(state, draft => {
        draft.failLogin = true;
        draft.loading = false;
      });
    case '@auth/SIGN_OUT':
      return produce(state, draft => {
        draft.token = null;
        draft.signed = false;
      });
    default:
      return state;
  }
}
