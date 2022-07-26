import React from "react";

export default function ForecastDay(props) {
  function formattedDate(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div className="ForecastDay">
      <div className="forecastDay">{formattedDate(props.forecastDay.dt)}</div>
      <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
      <div>
        <span className="forecast-temp-max">
          {Math.round(props.forecastDay.temp.max)}°
        </span>{" "}
        <span className="forecast-temp-min">
          {Math.round(props.forecastDay.temp.min)}°
        </span>
      </div>
    </div>
  );
}
