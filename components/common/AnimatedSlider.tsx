import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const AnimatedSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const scale = useSharedValue(1);
  const textOpacity = useSharedValue(0); // Controls the opacity of the text elements

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: scale.value }],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
      transform: [{ scaleY: 1 }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(2.5);
    textOpacity.value = withTiming(1); // Make text visible
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
    textOpacity.value = withTiming(0); // Hide text
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.sliderContainer, animatedStyle]}>
        <Slider
          style={[styles.slider, { transform: [{ scale: 3 }] }]}
          minimumValue={0}
          tapToSeek={true}
          maximumValue={2}
          minimumTrackTintColor={"rgba(255, 255, 255, 0.75)"}
          maximumTrackTintColor={"rgba(150, 150, 150, 0.4)"}
          onValueChange={setSliderValue}
          onTouchStart={handlePressIn}
          onTouchEnd={handlePressOut}
          thumbTintColor={"transparent"}
        />
        <Animated.Text
          style={[styles.text, styles.leftText, animatedTextStyle]}
        >
          {sliderValue.toFixed(2)}
        </Animated.Text>
        <Animated.Text
          style={[styles.text, styles.rightText, animatedTextStyle]}
        >
          2 {/* Assuming 2 is the maximum value */}
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  sliderContainer: {
    width: 220,
    height: 100,

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    position: "relative", // Allows absolute positioning of the text elements
  },
  slider: {
    width: 100,
    height: 200,
    transform: [{ scale: 3 }],
  },
  text: {
    position: "absolute",
    fontSize: 8,
    fontWeight: "700",
  },
  leftText: {
    color: "black",

    left: -18,
    bottom: 44.5, // Adjust based on your slider's dimensions
  },
  rightText: {
    color: "white",

    right: -18,
    bottom: 44.5, // Adjust based on your slider's dimensions
  },
});

export default AnimatedSlider;
