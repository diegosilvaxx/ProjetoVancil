import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from 'services/history';
import api from '~/services/api';

export function* insertCliente({ payload }) {
  try {
    const data = {
      Retorno: {
        CodRetorno: 100,
        MsgRetorno: 'OK',
      },
      Codigo: '',
      Nome: payload.nomeCliente,
      Grupo: 102,
      Telefone1: '3561 4358',
      Telefone2: payload.ddd,
      Celular: payload.celular,
      Email: payload.email,
      Ativo: true,
      Tipo: 'Cliente',
      NomeFantasia: payload.nomeFantasia,
      SaldoConta: 0,
      EntregaMercadoria: 0,
      Pedidos: 0,
      Observacoes: payload.observacoes,
      Vendedor: payload.vendedor,
      Territorio: payload.territorio,
      Enderecos: [
        {
          ID: payload.idEndereco,
          Tipo: payload.tipoEndereco,
          TipoLogradouro: payload.tipoLogradouro,
          Logradouro: payload.nomeRua,
          Numero: payload.numero,
          Bairro: payload.bairro,
          Cidade: payload.cidade,
          Municipio: payload.municipio,
          Estado: payload.estado,
          CEP: payload.cep,
          Complemento: payload.complemento,
        },
      ],
      Fiscal: {
        CNAE: payload.cnae,
        CNPJ: payload.cnpj,
        IE: payload.inscricaoEstadual,
        IsentoIE: false,
        CPF: payload.cpf,
      },
      Pagamento: {
        CondicaoPagamento: -1,
      },
      Contatos: [
        {
          ID: payload.idContato,
          PrimeroNome: payload.nome,
          SegundoNome: payload.segundoNome,
          Sobrenome: payload.sobrenome,
          Telefone: payload.telefonePessoaContato,
          Email: payload.emailPessoaContato,
        },
      ],
    };

    //CHAMADA API
    const response = yield call(api.post, 'HUB/HUB/Authenticate', {
      appID: 1,
      AppKey: 'ABC123',
    });

    const { Token } = response.data;

    if (!Token) {
      toast.error('Falha na autenticação, verifique seus dados!');
      return;
    }

    const result = yield call(api.put, `HUB/HUB/InserirCliente/${Token}`, data);
    console.log(result);
    toast.success('Dados inserido com sucesso!');
    history.push('/cadastroCliente');
  } catch (err) {
    toast.error('Falha ao inserir, verifique seus dados!');
  }
}

export default all([
  takeLatest('@cadastroCliente/INSERT_CLIENTE', insertCliente),
]);
