import AsyncStorage from "@react-native-async-storage/async-storage";

enum StorageKeys {
  cachedCurrentWeather = "cachedCurrentWeather",
  lastUpdateTime = "lastUpdateTime",
}

class StorageServiceClass {
  private _storageKeys = StorageKeys;

  get sorageKeys() {
    return this._storageKeys;
  }

  storeData = async (key: StorageKeys, value: unknown) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      throw e;
    }
  };

  getData = async <T>(key: StorageKeys): Promise<T> => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      throw e;
    }
  };
}

export const storageService = new StorageServiceClass();
