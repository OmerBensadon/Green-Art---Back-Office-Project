import React, {useState, useCallback, useEffect} from "react";
import "./SuppliersCss.css";
import { TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DataTable from "react-data-table-component";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Menu,MenuHandler,MenuList,MenuItem,Button} from "@material-tailwind/react";
import NewSuppliers from "./NewSuppliers";


const url = 'http://194.90.158.74/cgroup96/prod/api/supplier/get';

const urlPost ='http://194.90.158.74/cgroup96/prod/api/supplier/post';
const urlDelete ='http://194.90.158.74/cgroup96/prod/api/supplier/delete';
const username ='cgroup96';
const password ='your_password';

const headers = new Headers();
headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));

function addSupplier(supplierItem,refreshData) {
  fetch(urlPost, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(supplierItem)
  })
    .then(res => {
      console.log('res=', res);
      console.log('res.status', res.status);
      console.log('res.ok', res.ok);
      return res.json()
    })
    .then(result => {
      console.log("add supplier item result = ", result);
      refreshData();
    })
    .catch(error => {
      console.log("err post = ", error);
    });
}

function Suppliers(){

  const [dataInfo, setDataInfo] = useState([]);
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [dataUpdated, setDataUpdated] = useState(false);
  const refreshData = useCallback(() => setDataUpdated(!dataUpdated), [dataUpdated]);

  function deleteSuppliers(supplierID){
    fetch(urlDelete, {
      method: 'DELETE',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({businessNumber: supplierID})
    })
      .then(res => {
        console.log('supplier id is :',supplierID);
        console.log('res = ', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(result => {
        console.log("delete supplier result = ", result);
        refreshData();
      })
      .catch(error => {
        console.log("Err delete=", error);
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
        console.log("fetch supplier = ", result);
        const updatedDatainfo = result.map(st => {
          return {
            supplierNum: st.businessNumber,
            dateSupplier: st.StartWorkDate,
            addressSupplier: st.companyAddress,
            supplierEmail: st.companyEmail,
            repFirstNameSupplier: st.repName,
            repLastNameSupplier: st.repLastName,
            repEmailAddressSupplier: st.repEmailAddress,
          };
        });
        console.log(updatedDatainfo);
        setDataInfo(updatedDatainfo);
      })
      .catch(error => {
        console.log("err post=", error);
      });
  }, [dataUpdated]);



  const [suppliersType,setSuppliersType] = useState('');

  const columns =[
    {
      name: "מספר ח.פ",
      selector: "supplierNum",
      sortable: true,
      right: true,
    },
    {
      name: "תאריך",
      selector: "dateSupplier",
      sortable: true,
      right: true,
    },
    {
      name: "כתובת ספק",
      selector: "addressSupplier",
      sortable: true,
      right: true,
    },
    {
      name: "כתובת מייל",
      selector: "supplierEmail",
      sortable: true,
      right: true,
    },
    {
      name: "פרטי איש קשר",
      selector: "supplierRepresentitvePhone",
      right: true,
      cell: (row) => (
        <div>
          <div>{row.repFirstNameSupplier}</div>
          <div>{row.repLastNameSupplier}</div>
          <div>{row.repEmailAddressSupplier}</div>
        </div>
      ),
    },
    {
      name: "",
      selector: "action",
      center: true,
      width: '10%',
      cell: (row) => 
      <>
        <div>
          <Menu>
            <MenuHandler>
              <MoreVertIcon/>
            </MenuHandler>
              <MenuList >
                <MenuItem><EditIcon/></MenuItem>
                <MenuItem><DeleteIcon onClick={() => deleteSuppliers(row.businessNumber)}/></MenuItem>
            </MenuList>
          </Menu>
        </div>
      </>,
    }, 
  ];

  const reversedColumns = [...columns].reverse();

  return (
    <div id="mainBodySuppliers">

      <div id="headerSuppliers">
        <button className="buttonSuppliers" onClick={() => setButtonPopUp(true)}>הוספת ספק חדש</button>
        <h1>ספקים</h1>
      </div>

      <div id="innerMainSuppliers">

        <div id="innerRight">

          <div className="headerInnerRight">
            <TextField label="Lin?"
                      size="small"/>
            <FormControl size="small">
              <InputLabel>סוג ספק</InputLabel>
              <Select label="SuppliersType"
                      value={suppliersType}>
                        <MenuItem value=""><em> </em></MenuItem>
                        <MenuItem>ספק פעיל</MenuItem>
                        <MenuItem>ספק לא פעיל</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="mainInnerRight">

            <DataTable columns={reversedColumns}
                       data={dataInfo}
                       fixedHeader/>
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