import React, { useState } from "react";
import "./CustomersCss.css";
import NewCustomers from "./NewCustomers";


function Customers () {
  
  const [addNewCustomers, setAddNewCustomers] = useState(false);


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
      </div>
    </div>
    );
};

export default Customers;