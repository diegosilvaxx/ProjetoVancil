import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class Logistica extends Component {
  render() {
    return (
      <>
        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Ponto de entrega
            </label>
            <Form.Group controlId="PontoEntrega" className={'comboboxGroup'}>
              <Form.Control as="select" className={'comboboxControl'}>
                <option>Cobrança</option>
                <option>Entrega</option>
              </Form.Control>
            </Form.Group>
            <Form.Group
              controlId="PontoEntregaTextArea"
              style={{ marginLeft: '30px' }}
            >
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Endereço de cobrança
            </label>
            <Form.Group
              controlId="EnderecoCobranca"
              className={'comboboxGroup'}
            >
              <Form.Control as="select" className={'comboboxControl'}>
                <option>Cobrança</option>
                <option>Entrega</option>
              </Form.Control>
            </Form.Group>
            <Form.Group
              controlId="EnderecoCobrancaTextArea"
              style={{ marginLeft: '30px' }}
            >
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </div>
        </div>
      </>
    );
  }
}

export default Logistica;
