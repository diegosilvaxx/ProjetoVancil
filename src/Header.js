import React, { useState } from "react";
import "~/styles/headerCSS.css";
import Logo from "~/assets/img/brand/logo.png";
import Menu from "~/assets/menu2.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "~/store/modules/auth/actions";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Header() {
  const [expanded, setExpanded] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
    handleClose();
  }

  function handleSubmit() {
    var menu = document.getElementById("sectionLeft");
    if (expanded === true) {
      menu.setAttribute("style", "display:none;transition: 2s;");
      setExpanded(false);
    } else {
      menu.setAttribute("style", "display:flex;transition: 2s;");
      setExpanded(true);
    }
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
      <header className="header">
        <img
          src={Logo}
          width="89"
          height="25"
          alt="CoreUI Logo"
          className="navbar-brand-full"
        />

        <img
          onClick={handleSubmit}
          src={Menu}
          width="29"
          height="25"
          alt="CoreUI Logo"
          className="navbar-brand-full"
        />

        <ul>
          <li>
            <Link to="/">Relatórios</Link>
          </li>
          <li>
            <Link to="/cadastroCliente">Cadastro de Cliente</Link>
          </li>
          <li>
            <Link to="/pedidoVenda">Pedido de Vendas</Link>
          </li>
          <li>
            <Link to="/pedidoCompra">Pedido de Compras</Link>
          </li>
          <li>
            <div onClick={handleShow}>
              <Link>Logout</Link>
            </div>
          </li>
        </ul>
      </header>
    </>
  );
}
