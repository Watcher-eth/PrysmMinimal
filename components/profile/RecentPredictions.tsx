import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { TruthyPredictionsSmall } from ".";
import {
  ActivityPropData,
  FinishedActivityPropData,
} from "@/constants/testData";
import UserPredictions from "./UserPredictions";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronLeft, Share } from "lucide-react-native";
import AnimatedPressable from "../common/AnimatedPressable";
import { router } from "expo-router";

const RecentPredictions = () => {
  const { height, width } = Dimensions.get("window");
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
      <Image
        source={{
          uri: "https://pbs.twimg.com/profile_images/1484766329798213634/pIfL_r6Y_400x400.jpg",
        }}
        style={{
          height: 130,
          width: "120%",
          overflow: "hidden",
          position: "absolute",
        }}
      />
      <BlurView
        intensity={18}
        style={{
          height: 130,
          width: "120%",
          overflow: "hidden",
          position: "absolute",
        }}
      />
      <LinearGradient
        colors={["transparent", "#101010"]}
        style={{
          height: 120,
          width: "120%",
          overflow: "hidden",
          position: "absolute",
          top: 10,
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
          top: 60,
          width: "100%",
          padding: 20,
          paddingRight: 15,
        }}
      >
        <AnimatedPressable
          onPress={() => {
            router.back();
          }}
          style={{
            height: 30,
            width: 30,
            backgroundColor: "rgba(100, 100, 100, 0.4)",
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            zIndex: 4,
          }}
        >
          <ChevronLeft height={21} color={"white"} strokeWidth={4} />
        </AnimatedPressable>
        <Text
          style={{
            fontSize: 24,

            color: "white",
            fontWeight: "700",
            fontFamily: "AeonikBold",
            zIndex: 4,
          }}
        >
          Recents
        </Text>
        <AnimatedPressable
          onPress={() => {
            router.back();
          }}
          style={{
            height: 30,
            width: 30,
            backgroundColor: "rgba(100, 100, 100, 0.4)",
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: -15,
            position: "absolute",
          }}
        >
          <Share height={16} color={"white"} strokeWidth={4} />
        </AnimatedPressable>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          marginTop: 70,
        }}
      >
        <TruthyPredictionsSmall />
        <Text
          style={{
            fontSize: 20,
            marginTop: 19,
            color: "white",
            fontWeight: "700",
            alignSelf: "flex-start",
            marginBottom: 8,
            fontFamily: "AeonikBold",
          }}
        >
          Live Predictions
        </Text>
        {ActivityPropData.map((item, index) => {
          return (
            <UserPredictions
              index={index}
              title={item.title}
              question={item.question}
              image={item.image}
              amount={item.amount}
            />
          );
        })}
        <Text
          style={{
            fontSize: 20,
            marginTop: 19,
            color: "white",
            fontWeight: "700",
            alignSelf: "flex-start",
            marginBottom: 8,
            fontFamily: "AeonikBold",
          }}
        >
          Correct Predictions
        </Text>
        {FinishedActivityPropData.map((item, index) => {
          return (
            <UserPredictions
              index={index}
              title={item.title}
              question={item.question}
              image={item.image}
              amount={item.amount}
              resolved={"true"}
            />
          );
        })}
      </View>
    </View>
  );
};

export default RecentPredictions;
