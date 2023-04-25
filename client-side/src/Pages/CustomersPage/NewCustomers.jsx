import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomersCss.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";


function NewCustomers (props) {

    const closeForm = () => {
        props.setTrigger(false);
    }

    return props.trigger ? (

        <div className="costumerPopUp">
            
            <div className="costumerInnerPopUp">

                <div>
                    <label>ddd</label>
                    <HighlightOffIcon onClick={closeForm}/>
                </div>

                
                <div></div>
            </div>
        </div>

    ) : ("");
}

export default NewCustomers;