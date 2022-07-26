import React from "react";
import "./WeatherApp.css";
import SearchForm from "./SearchForm";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="WeatherApp-wrapper">
        <div className="container WeatherApp-border">
          <SearchForm />
          <h1> Florence</h1>
          <ul>
            <li>Tuesday 14:23</li>
            <li>Cloudy</li>
          </ul>
          <div className="row">
            <div className="col-6 clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Cloudy"
                className="weather-image float-start"
              />
              <span className="temperature float-start">26</span>{" "}
              <span className="unit">°C | °F</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Sunrise: 05:32</li>
                <li>Sunset:19:35</li>
                <li>Humidity: 73%</li>
                <li>Wind: 5km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
