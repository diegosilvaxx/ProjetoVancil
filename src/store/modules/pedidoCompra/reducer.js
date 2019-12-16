import produce from 'immer';

const INITIAL_STATE = {
  //PEDIDO
  NumeroPedido: null,
  CodigoCliente: null,
  NomeCliente: null,
  DataDocumento: null,
  Status: null,
  //PRODUTO
  NumeroItem: null,
  DescricaoItem: null,
  PrecoUnitario: null,
  Total: 0,
  //CLIENTE
  Pedido: [{}],
  Produto: [{}],
  Cliente: [{}],
  ProdutosSelecionado: [{}],
};

export default function pedidoVenda(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@pedidoVenda/GET_PEDIDO':
      return state;
    case '@pedidoVenda/SET_PEDIDO_LIST':
      return produce(state, draft => {
        draft.Pedido.push(action.payload);
      });
    case '@pedidoVenda/SET_PEDIDO':
      return produce(state, draft => {
        debugger;
        const dataFormatada = action.payload.DataDocumento.substr(0, 10)
          .split('/')
          .reverse()
          .join('-');

        draft.NumeroPedido = action.payload.NumeroPedido;
        draft.CodigoCliente = action.payload.CodigoCliente;
        draft.NomeCliente = action.payload.NomeCliente;
        draft.DataDocumento = dataFormatada;
        draft.Status = 'teste';
        debugger;
      });
    //PRODUTO
    case '@pedidoVenda/GET_PRODUTO':
      return state;
    case '@pedidoVenda/SET_PRODUTO_LIST':
      return produce(state, draft => {
        draft.Produto.push(action.payload);
      });
    case '@pedidoVenda/ADICIONAR_PRODUTO':
      return produce(state, draft => {
        draft.ProdutosSelecionado.push(action.payload);
        if (state.ProdutosSelecionado[0].valueOf().Codigo == null) {
          draft.ProdutosSelecionado.splice(0, 1);
        }
        draft.Total += parseFloat(action.payload.Preco);
      });
    default:
      return state;
  }
}
