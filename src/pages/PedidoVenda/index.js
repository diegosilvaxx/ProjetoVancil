import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import './styles.css';
import GridVenda from './GridVenda';
import Tabs from '../../components/Tabs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pesquisa from './Pesquisa';
import store from '~/store';

// import { Container } from './styles';

const schema = Yup.object().shape({
  nome: Yup.string().required('O nome é obrigatório'),
  PessoaContato: Yup.string().required('Pessoa de contato é obrigatório'),
});

export default function PedidoVenda() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { total } = store.getState().gridVenda;

  function handleSubmit({ nome, PessoaContato }) {
    console.log(nome, PessoaContato);
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <label className={'lblTitulo'}>Pedido de Venda</label>
          <Button onClick={handleShow} className={'PesquisaCliente'}>
            Pesquisar Clientes
          </Button>
        </div>

        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Pesquisa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Pesquisa></Pesquisa>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>

        <Form schema={schema} onSubmit={handleSubmit}>
          <div className={'containerForm'}>
            <div style={{ display: 'flex' }}>
              <div className={'inputWidth'}>
                <label for="name">Nome</label>
                <Input name="nome" type="text" placeholder="Nome" />
              </div>
              <div className={'inputWidth'}>
                <label for="name">Pessoa de contato</label>
                <Input
                  name="PessoaContato"
                  type="text"
                  placeholder="Pessoa de contato"
                />
              </div>
              <div className={'inputWidth'}>
                <label for="name" class="">
                  Nº Ref. Cliente
                </label>
                <Input
                  name="refCliente"
                  type="text"
                  placeholder="Nº Ref. Cliente"
                />
              </div>
            </div>

            <div style={{ display: 'flex' }}>
              <div className={'inputWidth'}>
                <label for="name" class="">
                  Status
                </label>
                <Input name="Status" type="text" placeholder="Status" />
              </div>
              <div className={'inputWidth'}>
                <label for="name" class="">
                  Nº – Seq. numérica
                </label>
                <Input
                  name="seqNumerica"
                  type="text"
                  placeholder="Nº – Seq. numérica"
                />
              </div>
              <div className={'inputWidth'}>
                <label for="name" class="">
                  Nº Doc SAP
                </label>
                <Input name="DocSap" type="text" placeholder="Nº Doc SAP" />
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignContent: 'center',
                marginLeft: '30px',
              }}
            >
              {/* tabs */}

              <Tabs>
                <Tabs.Tab label={'Conteúdo'}>
                  <div className={'PesquisaVenda'}>
                    <Button onClick={handleShow} className={'PesquisaVenda'}>
                      Pesquisar Produtos
                    </Button>
                    <GridVenda props={{ tesa: '123' }}></GridVenda>
                  </div>
                </Tabs.Tab>

                <Tabs.Tab label={'Logística'}>
                  <h1>Logística</h1>
                </Tabs.Tab>

                <Tabs.Tab label={'Contabilidade'}>
                  <h1>Contabilidade</h1>
                </Tabs.Tab>

                <Tabs.Tab label={'Imposto'}>
                  <h1>Imposto</h1>
                </Tabs.Tab>
              </Tabs>

              {/* tabs */}
            </div>

            <div style={{ display: 'flex' }}>
              <div className={'inputWidth'}>
                <label for="name">Total</label>
                <Input
                  name="total"
                  type="text"
                  placeholder="Nome"
                  value={`${total}`}
                  disabled
                />
              </div>
            </div>

            <div style={{ display: 'flex', marginBottom: '30px' }}>
              <div className={'inputWidth'} style={{ margin: '0 30px 0' }}>
                <Button
                  type="submit"
                  onClick={() =>
                    handleSubmit({
                      nome: 'diegao2',
                      PessoaContato: 'master321',
                    })
                  }
                >
                  Ok
                </Button>
              </div>
              <div className={'inputWidth'}>
                <Button variant="secondary" onClick={() => alert('Cancelado')}>
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
