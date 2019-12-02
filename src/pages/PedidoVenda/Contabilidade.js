import React, { Component } from 'react';
import { Input } from '@rocketseat/unform';

class Contabilidade extends Component {
  render() {
    return (
      <>
        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Condições de pagamento
            </label>
            <Input
              name="CondicoesPagamento"
              type="text"
              placeholder="Condições de pagamento"
            />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Forma de pagamento
            </label>
            <Input
              name="FormaPagamento"
              type="text"
              placeholder="Forma de pagamento"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Contabilidade;
