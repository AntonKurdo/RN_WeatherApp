import React, { FC, memo } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import { useAppContext } from "../../../../context/app-context/app-context";
import { CurrentWeatherType } from "../../../../api/types";
import { weatherApi } from "../../../../api";
import { convertTemp } from "../../../../utils/temperature";
import { getDistanceBetweenDates } from "../../../../utils/date";
import { IconButton } from "../../../../components/icon-button";
import { Icon } from "../../../../components/icon";

import { styles } from "./weather-widget.styles";

type Props = {
  loading: boolean;
  currentWeaterData?: CurrentWeatherType;
  onUpdate?: () => void;
  lastUpdatedTimestamp?: number;
};

export const WeatherWidget: FC<Props> = memo(
  ({ currentWeaterData, onUpdate, loading, lastUpdatedTimestamp }) => {
    const { localization } = useAppContext();

    const { width } = useWindowDimensions();

    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={{ alignItems: "center" }}>
            <Text
              numberOfLines={1}
              style={[
                styles.placeLabel,
                {
                  maxWidth: width / 1.7,
                },
              ]}
            >
              {currentWeaterData?.name}
            </Text>
          </View>

          <View>
            {currentWeaterData?.weather[0].icon && (
              <Image
                style={styles.icon}
                source={{
                  uri: weatherApi.getIconUrl(
                    currentWeaterData?.weather[0].icon
                  ),
                }}
              />
            )}
          </View>
        </View>
        <View style={styles.tempWrapper}>
          <Text style={styles.temp}>
            {convertTemp(
              currentWeaterData?.main.temp!,
              localization === "be" ? "Celsius" : "Fahrenheit"
            )}
          </Text>
        </View>
        <View style={styles.additionalInfoContainer}>
          {currentWeaterData?.main.feels_like && (
            <View style={styles.additionalInfoWrapper}>
              <Text style={styles.additionalInfoLabel}>Feels like</Text>
              <Text style={styles.additionalInfoMainLabel}>
                {convertTemp(
                  currentWeaterData?.main.feels_like,
                  localization === "be" ? "Celsius" : "Fahrenheit"
                )}
              </Text>
            </View>
          )}
          {currentWeaterData?.main.humidity && (
            <View style={styles.additionalInfoWrapper}>
              <Text style={styles.additionalInfoLabel}>Humidity</Text>
              <Text style={styles.additionalInfoMainLabel}>
                {currentWeaterData?.main.humidity}%
              </Text>
            </View>
          )}
          {currentWeaterData?.main.pressure && (
            <View style={styles.additionalInfoWrapper}>
              <Text style={styles.additionalInfoLabel}>Pressure</Text>
              <Text style={styles.additionalInfoMainLabel}>
                {currentWeaterData?.main.pressure} 
              </Text>
            </View>
          )}
        </View>
        {lastUpdatedTimestamp && (
          <Text style={styles.lastUpdateTimeLabel}>
            Last update{" "}
            {getDistanceBetweenDates(lastUpdatedTimestamp, Date.now())}
          </Text>
        )}
        {onUpdate && (
          <IconButton
            icon={<Icon type="AntDesign" name={"retweet"} />}
            onPress={onUpdate}
            containerStyles={styles.updateBtn}
          />
        )}
        {loading && (
          <View style={styles.loadingWrapper}>
            <ActivityIndicator size={"large"} color={"black"} />
          </View>
        )}
      </View>
    );
  }
);
