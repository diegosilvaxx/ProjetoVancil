// import React, { useState } from 'react';
// import { AgGridReact, gridApi } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';
// import Button from 'react-bootstrap/Button';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCliente } from '~/store/modules/pedidoVenda/actions';
// import { toast } from 'react-toastify';

// export default function GridCliente() {
//   const dispatch = useDispatch();
//   const stateGetCliente = useSelector(state => state.pedidoVenda);
//   const result = [stateGetCliente[1]];

//   function selecionaCliente(data) {
//     dispatch(setCliente(data));
//     toast.success('Cliente selecionado com sucesso!');
//   }

//   const [state] = useState({
//     columnDefs: [
//       { headerName: 'Código', field: 'Codigo', width: 110 },
//       { headerName: 'Nome', field: 'Nome' },
//       {
//         headerName: 'Grupo',
//         field: 'Grupo',
//         width: 110,
//       },
//       {
//         headerName: 'Telefone',
//         field: 'Telefone',
//       },
//       { headerName: 'Celular', field: 'Celular' },
//       { headerName: 'Email', field: 'Email' },
//       { headerName: 'CNAE', field: 'CNAE' },
//       { headerName: 'CNPJ', field: 'CNPJ' },
//       { headerName: 'CPF', field: 'CPF' },
//       { headerName: 'IE', field: 'IE' },
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
//               onClick={() => selecionaCliente(params.data)}
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
