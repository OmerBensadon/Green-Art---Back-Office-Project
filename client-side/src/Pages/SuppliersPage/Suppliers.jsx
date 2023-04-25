import React, {useState} from "react";
import "./SuppliersCss.css";
import { Dropdown } from 'primereact/dropdown';




const Suppliers = () => {


  return (
    <div id="mainBodySuppliers">

      <div id="headerSuppliers">
        <button className="buttonSuppliers">
          הוספת ספק חדש
        </button>
        <h1>
          ספקים
        </h1>
      </div>

    </div>
  );
};

export default Suppliers;