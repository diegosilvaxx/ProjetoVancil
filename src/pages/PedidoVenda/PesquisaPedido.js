import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useDispatch, useSelector, connect } from 'react-redux';
import { getPedido } from '~/store/modules/pedidoVenda/actions';
import Grid from './GridPedido';

const PesquisaPedido = () => {
  const dispatch = useDispatch();
  const [pesquisa, setPesquisa] = useState('');
  const [pesquisando, setPesquisando] = useState(false);

  function handlePesquisa() {
    var fieldPesquisa = document.getElementById('pesquisa').value;
    setPesquisa(fieldPesquisa);
  }

  function submitPesquisa() {
    setPesquisando(true);
    dispatch(getPedido(pesquisa));
    setTimeout(function() {
      setPesquisando(false);
    }, 4000);
  }

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Nome"
          aria-label="Nome"
          aria-describedby="basic-addon2"
          id="pesquisa"
          onChange={handlePesquisa}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={submitPesquisa}>
            {pesquisando == false ? 'Pesquisar' : 'Pesquisando...'}
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <Grid></Grid>
    </>
  );
};

export default connect()(PesquisaPedido);
