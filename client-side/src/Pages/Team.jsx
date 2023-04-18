import React from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import TeamPopUp from "./TeamPopUp";



function Team () {

  const data = [
    {
      setting: <button>עריכה</button>,
      position: "מנהל",
      lastname: "בנסעדון",
      firstname: "עומר",
      id: "234567"
    },
    {
      setting: "-",
      position: "נהגת",
      lastname: "אלקובי",
      firstname: "לין",
      id: "123456"
    },
    {
      setting: "-",
      position: "נהג",
      lastname: "אפשטיין",
      firstname: "דור",
      id: "345678"
    }
  ];
  const columns = [
    {
      name: "הגדרות",
      selector: 'setting',
      sortable: true,
      right: true,
    },
    {
      name: "תפקיד",
      selector: 'position',
      sortable: true,
      right: true,
    },
    {
      name: "שם משפחה",
      selector: 'lastname',
      sortable: true,
      right: true,
    },
    {
      name: "שם פרטי",
      selector: 'firstname',
      sortable: true,
      right: true,
    },
    {
      name: "תעודת זהות",
      selector: 'id',
      sortable: true,
      right: true,
    },
  ];
  const [buttonPopUp,setButtonPopUp] = useState(false);
  const [records,setRecords] = useState();

return(
  <div>
    <div className="headerCatalog">
      <button onClick={() => setButtonPopUp(true)} className="buttonCatalog">
          הוספת עובד חדש
      </button>
      <h1 className="h1Catalog">
        צוות עובדים
      </h1>
      
    </div>
    {/*Need To add the function that open the pop up window */}
    <div>
    <DataTable
        columns={columns}
        data={data}
        fixedHeader
    ></DataTable>
    </div>
  </div>
  )
}
export default Team;




