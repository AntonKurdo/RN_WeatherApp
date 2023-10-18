import React, { FC } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MainStackParamList } from "../../navigation/stack-navigator";
import { WeatherWidget } from "../main/components/weather-widget";
import { IconButton } from "../../components/icon-button";
import { Icon } from "../../components/icon";
import { Routes } from "../../navigation/types";
import { useAppContext } from "../../context/app-context/app-context";

import { styles } from "./search-results.styles";

export const SearchResults: FC = () => {
  const { goBack } = useNavigation();
  const { data } =
    useRoute<RouteProp<MainStackParamList, Routes.searchResults>>().params;

  const { theme } = useAppContext();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme === "light" ? "white" : "black",
        },
      ]}
    >
      <IconButton
        onPress={goBack}
        containerStyles={{ paddingLeft: 0 }}
        icon={
          <Icon
            type="Ionicons"
            name={"ios-chevron-back"}
            color={theme === "light" ? "black" : "white"}
            size={30}
          />
        }
      />
      <WeatherWidget currentWeaterData={data} loading={false} />
    </SafeAreaView>
  );
};
