import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import NewCalendarEvent from "../Components/NewCalendarEvent";

const MainPage = () => {
  const hebrewCalendar = {
    code: "he",
    week: {
      dow: 0, // Sunday is the first day of the week
      doy: 1, // The week that contains Jan 1st is the first week of the year
    },
    buttonText: {
      prev: "הקודם",
      next: "הבא",
      today: "היום",
      month: "חודש",
      week: "שבוע",
      day: "יום",
      list: "רשימה",
    },
    weekText: "שבוע",
    allDayText: "כל היום",
    moreLinkText: "עוד",
    noEventsText: "אין אירועים להצגה",
    eventLimitText: "עוד",
    dayPopoverFormat: { weekday: "long", month: "numeric", day: "numeric" },
    dayHeaderFormat: { weekday: "narrow" },
    slotLabelFormat: { hour: "numeric", minute: "2-digit", hour12: false },
    columnHeaderFormat: { weekday: "long", month: "numeric", day: "numeric" },
    eventTimeFormat: { hour: "numeric", minute: "2-digit", hour12: false },

    eventRender: (info) => {
      info.el.querySelector(".fc-event-time").textContent =
        info.event.start.toLocaleTimeString("he-IL");
      info.el.querySelector(".fc-title").textContent = info.event.title;
    },
  };

  const [events, setEvents] = useState([
    { title: "event 1", date: "2023-04-18" },
    { title: "event 2", date: "2023-04-19" },
  ]);

  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (selectInfo) => {
    setSelectedDate(selectInfo.startStr);
    setIsAddingEvent(true);
  };

  const handleCancel = () => {
    setIsAddingEvent(false);
  };

  const handleSave = ({ title, date }) => {
    setEvents([...events, { title, date }]);
    setIsAddingEvent(false);
  };
  return (
    <div>
      <div className="headerCatalog">
        <button className="buttonCatalog">הוספת אירוע</button>
        <h1 className="h1Catalog">לוח אירועים</h1>
      </div>

      <div className="innerMainBody">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          locale={hebrewCalendar}
          events={events}
          selectable={true}
          select={handleDateSelect}
        />
        {isAddingEvent && (
          <NewCalendarEvent
            date={selectedDate}
            onCancel={handleCancel}
            onSave={handleSave}
          />
        )}
      </div>
    </div>
  );
};

export default MainPage;
