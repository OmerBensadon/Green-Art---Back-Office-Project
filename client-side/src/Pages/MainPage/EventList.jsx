import React from 'react'

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      <h2>רשימת אירועים ואילוצים</h2>
      <table>
        <thead>
          <tr>
            <th>תאריך</th>
            <th>כותרת</th>
            <th>כתובת</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.start.toLocaleDateString()}</td>
              <td>{event.title}</td>
              <td>{event.extendedProps.event_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList