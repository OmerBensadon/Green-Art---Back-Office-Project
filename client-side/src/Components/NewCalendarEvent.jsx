import React, { useState } from "react";

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("he-IL", options);
};

const NewCalendarEvent = ({ date, onCancel, onSave }) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log("Title:" + event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    console.log("Time:" + event.target.value);
  };

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
    console.log("Place:" + event.target.value);
  };

  const handleSave = () => {
    onSave({ title, date, time, place });
    console.log("New Event" + title, date, time, place);
  };

  return (
    <div className="new-event-modal">
      <div className="new-event-form">
        <h3>הוספת אירוע חדש</h3>
        <p>תאריך: {formatDate(date)}</p>
        <form>
          <label htmlFor="title-input">כותרת:</label>
          <input
            id="title-input"
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="הכנס כותרת לאירוע"
          />
          <br />
          <label htmlFor="time-input">זמן:</label>
          <input
            id="time-input"
            type="time"
            value={time}
            onChange={handleTimeChange}
            placeholder="הכנס זמן לאירוע"
          />
          <br />
          <label htmlFor="place-input">מקום:</label>
          <input
            id="place-input"
            type="text"
            value={place}
            onChange={handlePlaceChange}
            placeholder="הכנס מיקום לאירוע"
          />
          <br />
          <div className="form-buttons">
            <button type="button" onClick={onCancel}>
              ביטול
            </button>
            <button type="button" onClick={handleSave}>
              שמירה
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCalendarEvent;
