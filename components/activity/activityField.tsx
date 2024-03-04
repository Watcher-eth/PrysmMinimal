import { View, Text, Image } from "react-native";
import React from "react";
import AnimatedPressable from "../common/AnimatedPressable";

const ActivityField = (props: {
  index: number;
  pfp: string;
  name: string;
  amount: string;
  title: string;
}) => {
  const { pfp, index, name, amount, title } = props;
  return (
    <AnimatedPressable
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 13,
        paddingHorizontal: 15,
        borderRadius: 15,
        marginVertical: 5,
        backgroundColor: "#1B1B1E",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 7,
        }}
      >
        <Image
          source={{ uri: pfp }}
          style={{
            height: 40,
            width: 40,
            borderRadius: 35,
            overflow: "hidden",
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text style={{ fontSize: 17, color: "white", fontWeight: "700" }}>
            {name}
          </Text>
          <Text
            style={{ fontSize: 14.5, color: "lightgray", fontWeight: "600" }}
          >
            {title}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 3,
          paddingVertical: 7,
          paddingHorizontal: 7,
          borderRadius: 16,
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontSize: 14.5,
            color: "black",
            fontWeight: "700",
          }}
        >
          {amount}
        </Text>
        <Image
          style={{
            width: 18,
            height: 18,
            borderRadius: 10,
            overflow: "hidden",
          }}
          source={require("../../assets/images/PrysmLogo.png")}
        />
      </View>
    </AnimatedPressable>
  );
};

export default ActivityField;
