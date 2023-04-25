import React from "react";
import "./ReportsCss.css";
import { DataGrid } from "@mui/x-data-grid";
import { GridPrintExportOptions } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Reports = () => {
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70, sortable: true },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 }];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 }];

    const top100Films = [
      { label: 'The Shawshank Redemption', year: 1994 },
      { label: 'The Godfather', year: 1972 },
      { label: 'The Godfather: Part II', year: 1974 }];

  return (

    <div id="mainBodyReports">

      <div id="headerReports">
       <div> </div>
       <h1>דוחות</h1>
       <Autocomplete
          disablePortal
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
          />

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel>Age</InputLabel>
            <Select>
              <em>None</em>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>2Ten</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TextField label="לין"/>
      </div>


      <div id="innerMainReports">
        <DataGrid
          id="dataGrid"
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          pagination
          />



       </div>
    </div>
  );
};

export default Reports;