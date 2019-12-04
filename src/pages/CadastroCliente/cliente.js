import React, { Component } from 'react';
import { Input } from '@rocketseat/unform';

class Cliente extends Component {
  render() {
    return (
      <>
        <div style={{ display: 'flex' }}>
          <div
            className={'inputWidth'}
            style={{ width: '40px', marginRight: '20px' }}
          >
            <label for="name">DDD</label>
            <Input
              name="ddd"
              type="text"
              placeholder="(99)"
              style={{
                width: '40px',
                marginRight: '20px',
                padding: '0',
                textAlign: 'center',
              }}
            />
          </div>
          <div className={'inputWidth'}>
            <label for="name">Telefone</label>
            <Input name="telefone" type="text" placeholder="9999-9999" />
          </div>
          <div className={'inputWidth'}>
            <label for="name">Celular</label>
            <Input name="celular" type="text" placeholder="(99) 99999-9999" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Email
            </label>
            <Input name="email" type="email" placeholder="Email" />
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Observações
            </label>
            <Input name="observacoes" type="text" placeholder="Observações" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Vendedor
            </label>
            <Input name="vendedor" type="text" placeholder="Vendedor" />
          </div>
          <div className={'inputWidth'}>
            <label>Território *</label>
            <Input name="territorio" type="text" placeholder="Território" />
          </div>
        </div>
      </>
    );
  }
}

export default Cliente;
