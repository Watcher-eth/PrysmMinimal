import { useScaleAnimation } from "@/lib/hooks/useScaleAnimation";
import React from "react";
import { View, Pressable, Text } from "react-native";
import Animated from "react-native-reanimated";

const AnimatedPressable = ({ children, onPress, style }) => {
  const { animatedStyle, handlePressIn, handlePressOut } = useScaleAnimation();

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>
    </Pressable>
  );
};
export default AnimatedPressable;
