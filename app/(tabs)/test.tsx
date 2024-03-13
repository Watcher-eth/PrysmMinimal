import { View, Text, Pressable } from "react-native";
import React from "react";
import CreateBet from "@/components/create/Bet";
import FindFriends from "@/components/Onboarding/Friends/FindFriends";
import VoteSideBet from "@/components/Bet/Vote/SideBet";
import { BetModalPropData } from "@/constants/testData";
import { ScrollView } from "react-native-gesture-handler";
import { BetBigView, BetSmallView } from "@/components/topics/TrendingBets";
import { router } from "expo-router";
import FriendsBetsBig, {
  FriendsBetCarousel,
} from "@/components/activity/FriendsBetsBig";
import ActivityPage from "@/components/activity";

const test = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ActivityPage />
    </ScrollView>
  );
};

export default test;
