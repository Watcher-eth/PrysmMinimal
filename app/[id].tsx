import { View, Text, Dimensions, Image, Pressable } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { BetType, CardType } from "@/types/FeedTypes";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { AvatarGroup } from "@/components/common/Avatar";
import BetFeed from "@/components/Bet/BetFeed";
import { ScrollView } from "react-native-gesture-handler";

const Bet = () => {
  const { name, description, image, icon, topic, id } =
    useLocalSearchParams<BetType>();
  const { width, height } = Dimensions.get("window");
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const IMG_HEIGHT = 380;

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 1.5], [0, 1]),
    };
  });
  console.log("route", id, name);
  return (
    <Animated.ScrollView
      ref={scrollRef}
      scrollEventThrottle={16}
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: width,

        backgroundColor: "#070707",
      }}
    >
      <Pressable
        onPress={() => {
          router.back();
        }}
        style={{
          height: 30,
          width: 30,
          backgroundColor: "#909090",
          borderRadius: 15,

          position: "absolute",
          top: 40,
          zIndex: 4,
          left: 20,
        }}
      ></Pressable>

      <Animated.Image
        sharedTransitionTag={"shared"}
        source={{
          uri: image,
        }}
        style={[{ width: width, height: IMG_HEIGHT }, imageAnimatedStyle]}
      />

      <LinearGradient
        // Background Linear Gradient
        colors={[
          "transparent",
          "#070707",

          "#070707",
          "#070707",
          "#070707",
          "#070707",
          "#070707",
        ]}
        style={{
          width: width,
          height: height * 1.61,
          position: "absolute",
          top: height * 0.19,
        }}
      />
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          margin: 19,
          marginTop: -72,
        }}
      >
        <Text style={{ fontSize: 36, fontWeight: "700", color: "white" }}>
          {name}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 25,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: -5,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#BEBDBD" }}>
              Total Price Pool
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 28, fontWeight: "700", color: "white" }}>
                18 GHO
              </Text>
              <Animated.Image
                source={{
                  uri: "data:image/png;base64,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",
                }}
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 6,
                  borderRadius: 100,
                  overflow: "hidden",
                }}
                resizeMode="cover" // This prop determines how to resize the image when the frame doesn't match the raw image dimensions
              />
            </View>
          </View>
          <AvatarGroup
            images={[
              "https://pbs.twimg.com/profile_images/1713576030063972352/qEdjq6VQ_400x400.jpg",
              "data:image/jpeg;base64,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",

              "https://pbs.twimg.com/profile_images/1484575656759472128/4vLR6_4F_400x400.png",
            ]}
            height={40}
            width={40}
          />
        </View>
        <View
          style={{
            height: 1,
            width: width * 0.9,
            backgroundColor: "gray",
            marginTop: 13,
            marginBottom: 13,
          }}
        />
        <Text style={{ fontSize: 18, fontWeight: "700", color: "#BEBDBD" }}>
          {description}
        </Text>
      </View>
      <BetFeed />
    </Animated.ScrollView>
  );
};

export default Bet;
