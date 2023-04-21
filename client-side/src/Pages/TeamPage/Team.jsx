import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import TeamPopUp from "./TeamPopUp";
import { fetchEmployees } from "../api";
import { Button } from "react-bootstrap";

function Team() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/http://194.90.158.74/cgroup96/prod/api/employee/get"
        );
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
      name: "הגדרות",
      selector: "setting",
      sortable: true,
      right: true,
      cell: (row) => <Button onClick={()=>('')}>עריכה</Button>,
    },
    {
      name: "תפקיד",
      selector: "position",
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
      name: "שם פרטי",
      selector: "firstname",
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
      name: "Email",
      selector: "email",
      sortable: true,
      right: true,
    },
    {
      name: "טלפון",
      selector: "phone",
      sortable: true,
      right: true,
    },
  ];
  const data = [
    {
      setting: <button>עריכה</button>,
      position: "מנהל",
      lastname: "בנסעדון",
      firstname: "עומר",
      id: "234567",
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
    },
  ];
  const [buttonPopUp, setButtonPopUp] = useState(false);

  return (
    <div>
      <div className="headerCatalog">
        <button onClick={() => setButtonPopUp(true)} className="buttonCatalog">
          הוספת עובד חדש
        </button>
        <h1 className="h1Catalog">צוות עובדים</h1>
      </div>
      <div>
        <TeamPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp} />
        {/* <DataTable columns={columns} data={employees} fixedHeader /> */}
        <DataTable columns={columns} data={data} fixedHeader></DataTable>
      </div>
    </div>
  );
}

export default Team;
