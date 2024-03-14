import React from "react";
import { View, Text, Dimensions } from "react-native";
import { FlashList } from "@shopify/flash-list";

const { width } = Dimensions.get("window");

const ExploreHeader = ({ data }) => {
  const halfLength = Math.ceil(data.length / 2);
  const topData = data.slice(0, halfLength);
  const bottomData = data.slice(halfLength);

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, alignItems: "center" }}>
      <Text style={{ color: "white", fontFamily: "AeonikRegular" }}>
        {item}
      </Text>
    </View>
  );

  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: 200,
        backgroundColor: "black",
      }}
    >
      <FlashList
        data={topData}
        renderItem={renderItem}
        horizontal
        estimatedItemSize={4}
        showsHorizontalScrollIndicator={false}
        style={{ maxHeight: 50, overflow: "hidden" }}
      />
      <FlashList
        data={bottomData}
        renderItem={renderItem}
        horizontal
        estimatedItemSize={4}
        showsHorizontalScrollIndicator={false}
        style={{ maxHeight: 50, overflow: "hidden", marginTop: 10 }}
      />
    </View>
  );
};

export default ExploreHeader;
