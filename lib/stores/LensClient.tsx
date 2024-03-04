import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ChangeProfileManagerActionType,
  LensClient,
  development,
  production,
} from "@lens-protocol/client";

export interface IStorageProvider {
  getItem(key: string): Promise<string | null> | string | null;
  setItem(
    key: string,
    value: string
  ): Promise<string> | Promise<void> | void | string;
  removeItem(key: string): Promise<string> | Promise<void> | void;
}

export class AsyncStorageProvider implements IStorageProvider {
  async getItem(key: string): Promise<string | null> {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      console.error("AsyncStorage error: ", error);
      return null; // or you might want to throw an error
    }
  }

  async setItem(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error("AsyncStorage error: ", error);
      // or you might want to throw an error
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("AsyncStorage error: ", error);
      // or you might want to throw an error
    }
  }
}

// Initialize the LensClient with the development or production environment and the AsyncStorageProvider
const storageProvider = new AsyncStorageProvider();

export const lensClient = new LensClient({
  environment: development,
  storage: new AsyncStorageProvider(),
});
export async function LoginToLens(address: string) {
  //Check Profiles
  const allOwnedProfiles = await lensClient.profile.fetchAll({
    where: { ownedBy: [address] },
  });

  //TODO: If Profile doesnt exist create with credits

  // If Profile exists Login
  const { id, text } = await lensClient.authentication.generateChallenge({
    signedBy: address, // e.g "0xdfd7D26fd33473F475b57556118F8251464a24eb"
    for: allOwnedProfiles.items[0].id, // e.g "0x01"
  });

  //Profile Manager
  if (allOwnedProfiles.items[0]?.signless) {
    console.log("Profile manager is enabled");
  } else {
    const typedDataResult =
      await lensClient.profile.createChangeProfileManagersTypedData({
        approveSignless: true,
        changeManagers: [
          {
            action: ChangeProfileManagerActionType.Add,
            address: "0x0000000000",
          },
        ],
      });

    const { id, typedData } = typedDataResult.unwrap();

    // sign with the wallet
    // const signedTypedData = await wallet._signTypedData(
    //   typedData.domain,
    // typedData.types,
    //   typedData.value
    // );

    // broadcast onchain
    // const broadcastOnchainResult =
    //  await lensClient.transaction.broadcastOnchain({
    //   id,
    //    signature: signedTypedData,
    //   });

    // const onchainRelayResult = broadcastOnchainResult.unwrap();

    //  if (onchainRelayResult.__typename === "RelayError") {
    //  console.log(`Something went wrong`);
    //  return;
    //   }
  }
}
