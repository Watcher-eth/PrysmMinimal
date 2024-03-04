import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import Feed from "@/components/Feed/feed";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FindFriends from "@/components/Onboarding/Friends/FindFriends";
import PostFeed from "@/components/Feed/PostFeed";

export default function TabOneScreen() {
  return (
    <View style={{ backgroundColor: "#101010" }}>
      <PostFeed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#101010",
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
