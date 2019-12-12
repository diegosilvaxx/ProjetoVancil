import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { GridVendaStore } from '~/store/modules/gridVenda/actions';
import store from '~/store';

export default function GridCliente() {
  const stateGetCliente = useSelector(state => state.pedidoVenda);
  const result = [stateGetCliente[1]];
  debugger;
  const [state] = useState({
    columnDefs: [
      { headerName: 'Código', field: 'Codigo', width: 110 },
      { headerName: 'Nome', field: 'Nome' },
      {
        headerName: 'Grupo',
        field: 'Grupo',
        width: 110,
      },
      {
        headerName: 'Telefone',
        field: 'Telefone',
      },
      { headerName: 'Celular', field: 'Celular' },
      { headerName: 'Email', field: 'Email' },
      { headerName: 'CNAE', field: 'CNAE' },
      { headerName: 'CNPJ', field: 'CNPJ' },
      { headerName: 'CPF', field: 'CPF' },
      { headerName: 'IE', field: 'IE' },
      {
        headerName: 'Actions',
        field: 'actions',
        width: 120,
        cellRendererFramework: function(params) {
          return (
            <Button
              style={{ width: 'auto', margin: '0', height: 'auto' }}
              variant="primary"
              size="sm"
              onClick={() => alert('Selecionado com sucesso!')}
            >
              Selecionar
            </Button>
          );
        },
      },
    ],
  });
  const dispatch = useDispatch();
  dispatch(GridVendaStore('R$13.500,00'));

  const { total } = store.getState().gridVenda;

  return (
    <>
      <div
        className="ag-theme-balham"
        style={{ height: '390px', width: '100%', justifyContent: 'center' }}
      >
        <AgGridReact
          enableSorting={true}
          enableFilter={true}
          pagination={true}
          columnDefs={state.columnDefs}
          rowData={result[0]}
          rowHeight={35}
        ></AgGridReact>
      </div>
    </>
  );
}
