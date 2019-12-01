import produce from 'immer';

const INITIAL_STATE = {
  total: 'R$560,00',
};

export default function gridVenda(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@gridVenda/Grid_Venda_Store':
      return produce(state, draft => {
        draft.total = action.payload.total;
      });
    default:
      return state;
  }
}
