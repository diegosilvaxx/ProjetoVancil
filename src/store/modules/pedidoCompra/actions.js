export function getPedido(action) {
  return {
    type: '@pedidoCompra/GET_PEDIDO',
    payload: action,
  };
}

//LISTA USADA NA GRID
export function setPedidoList(action) {
  return {
    type: '@pedidoCompra/SET_PEDIDO_LIST',
    payload: action,
  };
}

export function setPedido(action) {
  return {
    type: '@pedidoCompra/SET_PEDIDO',
    payload: action,
  };
}

//PRODUTO
export function getProduto(action) {
  return {
    type: '@pedidoCompra/GET_PRODUTO',
    payload: action,
  };
}

//LISTA USADA NA GRID
export function setProdutoList(action) {
  return {
    type: '@pedidoCompra/SET_PRODUTO_LIST',
    payload: action,
  };
}

export function adicionarProduto(action) {
  return {
    type: '@pedidoCompra/ADICIONAR_PRODUTO',
    payload: action,
  };
}