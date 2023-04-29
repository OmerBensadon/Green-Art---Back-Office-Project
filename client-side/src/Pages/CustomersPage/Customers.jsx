import React, { useState , useEffect, useCallback} from "react";
import "./CustomersCss.css";
import NewCustomers from "./NewCustomers";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import { textAlign } from "@mui/system";
import DataTable from "react-data-table-component";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Menu,MenuHandler,MenuList,MenuItem,Button} from "@material-tailwind/react";


const url = 'http://194.90.158.74/cgroup96/prod/api/customers/get';
const urlPost ='http://194.90.158.74/cgroup96/prod/api/customers/post';
const urlDelete ='http://194.90.158.74/cgroup96/prod/api/customers/delete';
const username = 'cgroup96';
const password = 'your_password';

const headers = new Headers();
headers.append('Authorization','Basic' + btoa(username + ":" + password));


function addCustomers(customer, refreshData){
  fetch(urlPost, {
    method: 'POST',
    headers:{
      ...headers,
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(customer)
  })
    .then(res => {
      console.log('res=', res);
      console.log('res.status', res.status);
      console.log('res.ok', res.ok);
      return res.json()
    })
    .then(result => {
      console.log("Add Customer result = ", result);
      refreshData();
    })
    .catch(error => {
      console.log("Err post = ", error);
    });
}

function Customers () {

  const [dataInfo, setDataInfo] = useState([]);
  const [addNewCustomers, setAddNewCustomers] = useState(false);
  const [dataUpdated, setDataUpdated] = useState(false);
  const refreshData = useCallback(() => setDataUpdated(!dataUpdated),[dataUpdated]);

  function deleteCustomer(customerId){
    fetch(urlDelete, {
      method: 'DELETE',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({clientNumber : customerId})
    })
    .then(res => {
      console.log('Customer number is: ',customerId);
      console.log('res = ', res);
      console.log('res.status', res.status);
      console.log('res.ok', res.ok);
      return res.json()
    })
    .then(result => {
      console.log("Delete customer result = ", result);
      refreshData();
    })
    .catch(error => {
      console.log("Err delete = ", error);
    });
  }

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: headers
    })
    .then(res => {
      console.log('res = ', res);
      console.log('res.status', res.status);
      console.log('res.ok', res.ok);
      return res.json()
    })
    .then(result => {
      console.log("fetch customer = ", result);
      const updatedDatainfo = result.map(st => {
        return{
          costumerNum: st.clientNumber,
          costumerName: st.clientName,
          costumerAddress: st.clientAddress,
          costumerEmail: st.clientEmail,
          costumerRepresentitveName: st.clientFirstName,
          costumerRepresentitveSurName: st.clientLastName,
          costumerRepresentitvePhone: st.clientPhoneNum,
          costumerRepresentitveEmail: st.representiveEmail,
        };
      });
      console.log(updatedDatainfo);
      setDataInfo(updatedDatainfo);
    })
    .catch(error => {
      console.log("Err post = ", error);
    });
  }, [dataUpdated]);


  const columns =[
    {
      name : "מספר ח.פ",
      selector : "costumerNum",
      sortable: true,
      right: true,
      width: '15%',
    },
    {
      name : "שם חברה",
      selector : "costumerName",
      sortable: true,
      right: true,
      width: '15%',
    },
    {
      name : "כתובת חברה",
      selector : "costumerAddress",
      sortable: true,
      right: true,
      width: '15%',
    },
    {
      name : "כתובת מייל",
      selector : "costumerEmail",
      sortable: true,
      right: true,
      width: '20%',
    },
    {
      name : "פרטי איש קשר",
      selector : "costumerRepresentitvePhone",
      right: true,
      width: '25%',
      cell: (row) => (
        <div>
          <div>{row.costumerRepresentitveName}</div>
          <div>{row.costumerRepresentitveSurName}</div>
          <div>{row.costumerRepresentitvePhone}</div>
          <div>{row.costumerRepresentitveEmail}</div>
        </div>
      ),
    },
    {
      name: "",
      selector: "action",
      center: true,
      width: '10%',
      cell: row => (
        <div>
          <Menu className="menuListRow">
            <MenuHandler>
              <MoreVertIcon/>
            </MenuHandler>
              <MenuList >
                <MenuItem><EditIcon/></MenuItem>
                <MenuItem><DeleteIcon onClick={() => deleteCustomer(row.costumerNum)}/></MenuItem>
            </MenuList>
          </Menu>
        </div>
      ),
    },
  ];

  const data = [
    {
      costumerNum: "12345",
      costumerName: "לין אחזקות",
      costumerAddress: "אור עקיבא",
      costumerEmail: "LinAlkobii@Gmail.Com",
      costumerRepresentitveName: "לין נציגה",
      costumerRepresentitveSurName: "הנציגה!",
      costumerRepresentitvePhone: "052-8993320",
      costumerRepresentitveEmail: "GreenArt@Gmail.Com",
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
        <NewCustomers trigger={addNewCustomers}
                      setTrigger={setAddNewCustomers}
                      addCustomers={(item) => addCustomers(item, refreshData)}
                      />
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
                       data={dataInfo}
                       fixedHeader/>
        
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