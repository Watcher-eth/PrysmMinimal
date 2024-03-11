import { StyleSheet, View } from "react-native";

import Feed from "@/components/Feed/feed";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FindFriends from "@/components/Feed/Onboarding/Friends/FindFriends";
import ExploreHeader from "@/components/Feed/feed/ExploreHeader";
import TopicHeader from "@/components/Feed/TopicHeader";

export default function Explore() {
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
