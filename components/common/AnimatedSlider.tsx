import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const AnimatedSlider = ({ onValueChange }) => {
  const [sliderValue, setSliderValue] = useState(0);
  const scale = useSharedValue(3.3);
  const scaleY = useSharedValue(3.3);

  const textOpacity = useSharedValue(0); // Controls the opacity of the text elements

  //TODO: Get user balance
  const userBalance = 221;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleX: scale.value }, { scaleY: scaleY.value }],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
      transform: [{ scaleY: 1 }],
    };
  });

  const handlePressIn = () => {
    scaleY.value = withSpring(4);
    textOpacity.value = withTiming(1); // Make text visible
  };

  const handlePressOut = () => {
    scaleY.value = withSpring(3.35);
    textOpacity.value = withTiming(0); // Hide text
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.sliderContainer, animatedStyle]}>
        <Slider
          style={[
            styles.slider,
            { transform: [{ scale: 3.35 }], scaleY: 3.35, scaleX: 3.35 },
          ]}
          minimumValue={0}
          tapToSeek={true}
          maximumValue={221}
          minimumTrackTintColor={"rgba(250, 250, 250, 0.85)"}
          maximumTrackTintColor={"rgba(250, 250, 250, 0.4)"}
          onValueChange={(value) => {
            setSliderValue(value);
            onValueChange(value); // Call the passed in function with the new value
          }}
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
    marginTop: 13,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  sliderContainer: {
    width: 280,
    height: 100,

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    position: "relative", // Allows absolute positioning of the text elements
  },
  slider: {
    width: 107,
    height: 120,
    transform: [{ scale: 3 }],
  },
  text: {
    position: "absolute",
    fontSize: 8,
    fontWeight: "700",
  },
  leftText: {
    color: "white",

    left: -38,
    bottom: 44.5, // Adjust based on your slider's dimensions
  },
  rightText: {
    color: "black",

    right: -38,
    bottom: 44.5, // Adjust based on your slider's dimensions
  },
});

export default AnimatedSlider;
