import React, { useCallback, useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  AppContextType,
  LocalizationType,
  ThemeType,
} from "./app-context.types";

export const AppContext = React.createContext<AppContextType | null>(null);

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [localization, setLocalization] = useState<LocalizationType>("be");

  const [theme, setTheme] = useState<ThemeType>("dark");

  const updateLocalization = useCallback(() => {
    if (localization === "en") {
      setLocalization("be");
    } else {
      setLocalization("en");
    }
  }, [localization]);

  const updateTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme]);

  return (
    <AppContext.Provider
      value={{ localization, updateLocalization, theme, updateTheme }}
    >
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => {
  const ctx = useContext(AppContext);

  if (!ctx) {
    throw new Error(
      "useAppContext hook must be used in a component inside a AppContextProvider."
    );
  }

  return ctx;
};
