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

export function getGrupoAndTerritorio() {
  return {
    type: '@cadastroCliente/GET_GRUPO',
  };
}

export function setGrupo(grupo, territorio) {
  return {
    type: '@cadastroCliente/SET_GRUPO',
    grupo: grupo,
    territorio: territorio,
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
