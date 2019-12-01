import './config/ReactotronConfig';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import { Router } from 'react-router-dom';
import history from './services/history';
import GlobalStyle from './styles/global';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
