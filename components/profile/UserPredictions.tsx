import { View, Text, Image } from "react-native";
import React from "react";
import AnimatedPressable from "../common/AnimatedPressable";
import { ActivityPropData } from "@/constants/testData";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import { router } from "expo-router";

const UserPredictions = (props: {
  index: number;
  image: string;
  question: string;
  amount: string;
  title: string;
  resolved?: string;
}) => {
  const { image, index, question, amount, title } = props;
  return (
    <AnimatedPressable
      onPress={() =>
        router.navigate({
          pathname: "modal",
          params: {
            id: index,
            name: title,
            description: question,
            icon: "icon",
            image: image,
            topic: "topic",
          },
        })
      }
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginVertical: 5,
        backgroundColor: "#1B1B1E",
        maxWidth: "100%",
        minWidth: "100%",
      }}
    >
      <Animated.View
        entering={FadeInDown.duration(500)}
        exiting={FadeOutDown.duration(500)}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 7,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{
            height: 55,
            width: 55,
            borderRadius: 8,
            overflow: "hidden",
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text style={{ fontSize: 17, color: "white", fontWeight: "700" }}>
            {title}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 14.5,
              color: "lightgray",
              fontWeight: "600",
              maxWidth: "84%",
            }}
          >
            {question}
          </Text>
        </View>
      </Animated.View>
      <StatusIcon status={props.resolved ? "resolved" : "live"} />
    </AnimatedPressable>
  );
};

export default UserPredictions;

import {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { CheckCircle, Clock, XCircle } from "lucide-react-native";

export const StatusIcon = ({ status }) => {
  let IconComponent = null; // Placeholder for the icon component
  switch (status) {
    case "live":
      IconComponent = Clock;
      break;
    case "resolved":
      IconComponent = CheckCircle;
      break;
    case "unresolvable":
      IconComponent = XCircle;
      break;
    default:
      IconComponent = null; // or a default icon
  }

  return (
    <View>
      {IconComponent && (
        <Animated.View
          style={{ marginLeft: -30 }}
          entering={FadeIn}
          exiting={FadeOut}
        >
          <IconComponent size={24} color="gray" />
        </Animated.View>
      )}
    </View>
  );
};
