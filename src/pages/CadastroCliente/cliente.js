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
              name="DDD"
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
            <Input name="Telefone" type="text" placeholder="9999-9999" />
          </div>
          <div className={'inputWidth'}>
            <label for="name">Celular</label>
            <Input name="Celular" type="text" placeholder="(99) 99999-9999" />
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
            <Input name="Observacoes" type="text" placeholder="Observações" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Vendedor
            </label>
            <Input
              name="VendedorComprador"
              type="text"
              placeholder="Vendedor/Comprador"
            />
          </div>
          <div className={'inputWidth'}>
            <label>Território *</label>
            <Input name="Territorio" type="text" placeholder="Território" />
          </div>
        </div>
      </>
    );
  }
}

export default Cliente;
