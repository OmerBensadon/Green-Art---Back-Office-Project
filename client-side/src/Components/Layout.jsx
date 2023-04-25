import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NaveSlidBar from "./NaveSlidBar";
import Header from "./Header";
import MainPage from "../Pages/MainPage/MainPage";
import Offers from "../Pages/OfferPage/Offers";
import Customers from "../Pages/CustomersPage/Customers";
import Suppliers from "../Pages/SuppliersPage/Suppliers";
import Team from "../Pages/TeamPage/Team";
import Reports from "../Pages/ReportsPage/Reports";
import Vehicles from "../Pages/VehiclesPage/Vehicles";
import Catalog from "../Pages/CatalogPage/Catalog";
import Inventories from "../Pages/InventoriesPage/Inventories";
import Setting from "../Pages/SettingPage/Setting";
import LoginForm from "./LoginForm";
import "../CompponetsCSS/Layout.css"

export const Layout = () => {
  return (
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
  );
};
export default Layout;
