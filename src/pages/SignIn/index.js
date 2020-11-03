import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "~/assets/img/brand/logo.png";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";

import { signInRequest } from "~/store/modules/auth/actions";

const schema = Yup.object().shape({
  usuario: Yup.string().required("O usuário é obrigatorio"),
  password: Yup.string().required("A senha é obrigatória")
});

// import { Container } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ usuario, password }) {
    dispatch(signInRequest(usuario, password));
  }

  return (
    <>
      <img src={logo} style={{ width: 350 }} alt="PortalVendas" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="usuario" type="text" placeholder="Usuário" />
        <Input name="password" type="password" placeholder="Password" />

        <Button type="submit">{loading ? "Carregando..." : "Acessar"}</Button>
        <Link className="linkButton" to="/register">Cadastrar</Link>
      </Form>
    </>
  );
}
