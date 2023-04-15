import React from "react";
import ModeIcon from '@mui/icons-material/Mode';

const Vehicles = () => {
  return (
    <div>

      <div className="headerCatalog">
      <h1 className="h1Catalog">רכבים</h1>
      <button className="buttonCatalog"> הוספת רכב חדש </button>
      </div>
      
      <div>

        <div className="catalogMenu">
          <input className="searchCatalog" type="text" placeholder="קטגוריה" ></input>
          <div className="demoInfo">Information</div>
        </div>

        <div id="catalogMenu2" className="catalogMenu">
          <input className="searchCatalog" type="text" placeholder=" מספר רכב / #קוד רכב" ></input>
          <div className="demoInfo">Information</div>
        </div>
        
        <div id="catalogMenu3" className="catalogMenu">
          <div className="topDiv3"></div>

          <div>
            {/*<div className="inner1Vehi">היי</div>

  <div className="inner2Vehi">היי2</div>*/}
          </div>


          <div></div>
          
          </div>
        </div>


      </div>
  );
};

export default Vehicles;