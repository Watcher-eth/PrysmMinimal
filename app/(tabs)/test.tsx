import { View, Text } from "react-native";
import React from "react";
import CreateBet from "@/components/create/Bet";
import FindFriends from "@/components/Onboarding/Friends/FindFriends";
import VoteSideBet from "@/components/Bet/Vote/SideBet";
import { BetModalPropData } from "@/constants/testData";
import { ScrollView } from "react-native-gesture-handler";
import { BetBigView, BetSmallView } from "@/components/topics/TrendingBets";

const test = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#070707" }}>
      <View style={{ height: 190, width: "100%" }} />
      <BetBigView
        {...{
          title: "Presidency",
          topic: "USA",
          image:
            "https://e3.365dm.com/20/10/2048x1152/skynews-us-election-2020-polling_5131912.jpg",
          question: "Who will become the 77th President of the United States?",
          option2: {
            name: "Trump",
            amount: 58,
            image:
              "https://news.northeastern.edu/wp-content/uploads/2022/07/Donald_Trump_1400-1.jpg",
          },
          option1: {
            name: "Biden",
            amount: 42,
            image:
              "https://s.abcnews.com/images/International/biden-michigan-ap-rc-200909_hpMain.jpg",
          },
        }}
      />
      <BetSmallView
        {...{
          title: "Presidency",
          topic: "USA",
          image:
            "https://e3.365dm.com/20/10/2048x1152/skynews-us-election-2020-polling_5131912.jpg",
          question: "Who will become the 77th President of the United States?",
          option2: {
            name: "Trump",
            amount: 58,
            image:
              "https://news.northeastern.edu/wp-content/uploads/2022/07/Donald_Trump_1400-1.jpg",
          },
          option1: {
            name: "Biden",
            amount: 42,
            image:
              "https://s.abcnews.com/images/International/biden-michigan-ap-rc-200909_hpMain.jpg",
          },
        }}
      />
      <CreateBet />
    </ScrollView>
  );
};

export default test;
