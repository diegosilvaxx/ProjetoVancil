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
            <Input name="idContato" type="text" placeholder="Id contato" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Nome
            </label>
            <Input name="nome" type="text" placeholder="Nome" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Segundo Nome
            </label>
            <Input name="segundoNome" type="text" placeholder="Segundo Nome" />
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Sobrenome
            </label>
            <Input name="sobrenome" type="text" placeholder="Sobrenome" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Telefone
            </label>
            <Input
              name="telefonePessoaContato"
              type="text"
              placeholder="(99) 9999-9999"
            />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Email
            </label>
            <Input name="emailPessoaContato" type="email" placeholder="Email" />
          </div>
        </div>
      </>
    );
  }
}

export default pessoaContato;
