import React, { useState } from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import "./styles.css";
import GridVenda from "./GridPedido";
import Tabs from "../../components/Tabs";
import Button from "react-bootstrap/Button";
import PesquisaProduto from "./PesquisaProduto";
import Contabilidade from "./Contabilidade";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { inserirPedido } from "~/store/modules/pedidoCompra/actions";

const schema = Yup.object().shape({
  // nome: Yup.string().required("O nome é obrigatório"),
});

export default function PedidoCompra() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(data) {
    debugger;
    if (data != null) {
      dispatch(inserirPedido(data));
    }
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          width: "90%",
          borderRadius: "4px",
          margin: "auto",
          marginBottom: "15px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <label className={"lblTitulo"}>Pedido de Compra</label>
        </div>
        {/* //PRODUTO */}
        <Modal show={show} onHide={handleClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Pesquisa de Produtos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PesquisaProduto></PesquisaProduto>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>

        <Form schema={schema} onSubmit={handleSubmit}>
          <div className={"containerForm"}>
            <div style={{ display: "flex" }}>
              <div className={"inputWidth"}>
                <label htmlFor="name" className="">
                  Status
                </label>
                <Input name="Status" type="text" placeholder="Status" />
              </div>
              <div className={"inputWidth"}>
                <label htmlFor="name" className="">
                  Nº – Seq. numérica
                </label>
                <Input
                  name="seqNumerica"
                  type="text"
                  placeholder="Nº – Seq. numérica"
                />
              </div>
              <div className={"inputWidth"}>
                <label htmlFor="name" className="">
                  Nº Doc SAP
                </label>
                <Input name="DocSap" type="text" placeholder="Nº Doc SAP" />
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div className={"inputWidth"}>
                <label htmlFor="name" className="">
                  Cód. do Fornecedor/Razão social
                </label>
                <Input
                  name="refCliente"
                  type="text"
                  placeholder="Nº Ref. Cliente"
                />
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div className={"comentario"}>
                <label htmlFor="name" className="">
                  Comentários
                </label>
                <textarea
                  className="form-control"
                  idname="comentario"
                  rows="5"
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignContent: "center",
                marginLeft: "30px"
              }}
            >
              {/* tabs */}

              <Tabs>
                <Tabs.Tab label={"Conteúdo"}>
                  <div className={"PesquisaVenda"}>
                    <Button onClick={handleShow} className={"PesquisaVenda"}>
                      Pesquisar Produtos
                    </Button>
                    <GridVenda props={{ tesa: "123" }}></GridVenda>
                  </div>
                </Tabs.Tab>

                <Tabs.Tab label={"Contabilidade"}>
                  <Contabilidade />
                </Tabs.Tab>
              </Tabs>

              {/* tabs */}
            </div>

            <div style={{ display: "flex", marginBottom: "30px" }}>
              <div className={"inputWidth"} style={{ margin: "0 30px 0" }}>
                <Button type="submit">Incluir</Button>
              </div>
              <div className={"inputWidth"} style={{ margin: "0 30px 0" }}>
                <Button variant="success" type="submit">
                  Finalizar Pedido
                </Button>
              </div>
              <div className={"inputWidth"}>
                <Button variant="secondary" onClick={() => alert("Cancelado")}>
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}
