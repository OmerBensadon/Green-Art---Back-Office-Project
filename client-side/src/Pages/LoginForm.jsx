import React, { useState } from "react";
import BackgroundImage from "../Components/BackgroundImage";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";


const LoginForm = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
    resetTextHandler();
  };

  const resetTextHandler = () => {
    setPassword("");
    setUsernameInput("");
  };

  return (
    <>
      <div className="page">
         
        <BackgroundImage />
        <div className="cover">
          <img
            src="/images/logo.jpg"
            alt="Green Art Logo"
            width="180"
            height="120"
          />
          <div className="login__controls">
            <div className="login__control">
              <label>כתובת מייל</label>
              <input
                placeholder="Anonimus@gmail.com"
                type="text"
                value={usernameInput}
                onChange={usernameInputHandler}
              />
            </div>
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
          </div>
          
           <a className="pForgot" href="#">שכחתי סיסמא</a>

          <Button onClick={loginHandler} className="login_Button" variant="primary">כניסה</Button>
          

        </div>
      </div>
    </>
  );
};

export default LoginForm;
