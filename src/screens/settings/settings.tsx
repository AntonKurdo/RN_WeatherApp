import React, { FC, useMemo } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { useAppContext } from "../../context/app-context/app-context";
import { Icon } from "../../components/icon";
import { IconButton } from "../../components/icon-button";
import useToggle from "../../hooks/useToggle";

import { styles } from "./settings.styles";

type Props = {};

export const Settings: FC<Props> = (props) => {
  const { goBack } = useNavigation();
  const { localization, updateLocalization } = useAppContext();
  const { isOn, toggle } = useToggle(false);

  const locaizationConfig = useMemo(
    () => [
      { code: "en", name: "English" },
      { code: "be", name: "Belarussian" },
    ],
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
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
        <TouchableOpacity style={styles.languageWrapper} onPress={toggle}>
          <Text style={styles.label}>
            {localization === "be" ? "Belarussian" : "English"}
          </Text>
          <Icon
            type="AntDesign"
            name={"arrowdown"}
            color="rgb(43 146 241)"
            size={22}
          />
        </TouchableOpacity>
      </View>
      <Modal transparent animationType="slide" visible={isOn}>
        <View style={styles.overlay}>
          <View style={styles.innerModal}>
            {locaizationConfig.map((l) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    updateLocalization();
                    toggle();
                  }}
                  style={styles.lngWrapper}
                  key={l.code}
                >
                  <Text
                    style={[
                      styles.lngLabel,
                      {
                        fontWeight: localization === l.code ? "600" : "400",
                      },
                    ]}
                  >
                    {l.name}
                  </Text>
                  {localization === l.code && (
                    <Icon
                      type="Entypo"
                      name={"check"}
                      color="white"
                      size={20}
                    />
                  )}
                </TouchableOpacity>
              );
            })}
            <IconButton
              containerStyles={styles.closeBtn}
              icon={
                <Icon
                  type="AntDesign"
                  name={"closecircleo"}
                  color="white"
                  size={30}
                />
              }
              onPress={toggle}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
