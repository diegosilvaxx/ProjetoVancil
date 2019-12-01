import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  failLogin: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
      });
    case '@auth/SIGN_FAILURE':
      return produce(state, draft => {
        draft.failLogin = true;
      });
    default:
      return state;
  }
}
