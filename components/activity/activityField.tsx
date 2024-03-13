import { View, Text, Image } from "react-native";
import React from "react";
import AnimatedPressable from "../common/AnimatedPressable";

const ActivityField = (props: {
  index: number;
  pfp: string;
  name: string;
  amount: string;
  title: string;
  image: string;
}) => {
  const { pfp, index, name, amount, title, image } = props;
  return (
    <AnimatedPressable
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
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
            borderRadius: 4,
            overflow: "hidden",
          }}
        />
        <Image
          source={{ uri: pfp }}
          style={{
            height: 22,
            width: 22,
            borderRadius: 11,
            overflow: "hidden",
            position: "absolute",
            top: -5,
            left: -5,
            borderWidth: 2.5,
            borderColor: "#1B1B1E",
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
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
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 3,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "white",
            fontWeight: "700",
          }}
        >
          ${amount}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#C7C7C7",
            fontWeight: "700",
          }}
        >
          Yes - 3x
        </Text>
      </View>
    </AnimatedPressable>
  );
};

export default ActivityField;
