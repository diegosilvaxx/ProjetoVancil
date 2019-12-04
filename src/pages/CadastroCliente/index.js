import React from 'react';
import { Form } from '@rocketseat/unform';
import Endereco from './endereco';
import PessoaContato from './pessoaContato';
import Cliente from './cliente';
import Fiscal from './fiscal';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector, connect } from 'react-redux';
import {
  insertCliente,
  setState,
} from '~/store/modules/cadastroCliente/actions';

import history from 'services/history';

import Tabs from '../../components/Tabs';

import Schema from './schema';
const schema = Schema;

const CadastroCliente = () => {
  const dispatch = useDispatch();
  const stateCadastroCliente = useSelector(state => state.cadastroCliente);

  async function onSubmitForm() {
    var btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.click();
  }

  async function handleForm(data) {
    if (data != null) {
      dispatch(setState({ data }));
    }
  }

  async function handleSubmit() {
    dispatch(insertCliente(stateCadastroCliente));
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
        <Form
          initialData={stateCadastroCliente}
          onSubmit={handleForm}
          id="formCliente"
          schema={schema}
        >
          <div className={'containerForm'} onClick={onSubmitForm}>
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
                <Button onClick={handleSubmit}>Ok</Button>
                <Button
                  style={{ visibility: 'hidden', height: '0px' }}
                  type="submit"
                  form="formCliente"
                  id="btnSubmit"
                >
                  Ok
                </Button>
              </div>
              <div className={'inputWidth'}>
                <Button
                  variant="secondary"
                  onClick={() => history.push('/dashboard')}
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
};

export default connect()(CadastroCliente);
