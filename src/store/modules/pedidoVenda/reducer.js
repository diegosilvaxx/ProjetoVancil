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
  //LOGISTICA
  pontoEntrega: undefined,
  enderecoCobranca: undefined,
  pontoEntregaDetalhes: undefined,
  enderecoCobrancaDetalhes: undefined,
  EnderecoCombox: [],
  //CONTABILIDADE
  CondicoesPagamento: undefined,
  FormaPagamento: undefined,
  //GRUPO PRODUTO
  GrupoProdutoCombox: []
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

        draft.NumeroPedido = action.payload.DocEntry;
        draft.CodigoCliente = action.payload.CardCode;
        draft.NomeCliente = action.payload.CardName;
        draft.DataDocumento = action.payload.DataDocumento;
        draft.Status = action.payload.Status;

        for (
          let index = 0;
          index < action.payload.ItensPedido.length;
          index++
        ) {
          draft.ProdutosSelecionado.push({
            CodigoItem: action.payload.ItensPedido[index].CodigoItem,
            Descricao: action.payload.ItensPedido[index].CodigoItem,
            ValorUnitario: action.payload.ItensPedido[index].ValorUnitario,
            Quantidade: action.payload.ItensPedido[index].Quantidade,
            Desconto: action.payload.ItensPedido[index].PercDesconto,
            ItemPedidoCompra:
              action.payload.ItensPedido[index].ItemPedidoCompra,
            NumPedidoCompra: action.payload.ItensPedido[index].NumPedidoCompra,
            Total: parseFloat(
              action.payload.ItensPedido[index].Quantidade *
                action.payload.ItensPedido[index].ValorUnitario -
                action.payload.ItensPedido[index].PercDesconto
            )
          });
          debugger;
          if (draft.ProdutosSelecionado[0].CodigoItem == undefined) {
            draft.ProdutosSelecionado.shift();
          }
          debugger;
          draft.TotalPedido += parseFloat(
            action.payload.ItensPedido[index].Quantidade *
              action.payload.ItensPedido[index].ValorUnitario -
              action.payload.ItensPedido[index].PercDesconto
          );
        }
      });
    //PRODUTO
    case "@pedidoVenda/GET_PRODUTO":
      return state;
    //GET GRUPO PRODUTO
    case "@pedidoVenda/GET_GRUPO_PRODUTO":
      return produce(state, draft => {
        console.log(action.payload);
        debugger;
        draft.GrupoProdutoCombox = action.payload;
      });
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
            Total: TotalValor,
            NumPedidoCompra: action.payload.NumeroPedidoCompra,
            ItemPedidoCompra: action.payload.ItemPedidoCompra
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
    //CONTABILIDADE
    case "@pedidoVenda/SET_CONTABILIDADE":
      return produce(state, draft => {
        debugger;
        draft.CondicoesPagamento =
          action.payload.data.CondicoesPagamento != undefined
            ? action.payload.data.CondicoesPagamento
            : draft.CondicoesPagamento;

        draft.FormaPagamento =
          action.payload.data.FormaPagamento != undefined
            ? action.payload.data.FormaPagamento
            : draft.FormaPagamento;
      });
    //LOGISTICA
    case "@pedidoVenda/SET_LOGISTICA":
      return produce(state, draft => {
        debugger;
        draft.pontoEntrega =
          action.payload.PontoEntrega != undefined || ""
            ? action.payload.PontoEntrega
            : draft.pontoEntrega;
        draft.pontoEntregaDetalhes =
          action.payload.PontoEntrega != undefined || ""
            ? action.payload.PontoEntrega
            : draft.pontoEntregaDetalhes;

        draft.enderecoCobranca =
          action.payload.EnderecoCobranca != undefined || ""
            ? action.payload.EnderecoCobranca
            : draft.enderecoCobranca;

        draft.enderecoCobrancaDetalhes =
          action.payload.EnderecoCobranca != undefined || ""
            ? action.payload.EnderecoCobranca
            : draft.enderecoCobrancaDetalhes;
      });
    default:
      return state;
  }
}
