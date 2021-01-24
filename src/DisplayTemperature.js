import React from "react";

function displayTemperatureDigits(temperatureCelsius, temperatureUnit) {
  let temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;
  if (temperatureUnit === "celsius") {
    return Math.round(temperatureCelsius);
  } else {
    return Math.round(temperatureFahrenheit);
  }
}

export default function DisplayTemperature(props) {
  function setTemperatureUnit(event, temperatureUnit) {
    event.preventDefault();
    props.onTemperatureUnitChange(temperatureUnit);
  }

  function displayUnit(temperatureUnit) {
    if (temperatureUnit === "celsius") {
      return "°C";
    } else {
      return "°F";
    }
  }

  function unitClickable(temperatureUnit, currentTemperatureUnit) {
    if (temperatureUnit === currentTemperatureUnit) {
      return (
        <span className="unit temperature-unit-clickable">
          {displayUnit(temperatureUnit)}
        </span>
      );
    } else {
      return (
        <a
          href="#"
          className="temperature-unit-clickable"
          onClick={(event) => setTemperatureUnit(event, temperatureUnit)}
        >
          {displayUnit(temperatureUnit)}
        </a>
      );
    }
  }

  return (
    <div>
      <span id="temperature-digits">
        {displayTemperatureDigits(
          props.temperatureCelsius,
          props.temperatureUnit
        )}
      </span>
      {unitClickable("celsius", props.temperatureUnit)}
      <span className="temperature-divider"> | </span>
      {unitClickable("fahrenheit", props.temperatureUnit)}
    </div>
  );

}
