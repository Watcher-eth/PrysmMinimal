import { View, Text, Dimensions } from "react-native";
import React from "react";
import { feedData } from "../../../constants/feed";
import Card from "./Card";
import { FlashList } from "@shopify/flash-list";

const Feed = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        flex: 1,
        width: width,
        justifyContent: "center",
      }}
    >
      <FlashList
        renderItem={({ item }) => {
          return (
            <Card
              name={item.name}
              image={item.image}
              description={item.description}
              icon={item.icon}
              topic={item.topic}
            />
          );
        }}
        estimatedItemSize={3}
        data={feedData}
        centerContent={true}
      />
    </View>
  );
};

export default Feed;
