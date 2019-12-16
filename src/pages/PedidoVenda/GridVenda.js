import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function GridVenda() {
  const stateGetProduto = useSelector(state => state.pedidoVenda);
  const result = stateGetProduto.ProdutosSelecionado;

  async function selecionaProduto({ data }) {
    toast.success('Produto excluido com sucesso! FAZER IMPLEMENTAÇÃO');
  }

  const [state] = useState({
    columnDefs: [
      { headerName: 'Nº do item', field: 'Codigo', width: 110 },
      { headerName: 'Descrição do item', field: 'Descricao' },
      {
        headerName: 'Quantidade',
        field: 'quantidade',
        editable: true,
        width: 110,
      },
      {
        headerName: 'Preço unitário',
        field: 'Preco',
        editable: false,
        width: 110,
      },
      {
        headerName: 'Desconto %',
        field: 'desconto',
        width: 110,
        editable: true,
      },
      { headerName: 'Total(MC) ', field: 'total', editable: false },
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
          rowData={result.length >= 2 ? result : []}
          rowHeight={35}
        ></AgGridReact>
      </div>
    </>
  );
}
