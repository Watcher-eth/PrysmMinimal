import { View, Text, Dimensions, ActivityIndicator, Image } from "react-native";
import React, { useState } from "react";
import {
  Award,
  ChevronLeft,
  Coins,
  MonitorUpIcon,
  Share,
  Stars,
  Trophy,
  UserPlus,
} from "lucide-react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityPropData } from "@/constants/testData";
import UserPredictions from "./UserPredictions";
import { BlurView } from "expo-blur";
import Animated, {
  FadeInLeft,
  FadeInRight,
  FadeOutRight,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import AnimatedPressable from "../common/AnimatedPressable";
import { router } from "expo-router";
const { width, height } = Dimensions.get("window");

const ProfilePage = () => {
  const [page, setPage] = useState<number>(1);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: 20,
        paddingTop: 65,
        backgroundColor: "#101010",
        height: height,
      }}
    >
      <Image
        source={{
          uri: "https://pbs.twimg.com/profile_images/1484766329798213634/pIfL_r6Y_400x400.jpg",
        }}
        style={{
          height: 110,
          width: "120%",
          overflow: "hidden",
          position: "absolute",
        }}
      />
      <BlurView
        intensity={18}
        style={{
          height: 110,
          width: "120%",
          overflow: "hidden",
          position: "absolute",
        }}
      />
      <LinearGradient
        colors={["transparent", "#101010"]}
        style={{
          height: 100,
          width: "120%",
          overflow: "hidden",
          position: "absolute",
          top: 10,
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://pbs.twimg.com/profile_images/1484766329798213634/pIfL_r6Y_400x400.jpg",
          }}
          style={{
            height: 85,
            width: 85,
            borderRadius: 43,
            overflow: "hidden",
            borderWidth: 4,
            borderColor: "#202020",
          }}
        />
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            color: "white",
            fontWeight: "700",
            fontFamily: "AeonikBold",
          }}
        >
          Alec.eth
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "50%",
            alignItems: "center",

            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "lightgray",
              padding: 8,
              paddingHorizontal: 12,
              backgroundColor: "#1B1B1E",
              borderRadius: 15,
              overflow: "hidden",
              fontWeight: "700",
              marginRight: 5,
              marginTop: 8,
              alignSelf: "center",
              marginBottom: 10,
            }}
          >
            $14,000.48
          </Text>
          <AnimatedPressable
            onPress={() => {
              return;
            }}
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 8,
              paddingHorizontal: 12,
              backgroundColor: "#1B1B1E",
              borderRadius: 15,
              overflow: "hidden",
              alignItems: "center",
              padding: 8,
              marginBottom: 10,
            }}
          >
            <UserPlus color={"lightgray"} strokeWidth={3} height={15} />
            <Text
              style={{
                fontSize: 14,
                color: "lightgray",

                fontWeight: "700",

                alignSelf: "center",
              }}
            >
              Follow
            </Text>
          </AnimatedPressable>
        </View>
      </View>

      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            backgroundColor: "#1B1B1E",
            borderRadius: 15,
            height: 65,
            marginTop: 5,
            paddingVertical: 4,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Trophy
              color="white"
              style={{ height: 55, width: 55, marginRight: 10, minHeight: 55 }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "gray",
                  fontWeight: "700",
                  fontFamily: "AeonikRegular",
                }}
              >
                Rank
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  color: "white",
                  fontWeight: "700",
                  fontFamily: "AeonikBold",
                }}
              >
                1248
              </Text>
            </View>
          </View>
          <View
            style={{ height: 50, width: 1, backgroundColor: "gray" }}
          ></View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stars
              color="white"
              style={{ height: 55, width: 55, marginRight: 10, minHeight: 55 }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "gray",
                  fontWeight: "700",
                  fontFamily: "AeonikRegular",
                }}
              >
                Points
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  color: "white",
                  fontWeight: "700",
                  fontFamily: "AeonikBold",
                }}
              >
                13250
              </Text>
            </View>
          </View>
        </View>
        <TruthyPredictionsSmall />
        <Text
          style={{
            fontSize: 19,
            color: "white",
            fontWeight: "700",

            marginRight: 5,
            marginBottom: 8,
            marginTop: 20,
            fontFamily: "AeonikBold",
          }}
        >
          Your Predictions
        </Text>
        {ActivityPropData.map((item, index) => {
          return (
            <UserPredictions
              index={index}
              title={item.title}
              question={item.question}
              image={item.image}
              amount={item.amount}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ProfilePage;

export const TruthyPredictionsSmall = () => {
  const renderRecentPredictions = () => {
    const views = [];
    for (let i = 0; i < 14; i++) {
      const backgroundColor =
        Math.random() < 0.5 ? "#404040" : "rgba(255,255,255, 0.8)"; // Randomly choose between lightgray and white
      views.push(
        <Animated.View
          entering={FadeInLeft.duration((70 * i) / 2)}
          exiting={FadeOutRight.duration((70 * i) / 2)}
          key={i}
          style={{
            height: 48,
            width: ((width / 10) * 6.6) / 16,
            borderRadius: 8,
            backgroundColor,

            marginBottom: 8, // Add margin bottom between each view
          }}
        />
      );
    }
    return views;
  };
  return (
    <AnimatedPressable
      onPress={() =>
        router.navigate({
          pathname: "recentPredictions",
        })
      }
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#1B1B1E",
        borderRadius: 14,
        height: 100,
        marginTop: 15,
        paddingVertical: 12,
        padding: 12,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "gray",
            fontWeight: "700",
          }}
        >
          Recent
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "white",
            fontWeight: "700",
          }}
        >
          12/20 Predictions correct
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: 8,
          alignItems: "center",
          marginTop: 12,
          marginBottom: 2,
        }}
      >
        {renderRecentPredictions()}
      </View>
    </AnimatedPressable>
  );
};
