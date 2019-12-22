import React, { useState } from "react";
import { Input, Select } from "@rocketseat/unform";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
// import { getGrupoAndTerritorio } from '~/store/modules/cadastroCliente/actions';

const Cliente = () => {
  const stateCadastroCliente = useSelector(state => state.cadastroCliente);

  //CARREGA GRUPO
  const [optionsGrupo, setOptionsGrupo] = useState([
    { id: "Carregando", title: "Carregando" }
  ]);
  async function loadGrupo() {
    let resultGrupo = [{ id: "Carregando", title: "Carregando" }];
    if (stateCadastroCliente.GrupoCombox != undefined) {
      stateCadastroCliente.GrupoCombox.forEach(element => {
        resultGrupo.push({
          id: element.Codigo,
          title: element.Descricao
        });
      });
      resultGrupo.splice(0, 1);
      setOptionsGrupo(resultGrupo);
    }
  }

  if (optionsGrupo.length <= 1 && stateCadastroCliente.grupo != "") {
    loadGrupo();
  }

  //CARREGA TERRITORIO
  const [optionsTerritorio, setOptionsTerritorio] = useState([
    { id: "Carregando", title: "Carregando" }
  ]);
  async function loadTerritorio() {
    let resultTerritorio = [{ id: "Carregando", title: "Carregando" }];
    if (stateCadastroCliente.TerritorioCombox != undefined) {
      stateCadastroCliente.TerritorioCombox.forEach(element => {
        resultTerritorio.push({
          id: element.Codigo,
          title: element.Descricao
        });
      });
      resultTerritorio.splice(0, 1);
      setOptionsTerritorio(resultTerritorio);
    }
  }

  if (optionsTerritorio.length <= 1 && stateCadastroCliente.territorio != "") {
    loadTerritorio();
  }

  var Carregando = [{ id: "Carregando", title: "Carregando..." }];

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className={"inputWidth"}>
          <label htmlFor="name" className="">
            Razão Social
          </label>
          <Input name="nomeCliente" type="text" placeholder="Razão Social" />
        </div>
        <div className={"inputWidth"}>
          <label htmlFor="name" className="">
            Nome Fantasia
          </label>
          <Input
            style={{ width: "95%", maxWidth: "600px" }}
            name="nomeFantasia"
            type="text"
            placeholder="Nome Fantasia"
          />
        </div>
      </div>
      <div style={{ display: "flex" }} key={"fgdf"}>
        <div
          className={"inputWidth"}
          style={{ width: "40px", marginRight: "20px" }}
        >
          <label htmlFor="name">DDD</label>
          <Input
            name="ddd"
            type="text"
            placeholder="(99)"
            style={{
              width: "40px",
              marginRight: "20px",
              padding: "0",
              textAlign: "center"
            }}
          />
        </div>
        <div className={"inputWidth"}>
          <label htmlFor="name">Telefone</label>
          <Input name="telefone" type="text" placeholder="9999-9999" />
        </div>
        <div className={"inputWidth"}>
          <label htmlFor="name">Celular</label>
          <Input name="celular" type="text" placeholder="(99) 99999-9999" />
        </div>
        <div className={"inputWidth"}>
          <label htmlFor="name" className="">
            Email
          </label>
          <Input name="email" type="email" placeholder="Email" />
        </div>
      </div>
      <div style={{ display: "flex" }} key={"teste3123"}>
        <div className={"inputWidth"}>
          <label htmlFor="name" className="">
            Observações
          </label>
          <Input name="observacoes" type="text" placeholder="Observações" />
        </div>
        <div className={"inputWidth"} onMouseOver={loadTerritorio}>
          <label>Território *</label>
          <Form.Group
            key={"clientehtmlFormGroupSelectComboBox"}
            controlId="territorio"
            className={"comboboxGroup"}
          >
            <Select
              name="territorio"
              options={
                optionsTerritorio.length <= 1 ? Carregando : optionsTerritorio
              }
              className={"comboboxControl"}
              placeholder={"Selecione"}
              onClick={loadTerritorio}
            />
          </Form.Group>
        </div>
        <div className={"inputWidth"} key={"teste"} onMouseOver={loadGrupo}>
          <label htmlFor="name" className="" key={"teste33"}>
            Grupo
          </label>
          <Form.Group
            key={"clientehtmlFormGroupSelectComboBox"}
            controlId="grupo"
            className={"comboboxGroup"}
          >
            <Select
              name="grupo"
              options={optionsGrupo.length <= 1 ? Carregando : optionsGrupo}
              className={"comboboxControl"}
              placeholder={"Selecione"}
              onClick={loadGrupo}
            />
          </Form.Group>
        </div>
      </div>
    </>
  );
};

export default Cliente;
