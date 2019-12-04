export function insertCliente(action) {
  return {
    type: '@cadastroCliente/INSERT_CLIENTE',
    payload: action,
  };
}

export function setState(action) {
  return {
    type: '@cadastroCliente/SET_STATE',
    payload: action,
  };
}
