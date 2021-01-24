import React, { useState, useRef } from "react";
import "./App.css";
import WeatherReport from "./WeatherReport";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function CitySearch(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const searchRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentlyLoadingCity, setCurrentlyLoadingCity] = useState("");
  const [temperatureUnit, setTemperatureUnit] = useState("celsius");

  function handleError(err) {
    console.log("got an error", err);
  }

  function handleOpenWeatherMapResponse(response, city) {
   

    setWeatherData({
      currentCity: response.data.name,
      currentCountry: response.data.sys.country,
      temperatureCelsius: response.data.main.temp,
      currentWeatherDescription: response.data.weather[0].description,
      windSpeed: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      temperatureMaxCelsius: response.data.main.temp_max,
      temperatureMinCelsius: response.data.main.temp_min,
      sunriseTime: new Date(response.data.sys.sunrise * 1000),
      sunsetTime: new Date(response.data.sys.sunset * 1000),
      dateAndTime: new Date(response.data.dt * 1000),
      weatherIcon: response.data.weather[0].icon,
    });
    setIsLoading(false);
  }

  if (city !== currentlyLoadingCity) {
    let apiKey = "41c63daacbbca70e4cab465b3c854000";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(
        (response) => handleOpenWeatherMapResponse(response, city),
        handleError
      );
    setCurrentlyLoadingCity(city);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCity(searchRef.current.value);
  }

  return (
    <div className="CitySearch">
      <form id="city-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <input
              className="form-control"
              placeholder="Enter a City"
              id="city-input"
              autoFocus="on"
              ref={searchRef}
            />
          </div>
          <div className="col-4">
            <input
              className="form-control btn btn-secondary"
              type="submit"
              value="Search"
              id="search-button"
            />
          </div>
          {/* <div className="col-3">
            <input
              className="form-control btn btn-light"
              type="submit"
              value="Current"
              id="current-city-button"
            />
          </div> */}
        </div>
      </form>
      {isLoading ? (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      ) : weatherData === null ? null : (
        <WeatherReport
          weatherData={weatherData}
          temperatureUnit={temperatureUnit}
          onTemperatureUnitChange={setTemperatureUnit}
        />
      )}
    </div>
  );
}
