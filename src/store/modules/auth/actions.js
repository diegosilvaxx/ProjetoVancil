export function signInRequest(usuario, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { usuario, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
