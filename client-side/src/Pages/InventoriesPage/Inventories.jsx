import React, { useState, useEffect, useCallback } from "react";
import DataTable from "react-data-table-component";
import { Button } from "react-bootstrap";
import InventoryPopUp from "./InventoryPopUp";






let data=[{
  setting: <button>עריכה</button>,
  itemSerialNum:"2",
  itemName: "מנהל",
  itemAmount: "בנסעדון",
  itemDescription: "עומר",
  id: "1131235",
  itemPicture:"picture"
},
{
  setting: "-",
  position: "נהגת",
  lastname: "אלקובי",
  firstname: "לין",
  id: "123456",
},
{
  setting: "-",
  position: "נהג",
  lastname: "אפשטיין",
  firstname: "דור",
  id: "345678",
}
];



const url = 'http://194.90.158.74/cgroup96/prod/api/inventoryItems/get?timestamp=' + Date.now();

const urlpost='http://194.90.158.74/cgroup96/prod/api/inventoryItems/post';
const urldelete='http://194.90.158.74/cgroup96/prod/api/inventoryItems/delete'
const username = 'cgroup96';
const password = 'your_password';

const headers = new Headers();
headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));




function addInventoryItem(item,refreshData) {
  fetch(urlpost, {
    method: 'POST',
    headers: {
      ...headers, // Spread the existing headers
      'Content-Type': 'application/json' // Add the 'Content-Type' header
    },
    body: JSON.stringify(item)
  })
    .then(res => {
      console.log('res=', res);
      console.log('res.status', res.status);
      console.log('res.ok', res.ok);
      return res.json()
    })
    .then(result => {
      console.log("add inventory item result= ", result);
      refreshData();
    })
    .catch(error => {
      console.log("err post=", error);
    });
}



function Inventories() {
  const [datainfo, setDatainfo] = useState([]);
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [dataUpdated, setDataUpdated] = useState(false);

  const refreshData = useCallback(() => setDataUpdated(!dataUpdated), [dataUpdated]);


  function deleteInventoryItem(itemId) {
    fetch(urldelete, {
      method: 'DELETE',
      headers: {
        ...headers, // Spread the existing headers
        'Content-Type': 'application/json' // Add the 'Content-Type' header
      },
      body: JSON.stringify({itemSerialNum: itemId })
    })
      .then(res => {
        console.log('item id is:',itemId);
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(result => {
        console.log("delete inventory item result= ", result);
        // Refresh data after deleting item
        refreshData();
      })
      .catch(error => {
        console.log("err delete=", error);
      });
      
  }

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: headers
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(result => {
        console.log("fetch inventoryItems= ", result);
        result.map(st => console.log(st.itemAmount));
        const updatedDatainfo = result.map(st => {
          return {
            setting: <button>עריכה</button>,
            itemSerialNum: st.itemSerialNum,
            itemName: st.itemName,
            itemAmount: st.itemAmount,
            itemDescription: st.itemDescription,
            id: st.employee_id,
            itemPicture: st.itemPicture
          };
        });
        console.log(updatedDatainfo);
        setDatainfo(updatedDatainfo);
      })
      .catch(error => {
        console.log("err post=", error);
      });
  }, [dataUpdated]); // Add empty dependency array to run effect only once

  const columns = [
    {
      name: "מחיקת פריט",
      selector: "delete",
      sortable: false,
      right: true,
      cell: (row) => <Button onClick={() => deleteInventoryItem(row.itemSerialNum)}>מחיקת פריט</Button>,
    },
    {
      name: "עדכון פריט",
      selector: "setting",
      sortable: true,
      right: true,
      cell: (row) => <Button onClick={()=>('')}>עדכון פריט</Button>,
    },
    {
      name: "תמונת פריט",
      selector: "itemPicture",
      sortable: true,
      right: true,
    },
    {
      name:"תיאור פריט",
      selector: "itemDescription",
      sortable: true,
      right: true,
    },
    {
      name: " כמות",
      selector: "itemAmount",
      sortable: true,
      right: true,
    },
    {
      name: "תז עובד רושם",
      selector: "id",
      sortable: true,
      right: true,
    },
    {
      name: "שם המוצר",
      selector: "itemName",
      sortable: true,
      right: true,
    },
    {
      name: "מספר סידורי",
      selector: "itemSerialNum",
      sortable: true,
      right: true,
    },
   
  
    
  ];

  return (
    <div>
      <div className="headerCatalog">
        <button onClick={() => setButtonPopUp(true)} className="buttonCatalog">
          הוספת פריט מלאי 
        </button>
        <h1 className="h1Catalog">
          מלאי
        </h1>
      </div>
      <InventoryPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp} addInventoryItem={(item) => addInventoryItem(item, refreshData)} />
      <DataTable columns={columns} data={datainfo} fixedHeader></DataTable>
      <div></div>
    </div>
  );
}

export default Inventories;