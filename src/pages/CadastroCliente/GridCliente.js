import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { getClienteCompleto } from "~/store/modules/cadastroCliente/actions";
import { toast } from "react-toastify";

export default function GridCliente() {
  const dispatch = useDispatch();
  const stateGetCliente = useSelector(state => state.cadastroCliente);
  const result = stateGetCliente.Cliente;

  async function selecionaCliente({ data }) {
    dispatch(getClienteCompleto(data));
    toast.success("Cliente selecionado com sucesso!");
  }

  const [state] = useState({
    columnDefs: [
      { headerName: "CodigoCliente", field: "Codigo" },
      { headerName: "Razao Social", field: "Nome" },
      { headerName: "CNPJ", field: "CNPJ" },
      { headerName: "Telefone", field: "Telefone", width: 380 },
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
              onClick={() => selecionaCliente(params)}
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
