import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TeamCss.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function TeamPopUp(props) {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");


  const setNameInput = (e) => {
    setName(e.target.value);
    console.log("Name:" + e.target.value);
  }
  
 const setSurNameInput = (e) => {
   setSurName( e.target.value);
   console.log("Last Name:" + e.target.value);
 };
  const setPositionInput = (e) => {
    setPosition( e.target.value);
    console.log("Position:" + e.target.value);
  };
   const setPhoneInput = (e) => {
     setPhone( e.target.value);
     console.log("Tell:" + e.target.value);
   };
    const setEmailInput = (e) => {
      setEmail( e.target.value);
       console.log("Email:" + e.target.value);
    };

  const saveHandler = (e) => {
    e.preventDefault();
    const newEmplInput = {
      firstName: name,
      lastName: surname,
      job: position,
      tel: phone,
      mail: email,
    };
    console.log(
      "*************************************************************************"
    );
    console.log( newEmplInput);

    resetTextHandler();
  };
  const resetTextHandler = () => {
    setName("");
    setSurName("");
    setPosition("");
    setPhone("");
    setEmail("");
  };
  const closeForm = () => {
    props.setTrigger(false);
  };

  return props.trigger ? (
    <div className="popUp">
      <div className="innerPopUp">
        <HighlightOffIcon onClick={closeForm} />
        <h1 className="h1PopUp">יצירת איש צוות חדש</h1>

        <div className="login__control ">
          <label className="ltrInput">שם פרטי</label>
          <input
            placeholder="פלוני"
            type="text"
            value={name}
            onChange={setNameInput}
          />
        </div>

        <div className="login__control password-input-wrapper">
          <label>שם משפחה</label>
          <input
            placeholder="אלמוני"
            type="text"
            value={surname}
            onChange={setSurNameInput}
          />
        </div>

        <div className="login__control password-input-wrapper">
          <label>תפקיד</label>
          <input
            placeholder="תפקיד העובד"
            type="text"
            value={position}
            onChange={setPositionInput}
          />
        </div>

        <div className="login__control password-input-wrapper">
          <label>מספר טלפון</label>
          <input
            placeholder="0525381648"
            type="text"
            value={phone}
            onChange={setPhoneInput}
          />
        </div>
        <div className="login__control password-input-wrapper">
          <label>כתובת מייל</label>
          <input
            placeholder="Example@testing.com"
            type="text"
            value={email}
            onChange={setEmailInput}
          />
        </div>

        <Button className="login_Button" onClick={saveHandler}>
          שמירה
        </Button>

        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
export default TeamPopUp;
