import React, {
  ComponentType,
  FC,
  JSXElementConstructor,
  ReactElement,
  useCallback,
} from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useAppContext } from "../../../../context/app-context/app-context";
import { convertTemp } from "../../../../utils/temperature";
import { getNextDay } from "../../../../utils/date";

import { styles } from "./week-forecast-widget.styles";

type Props = {
  loading: boolean;
  ListHeaderComponent:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ComponentType<any>
    | null
    | undefined;
};

const MOCK_DATA = [
  {
    id: 1,
    date: getNextDay(1),
    temp: 284,
  },
  {
    id: 2,
    date: getNextDay(2),
    temp: 281,
  },
  {
    id: 3,
    date: getNextDay(3),
    temp: 285,
  },
  {
    id: 4,
    date: getNextDay(4),
    temp: 285,
  },
  {
    id: 5,
    date: getNextDay(5),
    temp: 287,
  },
  {
    id: 6,
    date: getNextDay(6),
    temp: 286,
  },
  {
    id: 7,
    date: getNextDay(7),
    temp: 280,
  },
];

export const WeekForecastWidget: FC<Props> = ({
  ListHeaderComponent,
  loading,
}) => {
  const { localization } = useAppContext();

  const renderItem = useCallback(
    ({ item }: { item: any }) => {
      return (
        <LinearGradient
          colors={["rgba(43, 146, 241, 1)", "rgba(43, 146, 241, 0.3)"]}
          style={styles.wrapper}
        >
          <Text style={styles.day}>
            {new Date(item.date).toLocaleDateString("en", {
              dateStyle: "medium",
            })}
          </Text>
          <Text style={styles.temp}>
            {convertTemp(
              item.temp,
              localization === "be" ? "Celsius" : "Fahrenheit"
            )}
          </Text>
          {loading && (
            <View style={styles.loadingWrapper}>
              <ActivityIndicator color={"black"} />
            </View>
          )}
        </LinearGradient>
      );
    },
    [loading, localization]
  );

  return (
    <View style={styles.container}>
      <FlatList
        bounces={false}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={ListHeaderComponent}
        data={MOCK_DATA}
        renderItem={renderItem}
      />
    </View>
  );
};
