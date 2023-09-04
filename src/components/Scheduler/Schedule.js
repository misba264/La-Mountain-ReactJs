import React from "react";
import "./Schedule.css"

export const Schedule = () => {
  const dates = [
   { date:"25 Nov 2016",
    location:"Vestibulum viverra"},
   {date :"28 Nov 2016",
    location: "Vestibulum viverra"},
   {date:"18 Dic 2016",
    location:"Vestibulum viverra"},
    {date:"7 Jan 2017",
    location:"Vestibulum viverra"},
  ];
  return (
    <div className="sced-main">
    <div className="sched-cont">
      <div className="sched-head">SCHEDULE</div>
      <div className="dates-container">
        {dates.map((entry, index) => (
          <div key={index} className="date-entry">
            <span className="date">{entry.date}</span>
            <span className="location">{entry.location}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};