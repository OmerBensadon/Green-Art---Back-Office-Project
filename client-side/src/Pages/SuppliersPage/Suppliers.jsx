import React, {useState} from "react";
import "./SuppliersCss.css";
import { Dropdown } from 'primereact/dropdown';
import { DataGrid } from "@mui/x-data-grid";
import { TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Suppliers = () => {

  const [suppliersType,setSuppliersType] = useState('');

  const columns =[
    {
      field: 'companyNum',
      headerName: 'מספר ח.פ',
      right: true,
    },
    {
      field: 'companyName',
      headerName: 'שם חברה',
      right: true,
    },
    {
      field: 'companyAddress',
      headerName: 'כתובת חברה',
      right: true,
    },
    {
      field: 'companyEmail',
      headerName: 'כתובת מייל',
      right: true,
    },
    {
      field: 'companyStartDate',
      headerName: 'תאריך רישום',
      right: true,
    },
    {
      field: 'companyRepresentitve',
      headerName: 'פרטי נציג',
      right: true,
    },

  ];
  const rows = [
    {
      id: 1,
      companyNum: "12345",
      companyName: "לין אחזקות בעמ",
      companyAddress: "אור עקיבא",
      companyEmail: "LinAlkobii@Gmail.Com",
      companyStartDate: "",
      companyRepresentitve: "",
    },
  ];

  return (
    <div id="mainBodySuppliers">
      <div id="headerSuppliers">
        <button className="buttonSuppliers">הוספת ספק חדש</button>
        <h1>ספקים</h1>
      </div>

      <div id="innerMainSuppliers">
        <div id="innerRight">
          <div className="headerInnerRight">
            <TextField label="Lin?" size="small" />
            <FormControl size="small">
              <InputLabel>סוג ספק</InputLabel>
              <Select label="SuppliersType" value={suppliersType}>
                <MenuItem value="">
                  <em> </em>
                </MenuItem>
                <MenuItem>ספק פעיל</MenuItem>
                <MenuItem>ספק לא פעיל</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="mainInnerRight">
            <DataGrid columns={columns} rows={rows} />
          </div>
        </div>

        <div id="innerLeft">
          <div className="headerInnerLeft">
            <label>פרטי ספק</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;