import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import NaveSlidBar from "./Components/NaveSlidBar";
import MainPage from "./Pages/MainPage";
import Catalog from "./Pages/Catalog";
import Customers from "./Pages/Customers";
import Inventories from "./Pages/Inventories";
import Offers from "./Pages/Offers";
import Reports from "./Pages/Reports";
import Setting from "./Pages/Setting";
import Suppliers from "./Pages/Suppliers";
import Team from "./Pages/Team";
import Vehicles from "./Pages/Vehicles";
import LoginForm from "./Components/LoginForm";


const Testing = () => {
    return(
    <div className="root">
       <div id="Header"><Header/></div>
       <div id="NaveBar"><NaveSlidBar/></div>    
       <div id="MainBody">
       <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/customers" element={<Customers/>}/>
          <Route path="/suppliers" element={<Suppliers/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/vehicles" element={<Vehicles/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/inventories" element={<Inventories/>}/>
          <Route path="/setting" element={<Setting/>}/>
          <Route path="/loginform" element={<LoginForm/>}/>
        </Routes>
       </div>
    </div>
    )
}

export default Testing;