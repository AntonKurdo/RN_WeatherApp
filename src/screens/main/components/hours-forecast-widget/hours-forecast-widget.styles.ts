import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    backgroundColor: "white",
    paddingBottom: 8,
  },
  itemWrapper: {
    width: 90,
    height: 90,
    backgroundColor: "rgb(43 146 241)",
    borderRadius: 8,
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 65,
    height: 40,
  },
  timeLabel: {
    fontSize: 12,
    color: "white",
  },
  tempLabel: {
    fontSize: 15,
    color: "white",
    fontWeight: "600",
  },
  loadingWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255, 255, 0.6)",
  },
});
