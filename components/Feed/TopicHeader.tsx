import { View, Text } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { testTopics } from "@/constants/testData";
import AnimatedPressable from "../common/AnimatedPressable";
import Animated, { FadeInRight } from "react-native-reanimated";

const TopicHeader = () => {
  const [header, setHeader] = useState("Trending");
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#101010",
        paddingTop: 70,
        paddingLeft: 19,
      }}
    >
      <ScrollView horizontal>
        {testTopics.map((item, index) => {
          if (index <= testTopics.length / 2)
            return (
              <Animated.View
                entering={FadeInRight.duration(200 * index + 1 / 2)}
              >
                <AnimatedPressable onPress={() => setHeader(item)}>
                  <Text
                    key={index}
                    style={{
                      padding: 10,
                      paddingVertical: 10,
                      fontSize: 15,
                      backgroundColor: header === item ? "white" : "#1B1B1E",
                      borderRadius: 20,
                      overflow: "hidden",
                      marginRight: 10,
                      color: header === item ? "#1B1B1E" : "white",
                      fontWeight: "600",
                    }}
                  >
                    {item}
                  </Text>
                </AnimatedPressable>
              </Animated.View>
            );
        })}
      </ScrollView>
      <ScrollView horizontal style={{ paddingLeft: 35, marginTop: 12 }}>
        {testTopics.map((item, index) => {
          if (index >= testTopics.length / 2)
            return (
              <Animated.View
                entering={FadeInRight.duration(200 * index + 1 / 4)}
              >
                <AnimatedPressable onPress={() => setHeader(item)}>
                  <Text
                    key={index}
                    style={{
                      padding: 10,
                      fontSize: 16,
                      paddingVertical: 10,

                      backgroundColor: header === item ? "white" : "#1B1B1E",
                      borderRadius: 20,
                      overflow: "hidden",
                      marginRight: 10,
                      color: header === item ? "#1B1B1E" : "white",
                      fontWeight: "600",
                    }}
                  >
                    {item}
                  </Text>
                </AnimatedPressable>
              </Animated.View>
            );
        })}
      </ScrollView>
    </View>
  );
};

export default TopicHeader;
