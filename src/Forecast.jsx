import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastDays, setForecastDays] = useState({});

  const longitude = props.coordinates.lon;
  const latitude = props.coordinates.lat;

  function showForecastDaily(response) {
    setLoaded(true);
    console.log(response.data.daily);
    setForecastDays(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <ul className="row">
          {forecastDays.slice(0, 6).map(function (forecastDay, index) {
            return (
              <li className="col-2" key={index}>
                <ForecastDay forecastDay={forecastDay} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    const apiKey = `5b4968001237d415bbb6fc146031577b`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(showForecastDaily);
  }
}
