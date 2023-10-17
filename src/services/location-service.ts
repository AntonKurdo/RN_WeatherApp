import * as Location from "expo-location";

class LocationServiceClass {
  async requestPermission() {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      throw new Error("Permission to access location was denied");
    }
  }

  async getCurrentPosition(): Promise<Location.LocationObject> {
    try {
      return await Location.getCurrentPositionAsync({});
    } catch (error) {
      throw error;
    }
  }
}

export const locationService = new LocationServiceClass();
