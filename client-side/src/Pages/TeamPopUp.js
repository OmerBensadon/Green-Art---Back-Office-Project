import React from "react";
import Button from "react-bootstrap/Button";
import "./TeamPopUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TeamPopUp(props) {
    return props.trigger ? (
      <div className="popUp">
        <div className="innerPopUp">
          <h1 className="h1PopUp">הוספת איש צוות</h1>
          <div className="login__control password-input-wrapper">
            <label>שם </label>
            <input placeholder="פלוני" />
          </div>
          <div className="login__control password-input-wrapper">
            <label>משפחה </label>
            <input placeholder="אלמוני" />
          </div>
          <div className="login__control password-input-wrapper">
            <label>תפקיד </label>
            <input placeholder="תפקיד העובד" />
          </div>
          <div className="login__control password-input-wrapper">
            <label>טלפון </label>
            <input placeholder="0525381648" />
          </div>
          <div className="login__control password-input-wrapper">
            <label>אימייל </label>
            <input placeholder="Example@testing.com" />
          </div>

          <Button
            className="login_Button"
            onClick={() => props.setTrigger(false)}
          >
            יציאה
          </Button>

          {props.children}
        </div>
      </div>
    ) : (
      ""
    );
}
export default TeamPopUp;