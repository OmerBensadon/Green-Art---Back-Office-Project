import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../CompponetsCSS/LoginForm.css"

export const LoginForm = (props) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [forggotPassword, setForggotPassword] = useState(false);

  const changePassword = () => {
    setForggotPassword(!forggotPassword);
  }
  function onClickBottun() {
    alert("שם משתמש או סיסמא לא נכונים, אנא נסה שנית!");
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };
  const usernameInputHandler = (e) => {
    setUsernameInput(e.target.value);
  };
  
  const loginHandler = (e) => {
    e.preventDefault();
    const inputInfo = {
      emailInput: usernameInput,
      passwordInput: password,
    };
    console.log(inputInfo);
    props.onFormSwitch("Layout");
    resetTextHandler();
  };
  const resetTextHandler = () => {
    setPassword("");
    setUsernameInput("");
  };


  return (
    <div id="mainPageLoginForm">
      <div id="imgLoninForm"></div>
      <div className="innerLogInCover">
       <img
        src="/images/logo.jpg"
        alt="Green Art Logo"
        width="180"
        height="120"
       />
      {forggotPassword === false ? (
      <>
       <div className="login__control">
        <label>כתובת מייל</label>
        <input
          placeholder="Anonimus@gmail.com"
          type="text"
          value={usernameInput}
          onChange={usernameInputHandler}
        /></div>
        <div className="login__control password-input-wrapper">
          <label>סיסמא</label>
          <input
            placeholder="******"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={passwordInputHandler}
            />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            onClick={toggleShowPassword}
            className="password-input-icon"
            />
           </div>
          <a href="#" onClick={changePassword} >שכחתי סיסמא</a>
          <Button onClick={loginHandler} className="login_Button" variant="primary">
            כניסה
          </Button>
        </>) : (
        <>
        <label>נא למלא את הפרטים על מנת לקבל סיסמא חדשה</label>
        <div className="login__control">
        <label>כתובת מייל</label>
        <input
          placeholder="Anonimus@gmail.com"
          type="text"
          value={usernameInput}
          onChange={usernameInputHandler}
        /></div>
        <div className="login__control password-input-wrapper">
          <label>סיסמא</label>
          <input
            placeholder="******"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={passwordInputHandler}
            />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            onClick={toggleShowPassword}
            className="password-input-icon"
            />
           </div>
           <br></br>
           <Button onClick={changePassword} className="login_Button" variant="primary">
            חזרה לעמוד כניסה
          </Button>
      </>)}
      </div>
    </div>
  );
}

export default LoginForm;
