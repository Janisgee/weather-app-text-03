import React from "react";

export default function SearchLocationDate(props) {
  let date = new Date(props.date);
  let localTimezoneOffset = props.localTimezoneOffset;
  let searchTimezoneOffset = props.searchTimezoneOffset;
  let searchLocation = props.searchLocation;
  let adjustedDate = new Date(
    date - localTimezoneOffset + searchTimezoneOffset
  );
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[adjustedDate.getDay()];
  let hours = adjustedDate.getHours();
  let ampm = hours < 12 ? "am" : "pm";
  if (hours > 12) {
    hours = `${hours - 12}`;
  }
  let minutes = adjustedDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {day} {hours}:{minutes} {ampm} ( {searchLocation} Time )
    </div>
  );
}
