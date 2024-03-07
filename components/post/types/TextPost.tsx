import { View, Text, Dimensions, Image, Pressable } from "react-native";
import React from "react";
import Animated, {
  FadeInDown,
  FadeOutDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { router } from "expo-router";

const TextPost = (props: { border: boolean }) => {
  const { width, height } = Dimensions.get("window");
  const scale = useSharedValue(1);

  const handlePressIn = () => {
    scale.value = withSpring(1.02);
  };
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
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
            type: "Text",
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
            height: height / 4.9,
            backgroundColor: props.border ? "#141414" : "transparent",
            alignSelf: "center",
            borderRadius: 20,
            padding: props.border ? 15 : 0,
            paddingBottom: props.border ? 17 : 0,
            marginBottom: props.border ? 0 : -10,
            marginTop: props.border ? 15 : 10,
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
              <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
                Jesse Pollack
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  marginTop: 1,
                  fontWeight: "400",
                }}
              >
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
            fontSize: 16,
            color: "lightgrey",
            marginTop: 9,
          }}
        >
          Rotten 🍅 review for #Oppenheimer is 93% which makes it certified
          fresh 🔥 Honestly can’t see how #Oppenheimer could not win this.{" "}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

export default TextPost;
