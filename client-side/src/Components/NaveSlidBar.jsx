import React from "react";
import MainPage from "../Pages/MainPage";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import InventoryIcon from "@mui/icons-material/Inventory";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const NaveSlidBar = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const ChangePageHandler = (page) =>{
    setCurrentPage(page)
    console.log(page + "log - page")
  }

  return (
    <Drawer variant="permanent" anchor="right">
      <img
        src="/images/logo.jpg"
        alt="Green Art Logo"
        width="150"
        height="80"
      />
      <List>
        <ListItem button onClick={ChangePageHandler}>
          <ListItemIcon>
            <CalendarMonthIcon />
          </ListItemIcon>
          <ListItemText primary="לוח אירועים" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BusinessCenterIcon />
          </ListItemIcon>
          <ListItemText primary="הצעת מחיר" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="לקוחות" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContentPasteIcon />
          </ListItemIcon>
          <ListItemText primary="ספקים" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccessibilityIcon />
          </ListItemIcon>
          <ListItemText primary="צוות" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="דוחות" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AirportShuttleIcon />
          </ListItemIcon>
          <ListItemText primary="רכבים" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ProductionQuantityLimitsIcon />
          </ListItemIcon>
          <ListItemText primary="קטלוג" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InventoryIcon />
          </ListItemIcon>
          <ListItemText primary="מלאים" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="הגדרות" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="יציאה" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default NaveSlidBar;
