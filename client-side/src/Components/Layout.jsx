import React, {useState} from "react";
import { BrowserRouter, Routes, Route, Link, Router, Switch } from "react-router-dom";
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
import App from "../App";
import LoginForm from "./LoginForm";

export const Layout = () => {  
  return (
    <div className="" >
      <div><Header/></div>
      <div><NaveSlidBar/></div>
      <div className="">
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
export default Layout;
