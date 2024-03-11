import { View, Text, Dimensions, Image, Pressable } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import AnimatedPressable from "../common/AnimatedPressable";
import { router } from "expo-router";

const TrendingTab = () => {
  const { width, height } = Dimensions.get("window");

  return (
    <AnimatedPressable
      onPress={() =>
        router.navigate({
          pathname: "[id]",
          params: {
            id: "123",
            name: "Oppenheimer Best Picture",
            description:
              "Will Oppenheimer win the Oscar for Best Picture at the 2024 Academy Awards?",
            icon: "icon",
            image:
              "https://people.com/thmb/O_xCNbRlz_oLi0iTy2xWUBGOtQY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x222:961x224)/oppenheimer-mag-rollout-7-071923-b6e2ce1f1e034c8585067050f5e4012c.jpg",
            topic: "Oscars",
          },
        })
      }
    >
      <Animated.View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          width: width / 1.2,
          height: width / 1.9,
          borderRadius: 13,
          backgroundColor: "lightgray",
          marginTop: 10,
          position: "relative",
        }}
      >
        <Image
          source={{
            uri: "https://people.com/thmb/O_xCNbRlz_oLi0iTy2xWUBGOtQY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x222:961x224)/oppenheimer-mag-rollout-7-071923-b6e2ce1f1e034c8585067050f5e4012c.jpg",
          }}
          style={{
            width: width / 1.2,
            height: width / 1.9,
            borderRadius: 12,
            overflow: "hidden",
            position: "absolute",
          }}
        />
        <BlurView
          intensity={4.5}
          tint="systemThinMaterialDark"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: width / 1.2,
            height: width / 7.5,
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            overflow: "hidden",
            paddingLeft: 10,
            position: "absolute",
            bottom: 0,
          }}
        />
        <Text
          style={{
            fontSize: 22,
            color: "white",
            fontWeight: "700",
            margin: 9,
            paddingRight: 600,
            marginBottom: 6,
            lineHeight: 22,
          }}
        >
          Oppenheimer Best Picture?
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "white",
            fontWeight: "400",
            marginHorizontal: 9,
            marginBottom: 9,
            paddingRight: 60,
            lineHeight: 15,
          }}
        >
          Will Oppenheimer win the Oscar for Best Picture in 2024?
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            right: 9,
            maxWidth: 200,
            top: 10,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              color: "[#2C2626]",
              fontWeight: "700",
              lineHeight: 10,
              marginTop: 2.5,
              borderRadius: 11,
              backgroundColor: "white",
              padding: 6,
              overflow: "hidden",
            }}
          >
            Trending in Movies
          </Text>
        </View>
      </Animated.View>
    </AnimatedPressable>
  );
};

export default TrendingTab;
