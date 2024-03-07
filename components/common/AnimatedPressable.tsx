import { useScaleAnimation } from "@/lib/hooks/useScaleAnimation";
import React from "react";
import { View, Pressable, Text } from "react-native";
import Animated from "react-native-reanimated";
import * as Haptics from "expo-haptics";

const AnimatedPressable = ({ children, onPress, style }) => {
  const { animatedStyle, handlePressIn, handlePressOut } = useScaleAnimation();
  const handlePress = () => {
    // Add haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    // Call the original onPress handler
    onPress();
  };

  return (
    <Pressable
      onPress={handlePress} // Use the modified onPress handler
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>
    </Pressable>
  );
};
export default AnimatedPressable;
