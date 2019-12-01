import React, { Component } from 'react';
import { Input } from '@rocketseat/unform';

class pessoaContato extends Component {
  render() {
    return (
      <>
        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Id contato
            </label>
            <Input name="IdContato" type="text" placeholder="Id contato" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Nome Completo
            </label>
            <Input
              name="NomeCompleto"
              type="text"
              placeholder="Nome Completo"
            />
          </div>
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
            <label for="name" class="">
              Telefone
            </label>
            <Input name="Telefone" type="text" placeholder="(99) 9999-9999" />
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Email
            </label>
            <Input name="Email" type="email" placeholder="Email" />
          </div>
        </div>
      </>
    );
  }
}

export default pessoaContato;
