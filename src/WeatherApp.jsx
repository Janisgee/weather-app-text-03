import React from "react";
import "./WeatherApp.css";
import SearchForm from "./SearchForm";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="WeatherApp-wrapper">
        <div className="container WeatherApp-border">
          <SearchForm defaultCity="Florence" />
        </div>
      </div>
    </div>
  );
}
