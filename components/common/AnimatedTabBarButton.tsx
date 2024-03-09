import { Pressable, StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const ACTIVE_COLOR = "white";
export const INACTIVE_COLOR = "gray";
export function TabBarButton({ icon, title, onPress, focused }: any) {
  const color = focused ? ACTIVE_COLOR : INACTIVE_COLOR;
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  const handlePress = () => {
    // Add haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    // Call the original onPress handler
    onPress();
  };

  return (
    <AnimatedPressable
      onPress={handlePress}
      onPressIn={() => {
        scale.value = withSpring(0.95);
      }}
      onPressOut={() => {
        scale.value = withSpring(1);
      }}
      style={[styles.pressable, animatedStyle]}
    >
      {icon({ focused, color })}
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    marginTop: 2,
    fontSize: 11,
  },
});
