import React, { useState, useEffect, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import NewCalendarEvent from "./NewCalendarEvent";
import EventList from "./EventList";
import "./MainPageCss.css";
import {Menu,MenuHandler,MenuList,MenuItem} from "@material-tailwind/react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DataTable from "react-data-table-component";



const MainPage = () => {
  const urlGetEvents = "http://194.90.158.74/cgroup96/prod/api/GreenEvents/get";
  const urlPostEvent = "http://your-api-url.com/api/events/post";
  const urlDeleteEvent = "http://your-api-url.com/api/events/delete";
  const [eventsUpdated, setEventsUpdated] = useState(false);
  const username = "your_username";
  const password = "your_password";
  const headers = new Headers();
  headers.append("Authorization", "Basic " + btoa(username + ":" + password));

  const [dataEventInfo, setDataEventInfo] = useState([]);
  const [dataUpdated, setDataUpdated] = useState(false);
  const refreshData = useCallback(() => setDataUpdated(!dataUpdated),[dataUpdated]);

  const fetchEvents = () => {
    fetch(urlGetEvents, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("fetched events= ", result);
        const transformedEvents = result.map((event) => ({
          id: event.eventSerialNum,
          title: event.event_name,
          start: new Date(event.event_startdate), // Convert to Date object
          end: event.event_enddate ? new Date(event.event_enddate) : null,
          extendedProps: {
            event_address: event.event_address,
            isEventActive: event.isEventActive,
            event_notes: event.event_notes,
            employee_id: event.employee_id,
            clientNumber: event.clientNumber,
          },
        }));
        console.log("transformed events= ", transformedEvents);
        setEvents(transformedEvents);
      })
      .catch((error) => {
        console.log("error fetching events=", error);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, [eventsUpdated]);

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



  const columnsLeftData = [
    {
      name: "תאריך ושעה",
      selector: "DateandTime",
      right:true,
      sortable: true,
      width: "60%",
    },
    {
      name: "שם אירוע",
      selector: "EventName",
      right: true,
      sortable: true,
      width: "30%",
    },
    {
      name: "",
      selector: "Setting",
      center: true,
      width: "5%",
      cell: row => (
        <div>
          <Menu className="menuListRow">
            <MenuHandler>
              <MoreVertIcon/>
            </MenuHandler>
              <MenuList >
                <MenuItem><EditIcon/></MenuItem>
                <MenuItem><DeleteIcon/></MenuItem>
            </MenuList>
          </Menu>
        </div>
      ),
    },
  ];

  const reversedColumns = [...columnsLeftData].reverse();

  useEffect(() => {
    fetch(urlGetEvents, {
      method: 'GET',
      headers: headers
    })
    .then(res => {
      console.log('res = ', res);
      console.log('res.status', res.status);
      console.log('res.ok', res.ok);
      return res.json()
    })
      .then(result => {
        console.log("fetch event = ", result);
        const updatedDatainfo = result.map(st => {
          return{
            DateandTime: st.event_startdate,
            EventName: st.event_name,
          };
        });
        console.log(updatedDatainfo);
        setDataEventInfo(updatedDatainfo);
      })
      .catch(error => {
        console.log("Err post = ", error);
      });
    }, [dataUpdated]);





  const renderEventContent = (eventInfo) => {
    let { time, place } = eventInfo.event.extendedProps;
    return (
      <>
        <div className="fc-event-time">{time}</div>
        <div className="fc-event-title">{eventInfo.event.title}</div>
        <div className="fc-event-place">{place}</div>
      </>
    );
  };

  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  const [events, setEvents] = useState([]);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (selectInfo) => {
    setSelectedDate(selectInfo.startStr);
    setIsAddingEvent(true);
  };
  const handleSave = ({ title, date }) => {
    addEvent({ title, date });
    setIsAddingEvent(false);
  };

  return (
    <div id="mainBodyMainPage">
      <div id="headerMainPage">
        <button
          className="buttonMainPage"
          onClick={() => setIsAddingEvent(true)}
        >
          הוספת אירוע
        </button>
        <h1>לוח אירועים</h1>
      </div>

      <div id="innerMainPage">
        <div className="calanderRight">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              right: "next today,prev",
              center: "title",
              left: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            locale={hebrewCalendar}
            events={events}
            selectable={true}
            select={handleDateSelect}
            eventContent={renderEventContent}
          />
          {isAddingEvent && (
            <NewCalendarEvent
              trigger={isAddingEvent}
              setTrigger={setIsAddingEvent}
              date={selectedDate}
              onSave={handleSave}
            />
          )}
          {console.log("Current events state: ", events)}
        </div>

        <div className="dataListLeft">
          <div className="headerDataListLeft">רשימת אירועים ואילוצים </div>
          <div>
            <DataTable columns={reversedColumns}
                       data={dataEventInfo}/>
          </div>

          {/*<EventList lassName="headerDataListLeft" events={events} />*/}
          

        </div>
      </div>
    </div>
  );
};

export default MainPage;
