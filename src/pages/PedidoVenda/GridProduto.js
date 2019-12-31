import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { adicionarProduto } from "~/store/modules/pedidoVenda/actions";
import { toast } from "react-toastify";

export default function GridVenda() {
  const dispatch = useDispatch();
  const stateGetProduto = useSelector(state => state.pedidoVenda);
  const result = stateGetProduto.Produto;

  async function VerificaDesconto({ data }) {
    let Desconto = document.getElementById("Desconto" + data.Codigo).value;
    if (parseInt(Desconto) > 50) {
      toast.warn("Desconto máximo de 50%");
      document.getElementById("Desconto" + data.Codigo).value = 50;
    } else if (Desconto == "") {
      document.getElementById("Desconto" + data.Codigo).value = 0;
    }
  }

  async function VerificaQuantidade({ data }) {
    let Quantidade = document.getElementById("Quantidade" + data.Codigo).value;
    if (Quantidade == "") {
      document.getElementById("Quantidade" + data.Codigo).value = 1;
    }
  }

  async function selecionaProduto({ data }) {
    VerificaDesconto({ data });
    VerificaQuantidade({ data });
    const Quantidade = document.getElementById("Quantidade" + data.Codigo)
      .value;

    let Desconto = document.getElementById("Desconto" + data.Codigo).value;

    let NumeroPedidoCompra = document.getElementById(
      "NumeroPedidoCompra" + data.Codigo
    ).value;

    let ItemPedidoCompra = document.getElementById(
      "ItemPedidoCompra" + data.Codigo
    ).value;

    const payload = {
      data: data,
      Quantidade: Quantidade,
      Desconto: Desconto,
      ItemPedidoCompra: ItemPedidoCompra,
      NumeroPedidoCompra: NumeroPedidoCompra
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
        headerName: "Preço unitário",
        field: "Preco",
        editable: false,
        width: 120
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
        headerName: "Desconto ",
        field: "Desconto ",
        width: 120,
        cellRendererFramework: function(params) {
          return (
            <input
              id={"Desconto" + params.data.Codigo}
              style={{ width: "100px" }}
              type="number"
              onChange={() => VerificaDesconto(params)}
            ></input>
          );
        }
      },
      {
        headerName: "Numero do Pedido de compra",
        field: "NumeroPedidoCompra",
        width: 230,
        cellRendererFramework: function(params) {
          return (
            <input
              id={"NumeroPedidoCompra" + params.data.Codigo}
              type="text"
              style={{ width: "200px" }}
            ></input>
          );
        }
      },
      {
        headerName: "Item do Pedido de compra ",
        field: "ItemPedidoCompra ",
        width: 230,
        cellRendererFramework: function(params) {
          return (
            <input
              id={"ItemPedidoCompra" + params.data.Codigo}
              style={{ width: "200px" }}
              type="text"
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
