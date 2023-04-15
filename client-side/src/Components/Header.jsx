import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import RefreshIcon from '@mui/icons-material/Refresh';

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: "#539165" }} >
      <Toolbar>
        <Avatar alt="Avatar" src="path/to/avatar.png" />
        <RefreshIcon className="refreshIcon"/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


