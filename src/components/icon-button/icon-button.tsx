import React, { FC } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";

import { styles } from "./icon-button.styles";

type Props = {
  icon: React.ReactNode;
  onPress: () => void;
  containerStyles?: ViewStyle;
};

export const IconButton: FC<Props> = ({ icon, onPress, containerStyles }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyles]}
    >
      {icon}
    </TouchableOpacity>
  );
};
