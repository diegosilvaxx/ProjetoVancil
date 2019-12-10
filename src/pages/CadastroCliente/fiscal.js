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
      inscricaoEstadual.removeAttribute('disabled');
      this.setState({ stateIsento: true });
    } else {
      inscricaoEstadual.value = '';
      inscricaoEstadual.setAttribute('disabled', true);
      this.setState({ stateIsento: false });
    }
  };
  render() {
    return (
      <>
        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label htmlFor="name" className="">
              CNAE
            </label>
            <Input name="cnae" type="text" placeholder="CNAE" />
          </div>
          <div className={'inputWidth'}>
            <label htmlFor="name" className="">
              CNPJ
            </label>
            <Input name="cnpj" type="text" placeholder="CNPJ" />
          </div>
          <div className={'inputWidth'}>
            <label htmlFor="name" className="">
              Inscrição Estadual
            </label>
            <Input
              name="inscricaoEstadual"
              type="text"
              placeholder="Inscrição Estadual"
              disabled
            />
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div className={'inputWidth'}>
            <label htmlFor="name" className="">
              CPF
            </label>
            <Input name="cpf" type="text" placeholder="CPF" />
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginTop: '26px' }}
          >
            <label htmlFor="name" style={{ marginTop: '5px' }}>
              Isento Inscrição Estadual
            </label>
            <Check
              name="insentoInscricaoEstadual"
              onClick={this.verificaInsento}
              className="checkbox"
              checked={this.stateIsento}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Fiscal;
