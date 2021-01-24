import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import { displayTemperatureDigits } from "./utility";
import axios from "axios";
import "./App.css";

export default function Forecast(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function forecastItem(forecastIndex) {
    return (
      <div className="col">
        <p>
          <strong>{new Date(forecast.list[forecastIndex].dt * 1000).getHours()}:00</strong>
          <br />
          <span>
            {displayTemperatureDigits(
              forecast.list[forecastIndex].main.temp,
              props.temperatureUnit
            )}
          </span>
          °
          <br />
          <WeatherIcon iconCode={forecast.list[forecastIndex].weather[0].icon} />
        </p>
      </div>
    );
  }

  function handleForecastresponse(response) {
    setForecast(response.data);
    setIsLoaded(true);
    console.log(response.data);
  }

  if (isLoaded && props.city === forecast.city.name) {
    return (
      <div className="ThreeHourForecast">
        <div className="row">
          {forecastItem(0)}
          {forecastItem(1)}
          {forecastItem(2)}
          {forecastItem(3)}
          {forecastItem(4)}
          {forecastItem(5)}
        </div>
      </div>
    );
  } else {
    let apiKey = "41c63daacbbca70e4cab465b3c854000";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastresponse);
    return null;
  }
}
