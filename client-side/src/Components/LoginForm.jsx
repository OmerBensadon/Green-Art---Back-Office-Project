import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../CompponetsCSS/LoginForm.css"


const username1 = 'cgroup96';
const password1= 'your_password';
const urllogin='http://194.90.158.74/cgroup96/prod/api/employee/login';
const headers = new Headers();
headers.append('Authorization', 'Basic ' + btoa(username1 + ':' + password1));


export const LoginForm = (props) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [forggotPassword, setForggotPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [email, setEmail] = useState("");
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
      username: usernameInput,
      password: password
    };
    console.log(inputInfo);

    console.log('Before fetch call');
    fetch(urllogin,{
      method: 'POST',
      headers: {
        ...headers, // Spread the existing headers
        'Content-Type': 'application/json' // Add the 'Content-Type' header
      },
      body: JSON.stringify(inputInfo)
    })
    .then((response) => {
      if (response.ok) {
        console.log('Fetch response:', response);
        return response.json();
        
      } else {
        setErrorMessage("!שם משתמש או סיסמא לא נכונים, אנא נסה שנית");
         setErrorMessageVisible(true);
         setTimeout(() => {
         setErrorMessage("");
         setErrorMessageVisible(false);
         }, 3000); 
        throw new Error('Network response was not ok');
        
      }
    })
    .then((data) => {
      console.log('Data:', data);
      if (data==='User Authenticated Successfully') {
        // authentication succeeded, navigate to next page
        console.log("Authentication succeeded, switching to Layout");
        props.onFormSwitch("Layout");
        
        resetTextHandler();
      } else {
        // authentication failed, display error message
        
      }
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
  };

  const resetTextHandler = () => {
    setPassword("");
    setUsernameInput("");
  };

  const resetPasswordHandler = () => {
    const resetInfo = {
      username: usernameInput,
      EmployeeEmail: email,
    };

    const urlChngPW ="http://194.90.158.74/cgroup96/prod/api/employee/resetpw";


    fetch(urlChngPW, {
      method: "POST",
      headers: {
        ...headers, // Spread the existing headers
        "Content-Type": "application/json", // Add the 'Content-Type' header
      },
      body: JSON.stringify(resetInfo),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log("Data:", data);
        setSuccessMessage(`${data}`);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        alert("Error resetting password");
      });
  };

  const closeSuccessPopup = () => {
    setSuccessMessage("");
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
        <label>תעודת זהות</label>
        <input
          placeholder="333222111"
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
          <Button onClick={loginHandler}
                  className="login_Button"
                  variant="primary"
                  type="button">
            כניסה
          </Button>
        </>) : (
        <>
        <label>נא למלא את הפרטים על מנת לקבל סיסמא חדשה</label>
        <div className="login__control">
        <label>תעודת זהות</label>
        <input
          placeholder="333222111"
          type="text"
          value={usernameInput}
          onChange={usernameInputHandler}
        /></div>
        <div className="login__control password-input-wrapper">
        <label>כתובת אי-מייל</label>
        <input
           placeholder="***@****.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            onClick={toggleShowPassword}
            className="password-input-icon"
            />
           </div>
           <br></br>
           <Button
             onClick={resetPasswordHandler}
             className="resetPassword_Button"
               variant="primary"
            type="button"
            >
                   שליחה
           </Button>
          
           <Button onClick={changePassword}
                   className="login_Button" 
                   variant="primary">
            חזרה לעמוד כניסה
          </Button>
      </>)}
      </div>
      {errorMessage !== "" && (
        <div className="popup">
          <div className="message">{errorMessage}</div>
        </div>)}
        <br></br>
       
        {successMessage !== "" && (
         <div style={{ textAlign: "center" }} className="success-popup">
          <div className="success-popup-content">
         <div className="success-message">{successMessage}
         <br></br>
         <div className="success-message">אנא רשום סיסמתך בצד לפני יציאה מהחלונית</div>
         </div>
         <button style={{direction:'rtl'}} className="close-popup" onClick={closeSuccessPopup}>
                 לחצן יציאה
             </button>
          </div>
         </div>
        )}




    </div>
  );
}

export default LoginForm;
