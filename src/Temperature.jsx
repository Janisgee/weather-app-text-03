import React from "react";

export default function Temperature(props) {
  function celsiusTemperature() {
    let celsiusTemperature = Math.round(props.celsius);
    return celsiusTemperature;
  }
  function convertToCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function fahrenheitTemperature() {
    let fahrenheitTemperature = Math.round(props.fahrenheit);
    return fahrenheitTemperature;
  }
  function convertTofahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  if (props.unit === "celsius") {
    return (
      <span>
        <span className="temperature float-start">{celsiusTemperature()}</span>{" "}
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertTofahrenheit} className="inactive">
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature float-start">
          {fahrenheitTemperature()}
        </span>{" "}
        <span className="unit">
          <a href="/" onClick={convertToCelsius} className="inactive">
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
