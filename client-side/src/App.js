import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./Components/LoginForm";
import Layout from "./Components/Layout";
import NaveSlidBar from "./Components/NaveSlidBar";
import TeamPopUp from "./Pages/TeamPopUp";
import Testing from "./Testing";



function App(){
  
  const [ currentForm, setCurrentForm] = useState('loginform');
  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <div>
      {currentForm === "loginform" ? (
        <LoginForm onFormSwitch={toggleForm} />
      ) : (
        <Layout />
      )}
    </div>
  );


}
export default App;
