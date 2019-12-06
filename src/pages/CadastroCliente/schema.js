import * as Yup from 'yup';

const Schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido'),
  // .required('O e-mail é obrigatorio'),
  nomeCliente: Yup.string(),
  nomeFantasia: Yup.string(),
  ddd: Yup.string(),
  telefone: Yup.string(),
  celular: Yup.string(),
  observacoes: Yup.string(),
  vendedor: Yup.string(),
  territorio: Yup.string(),
  //Endereço
  idEndereco: Yup.string(),
  tipoEndereco: Yup.string(),
  tipoLogradouro: Yup.string(),
  nomeRua: Yup.string(),
  numero: Yup.string(),
  complemento: Yup.string(),
  cep: Yup.string(),
  bairro: Yup.string(),
  estado: Yup.string(),
  municipio: Yup.string(),
  cidade: Yup.string(),
  //PESSOA CONTATO
  idContato: Yup.string(),
  nome: Yup.string(),
  segundoNome: Yup.string(),
  sobrenome: Yup.string(),
  dddPessoaContato: Yup.string(),
  telefonePessoaContato: Yup.string(),
  emailPessoaContato: Yup.string(),
  //FISCAL
  cnae: Yup.string(),
  cnpj: Yup.string(),
  inscricaoEstadual: Yup.string(),
  cpf: Yup.string(),
  insentoInscricaoEstadual: Yup.string(),
});

export default Schema;
