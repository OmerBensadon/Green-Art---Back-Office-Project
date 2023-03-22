import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: "#539165" }} className="header">
      <Toolbar>
        <Avatar alt="Avatar" src="path/to/avatar.png" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;


