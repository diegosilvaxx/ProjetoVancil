import produce from 'immer';

const INITIAL_STATE = {
  ddd: '',
  telefone: '',
  celular: '',
  email: '',
  observacoes: '',
  territorio: '',
  nomeCliente: '',
  nomeFantasia: '',
  grupo: '',
  // Enderecos: {
  idEndereco: '',
  tipoEndereco: '',
  tipoLogradouro: '',
  nomeRua: '',
  numero: '',
  complemento: '',
  cep: '',
  bairro: '',
  estado: '',
  municipio: '',
  cidade: '',
  // },
  // Fiscal: {
  cnae: '',
  cnpj: '',
  inscricaoEstadual: '',
  cpf: '',
  insentoInscricaoEstadual: '',
  // },
  // Contato: {
  idContato: '',
  nome: '',
  segundoNome: '',
  sobrenome: '',
  telefonePessoaContato: '',
  emailPessoaContato: '',
  ConfirmaCadastro: false,
  GrupoCombox: undefined,
  MunicipioCombox: undefined,
  EstadoCombox: undefined,
  EstadoSelecionado: [{ id: 'Carregando', title: 'Carregando' }],
  MunicipioSelecionado: [
    { id: 'Carregando', title: 'Carregando', estado: 'Carregando' },
  ],
  // },
};

export default function cadastroCliente(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cadastroCliente/INSERT_CLIENTE':
      return produce(state, draft => {
        draft = action.payload;
      });
    case '@cadastroCliente/SET_CONFIRMATION':
      return produce(state, draft => {
        draft.ConfirmaCadastro = action.payload;
      });
    case '@cadastroCliente/GET_GRUPO':
      return produce(state, draft => {});
    case '@cadastroCliente/SET_GRUPO':
      return produce(state, draft => {
        draft.GrupoCombox = action.payload.data.Grupos;
      });
    case '@cadastroCliente/GET_ESTADO':
      return produce(state, draft => {});
    case '@cadastroCliente/SET_ESTADO':
      return produce(state, draft => {
        draft.EstadoCombox = action.payload.data.Estados;
      });
    case '@cadastroCliente/SET_ESTADO_SELECIONADO':
      return produce(state, draft => {
        draft.EstadoSelecionado = action.payload;
      });
    case '@cadastroCliente/SET_MUNICIPIO_SELECIONADO':
      return produce(state, draft => {
        draft.MunicipioSelecionado = action.payload;
      });
    case '@cadastroCliente/GET_MUNICIPIO':
      return produce(state, draft => {});
    case '@cadastroCliente/SET_MUNICIPIO':
      return produce(state, draft => {
        draft.MunicipioCombox = action.payload.data.Municipios;
      });
    case '@cadastroCliente/SET_STATE':
      return produce(state, draft => {
        draft.ddd =
          action.payload.data.ddd != undefined
            ? action.payload.data.ddd
            : draft.ddd;
        draft.telefone =
          action.payload.data.telefone != undefined
            ? action.payload.data.telefone
            : draft.telefone;
        draft.grupo =
          action.payload.data.grupo != undefined
            ? action.payload.data.grupo
            : draft.grupo;
        draft.celular =
          action.payload.data.celular != undefined
            ? action.payload.data.celular
            : draft.celular;
        draft.email =
          action.payload.data.email != undefined
            ? action.payload.data.email
            : draft.email;
        draft.observacoes =
          action.payload.data.observacoes != undefined
            ? action.payload.data.observacoes
            : draft.observacoes;
        draft.territorio =
          action.payload.data.territorio != undefined
            ? action.payload.data.territorio
            : draft.territorio;
        draft.nomeCliente =
          action.payload.data.nomeCliente != undefined
            ? action.payload.data.nomeCliente
            : draft.nomeCliente;
        draft.nomeFantasia =
          action.payload.data.nomeFantasia != undefined
            ? action.payload.data.nomeFantasia
            : draft.nomeFantasia;
        //ENDERECO
        draft.idEndereco =
          action.payload.data.idEndereco != undefined
            ? action.payload.data.idEndereco
            : draft.idEndereco;
        draft.tipoEndereco =
          action.payload.data.tipoEndereco != undefined
            ? action.payload.data.tipoEndereco
            : draft.tipoEndereco;
        draft.tipoLogradouro =
          action.payload.data.tipoLogradouro != undefined
            ? action.payload.data.tipoLogradouro
            : draft.tipoLogradouro;
        draft.nomeRua =
          action.payload.data.nomeRua != undefined
            ? action.payload.data.nomeRua
            : draft.nomeRua;
        draft.numero =
          action.payload.data.numero != undefined
            ? action.payload.data.numero
            : draft.numero;
        draft.complemento =
          action.payload.data.complemento != undefined
            ? action.payload.data.complemento
            : draft.complemento;
        draft.cep =
          action.payload.data.cep != undefined
            ? action.payload.data.cep
            : draft.cep;
        draft.bairro =
          action.payload.data.bairro != undefined
            ? action.payload.data.bairro
            : draft.bairro;
        draft.estado =
          action.payload.data.estado != undefined
            ? action.payload.data.estado
            : draft.estado;
        draft.municipio =
          action.payload.data.municipio != undefined
            ? action.payload.data.municipio
            : draft.municipio;
        draft.cidade =
          action.payload.data.cidade != undefined
            ? action.payload.data.cidade
            : draft.cidade;
        //PESSOA CONTATO
        draft.idContato =
          action.payload.data.idContato != undefined
            ? action.payload.data.idContato
            : draft.idContato;
        draft.nome =
          action.payload.data.nome != undefined
            ? action.payload.data.nome
            : draft.nome;
        draft.segundoNome =
          action.payload.data.segundoNome != undefined
            ? action.payload.data.segundoNome
            : draft.segundoNome;
        draft.sobrenome =
          action.payload.data.sobrenome != undefined
            ? action.payload.data.sobrenome
            : draft.sobrenome;
        draft.dddPessoaContato =
          action.payload.data.dddPessoaContato != undefined
            ? action.payload.data.dddPessoaContato
            : draft.dddPessoaContato;
        draft.telefonePessoaContato =
          action.payload.data.telefonePessoaContato != undefined
            ? action.payload.data.telefonePessoaContato
            : draft.telefonePessoaContato;
        draft.emailPessoaContato =
          action.payload.data.emailPessoaContato != undefined
            ? action.payload.data.emailPessoaContato
            : draft.emailPessoaContato;
        //FISCAL
        draft.cnae =
          action.payload.data.cnae != undefined
            ? action.payload.data.cnae
            : draft.cnae;
        draft.cnpj =
          action.payload.data.cnpj != undefined
            ? action.payload.data.cnpj
            : draft.cnpj;
        draft.inscricaoEstadual =
          action.payload.data.inscricaoEstadual != undefined
            ? action.payload.data.inscricaoEstadual
            : draft.inscricaoEstadual;
        draft.cpf =
          action.payload.data.cpf != undefined
            ? action.payload.data.cpf
            : draft.cpf;
        draft.insentoInscricaoEstadual =
          action.payload.data.insentoInscricaoEstadual != undefined
            ? action.payload.data.insentoInscricaoEstadual
            : draft.insentoInscricaoEstadual;
      });
    default:
      return state;
  }
}
