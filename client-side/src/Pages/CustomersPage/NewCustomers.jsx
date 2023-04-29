import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomersCss.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Input } from "@material-tailwind/react";
import { useState } from "react";



function NewCustomers ({trigger, setTrigger, addCustomers, children}) {

    const [clientNumber, setClientNumber] = useState("");
    const [clientName, setClientName] = useState("");
    const [clientAddress, setClientAddress] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientFirstName, setClientFirstName] = useState("");
    const [clientLastName, setClientLastName] = useState("");
    const [clientPhoneNum, setClientPhoneNum] = useState("");
    const [representiveEmail, setRepresentiveEmail] = useState("");

    const setClientNumberInput = (e) => {
        setClientNumber(e.target.value);
        console.log("ClientNum: " + e.target.value);
    };
    const setClientNameInput = (e) => {
        setClientName(e.target.value);
        console.log("ClientName: " + e.target.value);
    };
    const setClientAddressInput = (e) => {
        setClientAddress(e.target.value);
        console.log("Adress:" + e.target.value);
    };
    const setClientEmailInput = (e) => {
        setClientEmail(e.target.value);
        console.log("Email:" + e.target.value);
    };
    const setClientFirstNameInput = (e) => {
        setClientFirstName(e.target.value);
        console.log("FirstName:" + e.target.value);
    };
    const setClientLastNameInput = (e) => {
        setClientLastName(e.target.value);
        console.log("LastName:" + e.target.value);
    };
    const setClientPhoneNumInput = (e) => {
        setClientPhoneNum(e.target.value);
        console.log("PhoneNumber:" + e.target.value);
    };
    const setRepresentiveEmailInput = (e) => {
        setRepresentiveEmail(e.target.value);
        console.log("RepresentiveEmail:" + e.target.value);
    };

    const saveHandler = (e) => {
        e.preventDefault();
        const newCustomerInput = {
            clientNumber: clientNumber,
            clientName: clientName,
            clientAddress: clientAddress,
            clientEmail: clientEmail,
            clientFirstName: clientFirstName,
            clientLastName: clientLastName,
            clientPhoneNum: clientPhoneNum,
            representiveEmail: representiveEmail,
        };
        console.log(
            "*************************************************************************"
        );
        console.log(newCustomerInput);
        addCustomers(newCustomerInput);
        resetTextHandler();
        setTrigger(false);
    };

    const resetTextHandler = () => {
        clientNumber("");
        clientName("");
        clientAddress("");
        clientEmail("");
        clientFirstName("");
        clientLastName("");
        clientPhoneNum("");
        representiveEmail("");
    };

    const closeForm = () => {
        setTrigger(false);
    }

    return trigger ? (

        <div className="costumerPopUp">
            
            <div className="costumerInnerPopUp">

                <div className="innerPopUP1">
                <HighlightOffIcon onClick={closeForm}/>
                </div>

                <div className="innerPopUP2">
                    <h1>הוספת לקוח חדש</h1>
                </div>

                <div className="innerPopUP3">
                        <input placeholder="מספר חברה"
                               type="text"
                               value={clientNumber}
                               onChange={setClientNumberInput}/>

                        <input placeholder="שם חברה"
                               type="text"
                               value={clientName}
                               onChange={setClientNameInput}/>

                        <input placeholder="כתובת חברה"
                               type="text"
                               value={clientAddress}
                               onChange={setClientAddressInput}
                               />
                        <input placeholder="כתובת דואל חברה"
                               type="text"
                               value={clientEmail}
                               onChange={setClientEmailInput}/>

                    </div>
                    <div className="innerPopUP4">

                    <input placeholder="שם פרטי"
                               type="text"
                               value={clientFirstName}
                               onChange={setClientFirstNameInput}/>

                        <input placeholder="שם משפחה"
                               type="text"
                               value={clientLastName}
                               onChange={setClientLastNameInput}/>

                        <input placeholder="מספר טלפון"
                               type="text"
                               value={clientPhoneNum}
                               onChange={setClientPhoneNumInput}/>

                        <input placeholder="כתובת דואל נציג"
                               type="text"
                               value={representiveEmail}
                               onChange={setRepresentiveEmailInput}/>
                               
                    </div>
                <div className="innerPopUP5">
                    <Button onClick={saveHandler}>שמירה</Button>
                </div>
            </div>
        </div>

    ) : ("");
}

export default NewCustomers;