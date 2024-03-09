import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { PollingComponentImage } from "../Bet/BetSlider";
import { BetViewProps } from "@/types/BetTypes";
import AnimatedPressable from "../common/AnimatedPressable";
import { router } from "expo-router";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
const { width, height } = Dimensions.get("window");
const TrendingBets = () => {
  return (
    <View>
      <Text>TrendingBets</Text>
    </View>
  );
};

export default TrendingBets;

export const BetBigView = (props: BetViewProps) => {
  return (
    <Animated.View
      key={props.index}
      entering={FadeInDown.duration((350 * props.index) / 2)}
      exiting={FadeOutDown.duration((350 * props.index) / 2)}
    >
      <AnimatedPressable
        onPress={() => {
          router.navigate({
            pathname: "[id]",
            params: {
              id: "123",
              name: props.title,
              description: props.question,
              icon: "icon",
              image: props.image,
              topic: props.topic,
            },
          });
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          width: width / 1.07,
          alignSelf: "center",
          marginVertical: 4,
        }}
      >
        <Image
          source={{ uri: props.image }}
          style={{
            width: width / 1.07,
            height: height / 3.7,
            borderRadius: 10,
            overflow: "hidden",
          }}
        />
        <LinearGradient
          colors={["transparent", "#090909"]}
          style={{
            width: width / 1.07,
            height: height / 18,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            overflow: "hidden",
            position: "absolute",
            top: height / 3.7 - height / 18,
          }}
        />
        <Text
          style={{
            fontSize: 14,
            color: "black",
            fontWeight: "700",
            position: "absolute",
            top: 13,
            right: 11,
            padding: 5,
            borderRadius: 12,
            paddingHorizontal: 8,
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          {props.topic}
        </Text>
        <Text
          style={{
            fontSize: 28,
            color: "white",
            fontWeight: "700",
            marginTop: -45,
            marginLeft: 9,
          }}
        >
          {props.title}
        </Text>
        <Text
          style={{
            marginLeft: 1,
            marginTop: 21,
            fontSize: 20,
            marginBottom: 2,
            color: "white",
            fontWeight: "700",
          }}
        >
          {props.question}
        </Text>
        <PollingComponentImage
          noValue={props.option1}
          yesValue={props.option2}
        />
      </AnimatedPressable>
    </Animated.View>
  );
};

export const BetSmallView = (props: BetViewProps) => {
  return (
    <Animated.View
      key={props.index}
      entering={FadeInDown.duration((350 * props.index) / 2)}
      exiting={FadeOutDown.duration((350 * props.index) / 2)}
    >
      <AnimatedPressable
        onPress={() => {
          router.navigate({
            pathname: "[id]",
            params: {
              id: "123",
              name: props.title,
              description: props.question,
              icon: "icon",
              image: props.image,
              topic: props.topic,
            },
          });
        }}
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 8,
          borderRadius: 13,
          backgroundColor: "#1B1B1E",
          width: width / 1.07,
          alignSelf: "center",
          alignItems: "center",
          marginVertical: 10,
          marginBottom: 18,
        }}
      >
        <Image
          source={{ uri: props.image }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            overflow: "hidden",
          }}
        />

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 9,
            gap: 3,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "lightgray",
              fontWeight: "500",
            }}
          >
            Trending Bets
          </Text>
          <Text
            style={{
              fontSize: 20,

              color: "white",
              fontWeight: "700",
              maxWidth: width / 1.6,
            }}
          >
            {props.question}
          </Text>
        </View>
      </AnimatedPressable>
    </Animated.View>
  );
};
