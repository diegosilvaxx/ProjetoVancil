import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '~/assets/login.png';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  usuario: Yup.string().required('O usuário é obrigatorio'),
  password: Yup.string().required('A senha é obrigatória'),
});

// import { Container } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ usuario, password }) {
    dispatch(signInRequest(usuario, password));
  }

  return (
    <>
      <img src={logo} style={{ width: 100 }} alt="PortalVendas" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="usuario" type="text" placeholder="Usuário" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <Button type="submit">Acessar</Button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
