// import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";

// const NewCalendarEvent = (props, date, onCancel, onSave) => {
//   const formatDate = (date) => {
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     return new Date(date).toLocaleDateString("he-IL", options);
//   };

//   const [title, setTitle] = useState("");
//   const [time, setTime] = useState("");
//   const [place, setPlace] = useState("");

//   const titleChangeHandler = (event) => {
//     setTitle(event.target.value);
//     console.log("Title:" + event.target.value);
//   };
//   const timeChangehandler = (event) => {
//     setTime(event.target.value);
//     console.log("Time:" + event.target.value);
//   };
//   const placeChangeHandler = (event) => {
//     setPlace(event.target.value);
//     console.log("Place:" + event.target.value);
//   };
//   const handleSave = () => {
//     onSave({ title, date, time, place });
//     console.log("New Event" + title, date, time, place);
//   };
//   const closeForm = () => {
//     props.setTrigger(false);
//   };
//   return props.trigger ? (
//     <div className="popUp">
//       <div className="innerPopUp">
//         <div className="new-event-modal">
//           <div className="new-event-form">
//             <h1 className="h1PopUp">הוספת אירוע חדש</h1>
//             {/* <p>תאריך: {formatDate(date)}</p> */}
//             <HighlightOffIcon onClick={closeForm} />
//             <form className="login__control">
//               <label htmlFor="title-input">כותרת:</label>
//               <input
//                 id="title-input"
//                 type="text"
//                 value={title}
//                 onChange={titleChangeHandler}
//                 placeholder="הכנס כותרת לאירוע"
//               />
//               <br />
//               <label htmlFor="time-input">זמן:</label>
//               <input
//                 id="time-input"
//                 type="time"
//                 value={time}
//                 onChange={timeChangehandler}
//                 placeholder="הכנס זמן לאירוע"
//               />
//               <br />
//               <label htmlFor="place-input">מקום:</label>
//               <input
//                 id="place-input"
//                 type="text"
//                 value={place}
//                 onChange={placeChangeHandler}
//                 placeholder="הכנס מיקום לאירוע"
//               />
//               <br />
//               <div className="login_Button">
//                 <Button type="button" onClick={handleSave}>
//                   שמירה
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   ) : (
//     ""
//   );
// };

// export default NewCalendarEvent;
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
    <div className="popUp">
      <div className="innerPopUp">
        <div className="new-event-modal">
          <div className="new-event-form">
            <h1 className="h1PopUp">הוספת אירוע חדש</h1>
            {/* <p>תאריך: {formatDate(date)}</p> */}
            <HighlightOffIcon onClick={closeForm} />
            <form className="login__control">
              <label htmlFor="title-input">כותרת:</label>
              <input
                id="title-input"
                type="text"
                value={title}
                onChange={titleChangeHandler}
                placeholder="הכנס כותרת לאירוע"
              />
              <br />
              <label htmlFor="time-input">זמן:</label>
              <input
                id="time-input"
                type="time"
                value={time}
                onChange={timeChangehandler}
                placeholder="הכנס זמן לאירוע"
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
              <div className="login_Button">
                <Button type="button" onClick={handleSave}>
                  שמירה
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default NewCalendarEvent;
