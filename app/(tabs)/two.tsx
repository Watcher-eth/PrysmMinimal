import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import ProfilePopover from "@/components/profile/profilePopover";
import Search from "@/components/search";
import TextPost from "@/components/post/types/TextPost";
import LinkPost from "@/components/post/types/LinkPost";
import SideBet from "@/components/post/types/SideBet";
import CreateBet from "@/components/create/Bet";

export default function TabTwoScreen() {
  return <CreateBet />;
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
