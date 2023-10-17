export const convertTemp = (kelvin: number, to: "Celsius" | "Fahrenheit") => {
  if (to === "Celsius") {
    return `${(kelvin - 273.15).toFixed(1)}°C`;
  }
  if (to === "Fahrenheit") {
    return `${(((kelvin - 273.15) * 9) / 5 + 32).toFixed(1)}°F`;
  }
};
