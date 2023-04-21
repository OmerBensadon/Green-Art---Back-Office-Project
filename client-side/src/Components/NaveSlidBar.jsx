import React, {useState} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
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
import { Link, useNavigate } from "react-router-dom"; 

const NaveSlidBar = (props) => {

  const handleLogout = () => {
    console.log("*************");
    window.location.href = "/";
  }; // Redirect users to the login page
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
          <Link to={"/"}>
            <div className="listItem">
              <ListItem>
                <ListItemIcon>
                  {" "}
                  <CalendarMonthIcon className="iconItem" />{" "}
                </ListItemIcon>
                <ListItemText className="textItem" primary="לוח אירועים" />
              </ListItem>
            </div>
          </Link>
          <Link to={"/Offers"}>
            <div className="listItem">
              <ListItem>
                <ListItemIcon>
                  {" "}
                  <BusinessCenterIcon className="iconItem" />{" "}
                </ListItemIcon>
                <ListItemText className="textItem" primary="הצעת מחיר" />
              </ListItem>
            </div>
          </Link>
          <Link to={"/Customers"}>
            <div className="listItem">
              <ListItem>
                <ListItemIcon>
                  {" "}
                  <HomeIcon className="iconItem" />{" "}
                </ListItemIcon>
                <ListItemText className="textItem" primary="לקוחות" />
              </ListItem>
            </div>
          </Link>
          <Link to={"/Suppliers"}>
            <div className="listItem">
              <ListItem>
                <ListItemIcon>
                  {" "}
                  <ContentPasteIcon className="iconItem" />{" "}
                </ListItemIcon>
                <ListItemText className="textItem" primary="ספקים" />
              </ListItem>
            </div>
          </Link>
          <Link to={"/Team"}>
            <div className="listItem">
              <ListItem>
                <ListItemIcon>
                  {" "}
                  <AccessibilityIcon className="iconItem" />{" "}
                </ListItemIcon>
                <ListItemText className="textItem" primary="צוות" />
              </ListItem>
            </div>
          </Link>
          <Link to={"/Reports"}>
            <div className="listItem">
              <ListItem>
                <ListItemIcon>
                  {" "}
                  <AssessmentIcon className="iconItem" />{" "}
                </ListItemIcon>
                <ListItemText className="textItem" primary="דוחות" />
              </ListItem>
            </div>
          </Link>
          <Link to={"/Vehicles"}>
            <div className="listItem">
              <ListItem>
                <ListItemIcon>
                  {" "}
                  <AirportShuttleIcon className="iconItem" />{" "}
                </ListItemIcon>
                <ListItemText className="textItem" primary="רכבים" />
              </ListItem>
            </div>
          </Link>
          <Link to={"/Catalog"}>
            <div className="listItem">
              <ListItem>
                <ListItemIcon>
                  {" "}
                  <ProductionQuantityLimitsIcon className="iconItem" />{" "}
                </ListItemIcon>
                <ListItemText className="textItem" primary="קטלוג" />
              </ListItem>
            </div>
          </Link>
          <Link to={"/Inventories"}>
            <div className="listItem">
              <ListItem>
                <ListItemIcon>
                  {" "}
                  <InventoryIcon className="iconItem" />{" "}
                </ListItemIcon>
                <ListItemText className="textItem" primary="מלאים" />
              </ListItem>
            </div>
          </Link>
          <Link to={"/Setting"}>
            <div className="listItem">
              <ListItem>
                <ListItemIcon>
                  {" "}
                  <SettingsIcon className="iconItem" />{" "}
                </ListItemIcon>
                <ListItemText className="textItem" primary="הגדרות" />
              </ListItem>
            </div>
          </Link>
          <div className="listItem">
            <ListItem onClick={handleLogout}>
              {" "}
              <ListItemIcon>
                {" "}
                <LogoutIcon className="iconItem" />
              </ListItemIcon>
              <ListItemText className="textItem" primary="יציאה" />
            </ListItem>
          </div>
        </List>
      </div>
    </div>
  );
};

export default NaveSlidBar;
