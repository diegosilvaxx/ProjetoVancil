import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useDispatch, useSelector, connect } from "react-redux";
import { getProduto } from "~/store/modules/pedidoVenda/actions";
import Grid from "./GridProduto";
import { Select } from "@rocketseat/unform";
import { toast } from "react-toastify";

const PesquisarProduto = () => {
  const statePedidoVenda = useSelector(state => state.pedidoVenda);
  const dispatch = useDispatch();
  const [pesquisa, setPesquisa] = useState("");
  const [pesquisando, setPesquisando] = useState(false);

  function handlePesquisa() {
    var fieldPesquisa = document.getElementById("pesquisa").value;
    setPesquisa(fieldPesquisa);
  }

  function submitPesquisa() {
    var fieldGrupoProduto = document.getElementById("grupoProduto").value;

    if (fieldGrupoProduto != "") {
      setPesquisando(true);
      dispatch(getProduto(fieldGrupoProduto));
      setTimeout(function() {
        setPesquisando(false);
      }, 4000);
    } else {
      toast.error("Selecione um grupo de produto!");
    }
  }

  //CARREGA GRUPO PRODUTOS
  const [OptionsGrupoProdutos, setOptionsGrupoProdutos] = useState([
    { id: "Carregando", title: "Carregando" }
  ]);
  async function loadGrupoProduto() {
    debugger;
    let resultGrupoProduto = [{ id: "Carregando", title: "Carregando" }];
    if (statePedidoVenda.GrupoProdutoCombox != undefined) {
      statePedidoVenda.GrupoProdutoCombox.forEach(element => {
        resultGrupoProduto.push({
          id: element.Codigo,
          title: element.Descricao
        });
      });
      resultGrupoProduto.splice(0, 1);
      setOptionsGrupoProdutos(resultGrupoProduto);
    }
  }

  if (OptionsGrupoProdutos.length <= 1 && statePedidoVenda.territorio != "") {
    loadGrupoProduto();
  }

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Nome"
          aria-label="Nome"
          aria-describedby="basic-addon2"
          id="pesquisa"
          onChange={handlePesquisa}
          style={{ height: "0", visibility: "hidden" }}
        />

        <InputGroup.Append style={{ width: "100%" }}>
          <Select
            onMouseOver={loadGrupoProduto}
            name="grupoProduto"
            options={OptionsGrupoProdutos}
            className={"comboboxControl"}
            placeholder={"Selecione"}
            onClick={loadGrupoProduto}
            id="grupoProduto"
            style={{ width: "100%" }}
          />
          <Button variant="outline-secondary" onClick={submitPesquisa}>
            {pesquisando == false ? "Pesquisar" : "Pesquisando..."}
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <Grid></Grid>
    </>
  );
};

export default connect()(PesquisarProduto);
