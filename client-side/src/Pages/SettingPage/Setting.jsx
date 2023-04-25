import React, { useState } from "react";
import "./SettingCss.css";
import Avatar from "@mui/material/Avatar";
import UploadIcon from '@mui/icons-material/Upload';



const Setting = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const innerEmployeeRightBottom ={
    backgroundColor: isHovered ? 'pink' : '#539165',
    width: '100%',
    height: '20%',
    
  };

  return (
    <div id="mainBodySetting">

      <div id="headerSetting">
        <h1>פרטים אישיים</h1>
      </div>

      <div id="innerMainSetting">

        <div id="infoEmployeeRight">
          <div className="innerEmployeeRightTop">
            <div className="imgSettingContainer">
              <img src="/images/PersonImg.jpg" className="imgSetting" alt="ProfileImg"/>
            </div>

            <div className="textInfoRight">
              <h4>ישראל ישראלי</h4>
              <label>חיפה, ישראל</label>
              <label>נהג</label>
            </div>
          </div>

          <div className="innerEmployeeRightBottom"
               onMouseOver={handleMouseOver}
               onMouseOut={handleMouseOut}>
            <label>בחר/י תמונה</label>
            <UploadIcon/>
          </div>

        
        </div>

        <div id="infoEmployeeLeft">
          dddd
        </div>

      </div>

    </div>
  );
};

export default Setting;