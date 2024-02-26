import { View, Text, Dimensions, Image, Pressable } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const TrendingTab = () => {
  const { width, height } = Dimensions.get("window");
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(1.08);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };
  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          width: width / 1.25,
          height: width / 2.1,
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
            width: width / 1.25,
            height: width / 2.1,
            borderRadius: 9,
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
            width: width / 1.25,
            height: width / 7.5,
            borderBottomLeftRadius: 9,
            borderBottomRightRadius: 9,
            overflow: "hidden",
            paddingLeft: 10,
            position: "absolute",
            bottom: 0,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "700",
            margin: 9,
            paddingRight: 95,
            marginBottom: 6,
            lineHeight: 21,
          }}
        >
          Will Oppenheimer win an Oscar?
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "white",
            fontWeight: "400",
            marginHorizontal: 9,
            marginBottom: 9,

            lineHeight: 15,
          }}
        >
          Will Oppenheimer win an Oscar?
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
              borderRadius: 11,
              backgroundColor: "white",
              padding: 5,
              overflow: "hidden",
            }}
          >
            Trending in Movies
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default TrendingTab;
