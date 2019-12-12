export function signInRequest(usuario, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { usuario, password },
  };
}

export function signInSuccess(payload) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: payload,
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
