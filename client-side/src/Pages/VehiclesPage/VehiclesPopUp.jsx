import React from "react";
import Button from "react-bootstrap/Button";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "bootstrap/dist/css/bootstrap.min.css";
import "./VehiclesCss.css";





function NewVehicles(props){

    const closeForm = () => {
        props.setTrigger(false);

    }

    return props.trigger ? (


        <div id="vehiclesPopUp">
            <div id="vehiclesInnerPopUp">
            
            <div className="headerInnerPopUp">
                <HighlightOffIcon onClick={closeForm} />
                <h1>הוספת רכב חדש</h1>
            </div>
            
            <div id="mainInfoPopUp">

                <div className="rightInnerPopUp">
            <div className="inputsInfo">
                <label>מספר רישוי רכב</label>
                <input/>
            </div>
            <div className="inputsInfo">
                <label>סוג רכב</label>
                <input/>
            </div>
            <div className="inputsInfo">
                <label>שנת ייצור</label>
                <input/>
            </div>
            <div className="inputsInfo">
                <label>צבע רכב</label>
                <input/>
            </div>
            <div className="inputsInfo">
                <label>סוג רישיון </label>
                <input/>
            </div>
            <div className="inputsInfo">
                <label>בעלות הרכב</label>
                <input/>
            </div>
                </div>


                <div className="leftInnerPopUp">
                    <label>העלאת מסמכים</label>
                    
                    <div className="inputsInfo">
                        <label>רישיון רכב</label>
                        <input type={"file"}/>
                    </div>

                    <div className="inputsInfo">
                        <label>ביטוח רכב</label>
                    </div>
                </div>


            </div>

            </div>
        </div>

    
    
        ) : ("");
}

export default NewVehicles;