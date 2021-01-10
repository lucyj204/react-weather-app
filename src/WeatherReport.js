import React from "react";
import "./App.css";
import ForecastItem from "./ForecastItem";
import ReactAnimatedWeather from "react-animated-weather";
import Axios from "axios";

function getWeatherIconFromOpenWeatherMapCode(code) {
  if (code === "01d") {
    return "CLEAR_DAY";
  }
  if (code === "01n") {
    return "CLEAR_NIGHT";
  }
  if (code === "02d" || code === "04d") {
    return "PARTLY_CLOUDY_DAY";
  }
  if (code === "02n" || code === "03n" || code === "04n") {
    return "PARTLY_CLOUDY_NIGHT";
  }
  if (code === "03d") {
    return "CLOUDY";
  }
  if (code === "09d" || code === "09n" || code === "10d" || code === "10n") {
    return "RAIN";
  }
  if (code === "11d" || "11n") {
    return "WIND";
  }
  if (code === "13d" || code === "13n") {
    return "SNOW";
  }
  if (code === "50d" || code === "50n") {
    return "FOG";
  }
}

export default function WeatherReport() {
  const currentWeatherCode = "04d";
  return (
    <div id="weather-report">
      <h1 className="city">
        <span id="current-city"></span> Rochester,
        <span id="current-country"> UK</span>
      </h1>
      <p className="current-date" id="current-date">
        Sunday 20 December
        <br /> Last updated at 12:30
      </p>
      <p className="current-weather">
        <span id="current-weather-icon">
          {/* <img src="http://openweathermap.org/img/wn/04d@2x.png" alt="" /> */}

          <ReactAnimatedWeather
            icon={getWeatherIconFromOpenWeatherMapCode(currentWeatherCode)}
            color={"#52057b"}
            size={150}
          />
        </span>
        <span id="temperature-digits"> 11</span>
        <a href="url" className="active" id="celsius">
          °C
        </a>
        <span className="temperature-divider">|</span>
        <a href="url" id="fahrenheit">
          °F
        </a>
        <span id="weather-description">Clouds</span>
      </p>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="weather-info">
              Humidity: <span id="humidity">98</span>%
              <br />
              Wind: <span id="wind-speed">7</span> m/s
            </p>
          </div>

          <div className="col">
            <p className="sunrise-sunset">
              Sunrise: <span id="sunrise-time">07:59</span>
              <br />
              Sunset: <span id="sunset-time">15:51</span>
            </p>
          </div>

          <div className="col">
            <p className="min-max-temp">
              Min: <span id="min-temp">8</span>°
              <br />
              Max: <span id="max-temp">9</span>°
            </p>
          </div>
        </div>
        <hr />
        <h3 className="forecast-heading">Forecast</h3>
        <div className="row" id="weather-forecast">
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
        </div>
      </div>
    </div>
  );
}
