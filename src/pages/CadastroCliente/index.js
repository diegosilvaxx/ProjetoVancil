import React from 'react';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';
import Endereco from './endereco';
import PessoaContato from './pessoaContato';
import Cliente from './cliente';
import Fiscal from './fiscal';
import Button from 'react-bootstrap/Button';

import Tabs from '../../components/Tabs';
// import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatorio'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function CadastroCliente() {
  function handleSubmit({ email, password }) {
    console.log(email, password);
  }
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          width: '90%',
          borderRadius: '4px',
          margin: 'auto',
          marginBottom: '15px',
        }}
      >
        <label className={'lblTitulo'}>Cadastro de Cliente</label>
        <Form schema={schema} onSubmit={handleSubmit}>
          <div className={'containerForm'}>
            {/* tabs */}

            <Tabs>
              <Tabs.Tab label={'Geral'}>
                <Cliente></Cliente>
              </Tabs.Tab>

              <Tabs.Tab label={'Endereço'}>
                <Endereco></Endereco>
              </Tabs.Tab>

              <Tabs.Tab label={'Pessoas de contato'}>
                <PessoaContato></PessoaContato>
              </Tabs.Tab>

              <Tabs.Tab label={'Fiscal'}>
                <Fiscal></Fiscal>
              </Tabs.Tab>
            </Tabs>

            {/* tabs */}

            <div style={{ display: 'flex', marginBottom: '30px' }}>
              <div className={'inputWidth'} style={{ margin: '0 30px 0' }}>
                <Button type="submit">Ok</Button>
              </div>
              <div className={'inputWidth'}>
                <Button
                  variant="secondary"
                  onClick={() => alert('Cancelado')}
                  type="submit"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}
