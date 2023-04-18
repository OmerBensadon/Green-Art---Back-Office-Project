import React, {useState} from "react";
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
import SettingsIcon  from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";



const NaveSlidBar = (props) => {

  return (
    <div className="NaveBarContainer">

      <div className="imgLogoContainer">
      <Link to={"/"}>
      <img
        className="imgLogoSlideBar"
        src="/images/CompanyName.png"
        alt="Green Art Logo"
      />
      </Link>
      </div>
      
      <div className="divBottunsSlideBar">
      <List>

        <div className="listItem">
        <Link to={"/"}>
          <ListItem>
          <ListItemIcon> <CalendarMonthIcon className="iconItem"/> </ListItemIcon>
          <ListItemText className="textItem" primary="לוח אירועים"/>
          </ListItem>
        </Link>
        </div>
        <div className="listItem">
        <Link to={"/Offers"}>
          <ListItem>
          <ListItemIcon> <BusinessCenterIcon className="iconItem"/> </ListItemIcon>
          <ListItemText className="textItem" primary="הצעת מחיר"/>
          </ListItem>
        </Link>
        </div>
        <div className="listItem">
        <Link to={"/Customers"}>
         <ListItem>
          <ListItemIcon> <HomeIcon className="iconItem"/> </ListItemIcon>
          <ListItemText className="textItem" primary="לקוחות" />
         </ListItem>
        </Link>
        </div>
        <div className="listItem">
        <Link to={"/Suppliers"}>
          <ListItem>
          <ListItemIcon> <ContentPasteIcon className="iconItem"/> </ListItemIcon>
          <ListItemText className="textItem" primary="ספקים" />
          </ListItem>
        </Link>
        </div>
        <div className="listItem">
        <Link to={"/Team"}>
          <ListItem>
          <ListItemIcon> <AccessibilityIcon className="iconItem"/> </ListItemIcon>
          <ListItemText className="textItem" primary="צוות"/>
          </ListItem>
        </Link>
        </div>
        <div className="listItem">
        <Link to={"/Reports"}>
          <ListItem>
          <ListItemIcon> <AssessmentIcon className="iconItem"/> </ListItemIcon>
          <ListItemText className="textItem" primary="דוחות"/>
          </ListItem>
        </Link>
        </div>
        <div className="listItem">
        <Link to={"/Vehicles"}>
          <ListItem>
          <ListItemIcon> <AirportShuttleIcon className="iconItem"/> </ListItemIcon>
          <ListItemText className="textItem" primary="רכבים"/>
          </ListItem>
        </Link>
        </div>
        <div className="listItem">
        <Link to={"/Catalog"}>
          <ListItem>
          <ListItemIcon> <ProductionQuantityLimitsIcon className="iconItem"/> </ListItemIcon>
          <ListItemText className="textItem" primary="קטלוג"/>
          </ListItem>
        </Link>
        </div>
        <div className="listItem">
        <Link to={"/Inventories"}>
          <ListItem>
          <ListItemIcon> <InventoryIcon className="iconItem"/> </ListItemIcon>
          <ListItemText className="textItem" primary="מלאים"/>
          </ListItem>
        </Link>
        </div>
        <div className="listItem">
        <Link to={"/Setting"}>
          <ListItem>
          <ListItemIcon> <SettingsIcon className="iconItem"/> </ListItemIcon>
          <ListItemText className="textItem" primary="הגדרות"/>
          </ListItem>
        </Link>
        </div>
        <div className="listItem">
          <ListItem>
          <ListItemIcon> <LogoutIcon className="iconItem"/></ListItemIcon>
          <ListItemText className="textItem" primary="יציאה"/>
          </ListItem>
        </div>
      </List>
      </div>

    </div>
  );
};

export default NaveSlidBar;
