import React, { useState } from "react";
import "~/styles/headerCSS.css";
import { Link } from "react-router-dom";
import {
  FaChartBar,
  FaWindowClose
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { signOut } from "~/store/modules/auth/actions";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
            <Link to="/pesquisaDebito">
              <FaChartBar style={{ marginRight: 10 }} />
              Pesquisa de Débitos
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
