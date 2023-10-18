export type LocalizationType = "en" | "be";

export type ThemeType = "light" | "dark";

export type AppContextType = {
  localization: LocalizationType;
  updateLocalization: () => void;
  theme: ThemeType;
  updateTheme: () => void;
};
