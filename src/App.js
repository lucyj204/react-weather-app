import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import CitySearch from "./CitySearch";
import WeatherReport from "./WeatherReport";

export default function App() {
  return (
    <div>
      <div className="WeatherAppProject">
        <CitySearch />
        <WeatherReport />
      </div>
      <p className="coded-by">
        <a href="https://github.com/lucyj204/react-weather-app">
          Open-source code{" "}
        </a>{" "}
        by Lucy Joyce
      </p>
    </div>
  );
}
