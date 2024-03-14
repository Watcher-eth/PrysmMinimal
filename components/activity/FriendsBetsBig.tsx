import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import { Vote } from "lucide-react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
const { height, width } = Dimensions.get("window");

const FriendsBetsBig = (props: {
  name: string;
  pfp: string;
  vote: string;
  title: string;
  question: string;
  image: string;
}) => {
  const { title, pfp, question, name, image, vote } = props;
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: width / 1,
        height: height / 3.5,
        padding: 10,
        borderRadius: 12,
        alignSelf: "center",
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          width: width / 1,
          height: height / 3.5,
          position: "absolute",
          borderRadius: 12,
          overflow: "hidden",
        }}
      />
      <LinearGradient
        colors={["#070707", "rgb(50,50,50, 0.5)", "transparent"]}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: width / 1,
          position: "absolute",
          height: 50,
          borderRadius: 12,
          marginTop: -0.5,
          overflow: "hidden",
        }}
      ></LinearGradient>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: width / 1.05,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: pfp }}
            style={{
              width: 20,
              height: 20,

              borderRadius: 13,
              overflow: "hidden",
            }}
          />
          <Text
            style={{
              fontSize: 15,
              color: "white",
              fontWeight: "700",
              marginLeft: 5,
              fontFamily: "AeonikBold",
            }}
          >
            {name}
          </Text>
        </View>
        <BlurView
          intensity={40}
          tint="systemUltraThinMaterialDark"
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 8,
            paddingVertical: 6,
            borderRadius: 19,
            overflow: "hidden",
            alignItems: "center",
          }}
        >
          <Vote height={20} color={"white"} strokeWidth={3} />
          <Text
            style={{
              fontSize: 15,
              color: "white",
              fontWeight: "700",
              marginLeft: 5,
            }}
          >
            {vote}
          </Text>
        </BlurView>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",

          width: width / 1.05,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600",
            color: "white",
            fontFamily: "AeonikBold",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: "white",
            opacity: 0.9,
            fontFamily: "AeonikRegular",
          }}
        >
          {question}
        </Text>
      </View>
    </View>
  );
};

export default FriendsBetsBig;

import { Pressable } from "react-native";
import { useRef } from "react";
import CreateBet from "@/components/create/Bet";
import FindFriends from "@/components/Onboarding/Friends/FindFriends";
import VoteSideBet from "@/components/Bet/Vote/SideBet";
import { BetModalPropData } from "@/constants/testData";
import { ScrollView } from "react-native-gesture-handler";
import { BetBigView, BetSmallView } from "@/components/topics/TrendingBets";
import { router } from "expo-router";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useToggleButton } from "../hooks/useToggleButton";

export const FriendsBetCarousel = () => {
  const [isVertical, setIsVertical] = React.useState(false);
  const [autoPlay, setAutoPlay] = React.useState(false);
  const [pagingEnabled, setPagingEnabled] = React.useState<boolean>(true);
  const [snapEnabled, setSnapEnabled] = React.useState<boolean>(true);
  const progressValue = useSharedValue<number>(0);
  const SliderRef = useRef<ICarouselInstance>();
  const baseOptions = isVertical
    ? ({
        vertical: true,
        width: width * 0.86,
        height: width * 0.6,
      } as const)
    : ({
        vertical: false,
        width: width,
        height: width * 0.6,
      } as const);
  const colors = [
    "#26292E",
    "#899F9C",
    "#B3C680",
    "#5C6265",
    "#F5D399",
    "#F1F1F1",
  ];
  const index = SliderRef.current?.getCurrentIndex();
  console.log("Index", index);
  return (
    <ScrollView style={{ flex: 1 }}>
      <Carousel
        {...baseOptions}
        style={{
          width: width,
          alignSelf: "center",
        }}
        loop
        pagingEnabled={pagingEnabled}
        snapEnabled={snapEnabled}
        autoPlay={autoPlay}
        autoPlayInterval={1500}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        ref={SliderRef}
        mode="parallax"
        data={colors}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        renderItem={({ index }) => (
          <FriendsBetsBig
            name="Christina"
            pfp="https://pbs.twimg.com/profile_images/1766590729730629632/TdA7IzIa_400x400.jpg"
            title="Oppenheimer Best Picture"
            question="Will Oppenheimer win the Oscar for Best Picture?"
            vote="Yes"
            image="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
          />
        )}
      />
      {!!progressValue && (
        <View
          style={
            isVertical
              ? {
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: 10,
                  alignSelf: "center",
                  position: "absolute",
                  right: 5,
                  top: 40,
                }
              : {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: 120,
                  alignSelf: "center",
                }
          }
        >
          {colors.map((backgroundColor, index) => {
            return (
              <PaginationItem
                backgroundColor={backgroundColor}
                animValue={progressValue}
                index={index}
                key={index}
                isRotate={isVertical}
                length={colors.length}
              />
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};

const PaginationItem = ({
  index,
  backgroundColor,
  length,
  animValue,
  isRotate,
}) => {
  const baseSize = 10; // Base size for all items to maintain them round
  const selectedSize = baseSize * 3; // Size for the selected item

  const animStyle = useAnimatedStyle(() => {
    const inputRange = [index - 1, index, index + 1];
    const isCurrent = animValue.value >= index && animValue.value < index + 1;

    const backgroundColor = isCurrent ? "white" : "rgb(200, 200, 200)";
    const size = interpolate(
      animValue.value,
      inputRange,
      [baseSize, selectedSize, baseSize],
      Extrapolation.CLAMP
    );

    return {
      width: size,
      height: baseSize, // Keep the height constant to maintain the round shape
      borderRadius: baseSize / 2, // Ensure the borderRadius is half of the height
      backgroundColor, // Dynamically set the background color
    };
  }, [animValue, index, length]);

  return (
    <View
      style={{
        height: baseSize,
        borderRadius: 50,
        overflow: "hidden",
        margin: 2, // Add some space between items
        marginTop: 8,
        transform: [{ rotateZ: isRotate ? "90deg" : "0deg" }],
      }}
    >
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor: "rgb(200,200,200)",
            height: "100%", // Keep height consistent
          },
          animStyle,
        ]}
      />
    </View>
  );
};
const DATA = ["Friends", "Global"];

export function AnimatedTabBar() {
  const r = React.useRef<ICarouselInstance>(null);
  const AutoPLay = useToggleButton({
    defaultValue: false,
    buttonTitle: "AutoPlay",
  });
  const [loop, setLoop] = React.useState(false);
  const PAGE_WIDTH = 70;
  const PAGE_HEIGHT = 40;
  return (
    <View style={{ marginVertical: 10, marginBottom: 0, marginHorizontal: 3 }}>
      <Carousel
        key={`${loop}`}
        ref={r}
        loop={loop}
        style={{
          width: width / 2,
          height: PAGE_HEIGHT,

          alignItems: "center",
        }}
        width={PAGE_WIDTH}
        height={PAGE_HEIGHT}
        data={DATA}
        renderItem={({ item, animationValue }) => {
          return (
            <Item
              animationValue={animationValue}
              label={item}
              onPress={() =>
                r.current?.scrollTo({
                  count: animationValue.value,
                  animated: true,
                })
              }
            />
          );
        }}
        autoPlay={AutoPLay.status}
      />
    </View>
  );
}
interface Props {
  animationValue: Animated.SharedValue<number>;
  label: string;
  onPress?: () => void;
}
const Item: React.FC<Props> = (props) => {
  const { animationValue, label, onPress } = props;

  const translateY = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0.5, 1, 0.5],
      Extrapolation.CLAMP
    );

    return {
      opacity,
    };
  }, [animationValue]);

  const labelStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [1, 1.2, 1],
      Extrapolation.CLAMP
    );

    const color = interpolateColor(
      animationValue.value,
      [-1, 0, 1],
      ["gray", "white", "gray"]
    );

    return {
      transform: [{ scale }, { translateY: translateY.value }],
      color,
    };
  }, [animationValue, translateY]);

  const onPressIn = React.useCallback(() => {
    translateY.value = withTiming(-8, { duration: 250 });
  }, [translateY]);

  const onPressOut = React.useCallback(() => {
    translateY.value = withTiming(0, { duration: 250 });
  }, [translateY]);

  return (
    <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View
        style={[
          {
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          },
          containerStyle,
        ]}
      >
        <Animated.Text
          style={[
            { fontSize: 16, color: "white", fontWeight: "600" },
            labelStyle,
          ]}
        >
          {label}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
};
