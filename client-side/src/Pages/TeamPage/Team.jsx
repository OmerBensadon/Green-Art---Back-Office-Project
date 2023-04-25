import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import TeamPopUp from "./TeamPopUp";
import { fetchEmployees } from "../api";
import { Button } from "react-bootstrap";
import { Dropdown } from 'primereact/dropdown';
import "./TeamCss.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';



function Team() {

  const [employees, setEmployees] = useState([]);
  const [buttonPopUp, setButtonPopUp] = useState(false); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://194.90.158.74/cgroup96/prod/api/employee/get', {
          headers: {
            'Authorization': 'Basic ' + btoa('username:password')
          }
          })
        const data = await response.json();
        setEmployees(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching employees data: ", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      name : "תמונה",
      selector : "employeeImg",
      sortable: true,
      right: true,
    },
    {
      name: "תעודת זהות",
      selector: "id",
      sortable: true,
      right: true,  
    },
    {
      name: "שם פרטי",
      selector: "firstname",
      sortable: true,
      right: true,
    },
    {
      name: "שם משפחה",
      selector: "lastname",
      sortable: true,
      right: true,
    },
    {
      name: "טלפון",
      selector: "phone",
      sortable: true,
      right: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      right: true,
    },
    {
      name: "תפקיד",
      selector: "position",
      sortable: true,
      right: true,
    },
    {
      name: "",
      selector: "setting",
      type: "actions",     
    },
  ];

  const data = [
    {
      position: "מנהל",
      lastname: "בנסעדון",
      firstname: "עומר",
      id: "234567",
    },
    {
      position: "נהגת",
      lastname: "אלקובי",
      firstname: "לין",
      id: "123456",
    },
    {
      position: "נהג",
      lastname: "אפשטיין",
      firstname: "דור",
      id: "345678",
    },
  ];

  function filterDataTable(event) {
    const newData = data.filter(row => {
      return
      (row.firstname.toLowerCase().includes(event.target.value.toLowerCase()));
    })
    setFilterData(newData)
  }

  const [filterData,setFilterData] = useState(data);
  const reversedColumns = [...columns].reverse();
  const [selectJobType,setSelectJobType] = useState(null);

  const jobType = [
      {name:"עובד חברה", code:'A'},
      {name:"עובד כוח אדם", code:'B'}
  ];

  return (
    <div id="mainBodyTeam">
      
      <div id="headerTeam">
        <button onClick={() => setButtonPopUp(true)} className="buttonTeam">
          הוספת עובד חדש
        </button>
        <h1>צוות עובדים</h1>
      </div>

      <div id="innerMainTeam">
        <TeamPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp} />

        <div className="rightJobInfo">
          <div className="headerInnerInfo">
            <label>תפקידים</label>
          </div>
          <div className="mainRightInfo">
            <List>

              <ListItem>
                <ListItemButton>
                 <label className="labelList">כל התפקידים</label>
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton>
                  <label className="labelList">תפקיד 1</label>
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton>
                  <label className="labelList">תפקיד 2</label>
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton>
                  <label className="labelList">תפקיד 3</label>
                </ListItemButton>
              </ListItem>
              
            </List>
          </div>
        </div>

        <div className="leftJobInfo">
        
          <div className="headerInnerInfo">
            <input type={"text"} onChange={filterDataTable}/>
            <TextField className="searchInput" label="שם עובד"/>

            <Select
              autoWidth
              label="עובד">
              <MenuItem value="עובד">
              </MenuItem>
              <MenuItem value={10}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
            


            
          </div>

          <div className="mainLeftInfo">
          <DataTable 
            columns={reversedColumns} 
            data={data} 
            fixedHeader 
            className="dataTableTeam"/>


          </div>
          <div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;
