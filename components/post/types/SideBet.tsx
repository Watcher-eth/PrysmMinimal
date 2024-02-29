import { View, Text, Dimensions, Image, Pressable } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { router } from "expo-router";

const SideBet = (props: { border: boolean }) => {
  const { width, height } = Dimensions.get("window");
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(1.02);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };
  return (
    <Pressable
      onPress={() => {
        router.navigate({
          pathname: "/post/[post]",
          params: {
            post: "123",
            name: "Oppenheimer",

            image:
              "https://pbs.twimg.com/profile_images/1713576030063972352/qEdjq6VQ_400x400.jpg",
            type: "Link",
          },
        });
      }}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={[
          animatedStyle,
          {
            display: "flex",
            flexDirection: "column",
            width: width / 1.1,
            backgroundColor: props.border ? "#0F0F0F" : "transparent",
            alignSelf: "center",
            borderRadius: 20,
            padding: props.border ? 15 : 0,
            paddingBottom: props.border ? 17 : 0,
            marginVertical: 15,
          },
        ]}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/1097953?v=4",
            }}
            style={{
              width: width / 7.8,
              height: width / 7.8,
              borderRadius: 100,
              overflow: "hidden",
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",

              width: width / 1.62,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 6,
              }}
            >
              <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
                TextPost
              </Text>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "400" }}>
                /Oppenheimer
              </Text>
            </View>
            <Text style={{ fontWeight: "700", color: "lightgrey" }}>
              11hr ago
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 15,
            color: "lightgrey",
            marginTop: 9,
          }}
        >
          I think the score was one of the best parts of the movie. I think it
          has a good shot at winning best soundtrack!
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Image
            source={{
              uri: "https://people.com/thmb/O_xCNbRlz_oLi0iTy2xWUBGOtQY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x222:961x224)/oppenheimer-mag-rollout-7-071923-b6e2ce1f1e034c8585067050f5e4012c.jpg",
            }}
            style={{
              width: width / 1.21,
              height: height / 3.5,
              borderRadius: 10,
              overflow: "hidden",
              marginTop: 13,
            }}
          />
          <BlurView
            intensity={5.5}
            tint="systemMaterialDark"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: width / 1.21,
              height: width / 7.5,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              overflow: "hidden",

              marginTop: -50,
            }}
          />
          <Text
            style={{
              color: "white",
              fontSize: 25,
              fontWeight: "700",
              position: "absolute",
              bottom: 27,
              lineHeight: 23,
              left: 10,
              paddingRight: 70,
            }}
          >
            Oppenheimer
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 14,
              alignSelf: "center",
              fontWeight: "600",
              bottom: 9,
              left: 11,
              position: "absolute",
            }}
          >
            Will Oppenheimer win best soundtrack?
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 11,
              alignSelf: "center",
              fontWeight: "700",
              top: 22,
              right: 9,
              position: "absolute",
              padding: 2,
              paddingHorizontal: 6,
              backgroundColor: "white",
              borderRadius: 9,
              overflow: "hidden",
            }}
          >
            Side Bet
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            alignSelf: "center",
          }}
        >
          <Pressable
            style={{
              padding: 9,
              borderRadius: 24,
              overflow: "hidden",
              backgroundColor: "#E23B3B",
              width: 140,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "white",
                fontWeight: "800",
              }}
            >
              No
            </Text>
          </Pressable>
          <Pressable
            style={{
              marginLeft: 20,
              padding: 9,
              borderRadius: 24,
              overflow: "hidden",
              backgroundColor: "#57AC5B",
              width: 140,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "white",
                fontWeight: "800",
              }}
            >
              Yes
            </Text>
          </Pressable>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default SideBet;
