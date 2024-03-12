import MyBetModal from "@/components/activity/MyBetModal";
import { BetType } from "@/types/FeedTypes";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "react-native";

export default function ModalScreen() {
  const { name, description, image, icon, topic, id } =
    useLocalSearchParams<BetType>();
  return (
    <View style={styles.container}>
      <MyBetModal
        title={name}
        ownedAmount={14}
        price={15.8}
        image={image}
        options={["Yes", "No"]}
        percentage={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.3)",
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
