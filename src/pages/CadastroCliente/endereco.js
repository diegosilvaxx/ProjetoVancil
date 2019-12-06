import React, { Component } from 'react';
import { Input } from '@rocketseat/unform';
import Form from 'react-bootstrap/Form';

class endereco extends Component {
  render() {
    return (
      <>
        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Id endereço
            </label>
            <Input name="idEndereco" type="text" placeholder="Id endereço" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Tipo endereço (cobrança/entrega)
            </label>
            <Form.Group controlId="tipoEndereco" className={'comboboxGroup'}>
              <Form.Control
                as="select"
                name="tipoEndereco"
                className={'comboboxControl'}
              >
                <option>Cobrança</option>
                <option>Entrega</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Tipo Logradouro (Rua,viela e etc)
            </label>
            <Input
              name="tipoLogradouro"
              type="text"
              placeholder="Tipo Logradouro"
            />
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Nome da Rua
            </label>
            <Input name="nomeRua" type="text" placeholder="Rua" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Nº
            </label>
            <Input name="numero" type="text" placeholder="Numero" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Complemento
            </label>
            <Input name="complemento" type="text" placeholder="Complemento" />
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label for="name" class="">
              CEP (Apenas numero)
            </label>
            <Input name="cep" type="text" placeholder="CEP" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Bairro
            </label>
            <Input name="bairro" type="text" placeholder="Bairro" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Estado
            </label>
            <Input name="estado" type="text" placeholder="Estado" />
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Município
            </label>
            <Input name="municipio" type="number" placeholder="Município" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Cidade
            </label>
            <Input name="cidade" type="text" placeholder="Cidade" />
          </div>
        </div>
      </>
    );
  }
}

export default endereco;
