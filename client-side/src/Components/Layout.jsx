import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NaveSlidBar from "./NaveSlidBar";
import Header from "./Header";
import MainPage from "../Pages/MainPage";
import Offers from "../Pages/Offers";
import Customers from "../Pages/Customers";
import Suppliers from "../Pages/Suppliers";
import Team from "../Pages/Team";
import Reports from "../Pages/Reports";
import Vehicles from "../Pages/Vehicles";
import Catalog from "../Pages/Catalog";
import Inventories from "../Pages/Inventories";
import Setting from "../Pages/Setting";
import LoginForm from "../Pages/LoginForm";
import { Login } from "@mui/icons-material";
import App from "../App";


const Layout = () => {
  return (





    <div className="webContainer">
      <div className=""><NaveSlidBar/></div>,
      <div className="header"><Header/></div>,
      <div className="mainComponent">
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
          <Route path="/app" element={<App/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
