import React from "react";
import MainPage from "../Pages/MainPage";
import Offers from "../Pages/Offers";
import Customers from "../Pages/Customers";
import Report from "../Pages/Reports";
import Suppliers from "../Pages/Suppliers";
import Team from "../Pages/Team";
import Vehicles from "../Pages/Vehicles";
import Catalog from "../Pages/Catalog";
import Inventories from "../Pages/Inventories";
import Setting from "../Pages/Setting";
import Vehicles from "../Pages/Vehicles";

const SwitchPage = () => {
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <MainPage />;
      case "offer":
        return <Offers />;
      case "customers":
        return <Customers />;
      case "suppliers":
        return <Suppliers />;
      case "team":
        return <Team />;
      case "report":
        return <Report />;
      case "vehicles":
        return <Vehicles />;
      case "catalog":
        return <Catalog />;
      case "inventories":
        return <Inventories />;
      case "setting":
        return <Setting />;
      default:
        return <MainPage />;
    }
  };
  return <div>SwitchPage</div>;
};

export default SwitchPagef;
