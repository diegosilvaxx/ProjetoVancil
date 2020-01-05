import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  setPedido,
  getEndereco,
  getPedidoAll
} from "~/store/modules/pedidoVenda/actions";
import { toast } from "react-toastify";

export default function GridPedido() {
  const dispatch = useDispatch();
  const stateGetPedido = useSelector(state => state.pedidoVenda);
  const result = stateGetPedido.Pedido;
  debugger;
  async function selecionaPedido({ data }) {
    dispatch(getEndereco(data));
    dispatch(getPedidoAll(data));
    toast.success("Pedido selecionado com sucesso!");
  }

  const [state] = useState({
    columnDefs: [
      { headerName: "CodigoCliente", field: "CodigoCliente" },
      { headerName: "DataDocumento", field: "DataDocumento" },
      { headerName: "NomeCliente", field: "NomeCliente" },
      { headerName: "NumeroPedido", field: "NumeroPedido" },
      { headerName: "Status", field: "Status", width: 110 },
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
              onClick={() => selecionaPedido(params)}
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
          rowData={result.length >= 2 ? result[1] : []}
          rowHeight={35}
        ></AgGridReact>
      </div>
    </>
  );
}
