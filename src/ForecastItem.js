import React from "react";
import "./App.css";

export default function ForecastItem() {
  return (
    <div className="col">
      <p>
        <strong>18:00</strong>
        <br />
        <span>14</span>°
        <br />
        <img src="http://openweathermap.org/img/wn/04d@2x.png" alt="" />
      </p>
    </div>
  );
}
