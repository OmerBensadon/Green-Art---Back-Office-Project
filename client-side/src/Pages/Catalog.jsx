import React from "react";
import ModeIcon from '@mui/icons-material/Mode';

const Catalog = () => {
  return (
    <div>
      <div className="headerCatalog">
        <h1 className="h1Catalog">קטלוג מוצרים</h1>
        <button className="buttonCatalog"> הוספת קטגוריה </button>
        <button id="bottun2" className="buttonCatalog"> הוספת פריט </button>
      </div>

      <div>
        <div className="catalogMenu">
          <input className="searchCatalog" type="text" placeholder="קטגוריה" ></input>
          <div className="demoInfo">Information</div>
        </div>

        <div id="catalogMenu2" className="catalogMenu">
          <input className="searchCatalog" type="text" placeholder="פריט / #קוד" ></input>
          <div className="demoInfo">Information</div>
        </div>
        
        <div id="catalogMenu3" className="catalogMenu">
          <div className="topDiv3">
              <ModeIcon className="btnDiv3"/>
          </div>
          <div className="demoInfo">Information</div>
        </div>


      </div>
    </div>
  );
};

export default Catalog;