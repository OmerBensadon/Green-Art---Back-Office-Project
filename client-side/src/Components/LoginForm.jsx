import React, { useState } from "react";
import BackgroundImage from "./BackgroundImage";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");


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
            width="200"
            height="100"
          ></img>
          <div className="login__controls">
            <div className="login__control">
              <label>כתובת מייל</label>
              <input
                placeholder="Anonimus@gmail.com"
                type="text"
                value={usernameInput}
                onChange={usernameInputHandler}
              ></input>
            </div>
            <div className="login__control">
              <label>סיסמא</label>
              <input
                placeholder="******"
                type= "password"
                value={password}
                onChange={passwordInputHandler}
              ></input>
            </div>
          </div>
          <div className="login_Button_right">
            <Button className="login_Button_right" variant="primary">
              שכחתי סיסמא
            </Button>
            <Button
              onClick={loginHandler}
              className="login_Button_left"
              variant="primary"
            >
              כניסה
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
