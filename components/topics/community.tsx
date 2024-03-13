import { View, Text, Dimensions, Image, Pressable } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { BetType, CardType } from "@/types/FeedTypes";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { AvatarGroup } from "@/components/common/Avatar";
import BetFeed from "@/components/Bet/BetFeed";
import { ScrollView } from "react-native-gesture-handler";
import PollingComponent from "@/components/Bet/BetSlider";
import { ChevronLeft, Share, Stars, Users } from "lucide-react-native";
import AnimatedPressable from "@/components/common/AnimatedPressable";
import VoteSideBet from "@/components/Bet/Vote/SideBet";
import { BetModalPropData } from "@/constants/testData";
import { BetBigView, BetSmallView } from "./TrendingBets";
import PostFeed, { CommunityFeed } from "../Feed/PostFeed";

const FeaturedBet = (props: BetType) => {
  const { name, description, image, icon, topic, id } = props;
  const { width, height } = Dimensions.get("window");
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const IMG_HEIGHT = height / 2.3;

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 1.5], [0, 1]),
    };
  });
  console.log("route", id, name);
  return (
    <Animated.ScrollView
      ref={scrollRef}
      scrollEventThrottle={16}
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: width,

        backgroundColor: "#070707",
      }}
    >
      <Pressable
        onPress={() => {
          router.back();
        }}
        style={{
          height: 30,
          width: 30,
          backgroundColor: "rgba(100, 100, 100, 0.4)",
          borderRadius: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 40,
          zIndex: 4,
          left: 20,
        }}
      >
        <ChevronLeft height={21} color={"white"} strokeWidth={4} />
      </Pressable>
      <Pressable
        onPress={() => {
          router.back();
        }}
        style={{
          height: 30,
          width: 30,
          backgroundColor: "rgba(100, 100, 100, 0.4)",
          borderRadius: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 40,
          zIndex: 4,
          right: 20,
        }}
      >
        <Share height={16} color={"white"} strokeWidth={4} />
      </Pressable>

      <Animated.Image
        sharedTransitionTag={"shared"}
        source={{
          uri: image,
        }}
        style={[{ width: width, height: IMG_HEIGHT }, imageAnimatedStyle]}
      />

      <LinearGradient
        // Background Linear Gradient
        colors={[
          "transparent",
          "#070707",

          "#070707",
          "#070707",
          "#070707",
          "#070707",
          "#070707",
        ]}
        style={{
          width: width,
          height: height * 1.45,
          position: "absolute",
          top: height * 0.19,
        }}
      />
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          margin: 19,
          marginTop: -60,
        }}
      >
        <Text
          style={{
            fontSize: 36,
            fontWeight: "700",
            color: "white",
            marginBottom: 13,
            marginLeft: -6,
          }}
        >
          {name}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 13,
            marginLeft: -6,
            marginBottom: 12,
          }}
        >
          <Stars color={"white"} strokeWidth={2.9} height={20} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "white",
              marginLeft: 4,
            }}
          >
            Trending Bets
          </Text>
        </View>
        <BetBigView
          {...{
            index: 1,
            title: "Presidency",
            topic: "USA",
            image:
              "https://e3.365dm.com/20/10/2048x1152/skynews-us-election-2020-polling_5131912.jpg",
            question:
              "Who will become the 77th President of the United States?",
            option2: {
              name: "Trump",
              amount: 58,
              image:
                "https://news.northeastern.edu/wp-content/uploads/2022/07/Donald_Trump_1400-1.jpg",
            },
            option1: {
              name: "Biden",
              amount: 42,
              image:
                "https://s.abcnews.com/images/International/biden-michigan-ap-rc-200909_hpMain.jpg",
            },
          }}
        />
        <BetSmallView
          {...{
            index: 2,

            title: "Senate Majority",
            topic: "USA",
            image:
              "https://msmagazine.com/wp-content/uploads/2020/07/The-2020-Battle-for-Control-of-the-U.S.-Senate-Heats-Up.jpg",
            question: "Who will win a majority in the Senate?",
            option2: {
              name: "Republicans",
              amount: 58,
              image:
                "https://news.northeastern.edu/wp-content/uploads/2022/07/Donald_Trump_1400-1.jpg",
            },
            option1: {
              name: "Democrates",
              amount: 42,
              image:
                "https://s.abcnews.com/images/International/biden-michigan-ap-rc-200909_hpMain.jpg",
            },
          }}
        />
        <BetBigView
          {...{
            index: 3,

            title: "Republican Nominee",
            topic: "GOP",
            image:
              "https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A710dbed6-33c9-4ec9-bec0-82dfb0dfa17b?source=next-article&fit=scale-down&quality=highest&width=1440&dpr=1",
            question:
              "Who will be the Republican Nominee for the 2024 elections?",
            option2: {
              name: "Trump",
              amount: 62,
              image:
                "https://news.northeastern.edu/wp-content/uploads/2022/07/Donald_Trump_1400-1.jpg",
            },
            option1: {
              name: "Haley",
              amount: 38,
              image:
                "https://static01.nyt.com/images/2024/03/06/multimedia/06haley-HP-tqvp/06haley-HP-tqvp-square640-v4.jpg",
            },
          }}
        />
        <BetSmallView
          {...{
            index: 4,

            title: "Super Tuesday",
            topic: "USA",
            image:
              "https://fivethirtyeight.com/wp-content/uploads/2023/01/2023-ELECTIONS-4x3-1.jpg?w=916",
            question: "Who will win the Super Tuesday Primaries?",
            option2: {
              name: "Trump",
              amount: 58,
              image:
                "https://news.northeastern.edu/wp-content/uploads/2022/07/Donald_Trump_1400-1.jpg",
            },
            option1: {
              name: "Biden",
              amount: 42,
              image:
                "https://s.abcnews.com/images/International/biden-michigan-ap-rc-200909_hpMain.jpg",
            },
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 13,
          }}
        >
          <Users color={"white"} strokeWidth={3.3} height={20} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "white",
              marginLeft: 4,
            }}
          >
            Community
          </Text>
        </View>
        <CommunityFeed />
      </View>
    </Animated.ScrollView>
  );
};

export default FeaturedBet;
