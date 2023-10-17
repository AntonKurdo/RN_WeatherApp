import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    marginBottom: 12,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    height: "100%",
    paddingHorizontal: 8,
    fontSize: 16,
    borderRadius: 8,
    borderColor: "rgba(43, 146, 241, 1)",
    color: "rgba(43, 146, 241, 1)",
  },
  searchBtn: {
    width: "20%",
    paddingHorizontal: 8,
    height: "100%",
    backgroundColor: "rgba(43, 146, 241, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 4,
  },
  settingsBtn: {
    width: "20%",
    marginLeft: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  searchBtnLabel: {
    color: "white",
  },
  cityLabel: {
    fontSize: 20,
  },
});
