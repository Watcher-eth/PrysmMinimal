import { View, Text, Dimensions } from "react-native";
import React from "react";
import { feedData } from "../../../constants/feed";
import Card from "./Card";
import { FlashList } from "@shopify/flash-list";
import ProfilePopover from "@/components/profile/profilePopover";

const Feed = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        flex: 1,
        width: width,
        justifyContent: "center",
        marginTop: 50,
      }}
    >
      <FlashList
        style={{ zIndex: 1, justifyContent: "center", alignItems: "center" }}
        renderItem={({ item, index }) => {
          return (
            <View key={index} style={{ alignSelf: "center" }}>
              <Card
                name={item.name}
                image={item.image}
                description={item.description}
                icon={item.icon}
                topic={item.topic}
              />
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

export default Feed;
