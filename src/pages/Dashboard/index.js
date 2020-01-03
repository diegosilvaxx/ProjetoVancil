import React from "react";
import store from "~/store";
import Button from "react-bootstrap/Button";
import { Input } from "@rocketseat/unform";
import Logo from "~/assets/img/brand/logo.png";
import Table from "react-bootstrap/Table";

export default function Dashboard() {
  const { nomeVendedor } = store.getState().auth;
  let resultRelatorio = (
    <>
      <div
        id="HeaderRelatorio"
        style={{
          display: "flex",
          marginLeft: "30px",
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
              Emissão: {"06/02/2019"} NFe: {"120.807"} PN: {"C00001"}{" "}
              {"COOPERATIVA AGRO PECUARIA DE BOA ESPERANCA LTDA"}
            </label>
          </div>
          <div className="LinePrazo">
            <label>Prazo: {"LUIZ ANTONIO DE PAIVA - ME"}</label>
          </div>
          <div className="LineObs">
            <label>Obs: {"LUIZ ANTONIO DE PAIVA - ME"}</label>
          </div>
          <div className="LineObs">
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
                  <td>PA000198</td>
                  <td>TINTURA DE IODO 10% VANSIL LITRO</td>
                  <td>LT</td>
                  <td>12</td>
                  <td>101,43</td>
                  <td>20,00</td>
                  <td>12,50</td>
                  <td>0,00</td>
                  <td>71,00</td>
                  <td>852,01</td>
                  <td>5,00</td>
                  <td>42,60</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total: </td>
                  <td>504.09</td>
                  <td>3.00</td>
                  <td>15,12</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <div class="hr"></div>
    </>
  );

  let ArrayResultRelatorio = [];
  for (let index = 0; index < 6; index++) {
    ArrayResultRelatorio.push(resultRelatorio);
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
              name="dataEntrega"
              type="date"
              placeholder="Data de Entrega"
              style={{ width: "95%", maxWidth: "600px", height: "35px" }}
            />
          </div>
          <div className={"inputWidth"} style={{ marginTop: "20px" }}>
            <label htmlFor="name" className="">
              Data Fim
            </label>
            <Input
              name="dataEntrega"
              type="date"
              placeholder="Data de Entrega"
              style={{ width: "95%", maxWidth: "600px", height: "35px" }}
            />
          </div>
          <Button style={{ marginTop: "44px" }} className={"PesquisaCliente"}>
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
            <label>Representante: {"LUIZ ANTONIO DE PAIVA - ME"}</label>
            <label>
              Período: {"01/02/2019"} à {"28/02/2019"}
            </label>
          </div>
        </div>
        <div class="hr"></div>
        {ArrayResultRelatorio}
      </div>
    </>
  );
}
