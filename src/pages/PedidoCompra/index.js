import React, { useState } from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import "./styles.css";
import GridVenda from "./GridProdutoSelecionado";
import Tabs from "../../components/Tabs";
import Button from "react-bootstrap/Button";
import PesquisaProduto from "./PesquisaProduto";
import Contabilidade from "./Contabilidade";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { inserirPedido } from "~/store/modules/pedidoCompra/actions";
import store from "~/store";
import PesquisaPedido from "./PesquisaPedido";
import { toast } from "react-toastify";

const schema = Yup.object().shape({
  // nome: Yup.string().required("O nome é obrigatório"),
});

export default function PedidoCompra() {
  const dispatch = useDispatch();
  const { nomeVendedor } = store.getState().auth;
  const pedidoCompra = store.getState().pedidoCompra;
  console.log(pedidoCompra);
  debugger;

  //PRODUTO
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //PEDIDO
  const [showPedido, setShowPedido] = useState(false);
  const handleClosePedido = () => setShowPedido(false);
  const handleShowPedido = () => setShowPedido(true);

  //ATUALIZAR/ENVIAR
  const [showEnviarAtualizar, setShowEnviarAtualizar] = useState(false);
  const handleCloseEnviarAtualizar = () => setShowEnviarAtualizar(true);
  const handleShowEnviarAtualizar = () => setShowEnviarAtualizar(false);

  function EnviarPedido(data) {
    debugger;
    if (data != null && pedidoCompra.Status != "Fechado") {
      dispatch(inserirPedido(data, showEnviarAtualizar));
    }
    toast.error("Status do Pedido Fechado,somente em Aberto!");
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
          marginBottom: "15px",
          maxWidth: "1366px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <label className={"lblTitulo"}>Pedido de Compras</label>
          <Button onClick={handleShowPedido} className={"PesquisaCliente"}>
            Pesquisar Pedidos
          </Button>
        </div>
        {/* //PEDIDO */}
        <Modal show={showPedido} onHide={handleClosePedido} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Pesquisa de Pedidos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PesquisaPedido></PesquisaPedido>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClosePedido}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
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

        <Form onSubmit={EnviarPedido}>
          <div className={"containerForm"}>
            <div style={{ display: "flex" }}>
              <div className={"inputWidth"}>
                <label htmlFor="name" className="">
                  Status
                </label>
                <Input
                  name="Status"
                  type="text"
                  placeholder="Status"
                  disabled
                  value={pedidoCompra.Status}
                />
              </div>
              <div className={"inputWidth"}>
                <label htmlFor="name" className="">
                  Nº – Seq. numérica
                </label>
                <Input
                  name="seqNumerica"
                  type="text"
                  placeholder="Nº – Seq. numérica"
                  disabled
                />
              </div>
              <div className={"inputWidth"}>
                <label htmlFor="name" className="">
                  Nº Doc SAP
                </label>
                <Input
                  name="DocSap"
                  type="text"
                  placeholder="Nº Doc SAP"
                  disabled
                  value={pedidoCompra.NumeroPedido}
                />
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
                  disabled
                  value={nomeVendedor}
                />
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div className={"comentario"}>
                <label style={{ marginLeft: 0 }}>Observações</label>
                <Input
                  multiline
                  name="comentario"
                  rows="5"
                  className="form-control"
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
                <Button
                  type="button"
                  type="submit"
                  onClick={handleShowEnviarAtualizar}
                >
                  Atualizar Pedido
                </Button>
              </div>
              <div className={"inputWidth"} style={{ margin: "0 30px 0" }}>
                <Button
                  variant="success"
                  type="submit"
                  onClick={handleCloseEnviarAtualizar}
                >
                  Enviar Pedido
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
