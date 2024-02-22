import { View, Text, Dimensions } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import TextPost from "../post/types/TextPost";
import LinkPost from "../post/types/LinkPost";
import SideBet from "../post/types/SideBet";

const BetFeed = () => {
  //TODO: Get feed
  const { width, height } = Dimensions.get("window");
  const feedData = [{ type: "Text" }, { type: "Link" }, { type: "SideBet" }];
  return (
    <View
      style={{
        flex: 1,
        width: width,
        justifyContent: "center",
        marginTop: 5,
      }}
    >
      <FlashList
        style={{ zIndex: 1, justifyContent: "center", alignItems: "center" }}
        renderItem={({ item, index }) => {
          if (item.type === "Text")
            return (
              <View key={index} style={{ alignSelf: "center" }}>
                <TextPost />
              </View>
            );
          if (item.type === "Link")
            return (
              <View key={index} style={{ alignSelf: "center" }}>
                <LinkPost />
              </View>
            );
          if (item.type === "SideBet")
            return (
              <View key={index} style={{ alignSelf: "center" }}>
                <SideBet />
              </View>
            );
          return (
            <View key={index} style={{ alignSelf: "center" }}>
              <TextPost />
            </View>
          );
        }}
        estimatedItemSize={3}
        data={feedData}
        centerContent={true}
      />
    </View>
  );
};

export default BetFeed;
