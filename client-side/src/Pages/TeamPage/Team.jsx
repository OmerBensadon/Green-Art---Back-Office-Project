import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import TeamPopUp from "./TeamPopUp";
import { fetchEmployees } from "../api";

function Team() {

  const [employees, setEmployees] = useState([]);

  // useEffect(() => {
  //   fetch("http://cgroup96@194.90.158.74/cgroup96/prod/api/employee/get")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setEmployees(data);
  //       console.log("my data from the server", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching employees data: ", error);
  //     });
  // }, []);
  
  useEffect(() => {
    const getEmployees = async () => {
      const data = await fetchEmployees();
      setEmployees(data);
    };
    getEmployees();
  }, []);
  const columns = [
    {
      name: "הגדרות",
      selector: "setting",
      sortable: true,
      right: true,
      cell: (row) => <button>עריכה</button>,
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
        <DataTable columns={columns} data={employees} fixedHeader />
      </div>
    </div>
  );
}

export default Team;

