import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Input, Select } from "@rocketseat/unform";

const Logistica = () => {
  var Carregando = [{ id: "Carregando", title: "Carregando..." }];
  const statePedidoVenda = useSelector(state => state.pedidoVenda);
  //CARREGA ENDEREÇOS COBRANCA
  const [optionsEnderecoCobranca, setOptionsEnderecoCobranca] = useState([
    { id: "Carregando", title: "Carregando" }
  ]);
  async function loadEnderecoCobranca() {
    let resultGrupo = [{ id: "Carregando", title: "Carregando" }];
    if (statePedidoVenda.EnderecoCombox != undefined) {
      statePedidoVenda.EnderecoCombox.forEach(element => {
        resultGrupo.push({
          id:
            element.ID +
            " - " +
            element.Tipo +
            " - " +
            element.TipoLogradouro +
            " - " +
            element.Logradouro +
            " - " +
            element.Numero +
            " - " +
            element.Bairro +
            " - " +
            element.Cidade +
            " - " +
            element.Municipio +
            " - " +
            element.Estado +
            " - " +
            element.Tipo +
            " - " +
            element.CEP +
            " - " +
            element.Complemento,
          title:
            "Tipo: " +
            element.Tipo +
            " - " +
            element.TipoLogradouro +
            " - " +
            element.Logradouro +
            " - " +
            element.Numero
        });
      });
      resultGrupo.splice(0, 1);
      setOptionsEnderecoCobranca(resultGrupo);
    }
  }

  async function setEnderecoCobranca(data) {
    var enderecoCobranca = document.getElementById("enderecoCobranca").value;
    document.getElementById(
      "enderecoCobrancaComentario"
    ).value = enderecoCobranca;
  }

  async function setPontoEntrega(data) {
    var pontoEntrega = document.getElementById("pontoEntrega").value;
    document.getElementById("pontoEntregaComentario").value = pontoEntrega;
  }

  return (
    <>
      <div style={{ display: "flex" }} onMouseOver={loadEnderecoCobranca}>
        <div className={"inputWidth"}>
          <label htmlFor="name" className="">
            Ponto de entrega
          </label>
          <Form.Group controlId="PontoEntrega" className={"comboboxGroup"}>
            <Select
              id="pontoEntrega"
              name="pontoEntrega"
              options={
                optionsEnderecoCobranca.length <= 1
                  ? Carregando
                  : optionsEnderecoCobranca
              }
              className={"comboboxControl"}
              placeholder={"Selecione"}
              onBlur={loadEnderecoCobranca}
              onClick={setPontoEntrega}
            />
          </Form.Group>
          <Input
            id="pontoEntregaComentario"
            multiline
            name="pontoEntregaComentario"
            rows="5"
            className="form-control"
            style={{ marginLeft: "30px", width: "95%" }}
            disabled
          />
        </div>
        <div className={"inputWidth"}>
          <label htmlFor="name" className="">
            Endereço de cobrança
          </label>
          <Form.Group controlId="EnderecoCobranca" className={"comboboxGroup"}>
            <Select
              name="enderecoCobranca"
              options={
                optionsEnderecoCobranca.length <= 1
                  ? Carregando
                  : optionsEnderecoCobranca
              }
              className={"comboboxControl"}
              placeholder={"Selecione"}
              onClick={setEnderecoCobranca}
              onBlur={loadEnderecoCobranca}
            />
          </Form.Group>
          <Input
            multiline
            id="enderecoCobrancaComentario"
            name="enderecoCobrancaComentario"
            rows="5"
            className="form-control"
            style={{ marginLeft: "30px", width: "95%" }}
            disabled
          />
        </div>
      </div>
    </>
  );
};

export default Logistica;
