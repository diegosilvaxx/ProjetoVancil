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
              Id endereço (cobrança/entrega)
            </label>
            <Form.Group controlId="idEndereco" className={'comboboxGroup'}>
              <Form.Control as="select" className={'comboboxControl'}>
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
              name="TipoLogradouro"
              type="text"
              placeholder="Tipo Logradouro"
            />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Nome da Rua
            </label>
            <Input name="Rua" type="text" placeholder="Rua" />
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Nº
            </label>
            <Input name="Numero" type="text" placeholder="Numero" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Complemento
            </label>
            <Input name="Complemento" type="text" placeholder="Complemento" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              CEP (Apenas numero)
            </label>
            <Input name="CEP" type="text" placeholder="CEP" />
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Bairro
            </label>
            <Input name="Bairro" type="text" placeholder="Bairro" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Estado
            </label>
            <Input name="Estado" type="text" placeholder="Estado" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Município
            </label>
            <Input name="Municipio" type="text" placeholder="Município" />
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Cidade
            </label>
            <Input name="Cidade" type="text" placeholder="Cidade" />
          </div>
        </div>
      </>
    );
  }
}

export default endereco;
