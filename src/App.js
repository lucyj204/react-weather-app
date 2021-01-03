import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import CitySearch from "./CitySearch";
import WeatherReport from "./WeatherReport";

export default function App() {
  return (
    <div className="WeatherAppProject">
      <CitySearch />
      <WeatherReport />
    </div>
  );
}
