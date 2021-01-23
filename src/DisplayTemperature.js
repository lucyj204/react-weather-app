import React, { useState } from "react";

export default function DisplayTemperature(props) {
  const [temperatureUnit, setTemperatureUnit] = useState("celsius");

  function displayFahrenheitTemperature(event) {
      event.preventDefault();
      setTemperatureUnit("fahrenheit");
  }

  function displayCelsiusTemperature(event) {
      event.preventDefault();
      setTemperatureUnit("celsius");
  }

  if (temperatureUnit==="celsius"){
  return (
    <div>
      <span id="temperature-digits"> {props.temperatureCelsius}</span>
      <span className="unit">°C</span>
      <span className="temperature-divider">|</span>
      <a href="url" id="fahrenheit" onClick={displayFahrenheitTemperature}>
        °F
      </a>
    </div>
  );
  }
  else {
      let fahrenheit = (props.temperatureCelsius * 9 / 5) + 32;
    return (
        <div>
          <span id="temperature-digits"> {Math.round(fahrenheit)}</span>
          <a href="url" className="unit" onClick={displayCelsiusTemperature}>°C</a>
          <span className="temperature-divider">|</span>
          <span id="fahrenheit">
            °F
          </span>
        </div>
      );
  }
}
