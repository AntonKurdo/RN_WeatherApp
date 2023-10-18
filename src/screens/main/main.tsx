import React, { FC, useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { weatherApi } from "../../api";
import { locationService } from "../../services/location-service";
import { netInfoService } from "../../services/net-info-service";
import { storageService } from "../../services/storage-service";
import { WeatherWidget } from "./components/weather-widget";
import { HoursForecastWidget } from "./components/hours-forecast-widget";
import { WeekForecastWidget } from "./components/week-forecast-widget";
import { Search } from "./components/search";
import {
  CurrentWeatherType,
  ForecastWeatherListItemType,
  ForecastWeatherType,
} from "../../api/types";
import { Routes } from "../../navigation/types";
import { MainNavigationProps } from "../../navigation/stack-navigator";
import { useAppContext } from "../../context/app-context/app-context";

import { styles } from "./main.styles";

export const Main: FC = () => {
  const { navigate } = useNavigation<MainNavigationProps>();

  const { theme } = useAppContext();

  const [currentWeatherData, setCurrentWeatherData] = useState<
    CurrentWeatherType | undefined
  >(undefined);

  const [forecastWeatherData, setForecastWeatherData] = useState<
    ForecastWeatherListItemType[] | undefined
  >(undefined);

  const [lastUpdatedTimestamp, setLastUpdatedTimestamp] = useState<
    number | undefined
  >(undefined);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = useCallback(async () => {
    try {
      const isConnected = await netInfoService.fetchConnection();
      if (!isConnected) {
        const cachedData = await storageService.getData<CurrentWeatherType>(
          storageService.sorageKeys.cachedCurrentWeather
        );

        const lastUpdateCached = await storageService.getData<number>(
          storageService.sorageKeys.lastUpdateTime
        );

        setLastUpdatedTimestamp(lastUpdateCached);
        setForecastWeatherData(undefined);

        if (cachedData !== null) {
          setCurrentWeatherData(cachedData);
        }

        return;
      }
      setLoading(true);
      await locationService.requestPermission();
      const {
        coords: { latitude, longitude },
      } = await locationService.getCurrentPosition();

      if (!latitude || !longitude) return;

      const currentWeather =
        await weatherApi.getCurrentWeatherByCoors<CurrentWeatherType>({
          lat: latitude,
          lon: longitude,
        });

      setCurrentWeatherData(currentWeather);

      await storageService.storeData(
        storageService.sorageKeys.cachedCurrentWeather,
        currentWeather
      );

      await storageService.storeData(
        storageService.sorageKeys.lastUpdateTime,
        Date.now()
      );

      setLastUpdatedTimestamp(undefined);

      await weatherApi.getCurrentWeatherByCoors<CurrentWeatherType>({
        lat: latitude,
        lon: longitude,
      });

      const forecastWeather =
        await weatherApi.getForecastHourlyWeatherByCoors<ForecastWeatherType>({
          lat: latitude,
          lon: longitude,
        });

      setForecastWeatherData(forecastWeather.list.slice(0, 12));
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  }, []);

  const onCityChosen = useCallback(
    async ({ lat, lon }: { lat: number; lon: number }) => {
      const weatherData =
        await weatherApi.getCurrentWeatherByCoors<CurrentWeatherType>({
          lat,
          lon,
        });

      navigate(Routes.searchResults, {
        data: weatherData,
      });
    },
    [navigate]
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme === "light" ? "white" : "black",
        },
      ]}
    >
      {currentWeatherData && (
        <>
          {!lastUpdatedTimestamp && <Search onCityChosen={onCityChosen} />}
          <WeatherWidget
            loading={loading}
            onUpdate={getWeather}
            currentWeaterData={currentWeatherData}
            lastUpdatedTimestamp={lastUpdatedTimestamp}
          />
        </>
      )}

      {forecastWeatherData?.length && (
        <WeekForecastWidget
          loading={loading}
          ListHeaderComponent={
            <HoursForecastWidget loading={loading} data={forecastWeatherData} />
          }
        />
      )}
    </SafeAreaView>
  );
};
