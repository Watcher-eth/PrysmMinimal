import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import Feed from "@/components/Feed/feed";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function TabOneScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Feed />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
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
