import React from "react";
import { Route, Routes } from "react-router-dom";
import NaveSlidBar from "./NaveSlidBar";
import Header from "./Header";
import MainPage from "../Pages/MainPage";
const Layout = () => {
  return (
    <div>
      <Header />
      <NaveSlidBar />
      
    </div>
  );
};

export default Layout;
