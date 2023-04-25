import React, {useState, useEffect, useCallback} from "react";
import "./VehiclesCss.css";
import VehiclesPopUp from "./VehiclesPopUp";
import DataTable from "react-data-table-component";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const url =
  "http://194.90.158.74/cgroup96/prod/api/vehicleList/get?timestamp=" +
  Date.now();

const urlpost = "http://194.90.158.74/cgroup96/prod/api/vehicleList/post";
const urldelete = "http://194.90.158.74/cgroup96/prod/api/vehicleList/delete";
const username = "cgroup96";
const password = "your_password";
const headers = new Headers();
headers.append("Authorization", "Basic " + btoa(username + ":" + password));

const Vehicles = () => {
  const [datainfo, setDatainfo] = useState([]);
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [dataUpdated, setDataUpdated] = useState(false);

  const refreshData = useCallback(
    () => setDataUpdated(!dataUpdated),
    [dataUpdated]
  );

  function addVehiclesItem(item, refreshData) {
    fetch(urlpost, {
      method: "POST",
      headers: {
        ...headers, // Spread the existing headers
        "Content-Type": "application/json", // Add the 'Content-Type' header
      },
      body: JSON.stringify(item),
    })
      .then((res) => {
        console.log("res=", res);
        console.log("res.status", res.status);
        console.log("res.ok", res.ok);
        return res.json();
      })
      .then((result) => {
        console.log("add inventory item result= ", result);
        refreshData();
      })
      .catch((error) => {
        console.log("err post=", error);
      });
  }
  function deleteVehicle(itemId) {
    fetch(urldelete, {
      method: "DELETE",
      headers: {
        ...headers, // Spread the existing headers
        "Content-Type": "application/json", // Add the 'Content-Type' header
      },
      body: JSON.stringify({ itemSerialNum: itemId }),
    })
      .then((res) => {
        console.log("item id is:", itemId);
        console.log("res=", res);
        console.log("res.status", res.status);
        console.log("res.ok", res.ok);
        return res.json();
      })
      .then((result) => {
        console.log("delete inventory item result= ", result);
        // Refresh data after deleting item
        refreshData();
      })
      .catch((error) => {
        console.log("err delete=", error);
      });
  }
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((res) => {
        console.log("res=", res);
        console.log("res.status", res.status);
        console.log("res.ok", res.ok);
        return res.json();
      })
      .then((result) => {
        console.log("fetch inventoryItems= ", result);
        result.map((st) => console.log(st.itemAmount));
        const updatedDatainfo = result.map((st) => {
          return {
            setting: <button >עריכה</button>,
            licensePlateNum: st.licensePlateNum,
            vehicleType: st.vehicleType,
            vehicleColor: st.vehicleColor,
            licenseType: st.licenseType,
            vehicleOwnership: st.vehicleOwnership,
            manufacturingYear: st.manufacturingYear,
            key: st.licensePlateNum,
          };
        });
        console.log(updatedDatainfo);
        setDatainfo(updatedDatainfo);
      })
      .catch((error) => {
        console.log("err post=", error);
      });
  }, [dataUpdated]);

   const columns = [
     {
       name: " ",
       selector: "action",
       sortable: false,
       right: true,
       button: true,
       width: '10%',
       cell: row => (
        <div className="iconsDataTable">
          <EditIcon onClick={() => ""}/>
          <DeleteIcon onClick={() => deleteVehicle(row.itemSerialNum)}/>
        </div>),
     },
     {
       name: "מספר רישוי",
       selector: "licensePlateNum",
       sortable: true,
       right: true,
       width: '20%',
     },
     {
       name: " סוג רכב",
       selector: "vehicleType",
       sortable: true,
       right: true,
       width: '25%',
     },
     {
       name: " בעלות",
       selector: "vehicleOwnership",
       sortable: true,
       right: true,
       width: '15%',
     },
     {
       name: "צבע",
       selector: "vehicleColor",
       sortable: true,
       right: true,
       width: '15%',
     },
     {
      name: "שנת יצור",
      selector: "manufacturingYear",
      sortable: true,
      right: true,
      width: '15%',
    },
   ];

  return (
    <div id="mainBodyVehicles">

      <div id="headerVehicles">
        <button onClick={() =>setButtonPopUp(true)} className="buttonVehicles" >
          הוספת רכב חדש
        </button>
        <h1>רכבים</h1>
      </div>


      <div id="innerMainVehicles">
        <VehiclesPopUp trigger={buttonPopUp} 
                       setTrigger={setButtonPopUp}
                       addVehiclesItem={(item) => addVehiclesItem(item, refreshData)} />
                     

        <div id="vehiclesTable">
          <DataTable columns={columns}
                     data={datainfo}
                     fixedHeader
                     className="dataTableVehicles"/>
        </div>

        <div id="vehiclesInfo">

          <div className="topInfo">
            <div className="innerheaderInfo">
              <EditIcon className="iconBC"/>
              <label>פרטי הרכב</label>
            </div>
 
           </div>
          <div className="bottumInfo">
            <div className="innerheaderInfo">
              <AddCircleIcon className="iconBC"/>
              <label>טיפולי רכב</label>              
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Vehicles;