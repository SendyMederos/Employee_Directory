import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {field: 'city', headerName: 'City',  width: 130},
  {field: 'state', headerName: 'State', width: 130},
  { field: 'cell', headerName: 'Cell', type: 'Phone', width: 170 },
  {field: 'email', headerName: 'E-mail', type: 'E-mail', width: 300}
];
export default function Table(props) {
  const rows = props.employees
  return (
    <div style={{  width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={7} autoHeight />
    </div>
  );
}