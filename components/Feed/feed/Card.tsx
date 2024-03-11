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
import {
  FadeInDown,
  FadeOutDown,
  useAnimatedStyle,
} from "react-native-reanimated";
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
  const screenWidth = Dimensions.get("window").width * 0.92;
  const screenHeight = Dimensions.get("window").height * 0.5;
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
        props.name === "2024 US Elections"
          ? router.navigate({
              pathname: "/featuredBet/123",
              params: {
                id: "123",
                name: "2024 US Elections",
                description:
                  "2024 US Elections for Congress, Senate and the Presidency",
                icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDLplaUZ71u8SY0N3AZuGXA77q92s-T2elw&usqp=CAU",
                image:
                  "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F31bac9d5-25be-4cef-9745-b75c82eb24d0.png?crop=1500%2C1000%2C0%2C0",
                topic: "USA",
              },
            })
          : router.navigate({
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
        entering={FadeInDown.duration(500)}
        exiting={FadeOutDown.duration(500)}
        style={[
          animatedStyle,
          {
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-end",

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
          sharedTransitionTag={name}
          source={{
            uri: image,
          }} // Replace 'your-image-url' with your image's URI
          style={{
            position: "absolute",

            width: screenWidth,
            height: screenHeight,
            borderRadius: 15,
            overflow: "hidden",
          }}
          resizeMode="cover"
        />
        <LinearGradient
          colors={[
            "rgba(7,7,7, 0.05)",
            "rgba(7,7,7, 0.15)",
            "rgba(7,7,7, 0.3)",
            "rgba(7,7,7, 0.5)",
            "transparent",
          ]}
          style={{
            position: "absolute",

            width: screenWidth,
            height: screenHeight / 2.5,
            borderRadius: 15,
            overflow: "hidden",
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 9,
            marginLeft: 12,
          }}
        >
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
            paddingLeft: 15,
          }}
        >
          <Image
            source={{ uri: icon }}
            style={{
              height: screenHeight * 0.115,
              width: screenHeight * 0.115,
              borderRadius: 5,
              marginRight: 3,
            }}
          />
          <Text
            style={{
              fontSize: 17,
              marginLeft: 8,
              lineHeight: 18,
              fontWeight: "500",
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
