import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { adicionarProduto } from "~/store/modules/pedidoCompra/actions";
import { toast } from "react-toastify";

export default function GridVenda() {
  const dispatch = useDispatch();
  const stateGetProduto = useSelector(state => state.pedidoCompra);
  debugger;
  const result = stateGetProduto.Produto;

  async function VerificaPreco({ data }) {
    let Preco = document.getElementById("Preco" + data.Codigo).value;
    if (Preco == "") {
      document.getElementById("Preco" + data.Codigo).value = 0;
    }
  }

  async function VerificaQuantidade({ data }) {
    let Quantidade = document.getElementById("Quantidade" + data.Codigo).value;
    if (Quantidade == "") {
      document.getElementById("Quantidade" + data.Codigo).value = 1;
    }
  }

  async function selecionaProduto({ data }) {
    VerificaPreco({ data });
    VerificaQuantidade({ data });
    const Quantidade = document.getElementById("Quantidade" + data.Codigo)
      .value;

    let Desconto = document.getElementById("Preco" + data.Codigo).value;

    const payload = {
      data: data,
      Quantidade: Quantidade,
      Desconto: Desconto
    };
    dispatch(adicionarProduto(payload));
    toast.success("Produto selecionado com sucesso!");
  }

  const [state] = useState({
    columnDefs: [
      {
        headerName: "Nº do item",
        field: "Codigo",
        editable: false,
        width: 120
      },
      {
        headerName: "Descrição do item",
        field: "Descricao",
        editable: false,
        width: 510
      },
      {
        headerName: "Preço Unitário ",
        field: "Preco ",
        width: 120,
        cellRendererFramework: function(params) {
          return (
            <input
              id={"Preco" + params.data.Codigo}
              style={{ width: "100px" }}
              type="number"
              onChange={() => VerificaPreco(params)}
            ></input>
          );
        }
      },
      {
        headerName: "Quantidade ",
        field: "Quantidade ",
        width: 120,
        cellRendererFramework: function(params) {
          return (
            <input
              id={"Quantidade" + params.data.Codigo}
              type="number"
              style={{ width: "100px" }}
            ></input>
          );
        }
      },
      {
        headerName: "Actions",
        field: "actions",
        width: 120,
        cellRendererFramework: function(params) {
          return (
            <Button
              style={{ width: "auto", margin: "0", height: "auto" }}
              variant="primary"
              size="sm"
              onClick={() => selecionaProduto(params)}
            >
              Selecionar
            </Button>
          );
        }
      }
    ]
  });

  return (
    <>
      <div
        className="ag-theme-balham"
        style={{ height: "390px", width: "100%", justifyContent: "center" }}
      >
        <AgGridReact
          enableSorting={true}
          enableFilter={true}
          pagination={true}
          columnDefs={state.columnDefs}
          rowData={result.length >= 1 ? result[1] : []}
          rowHeight={35}
        ></AgGridReact>
      </div>
    </>
  );
}
