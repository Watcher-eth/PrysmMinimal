import { View, Text, Dimensions, ActivityIndicator, Image } from "react-native";
import React, { useState } from "react";
import {
  Award,
  Coins,
  MonitorUpIcon,
  Stars,
  Trophy,
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

const ProfilePage = () => {
  const { width, height } = Dimensions.get("window");
  const [page, setPage] = useState<number>(1);

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
            width: ((width / 10) * 6.9) / 16,
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
            height: 75,
            width: 75,
            borderRadius: 38,
            overflow: "hidden",
          }}
        />
        <Text
          style={{
            fontSize: 21,
            marginTop: 13,
            color: "lightgray",
            fontWeight: "700",
          }}
        >
          Alec.lens
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: "white",
            fontWeight: "700",
            marginRight: 5,
            marginTop: 5,
            marginBottom: 13,
          }}
        >
          $14,000.48
        </Text>
      </View>

      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            backgroundColor: "#1B1B1E",
            borderRadius: 8,
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
              <Text style={{ fontSize: 15, color: "gray", fontWeight: "700" }}>
                Rank
              </Text>
              <Text style={{ fontSize: 19, color: "white", fontWeight: "700" }}>
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
              <Text style={{ fontSize: 15, color: "gray", fontWeight: "700" }}>
                Points
              </Text>
              <Text style={{ fontSize: 19, color: "white", fontWeight: "700" }}>
                13250
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            backgroundColor: "#1B1B1E",
            borderRadius: 8,
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
        </View>
        <Text
          style={{
            fontSize: 19,
            color: "white",
            fontWeight: "700",

            marginRight: 5,
            marginBottom: 8,
            marginTop: 20,
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
