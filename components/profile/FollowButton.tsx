import { View, Text, Pressable } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { UserRoundPlus } from "lucide-react-native";

const FollowButton = () => {
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
        style={[
          animatedStyle,
          {
            display: "flex",
            flexDirection: "row",
            padding: 10,
            borderRadius: 24,
            overflow: "hidden",
            backgroundColor: "#060606",
            width: 140,
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          },
        ]}
      >
        <UserRoundPlus color={"white"} height={18} strokeWidth={3.2} />
        <Text style={{ color: "white", fontWeight: "700", fontSize: 19 }}>
          Follow
        </Text>
      </Animated.View>
    </Pressable>
  );
};

export default FollowButton;
