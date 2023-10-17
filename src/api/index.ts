import { OpenWeatherApiClientClass } from "./open-weather-api";
import { WeatherApiClientInterface } from "./types";

class WeatherApiClass {
  private service: WeatherApiClientInterface;

  constructor(service: WeatherApiClientInterface) {
    this.service = service;
  }

  getCurrentWeatherByCoors<T>({
    lat,
    lon,
  }: {
    lat: number;
    lon: number;
  }): Promise<T> {
    return this.service.getCurrentWeatherByCoors({ lat, lon });
  }

  async getCoorsByCityName<T>(name: string): Promise<T> {
    try {
      return this.service.getCoorsByCityName<T>(name);
    } catch (error) {
      throw error;
    }
  }

  getForecastHourlyWeatherByCoors<T>({
    lat,
    lon,
  }: {
    lat: number;
    lon: number;
  }): Promise<T> {
    return this.service.getForecastHourlyWeatherByCoors({ lat, lon });
  }

  getIconUrl(type: string): string {
    return this.service.getIconUrl(type);
  }
}

export const weatherApi = new WeatherApiClass(new OpenWeatherApiClientClass());
