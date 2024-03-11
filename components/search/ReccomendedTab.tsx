import { View, Text, Dimensions, Image, Pressable } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import AnimatedPressable from "../common/AnimatedPressable";

const ReccomendedTab = () => {
  const { width, height } = Dimensions.get("window");

  return (
    <Animated.View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: width / 1.21,
        height: width / 2.15,
        borderRadius: 13,
        paddingBottom: 30,
        marginTop: 10,
        gap: 1,
      }}
    >
      <RecomendedProfile />
      <RecomendedCommunity />
    </Animated.View>
  );
};

export default ReccomendedTab;

const RecomendedProfile = () => {
  const { width, height } = Dimensions.get("window");

  return (
    <AnimatedPressable onPress={() => {}}>
      <Animated.View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: width / 2.58,
          height: width / 2.5,
          borderRadius: 13,

          backgroundColor: "pink",
        }}
      >
        <Image
          source={{
            uri: "https://pbs.twimg.com/profile_images/1713576030063972352/qEdjq6VQ_400x400.jpg",
          }}
          style={{
            width: width / 2.44,
            height: width / 2.44,
            borderRadius: 9,
            overflow: "hidden",
            position: "absolute",
          }}
        />
        <BlurView
          intensity={60.5}
          tint="regular"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: width / 2.44,
            height: width / 2.44,

            borderRadius: 9,
            overflow: "hidden",
            paddingLeft: 10,
            position: "absolute",
            bottom: 0,
          }}
        />
        <Image
          source={{
            uri: "https://res.cloudinary.com/merkle-manufactory/image/fetch/c_fill,f_png,w_168/https%3A%2F%2Fopenseauserdata.com%2Ffiles%2Ffd28c65d9b5192168fb259009a3afd36.png",
          }}
          style={{
            width: width / 4.4,
            height: width / 4.4,
            borderRadius: 100,
            marginTop: 9,

            overflow: "hidden",
          }}
        />
        <Text
          style={{
            color: "white",
            fontWeight: "700",
            marginTop: 6,
            fontSize: 15.5,
          }}
        >
          Ted (Not Lasso)
        </Text>
        <TouchableOpacity
          style={{
            padding: 1,
            marginTop: 6,
            paddingHorizontal: 5,
            borderWidth: 2,
            borderColor: "white",
            borderStyle: "dashed",
            borderRadius: 9,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "700",

              fontSize: 13.5,
            }}
          >
            Follow
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </AnimatedPressable>
  );
};

const RecomendedCommunity = () => {
  const { width, height } = Dimensions.get("window");

  return (
    <AnimatedPressable onPress={() => {}}>
      <Animated.View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: width / 2.43,
          height: width / 2.43,
          borderRadius: 13,
          backgroundColor: "pink",
        }}
      >
        <Image
          source={{
            uri: "https:/raw.githubusercontent.com/farcasterxyz/.github/master/farcaster.jpg",
          }}
          style={{
            width: width / 2.44,
            height: width / 2.44,
            borderRadius: 9,
            overflow: "hidden",
            position: "absolute",
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "flex-start",
            marginLeft: 9,
            marginTop: 9,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "700",

              fontSize: 19.5,
            }}
          >
            Farcaster
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "500",

              fontSize: 14,
            }}
          >
            Trending
          </Text>
        </View>
      </Animated.View>
    </AnimatedPressable>
  );
};
