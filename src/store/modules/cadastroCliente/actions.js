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

export function setConfirmation(action) {
  return {
    type: '@cadastroCliente/SET_CONFIRMATION',
    payload: action,
  };
}

export function getGrupo() {
  return {
    type: '@cadastroCliente/GET_GRUPO',
  };
}

export function setGrupo(action) {
  return {
    type: '@cadastroCliente/SET_GRUPO',
    payload: action,
  };
}

export function getMunicipio() {
  return {
    type: '@cadastroCliente/GET_MUNICIPIO',
  };
}

export function setMunicipio(action) {
  return {
    type: '@cadastroCliente/SET_MUNICIPIO',
    payload: action,
  };
}

export function getEstado() {
  return {
    type: '@cadastroCliente/GET_ESTADO',
  };
}

export function setEstado(action) {
  return {
    type: '@cadastroCliente/SET_ESTADO',
    payload: action,
  };
}

export function setEstadoSelecionado(action) {
  return {
    type: '@cadastroCliente/SET_ESTADO_SELECIONADO',
    payload: action,
  };
}

export function setMunicipioSelecionado(action) {
  return {
    type: '@cadastroCliente/SET_MUNICIPIO_SELECIONADO',
    payload: action,
  };
}
