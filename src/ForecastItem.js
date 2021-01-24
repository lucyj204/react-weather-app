import React, { useState } from "react";
import UpdateWeatherIcon from "./UpdateWeatherIcon";
import axios from "axios";
import "./App.css";

export default function ForecastItem(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastresponse(response) {
    setForecast(response.data);
    setIsLoaded(true);
    console.log(response.data);
  }

  if (isLoaded) {
    return (
      <div className="ThreeHourForecast">
        <div className="row">
          <div className="col">
            <p>
              <strong>
                {new Date(forecast.list[0].dt * 1000).getHours()}:00
              </strong>
              <br />
              <span>{Math.round(forecast.list[0].main.temp)}</span>°
              <br />
              <UpdateWeatherIcon iconCode={forecast.list[0].weather[0].icon}/>
            </p>
          </div>
          <div className="col">
            <p>
              <strong>
                {new Date(forecast.list[1].dt * 1000).getHours()}:00
              </strong>
              <br />
              <span>{Math.round(forecast.list[1].main.temp)}</span>°
              <br />
              <UpdateWeatherIcon iconCode={forecast.list[1].weather[0].icon}/>
            </p>
          </div>
          <div className="col">
            <p>
              <strong>
                {new Date(forecast.list[2].dt * 1000).getHours()}:00
              </strong>
              <br />
              <span>{Math.round(forecast.list[2].main.temp)}</span>°
              <br />
              <UpdateWeatherIcon iconCode={forecast.list[2].weather[0].icon}/>
            </p>
          </div>
          <div className="col">
            <p>
              <strong>
                {new Date(forecast.list[3].dt * 1000).getHours()}:00
              </strong>
              <br />
              <span>{Math.round(forecast.list[3].main.temp)}</span>°
              <br />
              <UpdateWeatherIcon iconCode={forecast.list[3].weather[0].icon}/>
            </p>
          </div>
          <div className="col">
            <p>
              <strong>
                {new Date(forecast.list[4].dt * 1000).getHours()}:00
              </strong>
              <br />
              <span>{Math.round(forecast.list[4].main.temp)}</span>°
              <br />
              <UpdateWeatherIcon iconCode={forecast.list[4].weather[0].icon}/>
            </p>
          </div>
          <div className="col">
            <p>
              <strong>
                {new Date(forecast.list[5].dt * 1000).getHours()}:00
              </strong>
              <br />
              <span>{Math.round(forecast.list[5].main.temp)}</span>°
              <br />
              <UpdateWeatherIcon iconCode={forecast.list[5].weather[0].icon}/>
            </p>
          </div>
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
