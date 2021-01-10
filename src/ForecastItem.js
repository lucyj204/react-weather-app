import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./App.css";

export default function ForecastItem() {
  return (
    <div className="col">
      <p>
        <strong>18:00</strong>
        <br />
        <span>14</span>°
        <br />
        <ReactAnimatedWeather icon={"RAIN"} color={"#52057b"} />
      </p>
    </div>
  );
}
