import { OPEN_MODAL, CLOSE_MODAL } from './actionTypes';

export function openModal(payload) {
  return {
    type: OPEN_MODAL,
    payload: payload
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

