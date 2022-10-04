import React from "react";
import "./EventPage.css";
function EventTime(props) {
  return (
    <div className="event--container">
      <div className="event--Time">
        <div className="event-icon">{props.icon}</div>
        <div className="event-time--deatils">
          <p className="event-time--deatils--title">{props.title}</p>
          <p className="event-time--deatils--subtitle">{props.subtitle}</p>
        </div>
      </div>
      <div className="arrow-deatils">
        <div></div>
        <div className="arrow-icon">{props.arrowIcon}</div>
      </div>
    </div>
  );
}

export default EventTime;
