import { View, Text, Dimensions } from "react-native";
import React from "react";
import TrendingTab from "./TrendingTab";
import ReccomendedTab from "./ReccomendedTab";
import Animated from "react-native-reanimated";

const SearchGrid = () => {
  const width = Dimensions.get("window").width;
  return (
    <Animated.View
      style={{
        padding: 10,
        marginTop: 13,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: width / 0.8,
        paddingBottom: 20,
      }}
    >
      <Animated.View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: width / 1.27,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "800" }}>Today</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600", color: "lightgrey" }}>
            See all
          </Text>
        </View>
      </Animated.View>
      <TrendingTab />
      <ReccomendedTab />
    </Animated.View>
  );
};

export default SearchGrid;


