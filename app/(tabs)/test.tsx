import { View, Text } from "react-native";
import React from "react";
import CreateBet from "@/components/create/Bet";
import FindFriends from "@/components/Onboarding/Friends/FindFriends";
import VoteSideBet from "@/components/Bet/Vote/SideBet";
import { BetModalPropData } from "@/constants/testData";
import { ScrollView } from "react-native-gesture-handler";

const test = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ height: 300, width: "100%" }} />
      <CreateBet />
      <View style={{ height: 300, width: "100%" }} />
      <VoteSideBet {...BetModalPropData} />
      <View style={{ height: 500, width: "100%" }} />
      <FindFriends />
    </ScrollView>
  );
};

export default test;
