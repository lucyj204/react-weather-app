import React, { useState, useRef} from "react";
import "./App.css";
import CitySearch from "./CitySearch";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function WeatherReport(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const searchRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentlyLoadingCity, setCurrentlyLoadingCity] = useState("");

  function handleError(err) {
    console.log("got an error", err);
  }

  function handleOpenWeatherMapResponse(response, city) {
    // if (city !== currentlyLoadingCity) {
    //   console.log("ignore", {city, currentlyLoadingCity});
    //   //ignore this response because the user changed the city
    //   return;
    // }

    setWeatherData({
      currentCity: response.data.name,
      temperatureCelsius: Math.round(response.data.main.temp),
      currentWeatherDescription: response.data.weather[0].description,
      windSpeed: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      temperatureMaxCelsius: Math.round(response.data.main.temp_max),
      temperatureMinCelsius: Math.round(response.data.main.temp_min),
      dateAndTime: new Date(response.data.dt * 1000),
      weatherIconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
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
          <div className="col-6">
            <input
              className="form-control"
              placeholder="Enter a City"
              id="city-input"
              autoFocus="on"
              ref={searchRef}
            />
          </div>
          <div className="col-3">
            <input
              className="form-control btn btn-secondary"
              type="submit"
              value="Search"
              id="search-button"
            />
          </div>
          <div className="col-3">
            <input
              className="form-control btn btn-light"
              type="submit"
              value="Current"
              id="current-city-button"
            />
          </div>
        </div>
      </form>
      {isLoading ? (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      ) : weatherData === null ? null : (
        <CitySearch weatherData={weatherData} />
      )}
    </div>
  );
}
