import produce from "immer";

const INITIAL_STATE = {
  //PEDIDO
  NumeroPedido: null,
  CodigoCliente: null,
  NomeCliente: null,
  DataDocumento: null,
  Status: null,
  Quantidade: 0,
  //PRODUTO
  NumeroItem: null,
  DescricaoItem: null,
  PrecoUnitario: null,
  Total: 0,
  TotalPedido: 0,
  //CLIENTE
  Pedido: [{}],
  Produto: [{}],
  Cliente: [{}],
  ProdutosSelecionado: [{}],
  PontoEntrega: undefined,
  EnderecoCobranca: undefined,
  EnderecoCombox: [],
  CondicoesPagamento: undefined,
  FormaPagamento: undefined
};

export default function pedidoVenda(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@pedidoVenda/GET_PEDIDO":
      return state;
    case "@pedidoVenda/SET_PEDIDO_LIST":
      return produce(state, draft => {
        draft.Pedido.push(action.payload);
      });
    case "@pedidoVenda/SET_PEDIDO":
      return produce(state, draft => {
        debugger;
        const dataFormatada = action.payload.DataDocumento.substr(0, 10)
          .split("/")
          .reverse()
          .join("-");

        draft.NumeroPedido = action.payload.NumeroPedido;
        draft.CodigoCliente = action.payload.CodigoCliente;
        draft.NomeCliente = action.payload.NomeCliente;
        draft.DataDocumento = dataFormatada;
        draft.Status = "teste";
        debugger;
      });
    //PRODUTO
    case "@pedidoVenda/GET_PRODUTO":
      return state;
    case "@pedidoVenda/SET_PRODUTO_LIST":
      return produce(state, draft => {
        console.log(action.payload);
        debugger;
        draft.Produto.push(action.payload);
      });
    case "@pedidoVenda/ADICIONAR_PRODUTO":
      return produce(state, draft => {
        const TotalDesconto = parseFloat(
          (action.payload.Quantidade *
            action.payload.data.Preco *
            action.payload.Desconto) /
            100
        );
        const TotalValor = parseFloat(
          action.payload.Quantidade * action.payload.data.Preco - TotalDesconto
        );
        const prod = {
          payload: {
            CodigoItem: action.payload.data.Codigo,
            ValorUnitario: action.payload.data.Preco,
            Descricao: action.payload.data.Descricao,
            Quantidade: parseInt(action.payload.Quantidade),
            Deposito: "",
            UM: "Manual",
            PercDesconto: parseInt(action.payload.Desconto),
            Utilizacao: 0,
            Total: TotalValor
          }
        };
        debugger;
        draft.ProdutosSelecionado.push(prod.payload);
        debugger;
        if (draft.ProdutosSelecionado[0].CodigoItem == undefined) {
          draft.ProdutosSelecionado.shift();
        }
        draft.TotalPedido += parseFloat(TotalValor);
      });
    //CLIENTE
    case "@pedidoVenda/GET_CLIENTE":
      return state;
    case "@pedidoVenda/SET_CLIENTE_LIST":
      return produce(state, draft => {
        draft.Cliente.push(action.payload);
      });
    case "@pedidoVenda/SET_CLIENTE":
      return produce(state, draft => {
        debugger;
        draft.NomeCliente = action.payload.Nome;
        draft.CodigoCliente = action.payload.Codigo;
        debugger;
      });
    case "@pedidoVenda/DELETE_PRODUTO":
      return produce(state, draft => {
        debugger;
        const { CodigoItem } = action.payload;
        var index = draft.ProdutosSelecionado.findIndex(
          x => x.CodigoItem == CodigoItem
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
    case "@pedidoVenda/GET_ENDERECO":
      return state;
    case "@pedidoVenda/SET_ENDERECO":
      return produce(state, draft => {
        debugger;
        draft.EnderecoCombox = action.payload;
      });
    default:
      return state;
  }
}
