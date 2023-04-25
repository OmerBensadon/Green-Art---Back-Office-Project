import React from "react";
import ModeIcon from '@mui/icons-material/Mode';
import "./CatalogCss.css";

const Catalog = () => {
  return (
    <div id="mainBodyCatalog">

      <div id="headerCatalog">
      <button className="buttonCatalog">הוספת פריט</button>
        <h1>קטלוג</h1>
      </div>


      <div id="innerMainCatalog"></div>
    </div>
  );
};

export default Catalog;