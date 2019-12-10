import React, { Component, useState } from 'react';
import { Input, Check } from '@rocketseat/unform';

class Fiscal extends Component {
  constructor(props) {
    super(props);

    this.state = { stateIsento: false };
  }
  verificaInsento = () => {
    const { stateIsento } = this.state;
    var inscricaoEstadual = document.getElementById('inscricaoEstadual');
    var isentoInscEstadual = document.getElementById(
      'insentoInscricaoEstadual'
    );
    if (stateIsento == false) {
      inscricaoEstadual.value = '';
      inscricaoEstadual.setAttribute('disabled', true);
      this.setState({ stateIsento: true });
    } else {
      inscricaoEstadual.removeAttribute('disabled');
      this.setState({ stateIsento: false });
    }
  };
  render() {
    return (
      <>
        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label for="name" class="">
              CNAE
            </label>
            <Input name="cnae" type="text" placeholder="CNAE" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              CNPJ
            </label>
            <Input name="cnpj" type="text" placeholder="CNPJ" />
          </div>
          <div className={'inputWidth'}>
            <label for="name" class="">
              Inscrição Estadual
            </label>
            <Input
              name="inscricaoEstadual"
              type="text"
              placeholder="Inscrição Estadual"
            />
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label for="name" class="">
              CPF
            </label>
            <Input name="cpf" type="text" placeholder="CPF" />
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginTop: '26px' }}
          >
            <label for="name" style={{ marginTop: '5px' }}>
              Isento Inscrição Estadual
            </label>
            <Check
              name="insentoInscricaoEstadual"
              onClick={this.verificaInsento}
              className="checkbox"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Fiscal;
