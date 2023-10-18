import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  languageWrapper: {
    height: 25,

    flexDirection: "row",
  },
  label: {
    fontSize: 20,
    color: "rgb(43 146 241)",
  },
  overlay: { flex: 1, backgroundColor: "transparent" },
  innerModal: {
    position: "absolute",
    bottom: 0,
    height: "30%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  closeBtn: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  lngWrapper: {
    padding: 12,
    flexDirection: "row",
  },
  lngLabel: {
    marginRight: 16,
    fontSize: 20,
    color: "white",
  },
  modeWrapper: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
