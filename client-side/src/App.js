import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./Components/LoginForm";
import Layout from "./Components/Layout";
import NaveSlidBar from "./Components/NaveSlidBar";
import TeamPopUp from "./Pages/TeamPopUp";
import Testing from "./Testing";



function App(){
  
  {/*return(
   <div className="App">
    <main>
      <h1>React Pop Up</h1>
      <br/>
      <button>Open PopUp</button> 
      <TeamPopUp trigger={true}>
        <h3>My PopUp</h3>
      </TeamPopUp>
    </main>
   </div>
  );*/}
  {/*const [ currentForm, setCurrentForm] = useState('loginform');
  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <div>
      {currentForm === "loginform" ? <LoginForm onFormSwitch={toggleForm}/> : <Layout/>}
  </div>
  );*/}

  return(
  <Testing/>
  )
}
export default App;
