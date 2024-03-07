import { View, Text, Image } from "react-native";
import React from "react";
import AnimatedPressable from "../common/AnimatedPressable";
import { ActivityPropData } from "@/constants/testData";

const UserPredictions = (props: {
  index: number;
  image: string;
  question: string;
  amount: string;
  title: string;
}) => {
  const { image, index, question, amount, title } = props;
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
          source={{ uri: image }}
          style={{
            height: 50,
            width: 50,
            borderRadius: 8,
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
            {title}
          </Text>
          <Text
            style={{
              fontSize: 14.5,
              color: "lightgray",
              fontWeight: "600",
              maxWidth: "90%",
            }}
          >
            {question}
          </Text>
        </View>
      </View>
    </AnimatedPressable>
  );
};

export default UserPredictions;