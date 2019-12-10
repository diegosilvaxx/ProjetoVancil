import React, { Component } from 'react';
import { Input } from '@rocketseat/unform';

class pessoaContato extends Component {
  render() {
    return (
      <>
        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label htmlFor="name" className="">
              Id contato
            </label>
            <Input name="idContato" type="text" placeholder="Id contato" />
          </div>
          <div className={'inputWidth'}>
            <label htmlFor="name" className="">
              Nome
            </label>
            <Input name="nome" type="text" placeholder="Nome" />
          </div>
          <div className={'inputWidth'}>
            <label htmlFor="name" className="">
              Segundo Nome
            </label>
            <Input name="segundoNome" type="text" placeholder="Segundo Nome" />
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label htmlFor="name" className="">
              Sobrenome
            </label>
            <Input name="sobrenome" type="text" placeholder="Sobrenome" />
          </div>
          <div className={'inputWidth'}>
            <label htmlFor="name" className="">
              Telefone
            </label>
            <Input
              name="telefonePessoaContato"
              type="text"
              placeholder="(99) 9999-9999"
            />
          </div>
          <div className={'inputWidth'}>
            <label htmlFor="name" className="">
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
