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

//CLIENTE
export function getCliente(action) {
  return {
    type: '@cadastroCliente/GET_CLIENTE',
    payload: action,
  };
}

//LISTA USADA NA GRID
export function setClienteList(action) {
  return {
    type: '@cadastroCliente/SET_CLIENTE_LIST',
    payload: action,
  };
}

export function setCliente(action) {
  return {
    type: '@cadastroCliente/SET_CLIENTE',
    payload: action,
  };
}
