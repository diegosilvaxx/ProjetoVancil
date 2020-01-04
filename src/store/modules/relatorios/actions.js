//PRODUTO
export function getRelatorio(action) {
  return {
    type: "@relatorio/GET_RELATORIO",
    payload: action
  };
}

export function setRelatorio(action) {
  return {
    type: "@relatorio/SET_RELATORIO",
    payload: action
  };
}
