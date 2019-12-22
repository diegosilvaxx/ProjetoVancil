import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Button from 'react-bootstrap/Button';
import {  useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function GridVenda() {
  const stateGetProduto = useSelector(state => state.pedidoVenda);
  var result = stateGetProduto.ProdutosSelecionado;
  debugger;

  async function selecionaProduto({ data }) {
    toast.success('Produto excluido com sucesso!');
  }

  const [state] = useState({
    columnDefs: [
      { headerName: 'Nº do item', field: 'CodigoItem', width: 110 },
      { headerName: 'Descrição do item', field: 'Descricao' },
      {
        headerName: 'Quantidade',
        field: 'Quantidade',
        width: 110,
      },
      {
        headerName: 'Preço unitário',
        field: 'ValorUnitario',
        width: 110,
      },
      {
        headerName: 'Desconto %',
        field: 'PercDesconto',
        width: 110,
      },
      { headerName: 'Total(MC) ', field: 'Total' },
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
              onClick={() => selecionaProduto(params)}
            >
              Excluir
            </Button>
          );
        },
      },
    ],
  });

  return (
    <>
      <div
        className="ag-theme-balham"
        style={{ height: '300px', width: '100%', justifyContent: 'center' }}
      >
        <AgGridReact
          enableSorting={true}
          enableFilter={true}
          pagination={true}
          columnDefs={state.columnDefs}
          rowData={result[0].CodigoItem != undefined ? result : []}
          rowHeight={35}
        ></AgGridReact>
      </div>
    </>
  );
}
