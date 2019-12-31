import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Input, Select } from "@rocketseat/unform";
import { setLogistica } from "~/store/modules/pedidoVenda/actions";

const Logistica = () => {
  var Carregando = [{ id: "Carregando", title: "Carregando..." }];
  const dispatch = useDispatch();
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

  async function setEnderecoCobranca() {
    var enderecoCobranca = document.getElementById("enderecoCobranca").value;
    document.getElementById(
      "enderecoCobrancaDetalhes"
    ).value = enderecoCobranca;
    dispatch(setLogistica({ EnderecoCobranca: enderecoCobranca }));
  }

  async function setPontoEntrega() {
    var pontoEntrega = document.getElementById("pontoEntrega").value;
    document.getElementById("pontoEntregaDetalhes").value = pontoEntrega;
    dispatch(setLogistica({ PontoEntrega: pontoEntrega }));
  }

  return (
    <>
      <div style={{ display: "flex" }} onMouseOver={loadEnderecoCobranca}>
        <div className={"inputWidth"}>
          <label htmlFor="name" className="">
            Ponto de entrega
          </label>
          <Form.Group className={"comboboxGroup"}>
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
            id="pontoEntregaDetalhes"
            multiline
            name="pontoEntregaDetalhes"
            rows="5"
            className="form-control"
            style={{ marginLeft: "30px", width: "95%" }}
            disabled
            value={statePedidoVenda.pontoEntregaDetalhes}
          />
        </div>
        <div className={"inputWidth"}>
          <label htmlFor="name" className="">
            Endereço de cobrança
          </label>
          <Form.Group className={"comboboxGroup"}>
            <Select
              id="enderecoCobranca"
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
            id="enderecoCobrancaDetalhes"
            name="enderecoCobrancaDetalhes"
            rows="5"
            className="form-control"
            style={{ marginLeft: "30px", width: "95%" }}
            disabled
            value={statePedidoVenda.enderecoCobrancaDetalhes}
          />
        </div>
      </div>
    </>
  );
};

export default Logistica;
