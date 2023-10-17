import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    marginTop: 32,
  },
  wrapper: {
    borderRadius: 16,
    height: 72,
    marginBottom: 16,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    flexDirection: "row",
  },
  day: {
    fontSize: 20,
    color: "white",
  },
  temp: {
    fontSize: 20,
    color: "white",
  },
  loadingWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255, 255, 0.6)",
  },
});
