import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Grid from './GridVenda';

class PesquisaProduto extends Component {
  render() {
    return (
      <>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Nome"
            aria-label="Nome"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Pesquisar</Button>
          </InputGroup.Append>
        </InputGroup>
        <Grid></Grid>
      </>
    );
  }
}

export default PesquisaProduto;
