import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { Award, MonitorUpIcon } from "lucide-react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityPropData } from "@/constants/testData";
import ActivityField from "./activityField";

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

      <Text
        style={{
          fontSize: 16,
          color: "lightgray",
          fontWeight: "700",
          marginTop: 30,
          marginRight: 5,
          marginBottom: 10,
        }}
      >
        Today
      </Text>
      <ScrollView>
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
      </ScrollView>
      <Text
        style={{
          fontSize: 16,
          color: "lightgray",
          fontWeight: "700",

          marginRight: 5,
          marginBottom: 10,
        }}
      >
        Yesterday
      </Text>
      <ScrollView>
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
      </ScrollView>
    </View>
  );
};

export default ActivityPage;
