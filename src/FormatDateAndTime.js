import React from "react";

export default function FormatDateAndTime(props) {
  console.log(props.dateAndTime);
  if (props.dateAndTime === undefined) {
    return null;
  } else {
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let day = days[props.dateAndTime.getDay()];
    let date = props.dateAndTime.getDate();
    let hours = props.dateAndTime.getHours();
    let month = months[props.dateAndTime.getMonth()];
    let minutes = props.dateAndTime.getMinutes();

    return (
      <div>
        {day} {date} {month} <br /> Last updated at {hours}:{minutes}
      </div>
    );
  }
}
