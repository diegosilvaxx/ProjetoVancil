import React, { useState } from "react";
import { Input, Select } from "@rocketseat/unform";
import FormReact from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  getMunicipio,
  getEstado
} from "~/store/modules/cadastroCliente/actions";

const EnderecoComplemento = props => {
  const dispatch = useDispatch();
  const [carregoDados, setCarregoDados] = useState(false);
  const options = [
    { id: "Cobrança", title: "Cobrança" },
    { id: "Entrega", title: "Entrega" }
  ];

  var Carregando = [{ id: "Carregando", title: "Selecione um estado!" }];

  //MUNICIPIO
  const [optionsMunicipio, setOptionsMunicipio] = useState([
    { id: "Carregando", title: "Selecione um estado!" }
  ]);

  //ESTADO
  const [optionsEstado, setOptionsEstado] = useState([
    { id: "Carregando", title: "Carregando" }
  ]);

  const stateCadastroCliente = useSelector(state => state.cadastroCliente);
  if (carregoDados == false) {
    dispatch(getMunicipio());
    dispatch(getEstado());
    setCarregoDados(true);
  }

  //CARREGA MUNICIPIO
  async function loadMunicipio() {
    let resultMunicipio = [{ id: "Carregando", title: "Carregando" }];
    if (stateCadastroCliente.MunicipioCombox != undefined) {
      stateCadastroCliente.MunicipioCombox.forEach(element => {
        resultMunicipio.push({
          id: element.Codigo,
          title: element.Nome + " - " + element.Estado,
          estado: element.Estado
        });
      });
      resultMunicipio.splice(0, 1);

      let resultMunicipioFiltrado = undefined;
      if (props.Quantidade == 0) {
        resultMunicipioFiltrado = resultMunicipio.filter(
          element => element.estado == stateCadastroCliente.estadoComplemento0
        );
      } else if (props.Quantidade == 1) {
        resultMunicipioFiltrado = resultMunicipio.filter(
          element => element.estado == stateCadastroCliente.estadoComplemento1
        );
      } else if (props.Quantidade == 2) {
        resultMunicipioFiltrado = resultMunicipio.filter(
          element => element.estado == stateCadastroCliente.estadoComplemento2
        );
      }

      setOptionsMunicipio(resultMunicipioFiltrado);
    }
  }

  //CARREGA ESTADO
  async function loadEstado() {
    let resultEstado = [{ id: "Carregando", title: "Carregando" }];
    if (stateCadastroCliente.EstadoCombox != undefined) {
      stateCadastroCliente.EstadoCombox.forEach(element => {
        resultEstado.push({
          id: element.Codigo,
          title: element.Nome + " - " + element.Codigo
        });
      });
      resultEstado.splice(0, 1);
      setOptionsEstado(resultEstado);
      loadMunicipio();
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "#E4E5E6",
          marginLeft: "30px",
          marginBottom: "30px"
        }}
      >
        <div className={"inputWidth"}>
          <label
            htmlFor="name"
            className=""
            style={{ marginLeft: 0, fontSize: "15pt", marginTop: "5px" }}
          >
            Endereço {props.Quantidade + 2}
          </label>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className={"inputWidth"}>
          <label htmlFor="name" className="">
            Id endereço
          </label>
          <Input
            name={"idEnderecoComplemento" + props.Quantidade}
            type="text"
            placeholder="Id endereço"
          />
        </div>
        <div className={"inputWidth"}>
          <label htmlFor="name" className="">
            Tipo endereço (cobrança/entrega)
          </label>
          <FormReact.Group controlId="FormCliente" className={"comboboxGroup"}>
            <Select
              name={"tipoEnderecoComplemento" + props.Quantidade}
              options={options.length <= 1 ? Carregando : options}
              className={"comboboxControl"}
              placeholder={"Selecione"}
            />
          </FormReact.Group>
        </div>
        <div className={"inputWidth"}>
          <label htmlFor="name" className="">
            Tipo Logradouro (Rua,viela e etc)
          </label>
          <Input
            name={"tipoLogradouroComplemento" + props.Quantidade}
            type="text"
            placeholder="Tipo Logradouro"
          />
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div className={"inputWidth"}>
          <label htmlFor="name" className="">
            Nome da Rua
          </label>
          <Input
            name={"nomeRuaComplemento" + props.Quantidade}
            type="text"
            placeholder="Rua"
          />
        </div>
        <div className={"inputWidth"}>
          <label htmlFor="name" className="">
            Nº
          </label>
          <Input
            name={"numeroComplemento" + props.Quantidade}
            type="text"
            placeholder="Numero"
          />
        </div>
        <div className={"inputWidth"}>
          <label htmlFor="name" className="">
            Complemento
          </label>
          <Input
            name={"complementoComplemento" + props.Quantidade}
            type="text"
            placeholder="Complemento"
          />
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div className={"inputWidth"}>
          <label htmlFor="name" className="">
            CEP (Apenas numero)
          </label>
          <Input
            name={"cepComplemento" + props.Quantidade}
            type="text"
            placeholder="CEP"
          />
        </div>
        <div className={"inputWidth"}>
          <label>Bairro</label>
          <Input
            name={"bairroComplemento" + props.Quantidade}
            type="text"
            placeholder="Bairro"
          />
        </div>
        <div className={"inputWidth"} onMouseOver={loadEstado}>
          <label>Estado</label>
          <FormReact.Group controlId="FormCliente" className={"comboboxGroup"}>
            <Select
              name={"estadoComplemento" + props.Quantidade}
              options={optionsEstado.length <= 1 ? Carregando : optionsEstado}
              className={"comboboxControl"}
              placeholder={"Selecione"}
              onClick={loadEstado}
            />
          </FormReact.Group>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div className={"inputWidth"} onMouseOver={loadMunicipio}>
          <label htmlFor="name" className="">
            Município
          </label>
          <FormReact.Group
            controlId="htmlFormCliente"
            className={"comboboxGroup"}
          >
            <Select
              name={"municipioComplemento" + props.Quantidade}
              options={
                optionsMunicipio.length <= 1 ? Carregando : optionsMunicipio
              }
              className={"comboboxControl"}
              placeholder={"Selecione o Estado primeiro"}
              onClick={loadMunicipio}
            />
          </FormReact.Group>
        </div>
        <div className={"inputWidth"}>
          <label htmlFor="name" className="">
            Cidade
          </label>
          <Input
            style={{ width: "95%", maxWidth: "600px" }}
            name={"cidadeComplemento" + props.Quantidade}
            type="text"
            placeholder="Cidade"
          />
        </div>
      </div>
    </>
  );
};

export default EnderecoComplemento;
