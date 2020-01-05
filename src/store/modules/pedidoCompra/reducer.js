import produce from "immer";

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
  ProdutosSelecionado: [{}]
};

export default function pedidoCompra(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@pedidoCompra/GET_PEDIDO":
      return state;
    case "@pedidoCompra/SET_PEDIDO_LIST":
      return produce(state, draft => {
        draft.Pedido.push(action.payload);
      });
    case "@pedidoCompra/SET_PEDIDO":
      return produce(state, draft => {
        debugger;
        const dataFormatada = action.payload.DataDocumento.substr(0, 10)
          .split("/")
          .reverse()
          .join("-");

        draft.NumeroPedido = action.payload.DocEntry;
        draft.CodigoCliente = action.payload.CardCode;
        draft.NomeCliente = action.payload.CardName;
        draft.DataDocumento = dataFormatada;
        draft.Status = action.payload.Status;
        debugger;
        for (
          let index = 0;
          index < action.payload.ItensPedido.length;
          index++
        ) {
          draft.ProdutosSelecionado.push({
            data: {
              Codigo: action.payload.ItensPedido[index].CodigoItem,
              Descricao: action.payload.ItensPedido[index].CodigoItem
            },
            Quantidade: action.payload.ItensPedido[index].Quantidade,
            Desconto: action.payload.ItensPedido[index].PercDesconto,
            ItemPedidoCompra:
              action.payload.ItensPedido[index].ItemPedidoCompra,
            NumeroPedidoCompra:
              action.payload.ItensPedido[index].NumPedidoCompra
          });
        }

        debugger;
        if (state.ProdutosSelecionado[0] != undefined) {
          if (state.ProdutosSelecionado[0].valueOf().Quantidade == null) {
            debugger;
            draft.ProdutosSelecionado.splice(0, 1);
          }
        }
      });
    case "@pedidoCompra/GET_PEDIDO_ALL":
      return state;

    //PRODUTO
    case "@pedidoCompra/GET_PRODUTO":
      return state;
    case "@pedidoCompra/SET_PRODUTO_LIST":
      debugger;
      return produce(state, draft => {
        draft.Produto.push(action.payload);
      });
    case "@pedidoCompra/ADICIONAR_PRODUTO":
      debugger;
      return produce(state, draft => {
        draft.ProdutosSelecionado.push(action.payload);
        debugger;
        if (state.ProdutosSelecionado[0] != undefined) {
          if (state.ProdutosSelecionado[0].valueOf().Quantidade == null) {
            debugger;
            draft.ProdutosSelecionado.splice(0, 1);
          }
        }

        draft.Total += parseFloat(action.payload.Preco);

        const teste = draft;
        console.log(teste);
        debugger;
      });
    case "@pedidoCompra/DELETE_PRODUTO":
      return produce(state, draft => {
        const { Codigo } = action.payload.data;
        var index = draft.ProdutosSelecionado.findIndex(
          x => x.data.Codigo == Codigo
        );
        const ProdutoExcluido = draft.ProdutosSelecionado;

        console.log(index);
        if (index > -1) {
          ProdutoExcluido.splice(index, 1);
        }
        debugger;
        draft.ProdutosSelecionado = ProdutoExcluido;
        debugger;
      });
    default:
      return state;
  }
}
