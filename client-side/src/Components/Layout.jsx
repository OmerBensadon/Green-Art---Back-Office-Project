import React from 'react'
import { Route, Routes } from "react-router-dom";
import NaveSlidBar from './NaveSlidBar';

const Layout = () => {
  return (
    <div>
      <NaveSlidBar />
      {/* <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<MenuComponent />} />
        <Route path="/user" element={<CCUser />} />
      </Routes> */}
    </div>
  );
}

export default Layout