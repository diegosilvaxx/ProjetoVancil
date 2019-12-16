// import React, { useState } from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';
// import Button from 'react-bootstrap/Button';
// import { useDispatch, useSelector } from 'react-redux';
// import store from '~/store';

// export default function GridPedido() {
//   const stateGetCliente = useSelector(state => state.pedidoVenda);
//   const result = [stateGetCliente[1]];
//   debugger;
//   const [state] = useState({
//     columnDefs: [
//       { headerName: 'CodigoCliente', field: 'CodigoCliente' },
//       { headerName: 'DataDocumento', field: 'DataDocumento' },
//       { headerName: 'NomeCliente', field: 'NomeCliente' },
//       { headerName: 'NumeroPedido', field: 'NumeroPedido' },
//       {
//         headerName: 'Actions',
//         field: 'actions',
//         width: 120,
//         cellRendererFramework: function(params) {
//           return (
//             <Button
//               style={{ width: 'auto', margin: '0', height: 'auto' }}
//               variant="primary"
//               size="sm"
//               onClick={() => alert('Selecionado com sucesso!')}
//             >
//               Selecionar
//             </Button>
//           );
//         },
//       },
//     ],
//   });

//   return (
//     <>
//       <div
//         className="ag-theme-balham"
//         style={{ height: '390px', width: '100%', justifyContent: 'center' }}
//       >
//         <AgGridReact
//           enableSorting={true}
//           enableFilter={true}
//           pagination={true}
//           columnDefs={state.columnDefs}
//           rowData={result[0]}
//           rowHeight={35}
//         ></AgGridReact>
//       </div>
//     </>
//   );
// }
