import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import RemoveReferenciaArray from "~/components/RemoveReferenciaArray";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduto } from "~/store/modules/pedidoVenda/actions";

export default function GridVenda() {
  const dispatch = useDispatch();
  const stateGetProduto = useSelector(state => state.pedidoVenda);
  var result = RemoveReferenciaArray(stateGetProduto.ProdutosSelecionado);
  console.log(result);
  debugger;

  async function selecionaProduto({ data }) {
    dispatch(deleteProduto(data));
    toast.success("Produto excluido com sucesso!");
  }

  const [state] = useState({
    columnDefs: [
      { headerName: "Nº do item", field: "CodigoItem", width: 110 },
      { headerName: "Descrição do item", field: "Descricao" },
      {
        headerName: "Quantidade",
        field: "Quantidade",
        width: 110
      },
      {
        headerName: "Preço unitário",
        field: "ValorUnitario",
        width: 140
      },
      {
        headerName: "Desconto %",
        field: "PercDesconto",
        width: 110
      },
      { headerName: "Total(MC) ", field: "Total" },
      {
        headerName: "Numero do Pedido de compra",
        field: "NumPedidoCompra",
        width: 220
      },
      {
        headerName: "Item do Pedido de compra ",
        field: "ItemPedidoCompra",
        width: 210
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
              Excluir
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
        style={{ height: "300px", width: "100%", justifyContent: "center" }}
      >
        <AgGridReact
          overlayNoRowsTemplate={"Produtos não Selecionados"}
          enableSorting={true}
          enableFilter={true}
          pagination={true}
          columnDefs={state.columnDefs}
          rowData={
            result[0][0] != undefined
              ? result[0][0].Quantidade != undefined || result[0].length > 1
                ? result[0]
                : []
              : []
          }
          rowHeight={35}
        ></AgGridReact>
      </div>
    </>
  );
}
