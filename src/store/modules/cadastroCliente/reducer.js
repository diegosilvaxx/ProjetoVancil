import produce from 'immer';

const INITIAL_STATE = {
  ddd: '',
  telefone: '',
  celular: '',
  email: '',
  observacoes: '',
  vendedor: '',
  territorio: '',
  // Enderecos: {
  idEndereco: '',
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
  nomeCompleto: '',
  dddPessoaContato: '',
  telefonePessoaContato: '',
  emailPessoaContato: '',
  // },
};

export default function cadastroCliente(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cadastroCliente/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft = action.payload;
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
        draft.vendedor =
          action.payload.data.vendedor != undefined
            ? action.payload.data.vendedor
            : draft.vendedor;
        draft.territorio =
          action.payload.data.territorio != undefined
            ? action.payload.data.territorio
            : draft.territorio;
        //ENDERECO
        draft.idEndereco =
          action.payload.data.idEndereco != undefined
            ? action.payload.data.idEndereco
            : draft.idEndereco;
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
        draft.nomeCompleto =
          action.payload.data.nomeCompleto != undefined
            ? action.payload.data.nomeCompleto
            : draft.nomeCompleto;
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
