import React, { useState } from "react";
import SearchLocationDate from "./SearchLocationDate";
import TimeForSun from "./TimeForSun";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  const [unit, setUnit] = useState("celsius");
  const localTimezoneOffset = new Date().getTimezoneOffset() * -60 * 1000;

  return (
    <div className="WeatherInfo">
      <h1>{props.weather.name}</h1>
      <ul>
        <li>
          <SearchLocationDate
            date={props.weather.date}
            localTimezoneOffset={localTimezoneOffset}
            searchTimezoneOffset={props.weather.timezone}
            searchLocation={props.weather.name}
          />
        </li>
        <li className="text-capitalize">{props.weather.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 clearfix currentTemperature">
          <WeatherIcon code={props.weather.icon} />
          <Temperature
            celsius={props.weather.temperature}
            fahrenheit={(props.weather.temperature * 9) / 5 + 32}
            unit={unit}
            setUnit={setUnit}
          />
        </div>
        <div className="col-6">
          <ul>
            <li>
              Sunrise:
              <TimeForSun
                time={props.weather.sunrise}
                localTimezoneOffset={localTimezoneOffset}
                searchTimezoneOffset={props.weather.timezone}
              />
            </li>
            <li>
              Sunset:
              <TimeForSun
                time={props.weather.sunset}
                localTimezoneOffset={localTimezoneOffset}
                searchTimezoneOffset={props.weather.timezone}
              />
            </li>
            <li>Humidity: {props.weather.humidity}%</li>
            <li>Wind: {Math.round(props.weather.wind)}km/h</li>
          </ul>
        </div>
      </div>
      <Forecast
        coordinates={props.weather.coordinates}
        code={props.weather.icon}
        unit={unit}
        setUnit={setUnit}
      />
    </div>
  );
}
