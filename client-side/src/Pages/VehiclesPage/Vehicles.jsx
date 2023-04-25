import React, { useState, useEffect, useCallback } from "react";
import DataTable from "react-data-table-component";
import { Button } from "react-bootstrap";
import VehiclesPopUp from "./VehiclesPopUp";

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
       name: "מחיקת רכב",
       selector: "delete",
       sortable: false,
       right: true,
       cell: (row) => (
         <Button onClick={() => deleteVehicle(row.itemSerialNum)}>
           מחיקת רכב
         </Button>
       ),
     },
     {
       name: "עדכון רכב",
       selector: "setting",
       sortable: true,
       right: true,
       cell: (row) => <Button onClick={() => ""}>עדכון רכב</Button>,
     },
     {
       name: "מספר רישוי",
       selector: "licensePlateNum",
       sortable: true,
       right: true,
     },
     {
       name: "סוג רכב",
       selector: "vehicleType",
       sortable: true,
       right: true,
     },
     {
       name: " בעלות",
       selector: "vehicleOwnership",
       sortable: true,
       right: true,
     },
     {
       name: "צבע",
       selector: "vehicleColor",
       sortable: true,
       right: true,
     },
     {
       name: "שנת יצור",
       selector: "manufacturingYear",
       sortable: true,
       right: true,
     },
   ];

  return (
    <div>
      <div className="headerCatalog">
        <button onClick={() => setButtonPopUp(true)} className="buttonCatalog">
          יצירת רכב חדש
        </button>
        <h1 className="h1Catalog">רכבים</h1>
      </div>
      <VehiclesPopUp
        trigger={buttonPopUp}
        setTrigger={setButtonPopUp}
        addVehiclesItem={(item) => addVehiclesItem(item, refreshData)}
      />
      <DataTable columns={columns} data={datainfo} fixedHeader></DataTable>
      <div></div>
    </div>
  );
};

export default Vehicles;
