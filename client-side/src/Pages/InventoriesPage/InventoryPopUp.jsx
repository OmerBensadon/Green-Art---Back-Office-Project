import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";


function InventoryPopUp({ trigger, setTrigger, addInventoryItem, children }) {

  const [itemSerialNum, setSerialNum] = useState("");
  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState("");
  const [itemDescription, setitemDescription] = useState("");
  const [employee_id, setemployee_id] = useState("");

  const setSerialNumInput = (e) => {
    setSerialNum(e.target.value);
    console.log("SerialNum:" + e.target.value);
    }
  
  const setItemNameInput = (e) => {
        setItemName( e.target.value);
        console.log("ItemName:" + e.target.value);
    };

  const setAmountInput = (e) => {
        setAmount( e.target.value);
        console.log("Amount:" + e.target.value);
    };

  const setitemDescriptionInput = (e) => {
        setitemDescription( e.target.value);
        console.log("itemDescription:" + e.target.value);
    };

  const setemployee_idInput = (e) => {
        setemployee_id( e.target.value);
        console.log("employee_id:" + e.target.value);
    };

  const saveHandler = (e) => {
    e.preventDefault();
        const newItemInput = {
        itemSerialNum: itemSerialNum,
        itemName:itemName,
        itemDescription: itemDescription,
        itemAmount:amount,
        employee_id:employee_id
    };
    console.log(
      "*************************************************************************"
    );
    console.log(newItemInput);
    addInventoryItem(newItemInput);
    resetTextHandler();
    setTrigger(false);
  };

  const resetTextHandler = () => {
    setSerialNum("");
    setItemName("");
    setAmount("");
    setitemDescription("");
    setemployee_id("");
  };
  
  const closeForm = () => {
    setTrigger(false);
  };

  return trigger ? (
    <div className="popUp">
      <div className="innerPopUp">
        <HighlightOffIcon onClick={closeForm} />
        <h1 className="h1PopUp">יצירת פריט מלאי חדש</h1>

        <div className="login__control ">
          <label className="ltrInput">מספר סידורי</label>
          <input
            placeholder="מספר פריט"
            type="text"
            value={itemSerialNum}
            onChange={setSerialNumInput}
          />
        </div>

        <div className="login__control password-input-wrapper">
          <label>שם המוצר</label>
          <input
            placeholder="רקפת סגלגלה"
            type="text"
            value={itemName}
            onChange={setItemNameInput}
          />
        </div>

        <div className="login__control password-input-wrapper">
          <label>כמות</label>
          <input
            placeholder="30"
            type="text"
            value={amount}
            onChange={setAmountInput}
          />
        </div>

        <div className="login__control password-input-wrapper">
          <label>תיאור המוצר</label>
          <input
            placeholder="איזה יופי וואו מהמם"
            type="text"
            value={itemDescription}
            onChange={setitemDescriptionInput}
          />
        </div>
        <div className="login__control password-input-wrapper">
          <label>תז עובד רושם</label>
          <input
            placeholder="112233445"
            type="text"
            value={employee_id}
            onChange={setemployee_idInput}
          />
        </div>

        <Button className="login_Button" onClick={saveHandler}>
        שמירת פריט מלאי
        </Button>

        {children}
      </div>
    </div>
  ) : (
    ""
  );
}
export default InventoryPopUp;
