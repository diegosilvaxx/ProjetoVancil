export function getPedido(action) {
  return {
    type: "@pedidoVenda/GET_PEDIDO",
    payload: action
  };
}

//LISTA USADA NA GRID
export function setPedidoList(action) {
  return {
    type: "@pedidoVenda/SET_PEDIDO_LIST",
    payload: action
  };
}

export function setPedido(action) {
  return {
    type: "@pedidoVenda/SET_PEDIDO",
    payload: action
  };
}

export function getPedidoAll(action) {
  return {
    type: "@pedidoVenda/GET_PEDIDO_ALL",
    payload: action
  };
}

//PRODUTO
export function getProduto(action) {
  return {
    type: "@pedidoVenda/GET_PRODUTO",
    payload: action
  };
}

//LISTA USADA NA GRID
export function setProdutoList(action) {
  return {
    type: "@pedidoVenda/SET_PRODUTO_LIST",
    payload: action
  };
}

export function adicionarProduto(action) {
  return {
    type: "@pedidoVenda/ADICIONAR_PRODUTO",
    payload: action
  };
}

//CLIENTE
export function getCliente(action) {
  return {
    type: "@pedidoVenda/GET_CLIENTE",
    payload: action
  };
}

//LISTA USADA NA GRID
export function setClienteList(action) {
  return {
    type: "@pedidoVenda/SET_CLIENTE_LIST",
    payload: action
  };
}

export function setCliente(action) {
  return {
    type: "@pedidoVenda/SET_CLIENTE",
    payload: action
  };
}

//INSERIR PEDIDO
export function inserirPedido(action) {
  return {
    type: "@pedidoVenda/INSERIR_PEDIDO",
    payload: action
  };
}

//DELETE PRODUTO
export function deleteProduto(action) {
  return {
    type: "@pedidoVenda/DELETE_PRODUTO",
    payload: action
  };
}

//GET ENDERECO
export function getEndereco(action) {
  return {
    type: "@pedidoVenda/GET_ENDERECO",
    payload: action
  };
}

//SET ENDERECO
export function setEndereco(action) {
  return {
    type: "@pedidoVenda/SET_ENDERECO",
    payload: action
  };
}

//SET Logistica
export function setLogistica(action) {
  return {
    type: "@pedidoVenda/SET_LOGISTICA",
    payload: action
  };
}

//SET CONTABILIDADE
export function setContabilidade(action) {
  return {
    type: "@pedidoVenda/SET_CONTABILIDADE",
    payload: action
  };
}

//GET GRUPO PRODUTO
export function getGrupoProduto(action) {
  return {
    type: "@pedidoVenda/GET_GRUPO_PRODUTO",
    payload: action
  };
}
