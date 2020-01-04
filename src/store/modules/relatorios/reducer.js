import produce from "immer";

const INITIAL_STATE = {
  //RELATORIO
  Emissao: undefined,
  NFe: undefined,
  PN: undefined,
  NomePN: undefined,
  CodigoVendedor: undefined,
  NomeVendedor: undefined,
  Observacao: undefined,
  Prazo: undefined,
  Cidade: undefined,
  UF: undefined,
  Total: 0,
  MediaComissao: 0,
  ValorComissao: 0,
  Itens: [
    {
      Codigo: undefined,
      Descricao: undefined,
      UN: undefined,
      Quantidade: 0,
      PrecoTabela: 0,
      Perfil: undefined,
      Campanha: undefined,
      Desconto: 0,
      PrecoLiquido: 0,
      ValorTotal: 0,
      PercComissao: 0,
      ValorComissao: 0
    }
  ]
};

export default function relatorio(state = INITIAL_STATE, action) {
  switch (action.type) {
    //RELATÓRIO
    case "@relatorio/GET_RELATORIO":
      return state;
    case "@relatorio/SET_RELATORIO":
      return produce(state, draft => {
        debugger;
        draft.pontoEntrega = action.payload;
      });
    default:
      return state;
  }
}
