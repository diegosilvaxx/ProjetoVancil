import React, { useState } from "react";
import { Form } from "@rocketseat/unform";
import Modal from "react-bootstrap/Modal";
import Endereco from "./endereco";
import PessoaContato from "./pessoaContato";
import Cliente from "./cliente";
import Fiscal from "./fiscal";
import PesquisaCliente from "./PesquisaCliente";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  insertCliente,
  setState,
  setConfirmation
} from "~/store/modules/cadastroCliente/actions";

import Confirmation from "~/components/Confirmation";

import history from "services/history";

import Tabs from "../../components/Tabs";

const CadastroCliente = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const stateCadastroCliente = useSelector(state => state.cadastroCliente);

  async function onSubmitForm() {
    var btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.click();
  }

  async function handleForm(data) {
    if (data != null) {
      dispatch(setState({ data }));
    }
  }

  async function handleSubmit() {
    dispatch(insertCliente(stateCadastroCliente));
  }

  async function handleConfirmation() {
    dispatch(setConfirmation(true));
  }

  return (
    <>
      <div
        key={"Principal"}
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          width: "90%",
          borderRadius: "4px",
          margin: "auto",
          maxWidth: "1366px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <label className={"lblTitulo"}>Cadastro de Cliente</label>
          <Button onClick={handleShow} className={"PesquisaCliente"}>
            Pesquisar Clientes
          </Button>
        </div>

        <Modal show={show} onHide={handleClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Pesquisa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PesquisaCliente></PesquisaCliente>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
        <Form
          noValidate
          initialData={stateCadastroCliente}
          onSubmit={handleForm}
          id="formCliente"
          // schema={schema}
          key={"FormIndexCadClienteKey"}
          style={{ marginTop: "0" }}
          context={stateCadastroCliente}
        >
          <div className={"containerForm"} onClick={onSubmitForm} key="123144">
            {/* tabs */}
            <Tabs key={"TabsIndexClienteKey"}>
              <Tabs.Tab label={"Geral"} key={"KeyTabsTabGeral"}>
                <Cliente key="ClienteKey"></Cliente>
              </Tabs.Tab>

              <Tabs.Tab label={"Endereço"} key={"KeyTabsTabEndereco"}>
                <Endereco key="EnderecoKey"></Endereco>
              </Tabs.Tab>

              <Tabs.Tab
                label={"Pessoas de contato"}
                key={"KeyTabsTabPessoaContato"}
              >
                <PessoaContato key="PessoaContatoKey"></PessoaContato>
              </Tabs.Tab>

              <Tabs.Tab label={"Fiscal"} key={"KeyTabsTabFiscal"}>
                <Fiscal key="FiscalKey"></Fiscal>
              </Tabs.Tab>
            </Tabs>

            {/* tabs */}

            <div style={{ display: "flex", marginBottom: "30px" }}>
              <div className={"inputWidth"} style={{ margin: "0 30px 0" }}>
                {stateCadastroCliente.ConfirmaCadastro == true ? (
                  <Confirmation
                    title={"Atenção!"}
                    body={"Deseja realmente cadastrar o cliente?"}
                    acao={handleSubmit}
                    disabled={stateCadastroCliente.ConfirmaCadastro}
                  ></Confirmation>
                ) : (
                  ""
                )}
                <Button variant="primary" onClick={handleConfirmation}>
                  Cadastrar
                </Button>
                <Button
                  style={{ visibility: "hidden", height: "0px" }}
                  type="submit"
                  form="formCliente"
                  id="btnSubmit"
                >
                  Ok
                </Button>
              </div>
              <div className={"inputWidth"}>
                <Button
                  variant="secondary"
                  onClick={() => history.push("/dashboard")}
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default CadastroCliente;
