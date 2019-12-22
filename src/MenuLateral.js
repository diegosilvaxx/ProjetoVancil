import React, { useState } from 'react';
import '~/styles/headerCSS.css';
import { Link } from 'react-router-dom';
import {
  FaBeer,
  FaUserAlt,
  FaTruckMoving,
  FaChartBar,
  FaWindowClose,
} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function MenuLateral() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSignOut() {
    dispatch(signOut());
    handleClose();
  }

  return (
    <>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Atenção!</Modal.Title>
    </Modal.Header>
    <Modal.Body>Deseja realmente sair do sistema?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button onClick={() => handleSignOut()}>Ok</Button>
    </Modal.Footer>
  </Modal>
    <header className="menuLateral">
      <ul>
        <li>
          <Link to="/cadastroCliente">
            <FaUserAlt style={{ marginRight: 10 }} />
            Cadastro de Cliente
          </Link>
        </li>
        <li>
          <Link to="/pedidoVenda">
            <FaTruckMoving style={{ marginRight: 10 }} />
            Pedido de Vendas
          </Link>
        </li>
        <li>
          <Link to="/pedidoCompra">
            <FaChartBar style={{ marginRight: 10 }} />
            Pedido de Compras
          </Link>
        </li>
        <li>
          <i className="nav-icon icon-puzzle"></i>
          <Link to="/">
            <FaBeer style={{ marginRight: 10 }} />
            Relatórios
          </Link>
        </li>
        <li>
          <div onClick={handleShow}>
            <FaWindowClose style={{ marginRight: 10 }} />
            <Link>Logout</Link>
          </div>
        </li>
      </ul>
    </header>
    </>
  );
}
