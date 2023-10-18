import React, { FC, useCallback } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

import { ForecastWeatherListItemType } from "../../../../api/types";
import { weatherApi } from "../../../../api";
import { formateDate } from "../../../../utils/date";
import { convertTemp } from "../../../../utils/temperature";
import { useAppContext } from "../../../../context/app-context/app-context";

import { styles } from "./hours-forecast-widget.styles";

type Props = {
  data: ForecastWeatherListItemType[];
  loading: boolean;
};

export const HoursForecastWidget: FC<Props> = ({ data, loading }) => {
  const { localization, theme } = useAppContext();

  const renderItem = useCallback(
    ({ item }: { item: ForecastWeatherListItemType }) => {
      return (
        <View style={styles.itemWrapper}>
          <Text style={styles.timeLabel}>
            {formateDate(item.dt, {
              hour: "2-digit",
            })}
          </Text>
          {item?.weather[0].icon && (
            <Image
              style={styles.icon}
              source={{
                uri: weatherApi.getIconUrl(item.weather[0].icon),
              }}
            />
          )}
          <Text style={styles.tempLabel}>
            {convertTemp(
              item?.main.temp,
              localization === "be" ? "Celsius" : "Fahrenheit"
            )}
          </Text>

          {loading && (
            <View style={styles.loadingWrapper}>
              <ActivityIndicator color={"black"} />
            </View>
          )}
        </View>
      );
    },
    [loading, localization]
  );

  const keyExtractor = useCallback(
    (item: ForecastWeatherListItemType, index: number) => {
      return (item.sys.pod + index).toString();
    },
    []
  );

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme === "light" ? "white" : "black",
        },
      ]}
    >
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};
