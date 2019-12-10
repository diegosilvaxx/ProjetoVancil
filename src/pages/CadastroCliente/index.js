import React, { useState } from 'react';
import { Form } from '@rocketseat/unform';
import Modal from 'react-bootstrap/Modal';
import Endereco from './endereco';
import PessoaContato from './pessoaContato';
import Cliente from './cliente';
import Fiscal from './fiscal';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector, connect } from 'react-redux';
import {
  insertCliente,
  setState,
  setConfirmation,
} from '~/store/modules/cadastroCliente/actions';

import Confirmation from '~/components/Confirmation';

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

  async function handleConfirmation() {
    dispatch(setConfirmation(true));
  }

  return (
    <>
      <div
        key={'Principal'}
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
          noValidate
          initialData={stateCadastroCliente}
          onSubmit={handleForm}
          id="formCliente"
          schema={schema}
        >
          <div className={'containerForm'} onClick={onSubmitForm}>
            {/* tabs */}
            <Tabs>
              <Tabs.Tab label={'Geral'}>
                <Cliente key="Cliente"></Cliente>
              </Tabs.Tab>

              <Tabs.Tab label={'Endereço'}>
                <Endereco key="Endereco"></Endereco>
              </Tabs.Tab>

              <Tabs.Tab label={'Pessoas de contato'}>
                <PessoaContato key="PessoaContato"></PessoaContato>
              </Tabs.Tab>

              <Tabs.Tab label={'Fiscal'}>
                <Fiscal key="Fiscal"></Fiscal>
              </Tabs.Tab>
            </Tabs>

            {/* tabs */}

            <div style={{ display: 'flex', marginBottom: '30px' }}>
              <div className={'inputWidth'} style={{ margin: '0 30px 0' }}>
                {stateCadastroCliente.ConfirmaCadastro == true ? (
                  <Confirmation
                    title={'Atenção!'}
                    body={'Deseja realmente cadastrar o cliente?'}
                    acao={handleSubmit}
                    disabled={stateCadastroCliente.ConfirmaCadastro}
                  ></Confirmation>
                ) : (
                  ''
                )}
                <Button variant="primary" onClick={handleConfirmation}>
                  Cadastrar
                </Button>
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

export default connect()(CadastroCliente, Confirmation);
