import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

// Custom hook for scale animation
export const useScaleAnimation = () => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(1.021);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  return { animatedStyle, handlePressIn, handlePressOut };
};
