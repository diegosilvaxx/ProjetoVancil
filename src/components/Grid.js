import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import autoBind from 'react-autobind';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { connect } from 'react-redux';

import React, { Component } from 'react';

class Grid extends Component {
  constructor(props) {
    super(props);
    autoBind(this);

  }

  LoadGrid() {
    let debito = this.props.pesquisaDebito;
    let valor = debito.valorOriginal + debito.valorJuros;
    return {
      columnDefs: [
        { headerName: 'Parcela', field: 'parcela' },
        { headerName: 'Data Vencimento', field: 'dataVencimento' },
        { headerName: 'Valor', field: 'valor', editable: true },
      ],
      rowData: [
        { parcela: '1', dataVencimento: moment((new Date(Date.now()))).add({ 'day': 1 }).locale('pt-br').format('L'), valor: valor },
        { parcela: '2', dataVencimento: moment((new Date(Date.now()))).add({ 'day': 1, 'month': 1 }).locale('pt-br').format('L'), valor: valor / 2 },
        { parcela: '3', dataVencimento: moment((new Date(Date.now()))).add({ 'day': 1, 'month': 2 }).format('L'), valor: valor / 3 },
      ],
    };
  }

  render() {

    let grid = this.LoadGrid()

    return (
      <div
        className="ag-theme-balham"
      >
        <AgGridReact
          enableSorting={true}
          enableFilter={true}
          pagination={true}
          columnDefs={grid.columnDefs}
          rowData={grid.rowData}
          rowHeight={35}
        ></AgGridReact>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pesquisaDebito: state.pesquisaDebito
  }
}

export default connect(mapStateToProps)(Grid) 
