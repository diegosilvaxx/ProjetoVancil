import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Button from 'react-bootstrap/Button';

import React, { Component } from 'react';

className Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { headerName: 'Make', field: 'make' },
        { headerName: 'Model', field: 'model' },
        { headerName: 'Price', field: 'price', editable: true },
        {
          headerName: 'Actions',
          field: 'actions',
          width: 180,
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
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
      ],
    };
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{ height: '200px', width: '100%', justifyContent: 'center' }}
      >
        <AgGridReact
          enableSorting={true}
          enableFilter={true}
          pagination={true}
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          rowHeight={35}
        ></AgGridReact>
      </div>
    );
  }
}

export default Grid;
