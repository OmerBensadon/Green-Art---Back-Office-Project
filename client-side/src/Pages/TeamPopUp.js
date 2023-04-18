import React from "react";
import "./TeamPopUp.css";

function TeamPopUp(props) {
    return(props.trigger) ? (

        <div className="popUp">
            <div className="innerPopUp">

                <h1 className="h1PopUp">הוספת איש צוות</h1>


                <button className="closeBtn" onClick={() => props.setTrigger(false)}>
                  יציאה
                </button>

                {props.children}
            </div>
        </div>
    ) : "";
}
export default TeamPopUp;