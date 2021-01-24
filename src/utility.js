
export function displayTemperatureDigits(temperatureCelsius, temperatureUnit) {
  let temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;
  if (temperatureUnit === "celsius") {
    return Math.round(temperatureCelsius);
  } else {
    return Math.round(temperatureFahrenheit);
  }
}
