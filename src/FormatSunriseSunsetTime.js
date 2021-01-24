import React from "react";

export default function FormatSunriseSunsetTime(props) {

        let sunriseHours = props.sunriseTime.getHours();
        if (sunriseHours < 10) {
            sunriseHours = `0${sunriseHours}`
        }
        let sunsetHours = props.sunsetTime.getHours();
        if (sunsetHours < 10) {
            sunsetHours = `0${sunsetHours}`
        }
        let sunriseMinutes = props.sunriseTime.getMinutes();
        if (sunriseMinutes <10) {
            sunriseMinutes = `0${sunriseMinutes}`
        }
        let sunsetMinutes = props.sunsetTime.getMinutes();
        if (sunsetMinutes <10) {
            sunsetMinutes = `0${sunsetMinutes}`
        }
    
        return (
            <div>
            <span id="sunrise-time">
                Sunrise: {sunriseHours}:{sunriseMinutes}</span>
            <br />
            <span id="sunset-time">
                Sunset: {sunsetHours}:{sunsetMinutes}
            </span>
            </div>
        );
      }
