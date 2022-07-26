import React from "react";

export default function TimeForSun(props) {
  let time = props.time;
  let localTimezoneOffset = props.localTimezoneOffset;
  let searchTimezoneOffset = props.searchTimezoneOffset;

  let formattedTime = new Date(
    time - localTimezoneOffset + searchTimezoneOffset
  );
  let hours = formattedTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = formattedTime.getHours();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <span>
      {" "}
      {hours}:{minutes}
    </span>
  );
}
