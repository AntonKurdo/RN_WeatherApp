import { WeatherApiClientInterface } from "./types";

export class OpenWeatherApiClientClass implements WeatherApiClientInterface {
  private base_url = "https://api.openweathermap.org/data/2.5";

  private api_key = "3906902c2cbb1c172b283c84a21ab8c3";

  async getCurrentWeatherByCoors<T>({
    lat,
    lon,
  }: {
    lat: number;
    lon: number;
  }): Promise<T> {
    try {
      const fetchedData = await fetch(
        `${this.base_url}/weather?lat=${lat}&lon=${lon}&appid=${this.api_key}`
      );

      return await fetchedData.json();
    } catch (error) {
      throw error;
    }
  }

  async getCoorsByCityName(name: string) {
    try {
      const fetchedData = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${this.api_key}`
      );

      return await fetchedData.json();
    } catch (error) {
      throw error;
    }
  }

  async getForecastHourlyWeatherByCoors<T>({
    lat,
    lon,
  }: {
    lat: number;
    lon: number;
  }): Promise<T> {
    try {
      const fetchedData = await fetch(
        `${this.base_url}/forecast?lat=${lat}&lon=${lon}&appid=${this.api_key}`
      );

      return await fetchedData.json();
    } catch (error) {
      throw error;
    }
  }

  getIconUrl(type: string) {
    return `https://openweathermap.org/img/wn/${type}@2x.png`;
  }
}
