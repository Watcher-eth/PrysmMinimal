import { View, Text, Image } from "react-native";
import React from "react";

const ActivityField = (props: {
  index: number;
  pfp: string;
  name: string;
  amount: number;
  won: number;
}) => {
  const { pfp, index, name, amount, won } = props;
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 8,
        paddingHorizontal: 5,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Text style={{ fontSize: 15, color: "lightgray", fontWeight: "600" }}>
          {index}.
        </Text>
        <Image
          source={{ uri: pfp }}
          style={{
            height: 70,
            width: 70,
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
          <Text style={{ fontSize: 20, color: "white", fontWeight: "700" }}>
            {name}
          </Text>
          <Text style={{ fontSize: 18, color: "green", fontWeight: "600" }}>
            +{amount} Prysm
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
        <Text style={{ fontSize: 30, color: "white", fontWeight: "800" }}>
          {won}
        </Text>
      </View>
    </View>
  );
};

export default ActivityField;
