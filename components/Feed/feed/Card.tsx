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
  FadeOut,
  FadeOutDown,
  FadeOutUp,
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
import AnimatedPressable from "@/components/common/AnimatedPressable";
import { Stars } from "lucide-react-native";
import AnimatedSlider from "@/components/common/AnimatedSlider";

const Card = (props: {
  name: any;
  description: any;
  topic: any;
  image: any;
  icon: any;
  total: string;
  multiplier: number;
}) => {
  const screenWidth = Dimensions.get("window").width * 0.92;
  const screenHeight = Dimensions.get("window").height * 0.5;
  const { name, description, topic, image, icon, optionA, optionB } = props;
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
        exiting={FadeOutUp.duration(500)}
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
        <AnimatedPressable
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 9,
            position: "absolute",
            algignSelf: "flex-start",
            top: -screenHeight / 2.2,
            right: 11,
          }}
        >
          <BlurView
            intensity={40}
            tint="systemUltraThinMaterialDark"
            style={{
              padding: 10,
              paddingVertical: 8,
              borderRadius: 120,
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 9,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#ffffff",
                opacity: 0.9,

                fontWeight: "600",
              }}
            >
              /{topic}
            </Text>
          </BlurView>
        </AnimatedPressable>
        <LinearGradient
          colors={[
            "rgba(7,7,7, 0.05)",
            "rgba(7,7,7, 0.2)",
            "rgba(7,7,7, 0.3)",
            "rgba(7,7,7, 0.4)",
            "rgba(7,7,7, 0.5)",
            "rgba(7,7,7, 0.6)",
            "rgba(7,7,7, 0.5)",
            "rgba(7,7,7, 0.6)",

            "rgba(7,7,7, 0)",
          ]}
          style={{
            position: "absolute",

            width: screenWidth,
            height: screenHeight / 2,
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
              fontSize: 40,
              color: "#ffffff",
              fontWeight: "900",
              paddingRight: 65,
              lineHeight: 42,
              marginBottom: 5,
              fontFamily: "BenzinBold",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: 15.5,
              color: "#ffffff",
              opacity: 0.9,
              marginTop: -6,
              fontWeight: "600",
              paddingRight: 50,
              fontFamily: "AeonikRegular",
            }}
          >
            {description}
          </Text>
        </View>

        <BlurView
          intensity={90}
          tint="dark"
          style={{
            display: "flex",
            flexDirection: " column",
            alignItems: "center",
            width: screenWidth,
            height: screenHeight * 0.22,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            overflow: "hidden",
            paddingHorizontal: 8,
            paddingVertical: 13,
            paddingRight: 9,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "95%",
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "space-between",
              marginBottom: -5,
              marginLeft: -1,
              paddingTop: -5,
            }}
          >
            <Text
              style={{
                fontSize: 19,
                color: "#ffffff",
                fontFamily: "AeonikBold",
                fontWeight: "700",
              }}
            >
              {optionA.name}
            </Text>
            <Text
              style={{
                fontSize: 19,
                color: "#ffffff",
                fontFamily: "AeonikBold",
                fontWeight: "700",
              }}
            >
              {optionB.name}
            </Text>
          </View>
          <View style={{ width: "95%", marginVertical: 5 }}>
            <AnimatedSlider
              onValueChange={() => {
                return;
              }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "95%",
              alignItems: "center",
              justifyContent: "space-between",
              marginLeft: -1,
              marginTop: 8,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#9D9D9D",
                opacity: 0.9,
                fontWeight: "700",
                fontFamily: "AeonikBold",
              }}
            >
              {optionA.multiplier}x Payout
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#9D9D9D",
                opacity: 0.9,
                fontWeight: "700",
                fontFamily: "AeonikBold",
              }}
            >
              {optionB.multiplier}x Payout
            </Text>
          </View>
        </BlurView>
      </Animated.View>
    </Pressable>
  );
};

export default Card;
