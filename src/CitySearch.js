import React from "react";
import ForecastItem from "./ForecastItem";
import FormatDateAndTime from "./FormatDateAndTime";
import FormatSunriseSunsetTime from "./FormatSunriseSunsetTime";
import DisplayTemperature from "./DisplayTemperature";
import UpdateWeatherIcon from "./UpdateWeatherIcon";

export default function CitySearch(props) {
  console.log("CitySearch", props);

  return (
    <div id="weather-report">
      <h1 className="city">
        <span id="current-city"></span> {props.weatherData.currentCity},
        <span id="current-country"> {props.weatherData.currentCountry}</span>
      </h1>
      <div className="current-date" id="current-date">
        <FormatDateAndTime dateAndTime={props.weatherData.dateAndTime} />
      </div>
      <div className="current-weather">
        <div className="row">
          <div className="col-3" id="current-weather-icon">
            <UpdateWeatherIcon iconCode={props.weatherData.weatherIcon} />

            <div className="col">
              <DisplayTemperature
                temperatureCelsius={props.weatherData.temperatureCelsius}
              />
            </div>
          </div>
          <div className="col" id="weather-description">
            {props.weatherData.currentWeatherDescription}
          </div>
        </div>
      </div>

      <hr />
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="weather-info">
              Humidity: <span id="humidity">{props.weatherData.humidity}</span>
              <br />
              Wind: <span id="wind-speed">
                {props.weatherData.windSpeed}
              </span>{" "}
              m/s
            </p>
          </div>

          <div className="col">
            <div className="sunrise-sunset">
              <FormatSunriseSunsetTime
                sunriseTime={props.weatherData.sunriseTime}
                sunsetTime={props.weatherData.sunsetTime}
              />
            </div>
          </div>

          <div className="col">
            <p className="min-max-temp">
              Min:{" "}
              <span id="min-temp">
                {props.weatherData.temperatureMinCelsius}
              </span>
              °
              <br />
              Max:{" "}
              <span id="max-temp">
                {props.weatherData.temperatureMaxCelsius}
              </span>
              °
            </p>
          </div>
        </div>
        <hr />
        <h3 className="forecast-heading">Forecast</h3>
        <div className="row" id="weather-forecast">
          <ForecastItem city={props.weatherData.currentCity} />
        </div>
      </div>
    </div>
  );
}
