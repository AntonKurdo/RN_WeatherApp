import NetInfo from "@react-native-community/netinfo";

class NetInfoServiceClass {
  async fetchConnection(): Promise<boolean | null> {
    const state = await NetInfo.fetch();

    return state.isConnected;
  }
}

export const netInfoService = new NetInfoServiceClass();
