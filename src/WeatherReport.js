import React from "react";
import Forecast from "./Forecast";
import CurrentDateAndTime from "./CurrentDateAndTime";
import SunriseSunset from "./SunriseSunset";
import CurrentTemperature from "./CurrentTemperature";
import { displayTemperatureDigits } from "./utility";
import WeatherIcon from "./WeatherIcon";

export default function WeatherReport(props) {
  return (
    <div className="weather-report">
      <h1 className="city">
        <span className="current-city"></span> {props.weatherData.currentCity},
        <span> {props.weatherData.currentCountry}</span>
      </h1>
      <div className="current-date">
        <CurrentDateAndTime dateAndTime={props.weatherData.dateAndTime} />
      </div>
      <div className="current-weather">
        <div className="container">
          <div className="row">
            <div className="col-3 current-weather-icon">
              <WeatherIcon iconCode={props.weatherData.weatherIcon} />
            </div>

            <div className="col-5">
              <div className="current-temperature">
                <CurrentTemperature
                  temperatureCelsius={props.weatherData.temperatureCelsius}
                  temperatureUnit={props.temperatureUnit}
                  onTemperatureUnitChange={props.onTemperatureUnitChange}
                />
              </div>
            </div>
            <div className="col-4 weather-description">
              {props.weatherData.currentWeatherDescription}
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="weather-info">
              Humidity: <span >{props.weatherData.humidity}</span>%
              <br />
              Wind: <span>
                {props.weatherData.windSpeed}
              </span>{" "}
              m/s
            </p>
          </div>

          <div className="col">
            <div className="sunrise-sunset">
              <SunriseSunset
                sunriseTime={props.weatherData.sunriseTime}
                sunsetTime={props.weatherData.sunsetTime}
              />
            </div>
          </div>

          <div className="col">
            <p className="min-max-temp">
              Min:{" "}
              {displayTemperatureDigits(
                props.weatherData.temperatureMinCelsius,
                props.temperatureUnit
              )}
              °
              <br />
              Max:{" "}
              {displayTemperatureDigits(
                props.weatherData.temperatureMaxCelsius,
                props.temperatureUnit
              )}
              °
            </p>
          </div>
        </div>
        <hr />
        <h3 className="forecast-heading">Forecast</h3>
        <div className="row weather-forecast">
          <Forecast
            city={props.weatherData.currentCity}
            temperatureUnit={props.temperatureUnit}
          />
        </div>
      </div>
    </div>
  );
}
