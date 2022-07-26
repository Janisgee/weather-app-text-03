import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function SearchForm(props) {
  const [inputCity, setInputCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      coordinates: response.data.coord,
      date: response.data.dt * 1000,
      timezone: response.data.timezone * 1000,
      sunrise: response.data.sys.sunrise * 1000,
      sunset: response.data.sys.sunset * 1000,
    });
  }

  function search() {
    let apiKey = "5b4968001237d415bbb6fc146031577b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function inputValue(event) {
    setInputCity(event.target.value);
  }

  const form = (
    <form className="row mb-3" onSubmit={handleSubmit}>
      <span className="col-9">
        <input
          type="search"
          placeholder="Please type a city name ..."
          className="form-control"
          onChange={inputValue}
        />
      </span>
      <span className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100" />
      </span>
    </form>
  );

  if (loaded) {
    return (
      <div className="SearchForm">
        {form}
        <WeatherInfo weather={weather} />
      </div>
    );
  } else {
    search();
    return (
      <div>
        {form}Loading weather condition for {inputCity} ...
      </div>
    );
  }
}
