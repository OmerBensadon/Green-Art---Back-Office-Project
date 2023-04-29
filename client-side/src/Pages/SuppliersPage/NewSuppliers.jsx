import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";


function NewSuppliers({ trigger, setTrigger, addSupplier, children}){

    const [businessNumber, setBusinessNumber] = useState("");
    const [startWorkDate, setStartWorkDate] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [companyEmail, setCompanyEmail] = useState("");
    const [repName, setRepName] = useState("");
    const [repLastName, setRepLastName] = useState("");
    const [repEmailAddress, setRepEmailAddress] = useState("");

    const setBusinessNumberInput = (e) => {
        setBusinessNumber(e.target.value);
        console.log("SupplierNum: " + e.target.value);
    };
    const setStartWorkDateInput = (e) => {
        setStartWorkDate(e.target.value);
        console.log("SupplierDate: " + e.target.value);
    };
    const setCompanyAddressInput = (e) => {
        setCompanyAddress(e.target.value);
        console.log("SupplierAddress: " + e.target.value);
    };
    const setCompanyEmailInput = (e) => {
        setCompanyEmail(e.target.value);
        console.log("SupplierEmail: " + e.target.value);
    };
    const setRepNameInput = (e) => {
        setRepName(e.target.value);
        console.log("SupplierRepName: " + e.target.value);
    };
    const setRepLastNameInput = (e) => {
        setRepLastName(e.target.value);
        console.log("SupplierRepLastName: " + e.target.value);
    };
    const setRepEmailAddressInput = (e) => {
        setRepEmailAddress(e.target.value);
        console.log("SupplierRepEmail: " + e.target.value);
    };

    const saveHandler = (e) => {
        e.preventDefault();
        const newSupplierInput = {
            businessNumber: businessNumber,
            startWorkDate: startWorkDate,
            companyAddress: companyAddress,
            companyEmail: companyEmail,
            repName: repName,
            repLastName: repLastName,
            repEmailAddress: repEmailAddress,
        };
        console.log(
            "*************************************************************************"
        );
        console.log(newSupplierInput);
        addSupplier(newSupplierInput);
        resetTextHandler();
        setTrigger(false);
    };

    const resetTextHandler = () => {
        businessNumber("");
        startWorkDate("");
        companyAddress("");
        companyEmail("");
        repName("");
        repLastName("");
        repEmailAddress("");
    };

    const closeForm = () => {
        setTrigger(false);
    } 

    return trigger ? (
        <div>
            
        </div>
    ) : ("");

}

export default NewSuppliers;