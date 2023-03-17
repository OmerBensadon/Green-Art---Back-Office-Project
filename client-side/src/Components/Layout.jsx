import React from 'react'
import { Route, Routes } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<MenuComponent />} />
        <Route path="/user" element={<CCUser />} />
      </Routes>
    </div>
  );
}

export default Layout