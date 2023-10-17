export type LocalizationType = "en" | "be";

export type AppContextType = {
  localization: LocalizationType;
  updateLocalization: () => void;
};
