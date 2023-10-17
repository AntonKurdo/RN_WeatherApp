import "react-native-gesture-handler";

import { RootNavigator } from "./src/navigation/root-navigator";
import AppContextProvider from "./src/context/app-context/app-context";

export default function App() {
  return (
    <AppContextProvider>
      <RootNavigator />
    </AppContextProvider>
  );
}
