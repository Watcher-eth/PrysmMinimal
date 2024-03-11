import { Button, Pressable, StyleSheet } from "react-native";

import { Text, View } from "react-native";
import ProfilePopover from "@/components/profile/profilePopover";
import Search from "@/components/search";
import TextPost from "@/components/post/types/TextPost";
import LinkPost from "@/components/post/types/LinkPost";
import SideBet from "@/components/post/types/SideBet";
import CreatePost from "@/components/create/Post";
import Slider from "@/components/common/AnimatedSlider";
import CreateComment from "@/components/create/Comment";
import { Lock } from "lucide-react-native";
import { router } from "expo-router";
import ActivityPage from "@/components/activity";
import ProfilePage from "@/components/profile";

export default function TabTwoScreen() {
  return <ProfilePage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 500,
    alignItems: "center",
    justifyContent: "center",
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
