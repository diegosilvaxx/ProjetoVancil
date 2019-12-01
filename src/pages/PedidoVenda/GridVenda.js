import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { GridVendaStore } from '~/store/modules/gridVenda/actions';

export default function GridVenda() {
  const [state] = useState({
    columnDefs: [
      { headerName: 'Nº do item', field: 'numeroItem', width: 110 },
      { headerName: 'Descrição do item', field: 'descricao' },
      {
        headerName: 'Quantidade',
        field: 'quantidade',
        editable: true,
        width: 110,
      },
      {
        headerName: 'Preço unitário',
        field: 'precoUnitario',
        editable: true,
      },
      { headerName: 'Total(MC) ', field: 'total', editable: true },
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
              onClick={() => alert('funciono')}
            >
              Exibir
            </Button>
          );
        },
      },
    ],
    rowData: [
      {
        numeroItem: 32,
        descricao: 'CANA GOLD 1.000L',
        quantidade: 1,
        precoUnitario: 'R$ 3,500',
        total: 'R$ 3,500',
      },
      {
        numeroItem: 325,
        descricao: 'CANA GOLD 2.000L',
        quantidade: 1,
        precoUnitario: 'R$ 4,500',
        total: 'R$ 4,500',
      },
      {
        numeroItem: 35,
        descricao: 'CANA GOLD 3.000L',
        quantidade: 1,
        precoUnitario: 'R$ 5,500',
        total: 'R$ 5,500',
      },
    ],
  });
  const dispatch = useDispatch();
  dispatch(GridVendaStore('R$13.500,00'));
  return (
    <div
      className="ag-theme-balham"
      style={{ height: '200px', width: '100%', justifyContent: 'center' }}
    >
      <AgGridReact
        enableSorting={true}
        enableFilter={true}
        pagination={true}
        columnDefs={state.columnDefs}
        rowData={state.rowData}
        rowHeight={35}
      ></AgGridReact>
    </div>
  );
}
