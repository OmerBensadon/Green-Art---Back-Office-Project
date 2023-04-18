import React from "react";
import {Link} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import RefreshIcon from "@mui/icons-material/Refresh";

const Header = () => {
  const reloadPage = () => {
    window.location.reload();
  }
  return (
    <div className="headerContainer">
        <Link to="/Setting">
        <Avatar src="/images/PersonImg.jpg" alt="User" className="avatarIcon"/>
        </Link>
        <RefreshIcon className="refreshIcon" onClick={reloadPage}/>
    </div>
  );
};

export default Header;


