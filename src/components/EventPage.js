import React from "react";
import "./EventPage.css";
import EventTime from "./EventTime";

function EventPage() {
  return (
    <div className="container-event">
      <div className="container-event--left">
        <div className="event--name">
          <p className="event--name--title">Birthday Bash</p>
          <p className="event--name--subtitle">
            Hosted by <span className="bold--sub">Elysia</span>
          </p>
        </div>
        <div className="event--date_time">
          <EventTime
            icon=<i class="fa-solid fa-calendar-days"></i>
            arrowIcon=<i class="fa-solid fa-greater-than"></i>
            title="18 August 6:00PM"
            subtitle="   to 19 August 1:00PM UTC +10"
          />
          <EventTime
            icon=<i class="fa-solid fa-location-dot"></i>
            arrowIcon=<i class="fa-solid fa-greater-than"></i>
            title="Street name"
            subtitle="   Suburb, State, Postcode"
          />
        </div>
      </div>
      <div className="container-event--right">
        <img
          className="event--image container-event--right"
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T201908Z&X-Amz-Expires=86400&X-Amz-Signature=c3d4036726f7c3ac7d8c30419db95d3930be8196807c11e1aa3266653e232b10&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
          alt="event-img"
        />
      </div>
    </div>
  );
}

export default EventPage;
