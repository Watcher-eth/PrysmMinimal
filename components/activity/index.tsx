import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { Award } from "lucide-react-native";
import { ScrollView } from "react-native-gesture-handler";

const index = () => {
  const { width, height } = Dimensions.get("window");
  const [page, setPage] = useState<number>(1);
  return (
    <View style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 25, color: "white", fontWeight: "700" }}>
          Activity
        </Text>
        <Award color={"white"} />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",

          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: page === 1 ? 25 : 23,
            color: page === 1 ? "white" : "grey",
            fontWeight: "700",
          }}
        >
          Your Friends
        </Text>
        <Text
          style={{
            fontSize: page === 2 ? 25 : 23,
            color: page === 2 ? "white" : "grey",
            fontWeight: "700",
          }}
        >
          Global
        </Text>
      </View>
      <ScrollView></ScrollView>
    </View>
  );
};

export default index;
