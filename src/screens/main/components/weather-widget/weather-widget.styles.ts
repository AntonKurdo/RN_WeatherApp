import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "rgb(43 146 241)",
    padding: 16,
    borderRadius: 16,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  wrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  placeLabel: {
    fontSize: 32,
    color: "white",
    fontWeight: "700",
  },
  icon: {
    width: 120,
    height: 120,
  },
  weatherDescription: {
    fontSize: 14,
    color: "white",
    fontStyle: "italic",
  },
  tempWrapper: {
    width: "100%",
    alignItems: "center",
  },
  temp: {
    fontSize: 45,
    color: "white",
    fontWeight: "500",
  },
  updateBtn: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  loadingWrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255, 255, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  additionalInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
  },
  additionalInfoWrapper: {
    alignItems: "center",
    padding: 5,
    justifyContent: "center",
    width: "25%",
    height: 60,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "white",
  },
  additionalInfoLabel: {
    color: "white",
    fontSize: 12,
  },
  additionalInfoMainLabel: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  lastUpdateTimeLabel: {
    position: "absolute",
    top: 12,
    left: 12,
    fontSize: 12,
    color: "white",
  },
});
