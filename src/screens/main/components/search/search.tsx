import React, { FC, memo, useState } from "react";
import {
  ActivityIndicator,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { weatherApi } from "../../../../api";
import { CityType } from "../../../../api/types";
import { IconButton } from "../../../../components/icon-button";
import { Icon } from "../../../../components/icon";

import { styles } from "./search.styles";
import { MainNavigationProps } from "../../../../navigation/stack-navigator";
import { Routes } from "../../../../navigation/types";

type Props = {
  onCityChosen: ({ lat, lon }: { lat: number; lon: number }) => void;
};

export const Search: FC<Props> = memo(({ onCityChosen }) => {
  const { navigate } = useNavigation<MainNavigationProps>();

  const [value, setValue] = useState("");

  const [isFetching, setFetching] = useState(false);

  const [cities, setCities] = useState<CityType[]>([]);

  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const onSearchPress = async () => {
    setFetching(true);
    try {
      const results = await weatherApi.getCoorsByCityName<CityType[]>(value);
      setCities(results);
      setValue("");
    } catch (error) {
      console.log(error);
    } finally {
      setFetching(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder="Enter city name"
      />
      {value ? (
        <TouchableOpacity onPress={onSearchPress} style={styles.searchBtn}>
          {isFetching ? (
            <ActivityIndicator color={"white"} />
          ) : (
            <Text style={styles.searchBtnLabel}>Search</Text>
          )}
        </TouchableOpacity>
      ) : (
        <IconButton
          containerStyles={styles.settingsBtn}
          icon={
            <Icon
              type="SimpleLineIcons"
              name={"settings"}
              color="rgb(43 146 241)"
              size={22}
            />
          }
          onPress={() => {
            navigate(Routes.settings);
          }}
        />
      )}
      <Modal visible={cities.length > 0} animationType="slide">
        <View
          style={{
            width,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cities.length > 0 && (
            <ScrollView style={{ flex: 1, marginTop: top }}>
              {cities.map((c, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      onCityChosen({
                        lat: c.lat,
                        lon: c.lon,
                      });
                      setCities([]);
                    }}
                    style={{ width, paddingHorizontal: 20, paddingVertical: 8 }}
                    key={c.name + index}
                  >
                    <Text style={styles.cityLabel}>
                      {c.name}, {c.country}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          )}
          <IconButton
            containerStyles={{ position: "absolute", top: top, right: 20 }}
            icon={
              <Icon
                type="AntDesign"
                name={"closecircleo"}
                color="black"
                size={30}
              />
            }
            onPress={() => {
              setCities([]);
            }}
          />
        </View>
      </Modal>
    </View>
  );
});
