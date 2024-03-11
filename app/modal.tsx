import MyBetModal from "@/components/activity/MyBetModal";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "react-native";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <MyBetModal
        title="Taylor Swift Engagment"
        ownedAmount={14}
        price={15.8}
        image="https://res.cloudinary.com/merkle-manufactory/image/fetch/c_fill,f_png,w_168/https%3A%2F%2Fopenseauserdata.com%2Ffiles%2Ffd28c65d9b5192168fb259009a3afd36.png"
        options={["Yes", "No"]}
        percentage={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255, 0)",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
