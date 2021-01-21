import React from "react";
import ForecastItem from "./ForecastItem";
import FormatDateAndTime from "./FormatDateAndTime";
import ReactAnimatedWeather from "react-animated-weather";


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

export default function CitySearch(props) {
  const currentWeatherCode = "04d";
console.log("CitySearch",props);
 
    return (
      <div id="weather-report">
        <h1 className="city">
          <span id="current-city"></span> {props.weatherData.currentCity},
          <span id="current-country"> UK</span>
        </h1>
        <p className="current-date" id="current-date">
          <FormatDateAndTime dateAndTime={props.weatherData.dateAndTime}/>
          
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
          <span id="temperature-digits"> {props.weatherData.temperatureCelsius}</span>
          <a href="url" className="active" id="celsius">
            °C
          </a>
          <span className="temperature-divider">|</span>
          <a href="url" id="fahrenheit">
            °F
          </a>
          <span id="weather-description">{props.weatherData.currentWeatherDescription}</span>
        </p>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="weather-info">
                Humidity: <span id="humidity">{props.weatherData.humidity}</span>
                <br />
                Wind: <span id="wind-speed">{props.weatherData.windSpeed}</span> m/s
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
                Min: <span id="min-temp">{props.weatherData.temp_min}</span>°
                <br />
                Max: <span id="max-temp">{props.weatherData.temp_max}</span>°
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