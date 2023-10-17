import React, { FC } from "react";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { MainStackParamList } from "../../navigation/stack-navigator";
import { WeatherWidget } from "../main/components/weather-widget";
import { IconButton } from "../../components/icon-button";
import { Icon } from "../../components/icon";
import { SafeAreaView } from "react-native-safe-area-context";
import { Routes } from "../../navigation/types";

import { styles } from "./search-results.styles";

export const SearchResults: FC = () => {
  const { goBack } = useNavigation();
  const { data } =
    useRoute<RouteProp<MainStackParamList, Routes.searchResults>>().params;

  return (
    <SafeAreaView style={styles.container}>
      <IconButton
        onPress={goBack}
        containerStyles={{ paddingLeft: 0 }}
        icon={
          <Icon
            type="Ionicons"
            name={"ios-chevron-back"}
            color="black"
            size={30}
          />
        }
      />
      <WeatherWidget currentWeaterData={data} loading={false} />
    </SafeAreaView>
  );
};
