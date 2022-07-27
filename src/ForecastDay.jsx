import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function minCelsiusTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function maxCelsiusTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minfahrenheitTemperature() {
    let fahrenheitTemperature = Math.round((props.data.temp.min * 9) / 5 + 32);
    return `${fahrenheitTemperature}°`;
  }

  function maxfahrenheitTemperature() {
    let fahrenheitTemperature = Math.round((props.data.temp.max * 9) / 5 + 32);
    return `${fahrenheitTemperature}°`;
  }

  function formattedDate(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  if (props.unit === "celsius") {
    return (
      <div className="ForecastDay">
        <div className="forecastDay">{formattedDate(props.data.dt)}</div>
        <WeatherIcon code={props.code} />
        <div>
          <span className="forecast-temp-max">{maxCelsiusTemperature()}</span>{" "}
          <span className="forecast-temp-min">{minCelsiusTemperature()}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ForecastDay">
        <div className="forecastDay">{formattedDate(props.data.dt)}</div>
        <WeatherIcon code={props.code} />
        <div>
          <span className="forecast-temp-max">
            {maxfahrenheitTemperature()}
          </span>{" "}
          <span className="forecast-temp-min">
            {minfahrenheitTemperature()}
          </span>
        </div>
      </div>
    );
  }
}
