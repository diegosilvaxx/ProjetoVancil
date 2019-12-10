import React, { Component } from 'react';
import { Input } from '@rocketseat/unform';

class Contabilidade extends Component {
  render() {
    return (
      <>
        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label htmlFor="name" className="">
              Condições de pagamento
            </label>
            <Input
              name="CondicoesPagamento"
              type="text"
              placeholder="Condições de pagamento"
            />
          </div>
          <div className={'inputWidth'}>
            <label htmlFor="name" className="">
              htmlForma de pagamento
            </label>
            <Input
              name="htmlFormaPagamento"
              type="text"
              placeholder="htmlForma de pagamento"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Contabilidade;
