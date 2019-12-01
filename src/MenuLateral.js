import React from 'react';
import '~/styles/headerCSS.css';
import { Link } from 'react-router-dom';
import { FaBeer, FaUserAlt, FaTruckMoving } from 'react-icons/fa';

export default function MenuLateral() {
  return (
    <header className="menuLateral">
      <ul>
        <li>
          <i class="nav-icon icon-puzzle"></i>
          <Link to="/">
            <FaBeer style={{ marginRight: 10 }} />
            Dashboard
          </Link>
        </li>
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
      </ul>
    </header>
  );
}
