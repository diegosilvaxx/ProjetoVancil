import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setProduto } from '~/store/modules/pedidoVenda/actions';
import { toast } from 'react-toastify';
import { Input } from '@rocketseat/unform';

export default function GridVenda() {
  const dispatch = useDispatch();
  const stateGetProduto = useSelector(state => state.pedidoVenda);
  const result = stateGetProduto.Produto;

  async function selecionaProduto({ data }) {
    dispatch(setProduto(data));
    toast.success('Produto selecionado com sucesso!');
  }

  const [state] = useState({
    columnDefs: [
      { headerName: 'Nº do item', field: 'Codigo', editable: false },
      { headerName: 'Descrição do item', field: 'Descricao', editable: false },
      {
        headerName: 'Preço unitário',
        field: 'Preco',
        editable: false,
        width: 420,
      },
      {
        headerName: 'Actions',
        field: 'actions',
        cellRendererFramework: function(params) {
          return (
            <Button
              style={{ width: 'auto', margin: '0', height: 'auto' }}
              variant="primary"
              size="sm"
              onClick={() => selecionaProduto(params)}
            >
              Selecionar
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
        style={{ height: '390px', width: '100%', justifyContent: 'center' }}
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
