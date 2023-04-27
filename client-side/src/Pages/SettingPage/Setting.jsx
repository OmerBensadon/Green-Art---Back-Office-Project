import React, { useState } from "react";
import "./SettingCss.css";
import Avatar from "@mui/material/Avatar";
import UploadIcon from '@mui/icons-material/Upload';



const Setting = () => {

  const [isHovered, setIsHovered] = useState(false);
  const white ={background: 'white'};
  const green ={background: 'green'};
  const [color, setColor] =useState(white);


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
              <label>ישראל ישראלי</label>
              <label>חיפה, ישראל</label>
              <label>נהג</label>
            </div>
          </div>

          <div className="innerEmployeeRightBottom">

            <label>בחר/י תמונה</label>
            <UploadIcon/>
          </div>

        
        </div>

        <div id="infoEmployeeLeft">
          
        </div>

      </div>

    </div>
  );
};

export default Setting;