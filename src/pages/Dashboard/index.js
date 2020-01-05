import React from "react";
import store from "~/store";
import Button from "react-bootstrap/Button";
import { Input } from "@rocketseat/unform";
import Logo from "~/assets/img/brand/logo.png";
import Table from "react-bootstrap/Table";
import { getRelatorio } from "~/store/modules/relatorios/actions";
import { useDispatch } from "react-redux";

export default function Dashboard() {
  const { Relatorio } = store.getState().relatorio;
  const dispatch = useDispatch();

  let ArrayResultRelatorio = [];
  let ArrayResultRelatorioItens = [];
  let ArrayResultDevolucoes = [];

  function returnRelatorio(data, index) {
    debugger;
    let result = data.filter(element => element.id == index);
    var component = [];
    for (let index = 0; index < result.length; index++) {
      component.push(result[index].component);
    }

    let resultContainer = (
      <>
        {component}
        {result[0].total}
      </>
    );
    return resultContainer;
  }

  //TABLE DOS ITENS DO RELATORIO

  if (Relatorio.length == 2) {
    for (let index = 0; index < Relatorio[1].Notas.length; index++) {
      for (
        let indexItens = 0;
        indexItens < Relatorio[1].Notas[index].Itens.length;
        indexItens++
      ) {
        ArrayResultRelatorioItens.push({
          id: index,
          component: (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Descrição</th>
                  <th>UN</th>
                  <th>Quant</th>
                  <th>P.Tab</th>
                  <th>Perfil</th>
                  <th>Camp</th>
                  <th>D.Pagto</th>
                  <th>P.Liqu</th>
                  <th>Vlr Total</th>
                  <th>% Com</th>
                  <th>Vlr Com</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Relatorio[1].Notas[index].Itens[indexItens].Codigo}</td>
                  <td>
                    {Relatorio[1].Notas[index].Itens[indexItens].Descricao}
                  </td>
                  <td>{Relatorio[1].Notas[index].Itens[indexItens].UN}</td>
                  <td>
                    {Relatorio[1].Notas[index].Itens[indexItens].Quantidade}
                  </td>
                  <td>
                    {Relatorio[1].Notas[index].Itens[indexItens].PrecoTabela}
                  </td>
                  <td>{Relatorio[1].Notas[index].Itens[indexItens].Perfil}</td>
                  <td>
                    {Relatorio[1].Notas[index].Itens[indexItens].Campanha}
                  </td>
                  <td>
                    {Relatorio[1].Notas[index].Itens[indexItens].Desconto}
                  </td>
                  <td>
                    {Relatorio[1].Notas[index].Itens[indexItens].PrecoLiquido}
                  </td>
                  <td>
                    {Relatorio[1].Notas[index].Itens[indexItens].ValorTotal}
                  </td>
                  <td>
                    {Relatorio[1].Notas[index].Itens[indexItens].PercComissao}
                  </td>
                  <td>
                    {Relatorio[1].Notas[index].Itens[indexItens].ValorComissao}
                  </td>
                </tr>
              </tbody>
            </Table>
          ),
          total: (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Vlr Total</th>
                  <th>% Com</th>
                  <th>Vlr Com</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total: </td>
                  <td>{Relatorio[1].Notas[index].Total}</td>
                  <td>{Relatorio[1].Notas[index].MediaComissao}</td>
                  <td>{Relatorio[1].Notas[index].ValorComissao}</td>
                </tr>
              </tbody>
            </Table>
          )
        });
      }
    }
  }

  //for depara relatorio

  if (Relatorio.length == 2) {
    for (let index = 0; index < Relatorio[1].Notas.length; index++) {
      ArrayResultRelatorio.push(
        <>
          <div
            id="HeaderRelatorio"
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "15px"
            }}
          >
            <div
              id="ResultRelatorio"
              style={{
                marginLeft: "30px",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginRight: "60px"
              }}
            >
              <div className="LineEmissao">
                <label>
                  Emissão: {Relatorio[1].Notas[index].Emissao} - NFe:{" "}
                  {Relatorio[1].Notas[index].NFe} - PN:{" "}
                  {Relatorio[1].Notas[index].PN} -
                  {Relatorio[1].Notas[index].NomePN}
                </label>
              </div>
              <div className="LinePrazo">
                <label>
                  Prazo: {Relatorio[1].Notas[index].Prazo} - Cidade:{" "}
                  {Relatorio[1].Notas[index].Cidade} - UF:{" "}
                  {Relatorio[1].Notas[index].UF}
                </label>
              </div>
              <div className="LineObs">
                <label>Obs: {Relatorio[1].Notas[index].Observacao} </label>
              </div>
              <div className="LineObs">
                {returnRelatorio(ArrayResultRelatorioItens, index)}
              </div>
            </div>
          </div>
          <div class="hr"></div>
        </>
      );
    }
  }

  //DEVOLUCOES RELATORIO

  if (Relatorio.length == 2) {
    for (let index = 0; index < Relatorio[1].Devolucoes.length; index++) {
      ArrayResultDevolucoes.push(
        <>
          <div
            id="HeaderRelatorio"
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "15px"
            }}
          >
            <div
              id="ResultRelatorio"
              style={{
                marginLeft: "30px",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginRight: "60px"
              }}
            >
              <div className="LineEmissao">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>NFe</th>
                      <th>Código</th>
                      <th>Parceiro de Negócios</th>
                      <th>Vlr Total</th>
                      <th>% Com</th>
                      <th>Vlr Com</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{Relatorio[1].Devolucoes[index].Data}</td>
                      <td> {Relatorio[1].Devolucoes[index].NFe}</td>
                      <td> {Relatorio[1].Devolucoes[index].Codigo}</td>
                      <td> {Relatorio[1].Devolucoes[index].ParcNegocio}</td>
                      <td>{Relatorio[1].Devolucoes[index].Valor}</td>
                      <td> {Relatorio[1].Devolucoes[index].PercComissao}</td>
                      <td> {Relatorio[1].Devolucoes[index].ValorComissao}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div class="hr"></div>
        </>
      );
    }
  }

  let dataInicio = undefined;
  let dataFim = undefined;

  if (document.getElementById("dataInicio") != null) {
    dataInicio = document.getElementById("dataInicio").value;
    dataFim = document.getElementById("dataFim").value;
  }

  function buscaRelatorio() {
    dataInicio = document.getElementById("dataInicio").value;
    dataFim = document.getElementById("dataFim").value;
    dispatch(getRelatorio({ dataInicio, dataFim }));
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
            justifyContent: "space-between",
            marginLeft: "30px"
          }}
        >
          <div className={"inputWidth"} style={{ marginTop: "20px" }}>
            <label htmlFor="name" className="">
              Data Inicio
            </label>
            <Input
              name="dataInicio"
              id="dataInicio"
              type="date"
              placeholder="Data Inicio"
              style={{ width: "95%", maxWidth: "600px", height: "35px" }}
            />
          </div>
          <div className={"inputWidth"} style={{ marginTop: "20px" }}>
            <label htmlFor="name" className="">
              Data Fim
            </label>
            <Input
              name="dataFim"
              id="dataFim"
              type="date"
              placeholder="Data Fim"
              style={{ width: "95%", maxWidth: "600px", height: "35px" }}
            />
          </div>
          <Button
            style={{ marginTop: "44px" }}
            className={"PesquisaCliente"}
            onClick={buscaRelatorio}
          >
            Consultar
          </Button>
        </div>

        <div class="hr"></div>

        <div
          id="HeaderRelatorioTop"
          style={{
            display: "flex",
            marginRight: "30px",
            alignItems: "center",
            marginTop: "30px"
          }}
        >
          <img
            src={Logo}
            width="89"
            height="25"
            alt="CoreUI Logo"
            className="navbar-brand-full"
            style={{ marginLeft: "30px" }}
          />
          <div
            id="HeaderLeft"
            style={{
              marginLeft: "30px",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <label>Relatório de Comissão de Vendas</label>
            <label>
              Representante:{" "}
              {Relatorio.length > 1
                ? Relatorio[1].Notas[0].NomeVendedor
                : Relatorio[0].NomeVendedor}
            </label>
            <label>
              Período: {dataInicio} à {dataFim}
            </label>
          </div>
        </div>
        <div class="hr"></div>
        {ArrayResultRelatorio}
        <div
          style={{
            display: "flex",
            paddingLeft: "30px",
            alignItems: "center",
            marginTop: "30px",
            backgroundColor: "#2F353A",
            paddingTop: "5px",
            color: "#fff"
          }}
        >
          <label
            style={{
              alignItems: "center",
              textAlign: "center",
              fontSize: "13pt"
            }}
          >
            Devoluções
          </label>
        </div>
        {ArrayResultDevolucoes}
      </div>
    </>
  );
}
