import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector, connect } from 'react-redux';
import { setConfirmation } from '~/store/modules/cadastroCliente/actions';

const Confirmation = props => {
  const dispatch = useDispatch();
  const stateCadastroCliente = useSelector(state => state.cadastroCliente);

  function handleClose() {
    dispatch(setConfirmation(false));
  }

  function onSubmit() {
    props.acao();
    handleClose();
  }

  return (
    <Modal show={stateCadastroCliente.ConfirmaCadastro} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Atenção!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Deseja realmente cadastrar o cliente?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button onClick={onSubmit}>Ok</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Confirmation;
