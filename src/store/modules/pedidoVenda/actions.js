export function getPedido(action) {
  return {
    type: '@pedidoVenda/GET_PEDIDO',
    payload: action,
  };
}

//LISTA USADA NA GRID
export function setPedidoList(action) {
  return {
    type: '@pedidoVenda/SET_PEDIDO_LIST',
    payload: action,
  };
}

export function setPedido(action) {
  return {
    type: '@pedidoVenda/SET_PEDIDO',
    payload: action,
  };
}

//PRODUTO
export function getProduto(action) {
  return {
    type: '@pedidoVenda/GET_PRODUTO',
    payload: action,
  };
}

//LISTA USADA NA GRID
export function setProdutoList(action) {
  return {
    type: '@pedidoVenda/SET_PRODUTO_LIST',
    payload: action,
  };
}

export function setProduto(action) {
  return {
    type: '@pedidoVenda/SET_PRODUTO',
    payload: action,
  };
}

//CLIENTE
export function getCliente(action) {
  return {
    type: '@pedidoVenda/GET_CLIENTE',
    payload: action,
  };
}

//LISTA USADA NA GRID
export function setClienteList(action) {
  return {
    type: '@pedidoVenda/SET_CLIENTE_LIST',
    payload: action,
  };
}

export function setCliente(action) {
  return {
    type: '@pedidoVenda/SET_CLIENTE',
    payload: action,
  };
}
