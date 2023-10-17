import React, { useCallback, useContext, useState } from "react";
import { AppContextType, LocalizationType } from "./app-context.types";

export const AppContext = React.createContext<AppContextType | null>(null);

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [localization, setLocalization] = useState<LocalizationType>("be");

  const updateLocalization = useCallback(() => {
    if (localization === "en") {
      setLocalization("be");
    } else {
      setLocalization("en");
    }
  }, [localization]);

  return (
    <AppContext.Provider value={{ localization, updateLocalization }}>
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
