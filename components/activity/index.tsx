import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { Award, MonitorUpIcon } from "lucide-react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityPropData } from "@/constants/testData";
import ActivityField from "./activityField";
import Chart from "./Chart";

const ActivityPage = () => {
  const { width, height } = Dimensions.get("window");
  const [page, setPage] = useState<number>(1);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: 20,
        paddingTop: 65,
        backgroundColor: "#101010",
        height: height,
      }}
    >
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
        <MonitorUpIcon color={"white"} />
      </View>
      <ScrollView>
        <Chart />
        <Text
          style={{
            fontSize: 16,
            color: "lightgray",
            fontWeight: "700",
            marginTop: 25,
            marginRight: 5,
            marginBottom: 8,
          }}
        >
          Today
        </Text>
        <View>
          {ActivityPropData.map((item, index) => {
            return (
              <ActivityField
                index={index}
                name={item.name}
                pfp={item.image}
                amount={item.amount}
                title={item.title}
              />
            );
          })}
        </View>
        <Text
          style={{
            fontSize: 16,
            color: "lightgray",
            fontWeight: "700",

            marginRight: 5,
            marginBottom: 8,
            marginTop: 9,
          }}
        >
          Yesterday
        </Text>
        <View>
          {ActivityPropData.map((item, index) => {
            return (
              <ActivityField
                index={index}
                name={item.name}
                pfp={item.image}
                amount={item.amount}
                title={item.title}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ActivityPage;
