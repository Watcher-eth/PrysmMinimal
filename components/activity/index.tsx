import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { Activity, Award, MonitorUpIcon } from "lucide-react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityPropData } from "@/constants/testData";
import ActivityField from "./activityField";
import Chart from "./Chart";
import { AnimatedTabBar, FriendsBetCarousel } from "./FriendsBetsBig";

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
        paddingTop: 75,
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
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            color: "white",
            fontWeight: "700",
            fontFamily: "AeonikBold",
          }}
        >
          Activity
        </Text>
        <Activity color={"white"} strokeWidth={3} />
      </View>
      <ScrollView>
        <FriendsBetCarousel />
        <AnimatedTabBar />
        <View>
          {ActivityPropData.map((item, index) => {
            return (
              <ActivityField
                index={index}
                question={item.question}
                name={item.name}
                pfp={item.pfp}
                amount={item.amount}
                title={item.title}
                image={item.image}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ActivityPage;
