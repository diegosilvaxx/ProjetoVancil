import produce from "immer";

const INITIAL_STATE = {
  Cliente: [{}],
  ddd: "",
  telefone: "",
  celular: "",
  email: "",
  observacoes: "",
  territorio: "",
  nomeCliente: "",
  nomeFantasia: "",
  grupo: "",
  // Enderecos: {
  idEndereco: "",
  tipoEndereco: "",
  tipoLogradouro: "",
  nomeRua: "",
  numero: "",
  complemento: "",
  cep: "",
  bairro: "",
  estado: "",
  municipio: "",
  cidade: "",
  // },
  // Fiscal: {
  cnae: "",
  cnpj: "",
  inscricaoEstadual: "",
  cpf: "",
  insentoInscricaoEstadual: false,
  // },
  // Contato: {
  idContato: "",
  nome: "",
  segundoNome: "",
  sobrenome: "",
  telefonePessoaContato: "",
  emailPessoaContato: "",
  ConfirmaCadastro: false,
  GrupoCombox: undefined,
  TerritorioCombox: undefined,
  MunicipioCombox: undefined,
  EstadoCombox: undefined,
  MunicipioSelecionado: undefined,
  // },
  //ENDERECO COMPLEMENTO
  //ENDERECO DADOS 0
  idEnderecoComplemento0: "",
  tipoEnderecoComplemento0: "",
  tipoLogradouroComplemento0: "",
  nomeRuaComplemento0: "",
  numeroComplemento0: "",
  complementoComplemento0: "",
  cepComplemento0: "",
  bairroComplemento0: "",
  estadoComplemento0: "",
  municipioComplemento0: "",
  cidadeComplemento0: "",
  EnderecoComplemento: []
};

export default function cadastroCliente(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@cadastroCliente/INSERT_CLIENTE":
      return produce(state, draft => {
        draft = action.payload;
      });
    case "@cadastroCliente/SET_CONFIRMATION":
      return produce(state, draft => {
        draft.ConfirmaCadastro = action.payload;
      });
    case "@cadastroCliente/GET_GRUPO":
      return produce(state, draft => {});
    case "@cadastroCliente/SET_GRUPO":
      return produce(state, draft => {
        draft.GrupoCombox = action.grupo.data.Grupos;
        draft.TerritorioCombox = action.territorio.data.Territorios;
      });
    case "@cadastroCliente/GET_ESTADO":
      return produce(state, draft => {});
    case "@cadastroCliente/SET_ESTADO":
      return produce(state, draft => {
        draft.EstadoCombox = action.payload.data.Estados;
      });
    case "@cadastroCliente/SET_ESTADO_SELECIONADO":
      return produce(state, draft => {
        draft.EstadoSelecionado = action.payload;
      });
    case "@cadastroCliente/SET_GRUPO_SELECIONADO":
      return produce(state, draft => {
        draft.GrupoSelecionado = action.payload;
      });
    case "@cadastroCliente/SET_TERRITORIO_SELECIONADO":
      return produce(state, draft => {
        draft.TerritorioSelecionado = action.payload;
      });
    case "@cadastroCliente/SET_MUNICIPIO_SELECIONADO":
      return produce(state, draft => {
        draft.MunicipioSelecionado = action.payload;
      });
    case "@cadastroCliente/GET_MUNICIPIO":
      return produce(state, draft => {});
    case "@cadastroCliente/SET_MUNICIPIO":
      return produce(state, draft => {
        draft.MunicipioCombox = action.payload.data.Municipios;
      });
    case "@cadastroCliente/SET_STATE":
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
        //ENDERECO COMPLEMENTO 0
        draft.nomeRuaComplemento0 =
          action.payload.data.nomeRuaComplemento0 != undefined
            ? action.payload.data.nomeRuaComplemento0
            : draft.nomeRuaComplemento0;
        draft.numeroComplemento0 =
          action.payload.data.numeroComplemento0 != undefined
            ? action.payload.data.numeroComplemento0
            : draft.numeroComplemento0;
        draft.tipoEnderecoComplemento0 =
          action.payload.data.tipoEnderecoComplemento0 != undefined
            ? action.payload.data.tipoEnderecoComplemento0
            : draft.tipoEnderecoComplemento0;
        draft.cepComplemento0 =
          action.payload.data.cepComplemento0 != undefined
            ? action.payload.data.cepComplemento0
            : draft.cepComplemento0;
        draft.bairroComplemento0 =
          action.payload.data.bairroComplemento0 != undefined
            ? action.payload.data.bairroComplemento0
            : draft.bairroComplemento0;
        draft.cidadeComplemento0 =
          action.payload.data.cidadeComplemento0 != undefined
            ? action.payload.data.cidadeComplemento0
            : draft.cidadeComplemento0;
        draft.estadoComplemento0 =
          action.payload.data.estadoComplemento0 != undefined
            ? action.payload.data.estadoComplemento0
            : draft.estadoComplemento0;
        draft.municipioComplemento0 =
          action.payload.data.municipioComplemento0 != undefined
            ? action.payload.data.municipioComplemento0
            : draft.municipioComplemento0;
        draft.idEnderecoComplemento0 =
          action.payload.data.idEnderecoComplemento0 != undefined
            ? action.payload.data.idEnderecoComplemento0
            : draft.idEnderecoComplemento0;
        draft.complementoComplemento0 =
          action.payload.data.complementoComplemento0 != undefined
            ? action.payload.data.complementoComplemento0
            : draft.complementoComplemento0;
        draft.tipoLogradouroComplemento0 =
          action.payload.data.tipoLogradouroComplemento0 != undefined
            ? action.payload.data.tipoLogradouroComplemento0
            : draft.tipoLogradouroComplemento0;
        //ENDERECO COMPLEMENTO 1
        draft.nomeRuaComplemento1 =
          action.payload.data.nomeRuaComplemento1 != undefined
            ? action.payload.data.nomeRuaComplemento1
            : draft.nomeRuaComplemento1;
        draft.numeroComplemento1 =
          action.payload.data.numeroComplemento1 != undefined
            ? action.payload.data.numeroComplemento1
            : draft.numeroComplemento1;
        draft.tipoEnderecoComplemento1 =
          action.payload.data.tipoEnderecoComplemento1 != undefined
            ? action.payload.data.tipoEnderecoComplemento1
            : draft.tipoEnderecoComplemento1;
        draft.cepComplemento1 =
          action.payload.data.cepComplemento1 != undefined
            ? action.payload.data.cepComplemento1
            : draft.cepComplemento1;
        draft.bairroComplemento1 =
          action.payload.data.bairroComplemento1 != undefined
            ? action.payload.data.bairroComplemento1
            : draft.bairroComplemento1;
        draft.cidadeComplemento1 =
          action.payload.data.cidadeComplemento1 != undefined
            ? action.payload.data.cidadeComplemento1
            : draft.cidadeComplemento1;
        draft.estadoComplemento1 =
          action.payload.data.estadoComplemento1 != undefined
            ? action.payload.data.estadoComplemento1
            : draft.estadoComplemento1;
        draft.municipioComplemento1 =
          action.payload.data.municipioComplemento1 != undefined
            ? action.payload.data.municipioComplemento1
            : draft.municipioComplemento1;
        draft.idEnderecoComplemento1 =
          action.payload.data.idEnderecoComplemento1 != undefined
            ? action.payload.data.idEnderecoComplemento1
            : draft.idEnderecoComplemento1;
        draft.complementoComplemento1 =
          action.payload.data.complementoComplemento1 != undefined
            ? action.payload.data.complementoComplemento1
            : draft.complementoComplemento1;
        draft.tipoLogradouroComplemento1 =
          action.payload.data.tipoLogradouroComplemento1 != undefined
            ? action.payload.data.tipoLogradouroComplemento1
            : draft.tipoLogradouroComplemento1;
        //ENDERECO COMPLEMENTO 2
        draft.nomeRuaComplemento2 =
          action.payload.data.nomeRuaComplemento2 != undefined
            ? action.payload.data.nomeRuaComplemento2
            : draft.nomeRuaComplemento2;
        draft.numeroComplemento2 =
          action.payload.data.numeroComplemento2 != undefined
            ? action.payload.data.numeroComplemento2
            : draft.numeroComplemento2;
        draft.tipoEnderecoComplemento2 =
          action.payload.data.tipoEnderecoComplemento2 != undefined
            ? action.payload.data.tipoEnderecoComplemento2
            : draft.tipoEnderecoComplemento2;
        draft.cepComplemento2 =
          action.payload.data.cepComplemento2 != undefined
            ? action.payload.data.cepComplemento2
            : draft.cepComplemento2;
        draft.bairroComplemento2 =
          action.payload.data.bairroComplemento2 != undefined
            ? action.payload.data.bairroComplemento2
            : draft.bairroComplemento2;
        draft.cidadeComplemento2 =
          action.payload.data.cidadeComplemento2 != undefined
            ? action.payload.data.cidadeComplemento2
            : draft.cidadeComplemento2;
        draft.estadoComplemento2 =
          action.payload.data.estadoComplemento2 != undefined
            ? action.payload.data.estadoComplemento2
            : draft.estadoComplemento2;
        draft.municipioComplemento2 =
          action.payload.data.municipioComplemento2 != undefined
            ? action.payload.data.municipioComplemento2
            : draft.municipioComplemento2;
        draft.idEnderecoComplemento2 =
          action.payload.data.idEnderecoComplemento2 != undefined
            ? action.payload.data.idEnderecoComplemento2
            : draft.idEnderecoComplemento2;
        draft.complementoComplemento2 =
          action.payload.data.complementoComplemento2 != undefined
            ? action.payload.data.complementoComplemento2
            : draft.complementoComplemento2;
        draft.tipoLogradouroComplemento2 =
          action.payload.data.tipoLogradouroComplemento2 != undefined
            ? action.payload.data.tipoLogradouroComplemento2
            : draft.tipoLogradouroComplemento2;
      });
    //CLIENTE
    case "@cadastroCliente/GET_CLIENTE":
      return state;
    //CLIENTE COMPLETO
    case "@cadastroCliente/GET_CLIENTE_COMPLETO":
      return state;
    case "@cadastroCliente/SET_CLIENTE_LIST":
      return produce(state, draft => {
        draft.Cliente.push(action.payload);
      });
    case "@cadastroCliente/SET_CLIENTE":
      return produce(state, draft => {
        draft.nomeCliente = action.payload.Nome;
        draft.telefone = action.payload.Telefone1;
        draft.ddd = action.payload.Telefone2;
        draft.celular = action.payload.Celular;
        draft.email = action.payload.Email;
        draft.nomeFantasia = action.payload.NomeFantasia;
        draft.cnae = action.payload.Fiscal.CNAE;
        draft.cnpj = action.payload.CNPJ;
        draft.inscricaoEstadual = action.payload.Fiscal.IE;
        draft.insentoInscricaoEstadual = action.payload.Fiscal.IsentoIE;
        draft.cpf = action.payload.Fiscal.CPF;
        // draft.nomeCliente = action.payload.Nome;
        // draft.nomeCliente = action.payload.Nome;
      });
    case "@cadastroCliente/SET_ENDERECO_COMPLEMENTO":
      return produce(state, draft => {
        draft.EnderecoComplemento.push(action.payload);
      });
    default:
      return state;
  }
}
