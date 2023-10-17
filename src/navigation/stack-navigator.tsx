import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";

import { Routes } from "./types";
import { CurrentWeatherType } from "../api/types";

// SCREENS
import { Main } from "../screens/main";
import { SearchResults } from "../screens/search-results";
import { Settings } from "../screens/settings";

export type MainStackParamList = {
  [Routes.main]: undefined;
  [Routes.searchResults]: {
    data: CurrentWeatherType;
  };
  [Routes.settings]: undefined;
};

export type MainNavigationProps = StackNavigationProp<MainStackParamList>;

const Stack = createStackNavigator<MainStackParamList>();

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.main} component={Main} />
      <Stack.Screen name={Routes.searchResults} component={SearchResults} />
      <Stack.Screen name={Routes.settings} component={Settings} />
    </Stack.Navigator>
  );
}
