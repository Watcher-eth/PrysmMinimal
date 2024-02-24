import React from "react";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import { BlurView } from "expo-blur";
import { useAnimatedStyle } from "react-native-reanimated";
import {
  withSpring,
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const Card = (props: {
  name: any;
  description: any;
  topic: any;
  image: any;
  icon: any;
}) => {
  const screenWidth = Dimensions.get("window").width * 0.88;
  const screenHeight = Dimensions.get("window").height * 0.47;
  const { name, description, topic, image, icon } = props;
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(1.02);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <Pressable
      onPress={() => {
        router.navigate({
          pathname: "[id]",
          params: {
            id: "123",
            name: name,
            description: description,
            icon: icon,
            image: image,
            topic: topic,
          },
        });
      }}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={[
          animatedStyle,
          {
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingLeft: 10,
            marginVertical: 15,
            width: screenWidth,
            height: screenHeight,
            borderRadius: 15,
            overflow: "hidden",
            position: "relative",
          },
        ]}
      >
        <Animated.Image
          sharedTransitionTag="CardImage"
          source={{
            uri: image,
          }} // Replace 'your-image-url' with your image's URI
          style={{
            position: "absolute",
            margin: 10,
            width: screenWidth,
            height: screenHeight,
            borderRadius: 15,
            overflow: "hidden",
          }}
          resizeMode="cover" // This prop determines how to resize the image when the frame doesn't match the raw image dimensions
        />

        <View style={{ display: "flex", flexDirection: "column", margin: 9 }}>
          <Text
            style={{
              fontSize: 52,
              color: "#ffffff",
              fontWeight: "900",
              paddingRight: 50,
              lineHeight: 50,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "#ffffff",
              opacity: 0.9,
              marginTop: -6,
            }}
          >
            {topic}
          </Text>
        </View>
        <BlurView
          intensity={90}
          tint="dark"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: screenWidth,
            height: screenHeight * 0.18,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            overflow: "hidden",
            paddingLeft: 10,
          }}
        >
          <Image
            source={{ uri: icon }}
            style={{
              height: screenHeight * 0.11,
              width: screenHeight * 0.11,
              borderRadius: 7,
              marginRight: 3,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              marginLeft: 4,
              lineHeight: 17,
              color: "#ffffff",
              opacity: 0.9,
              maxWidth: screenWidth * 0.78,
            }}
          >
            {description}
          </Text>
        </BlurView>
      </Animated.View>
    </Pressable>
  );
};

export default Card;
