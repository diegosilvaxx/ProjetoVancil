import produce from 'immer';
import { CLOSE_MODAL, OPEN_MODAL } from './actionTypes';

const INITIAL_STATE = {
  show: false,
  mensagem: undefined
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CLOSE_MODAL:
      return produce(state, draft => {
        draft.show = false;
      });
    case OPEN_MODAL:
      return produce(state, draft => {
        draft.show = true;
        draft.mensagem = action.payload;
      });
    default:
      return state;
  }
}
