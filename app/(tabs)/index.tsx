import { StyleSheet } from "react-native";

import { Text, View } from "react-native";
import Feed from "@/components/Feed/feed";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FindFriends from "@/components/Feed/Onboarding/Friends/FindFriends";
import PostFeed from "@/components/Feed/PostFeed";
import FeedHeader from "@/components/Feed/header";
import { BetBigView } from "@/components/topics/TrendingBets";

export default function TabOneScreen() {
  return (
    <View
      style={{
        backgroundColor: "#101010",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FeedHeader />

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
