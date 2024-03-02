import { View, Text, Image } from "react-native";
import React from "react";

const ActivityField = (props: {
  index: number;
  pfp: string;
  name: string;
  amount: string;
  title: string;
}) => {
  const { pfp, index, name, amount, title } = props;
  return (
    <View
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
          gap: 5,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "black",
            fontWeight: "800",
            paddingVertical: 6,
            paddingHorizontal: 9,
            borderRadius: 16,
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          {amount}
        </Text>
      </View>
    </View>
  );
};

export default ActivityField;
