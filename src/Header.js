import React, { useState } from 'react';
import '~/styles/headerCSS.css';
import Logo from '~/assets/img/brand/logo.svg';
import Menu from '~/assets/menu2.png';
import { Link } from 'react-router-dom';

export default function Header() {
  const [expanded, setExpanded] = useState(true);
  function handleSubmit() {
    var menu = document.getElementById('sectionLeft');
    if (expanded === true) {
      menu.setAttribute('style', 'display:none;transition: 2s;');
      setExpanded(false);
    } else {
      menu.setAttribute('style', 'display:flex;transition: 2s;');
      setExpanded(true);
    }
  }

  return (
    <header className="header">
      <img
        src={Logo}
        width="89"
        height="25"
        alt="CoreUI Logo"
        class="navbar-brand-full"
      />

      <img
        onClick={handleSubmit}
        src={Menu}
        width="29"
        height="25"
        alt="CoreUI Logo"
        class="navbar-brand-full"
      />

      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/cadastroCliente">Cadastro de Cliente</Link>
        </li>
        <li>
          <Link to="/pedidoVenda">Pedido de Vendas</Link>
        </li>
      </ul>
    </header>
  );
}
