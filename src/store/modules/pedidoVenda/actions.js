export function getCliente(action) {
  return {
    type: '@pedidoVenda/GET_CLIENTE',
    payload: action,
  };
}

export function setClienteList(action) {
  return {
    type: '@pedidoVenda/SET_CLIENTE_LIST',
    payload: action,
  };
}
