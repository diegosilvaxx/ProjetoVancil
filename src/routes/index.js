import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import PesquisaDebito from '../pages/PesquisaDebito/index';
import MenuLateral from '~/MenuLateral';
import Header from '~/components/Header/Header.jsx';
import '~/styles/headerCSS.css';
import GlobalStyle from '../styles/global';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <>
        <Header />
        <GlobalStyle />
        <div className="container">
          <section id={'sectionLeft'} className="sectionLeft">
            <MenuLateral></MenuLateral>
          </section>
          <section className="sectionRight">
            <Route
              path="/pesquisaDebito"
              exact
              component={PesquisaDebito}
              isPrivate
            />
          </section>
        </div>
      </>
    </Switch>
  );
}
