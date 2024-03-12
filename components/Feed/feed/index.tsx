import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { feedData } from "../../../constants/feed";
import Card from "./Card";
import { FlashList, FlashListProps } from "@shopify/flash-list";
import ProfilePopover from "@/components/profile/profilePopover";
import TopicHeader from "../TopicHeader";
import Animated, {
  Extrapolate,
  Extrapolation,
  FadeInDown,
  FadeOut,
  FadeOutDown,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
const AnimatedFlashList = Animated.createAnimatedComponent(FlashList);

const Feed = () => {
  const { width } = Dimensions.get("window");
  const scrollY = useSharedValue(0); // Initializes a shared value for scroll position
  const lastScrollY = useSharedValue(0); // Track the last scroll position to determine scroll direction
  const [selectedTopic, setSelectedTopic] = useState("Trending"); // State to track selected topic

  const filteredFeedData =
    selectedTopic && selectedTopic !== "Trending"
      ? feedData.filter((item) => item.topic === selectedTopic)
      : feedData;

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const currentScrollPosition = event.contentOffset.y;
      scrollY.value = currentScrollPosition;
      lastScrollY.value =
        currentScrollPosition <= 0 ? 0 : currentScrollPosition; // Avoid negative values
    },
  });

  // useAnimatedStyle hook to create animated styles for the TopicHeader
  const headerStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [0, 100], // Adjust based on when you want the animation to start and end
      [0, -153], // Translate Y value, adjust based on your header's height
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      scrollY.value,
      [0, 80],
      [1, 0],
      Extrapolation.CLAMP
    );
    const marginTop = withSpring(
      interpolate(
        scrollY.value,
        [0, 100], // Start changing marginTop after 500 units of scroll
        [0, -160], // Change from 0 to -90
        Extrapolation.CLAMP
      ),
      {
        damping: 20, // Adjust damping for the effect of "bounciness"
        stiffness: 100, // Adjust stiffness for the speed of the animation
      }
    );

    const paddingTop = interpolate(
      scrollY.value,
      [lastScrollY.value - 500, lastScrollY.value], // Reappear the header after scrolling up 500 units from the last position
      [0, -90], // Padding from -90 back to 0
      Extrapolation.CLAMP
    );

    return {
      transform: [{ translateY }],
      opacity,
      marginTop: marginTop,
    };
  });

  return (
    <View
      style={{
        flex: 1,
        width,
        justifyContent: "center",
        paddingTop: 5,
        backgroundColor: "#101010",
      }}
    >
      {/* Animated TopicHeader */}
      <Animated.View style={headerStyle}>
        <TopicHeader
          setSelectedTopic={setSelectedTopic}
          selectedTopic={selectedTopic}
        />
      </Animated.View>
      <AnimatedFlashList
        data={filteredFeedData}
        renderItem={({ item, index }) => (
          <Animated.View
            entering={FadeInDown.duration(500)}
            exiting={FadeOut.duration(500)}
            key={index}
            style={{ alignSelf: "center" }}
          >
            <Card {...item} />
          </Animated.View>
        )}
        estimatedItemSize={4}
        centerContent={true}
        onScroll={scrollHandler}
        scrollEventThrottle={16} // Improve scroll performance by limiting the frequency of events
      />
    </View>
  );
};

export default Feed;
