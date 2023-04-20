import React from "react";
import Button from "react-bootstrap/Button";
import "./TeamPopUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function TeamPopUp(props) {
    return props.trigger ? (

      <div className="popUp">
        <div className="innerPopUp">
          <HighlightOffIcon/>
          <h1 className="h1PopUp">יצירת איש צוות חדש</h1>


          <div className="login__control ">
            <label className="ltrInput">שם פרטי</label>
            <input placeholder="פלוני" />
          </div>

          <div className="login__control password-input-wrapper">
            <label>שם משפחה</label>
            <input placeholder="אלמוני" />
          </div>

          <div className="login__control password-input-wrapper">
            <label>תפקיד</label>
            <input placeholder="תפקיד העובד" />
          </div>

          <div className="login__control password-input-wrapper">
            <label>מספר טלפון</label>
            <input placeholder="0525381648" />
          </div>
          <div className="login__control password-input-wrapper">
            <label>כתובת מייל</label>
            <input placeholder="Example@testing.com" />
          </div>




          <Button className="login_Button" onClick={() => props.setTrigger(false)}>שמירה</Button>

          {props.children}
        </div>
      </div>
    ) : (
      ""
    );
}
export default TeamPopUp;