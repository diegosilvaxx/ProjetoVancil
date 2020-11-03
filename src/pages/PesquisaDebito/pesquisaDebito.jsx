import React, { Component } from "react";
import { Input, Select } from "@rocketseat/unform";
import { Row, Col } from "react-bootstrap";
import './styles.css';
import Grid from "~/components/Grid";
import store from "~/store";


class PesquisaDebito extends Component {

  render() {
    let opt = [
      { id: 1, title: "1" },
      { id: 2, title: "2" },
      { id: 3, title: "3" },
    ]
    const pesquisaDebito = store.getState().pesquisaDebito;

    return (
      <>
        <Row >
          <Col>
            <Input
              label="Data Vencimento"
              name="dataVencimento"
              type="text"
              value={(new Date(pesquisaDebito.dataVencimento)).toLocaleDateString('pt-BR')}
              disabled={true}
            />
          </Col>
          <Col>
            <Select disabled={true} name="quantidadeParcela" placeholder="3" label="Quantidade Parcelas" options={opt} />
          </Col>
          <Col>
            <Input
              label="Valor Original"
              name="valorOriginal"
              type="text"
              placeholder="Valor Original"
              value={pesquisaDebito.valorOriginal}
              disabled={true}
            />
          </Col>
        </Row>
        <Row >
          <Col>
            <Input
              label="Dias Atraso"
              name="diasAtraso"
              type="text"
              placeholder="Dias Atraso"
              value={pesquisaDebito.diasAtraso}
              disabled={true}
            />
          </Col>
          <Col>
            <Input
              label="Valor Juros"
              name="valorJuros"
              type="text"
              placeholder="Valor Juros"
              value={pesquisaDebito.valorJuros}
              disabled={true}
            />
          </Col>
          <Col>
            <Input
              label="Valor Final"
              name="valorFinal"
              type="text"
              placeholder="Valor Final"
              value={pesquisaDebito.valorFinal}
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Grid />
        </Row>
      </>
    );
  }
}

export default PesquisaDebito;
