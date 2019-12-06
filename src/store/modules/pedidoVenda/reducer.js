import produce from 'immer';

const INITIAL_STATE = [
  {
    Codigo: null,
    Nome: null,
    Grupo: 0,
    Telefone: null,
    Celular: null,
    Email: null,
    CNAE: null,
    CNPJ: null,
    CPF: null,
    IE: null,
  },
];

export default function pedidoVenda(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@pedidoVenda/GET_CLIENTE':
      return state;
    case '@pedidoVenda/SET_CLIENTE_LIST':
      return produce(state, draft => {
        draft.push(action.payload);
        debugger;
      });
    default:
      return state;
  }
}
