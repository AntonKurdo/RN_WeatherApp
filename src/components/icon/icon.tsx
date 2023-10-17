import React, { FC } from "react";

// ICON_SETS
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

type Props = {
  type: "AntDesign" | "Ionicons" | "SimpleLineIcons" | "Entypo";
  name: any;
  size?: number;
  color?: string;
};

export const Icon: FC<Props> = ({ type, name, size = 20, color = "white" }) => {
  if (type === "AntDesign") {
    return <AntDesign name={name} size={size} color={color} />;
  }

  if (type === "Ionicons") {
    return <Ionicons name={name} size={size} color={color} />;
  }

  if (type === "SimpleLineIcons") {
    return <SimpleLineIcons name={name} size={size} color={color} />;
  }

  if (type === "Entypo") {
    return <Entypo name={name} size={size} color={color} />;
  }

  return null;
};
