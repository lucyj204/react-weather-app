import React from "react";

function displayTemperatureDigits(temperatureCelsius, temperatureUnit) {
  let temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;
  if (temperatureUnit === "celsius") {
    return Math.round(temperatureCelsius);
  }
  else {
    return Math.round(temperatureFahrenheit);
  }
}

export default function DisplayTemperature(props) {
  function displayFahrenheitTemperature(event) {
    event.preventDefault();
    props.onTemperatureUnitChange("fahrenheit");
  }

  function displayCelsiusTemperature(event) {
    event.preventDefault();
    props.onTemperatureUnitChange("celsius");
  }



  return (
    <div>
      <span id="temperature-digits"> {displayTemperatureDigits(props.temperatureCelsius, props.temperatureUnit)}</span>
      <span className="unit" id="celsius">
        {" "}
        °C
      </span>
      <span className="temperature-divider"> | </span>
      <a href="url" id="fahrenheit" onClick={displayFahrenheitTemperature}>
        °F
      </a>
    </div>
  );

  if (props.temperatureUnit === "celsius") {
    return (
      <div>
        <span id="temperature-digits"> {props.temperatureCelsius}</span>
        <span className="unit" id="celsius">
          {" "}
          °C
        </span>
        <span className="temperature-divider"> | </span>
        <a href="url" id="fahrenheit" onClick={displayFahrenheitTemperature}>
          °F
        </a>
      </div>
    );
  } else {
    let fahrenheit = (props.temperatureCelsius * 9) / 5 + 32;
    return (
      <div>
        <span id="temperature-digits"> {Math.round(fahrenheit)}</span>
        <a
          href="url"
          className="unit"
          id="celsius"
          onClick={displayCelsiusTemperature}
        >
          {" "}
          °C
        </a>
        <span className="temperature-divider"> | </span>
        <span id="fahrenheit">°F</span>
      </div>
    );
  }
}
