
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("he-IL", options);
};

const NewCalendarEvent = ({ trigger, setTrigger, date, onCancel, onSave }) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");

  const [page1, setPage1] = useState(true);
  const [Page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);

  

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    console.log("Title:" + event.target.value);
  };
  const timeChangehandler = (event) => {
    setTime(event.target.value);
    console.log("Time:" + event.target.value);
  };
  const placeChangeHandler = (event) => {
    setPlace(event.target.value);
    console.log("Place:" + event.target.value);
  };
  const handleSave = () => {
    onSave({ title, date, time, place });
    console.log("New Event" + title, date, time, place);
  };
  const closeForm = () => {
    setTrigger(false);
  };
  return trigger ? (

    <div className="popUpEvents">

      <div className="innerPopUpEvents">

          <div className="innerEvents1">
          <HighlightOffIcon onClick={closeForm} />
          </div>

          <div className="innerEvents2">
            <h1 className="h1PopUp">הוספת אירוע חדש</h1>
          </div>
            
            <div className="innerEvents3">

              <label htmlFor="title-input">שם אירוע</label>
              <input
                id="title-input"
                type="text"
                value={title}
                onChange={titleChangeHandler}
                placeholder="שם אירוע"
              />
              <br />
              <label htmlFor="time-input">תאריך ושעת תחילת אירוע</label>
              <input
                id="time-input"
                type="time"
                value={time}
                onChange={timeChangehandler}
                placeholder="הכנס זמן תחילת אירוע"
              />
              <br />
              <label htmlFor="time-input">תאריך ושעת סיום אירוע</label>
              <input
                id="time-input"
                type="time"
                value={time}
                onChange={""}
                placeholder="הכנס זמן סיום אירוע"
              />
              <br />
              <label htmlFor="place-input">מקום:</label>
              <input
                id="place-input"
                type="text"
                value={place}
                onChange={placeChangeHandler}
                placeholder="הכנס מיקום לאירוע"
              />
              <br />
              <label htmlFor="place-input">שם לקוח</label>
              <input
                id="place-input"
                type="select"
                value={place}
                onChange={""}
                placeholder="הכנס מיקום לאירוע"
              />
              </div>

              <div className="innerEvents4">
                <Button type="button" onClick={handleSave}>שמירה</Button>
              </div>

        
          </div>
        </div>
  
  ) : (
    ""
  );
};

export default NewCalendarEvent;
