import React from 'react';
import logo from '~/assets/login.png';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';

const schema = Yup.object().shape({
  usuario: Yup.string().required('O usuário é obrigatorio'),
  password: Yup.string().required('A senha é obrigatória'),
  name: Yup.string().required('Nome é obrigatório'),
});

// import { Container } from './styles';

export default function SignUp() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <img src={logo} style={{ width: 100 }} alt="PortalVendas" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="usuario" type="text" placeholder="Usuário" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <Button type="submit">Criar conta</Button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
