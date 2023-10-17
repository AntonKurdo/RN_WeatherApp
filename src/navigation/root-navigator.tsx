import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainStack } from "./stack-navigator";

type Props = {};

export const RootNavigator: FC<Props> = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
