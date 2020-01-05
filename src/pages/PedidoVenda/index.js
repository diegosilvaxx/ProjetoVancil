import React, { useState } from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import "./styles.css";
import GridVenda from "./GridVenda";
import Tabs from "../../components/Tabs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PesquisaPedido from "./PesquisaPedido";
import PesquisaProduto from "./PesquisaProduto";
import PesquisaCliente from "./PesquisaCliente";
import Logistica from "./Logistica";
import Contabilidade from "./Contabilidade";
import store from "~/store";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { inserirPedido } from "~/store/modules/pedidoVenda/actions";
import CurrencyInput from "react-currency-input";

// const schema = Yup.object().shape({
//   nome: Yup.string().required('O nome é obrigatório'),
//   PessoaContato: Yup.string().required('Pessoa de contato é obrigatório'),
// });

export default function PedidoVenda() {
  const statePedidoVenda = store.getState().pedidoVenda;
  const dispatch = useDispatch();
  //PEDIDO
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //PRODUTO
  const [showProduto, setShowProduto] = useState(false);
  const handleCloseProduto = () => setShowProduto(false);
  const handleShowProduto = () => {
    const { CodigoCliente } = store.getState().pedidoVenda;
    if (CodigoCliente != null) {
      setShowProduto(true);
    } else {
      toast.error("Campo Razão Social não preenchido!");
    }
  };
  //CLIENTE
  const [showCliente, setShowCliente] = useState(false);
  const handleCloseCliente = () => setShowCliente(false);
  const handleShowCliente = () => setShowCliente(true);

  async function handleForm(data) {
    if (data != null && statePedidoVenda.Status != "Fechado") {
      dispatch(inserirPedido({ data }));
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
          <label className={"lblTitulo"}>Pedido de Venda</label>
          <Button onClick={handleShow} className={"PesquisaCliente"}>
            Pesquisar Pedidos
          </Button>
        </div>
        {/* //PEDIDO */}
        <Modal show={show} onHide={handleClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Pesquisa de Pedidos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PesquisaPedido></PesquisaPedido>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
        {/* //PRODUTO */}
        <Modal show={showProduto} onHide={handleCloseProduto} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Pesquisa de Produtos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PesquisaProduto></PesquisaProduto>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseProduto}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
        {/* //CLIENTE */}
        <Modal show={showCliente} onHide={handleCloseCliente} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Pesquisa de Clientes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PesquisaCliente></PesquisaCliente>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseCliente}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>

        <Form
          noValidate
          onSubmit={handleForm}
          context={statePedidoVenda}
          initialData={statePedidoVenda}
        >
          <div className={"containerForm"}>
            <div style={{ display: "flex" }}>
              <div className={"inputWidth"}>
                <label htmlFor="name">Razão Social</label>
                <Input
                  name="nome"
                  type="text"
                  placeholder="Nome"
                  onClick={handleShowCliente}
                  value={statePedidoVenda.NomeCliente}
                />
              </div>
              <div className={"inputWidth"}>
                <label htmlFor="name">Pessoa de contato</label>
                <Input
                  name="PessoaContato"
                  type="text"
                  placeholder="Pessoa de contato"
                />
              </div>
              <div className={"inputWidth"}>
                <label htmlFor="name" className="">
                  Nº Ref. Cliente
                </label>
                <Input
                  name="refCliente"
                  type="text"
                  placeholder="Nº Ref. Cliente"
                />
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div className={"inputWidth"}>
                <label htmlFor="name" className="">
                  Código do Cliente
                </label>
                <Input
                  name="codigoCliente"
                  type="text"
                  disabled
                  placeholder="Código do Cliente"
                  value={statePedidoVenda.CodigoCliente}
                  style={{ maxWidth: "100%" }}
                />
              </div>
              <div className={"inputWidth"}>
                <label htmlFor="name" className="">
                  Data de Entrega
                </label>
                <Input
                  name="dataEntrega"
                  type="date"
                  placeholder="Data de Entrega"
                  value={statePedidoVenda.DataDocumento}
                  style={{ width: "95%", maxWidth: "600px" }}
                />
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div className={"inputWidth"}>
                <label htmlFor="name" className="">
                  Status
                </label>
                <Input
                  name="Status"
                  type="text"
                  disabled
                  placeholder="Status"
                />
              </div>
              <div className={"inputWidth"}>
                <label htmlFor="name" className="">
                  Número do Pedido
                </label>
                <Input
                  disabled
                  name="seqNumerica"
                  type="text"
                  placeholder="Número do Pedido"
                  value={statePedidoVenda.NumeroPedido}
                />
              </div>
              <div className={"inputWidth"}>
                <label htmlFor="name" className="">
                  Nº Doc SAP
                </label>
                <Input
                  disabled
                  name="DocSap"
                  type="text"
                  placeholder="Nº Doc SAP"
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
                    <Button
                      onClick={handleShowProduto}
                      className={"PesquisaVenda"}
                    >
                      Pesquisar Produtos
                    </Button>
                    <GridVenda></GridVenda>
                  </div>
                </Tabs.Tab>

                <Tabs.Tab label={"Logística"}>
                  <Logistica />
                </Tabs.Tab>

                <Tabs.Tab label={"Contabilidade"}>
                  <Contabilidade />
                </Tabs.Tab>
              </Tabs>

              {/* tabs */}
            </div>

            <div style={{ display: "flex" }}>
              <div className={"inputWidth"}>
                <label for="name">Total</label>
                <CurrencyInput
                  name="total"
                  type="text"
                  value={statePedidoVenda.TotalPedido}
                  disabled
                />
              </div>
            </div>

            <div style={{ display: "flex", marginBottom: "30px" }}>
              <div className={"inputWidth"} style={{ margin: "0 30px 0" }}>
                <Button type="submit">Ok</Button>
              </div>
              <div className={"inputWidth"}>
                <Button variant="secondary" onClick={() => {}}>
                  Cancelar Pedido
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}
