import { View, Text, Dimensions, Image, Pressable } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import Animated, {
  FadeInDown,
  FadeOutDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { router } from "expo-router";

const LinkPost = (props: { border: boolean }) => {
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
          pathname: "/post/123",
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
        entering={FadeInDown.duration(500)}
        exiting={FadeOutDown.duration(500)}
        style={[
          animatedStyle,
          {
            display: "flex",
            flexDirection: "column",
            width: width / 1.1,

            backgroundColor: props.border ? "#141414" : "transparent",
            alignSelf: "center",
            borderRadius: 20,
            padding: props.border ? 15 : 0,
            paddingBottom: props.border ? 17 : 0,
            marginVertical: props.border ? 20 : 0,
            marginBottom: props.border ? 0 : 20,
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
              uri: "https://f8n-production-collection-assets.imgix.net/0xEC0a7A26456B8451aefc4b00393ce1BefF5eB3e9/9648/nft.png?q=80&auto=format%2Ccompress&cs=srgb&h=640",
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

              width: props.border ? width / 1.43 : width / 1.36,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 6,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 17,
                  fontWeight: "600",
                  fontFamily: "AeonikBold",
                }}
              >
                ShyKite.eth
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "400",
                  fontFamily: "AeonikRegular",
                }}
              >
                /Oppenheimer
              </Text>
            </View>
            <Text
              style={{
                fontWeight: "700",
                color: "lightgrey",
                fontFamily: "AeonikBold",
              }}
            >
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
            fontFamily: "AeonikRegular",
          }}
        >
          Rotten 🍅 review for #Oppenheimer is 93% which makes it certified
          fresh 🔥
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
              width: props.border ? width / 1.22 : width / 1.15,
              height: height / 4.2,
              borderRadius: 10,
              overflow: "hidden",
              alignSelf: "flex-start",
              marginTop: 13,
            }}
          />

          <Text
            style={{
              color: "white",
              fontSize: 23,
              fontWeight: "700",
              position: "absolute",
              bottom: 29,
              lineHeight: 23,
              left: 10,
              paddingRight: 70,
            }}
          >
            Oppenheimer Review
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 12,
              alignSelf: "center",
              fontWeight: "700",
              bottom: 8,
              left: 10,
              position: "absolute",
              padding: 2,
              paddingHorizontal: 6,
              backgroundColor: "white",
              borderRadius: 9,
              overflow: "hidden",
            }}
          >
            www.people/rfx.com
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default LinkPost;
