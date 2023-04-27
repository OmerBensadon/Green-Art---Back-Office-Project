import React, { useState } from "react";
import "./CustomersCss.css";
import NewCustomers from "./NewCustomers";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import { textAlign } from "@mui/system";
import DataTable from "react-data-table-component";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from "@mui/icons-material";




function Customers () {
  
  const [addNewCustomers, setAddNewCustomers] = useState(false);


  const columns =[
    {
      name : "מספר ח.פ",
      selector : "costumerNum",
      sortable: true,
      right: true,
    },
    {
      name : "שם חברה",
      selector : "costumerName",
      sortable: true,
      right: true,
    },
    {
      name : "כתובת חברה",
      selector : "costumerAddress",
      sortable: true,
      right: true,
    },
    {
      name : "כתובת מייל",
      selector : "costumerEmail",
      sortable: true,
      right: true,
    },
    {
      name : "פרטי איש קשר",
      selector : "costumerRepresentitve",
      sortable: true,
      right: true,
    },
    {
      name: "",
      selector: "action",
      right: true,
      cell: row => (
        <div>
          <EditIcon onClick={() => ""}/>
          <DeleteIcon/>
        </div>
      )
    }
  ];
  const data = [
    {
      costumerNum: "12345",
      costumerName: "לין אחזקות",
      costumerAddress: "אור עקיבא",
      costumerEmail: "LinAlkobii@Gmail.Com",
      costumerRepresentitve: "",
    },
  ];

  const reversedColumns = [...columns].reverse();


  return(
    <div id="mainBodyCustomers">

      <div id="headerCustomers">
        <button onClick={() => setAddNewCustomers(true)} className="buttonCustomers">
          הוספת לקוח חדש
        </button>
        <h1>לקוחות</h1>
      </div>


      <div id="innerMainCustomers">
        <NewCustomers trigger={addNewCustomers} setTrigger={setAddNewCustomers}/>
        <div id="innerRightCusotmer">
          <div className="headerInnerRightCusotmer">
            <Input placeholder="שם לקוח"
                   startAdornment={
                    <InputAdornment position="end">
                      <SearchIcon/>
                    </InputAdornment>}
                    >
            </Input>

          </div>
          <div className="mainInnerRightCusotmer">
            <DataTable columns={reversedColumns}
                       data={data}/>
        
          </div>
        </div>

        <div id="innerLeftCusotmer">
          <div className="headerInnerLeftCusotmer">
            <label>אירועי הלקוח</label>
          </div>

        </div>

      </div>
    </div>
    );
};

export default Customers;