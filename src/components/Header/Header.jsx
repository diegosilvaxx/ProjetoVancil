import React, { Component } from 'react';
import "~/styles/headerCSS.css";
import Logo from "~/assets/img/brand/logo.png";
import Menu from "~/assets/menu2.png";
import { Link } from "react-router-dom";
import ModalClose from "./Modal";
import LogoWhats from "~/assets/img/brand/logoWhatsapp.png";
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import * as modalActionCreators from "~/store/modules/modal/actions";
import store from "~/store";
import * as Mensagem from "~/components/Mensagem";

class Header extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = { show: false, expanded: true, mensagem: "" };
  }


  handleSubmit() {
    var menu = document.getElementById("sectionLeft");
    if (this.state.expanded === true) {
      menu.setAttribute("style", "display:none;transition: 2s;");
      this.setState({ expanded: false })
    } else {
      menu.setAttribute("style", "display:flex;transition: 2s;");
      this.setState({ expanded: true })
    }
  }

  handleModal(modal) {
    this.setState({});
    if (modal == "Close") store.dispatch(modalActionCreators.openModal(Mensagem.ModalClose));
    else if (modal == "Whats") store.dispatch(modalActionCreators.openModal(Mensagem.ModalWhats("(99) 99999-9999")));
  }

  render() {
    return (
      <>
        {store.getState().modal.show && <ModalClose show={store.getState().modal.show} />}
        <header className="header">
          <img
            src={Logo}
            width="89"
            height="25"
            alt="CoreUI Logo"
            className="navbar-brand-full"
          />

          <img
            onClick={this.handleSubmit}
            src={Menu}
            width="29"
            height="25"
            alt="Menu"
            className="navbar-brand-full"
          />

          <ul>
            <li>
              <Link to="/pesquisaDebito">Pesquisa de Débitos</Link>
            </li>
            <li>
              <div onClick={() => this.handleModal("Close")}>
                <Link>Logout</Link>
              </div>
            </li>
          </ul>
          <div className="divWhats">
            <img
              onClick={() => this.handleModal("Whats")}
              src={LogoWhats}
              width="30"
              height="30"
              alt="Contato"
              className="navbar-brand-full"
            />
          </div>
        </header>
      </>
    );
  }
}

const mapStateToProps = store => ({
  auth: store.auth
});

export default connect(mapStateToProps)(Header)
