import { View, Text, Pressable } from "react-native";
import React from "react";
import CreateBet from "@/components/create/Bet";
import VoteSideBet from "@/components/Bet/Vote/SideBet";
import { BetModalPropData } from "@/constants/testData";
import { ScrollView } from "react-native-gesture-handler";
import { BetBigView, BetSmallView } from "@/components/topics/TrendingBets";
import { router } from "expo-router";
import NewBetModal from "@/components/Bet/Vote/NewBetModal";
import { BasicExample } from "@/components/common/AnimatedChart";

const test = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#070707" }}>
      <View style={{ height: 290, width: "100%" }} />

      <BasicExample />
    </View>
  );
};

export default test;
