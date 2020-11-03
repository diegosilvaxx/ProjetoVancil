import React from 'react';
import logo from '~/assets/login.png';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import * as authActionCreators from "~/store/modules/auth/actions";
import store from "~/store";

const schema = Yup.object().shape({
  password: Yup.string().required('A senha é obrigatória'),
  confirmPassword: Yup.string().required('A senha é obrigatória'),
  email: Yup.string().required('Email é obrigatório'),
});

// import { Container } from './styles';

export default function SignUp() {
  function handleSubmit(data) {
    store.dispatch(authActionCreators.signRegister(data));
  }

  return (
    <>
      <img src={logo} style={{ width: 100 }} alt="PortalVendas" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirma Password"
        />
        <Button type="submit">Criar conta</Button>
        <Link className="linkButton" to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
