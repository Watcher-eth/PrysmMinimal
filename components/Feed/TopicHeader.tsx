import { View, Text } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { testTopics } from "@/constants/testData";
import AnimatedPressable from "../common/AnimatedPressable";

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
              <AnimatedPressable onPress={() => setHeader(item)}>
                <Text
                  key={index}
                  style={{
                    padding: 10,
                    paddingVertical: 8,
                    fontSize: 15,
                    backgroundColor: header === item ? "white" : "#1B1B1E",
                    borderRadius: 16,
                    overflow: "hidden",
                    marginRight: 10,
                    color: header === item ? "#1B1B1E" : "white",
                    fontWeight: "600",
                  }}
                >
                  {item}
                </Text>
              </AnimatedPressable>
            );
        })}
      </ScrollView>
      <ScrollView horizontal style={{ paddingLeft: 35, marginTop: 12 }}>
        {testTopics.map((item, index) => {
          if (index >= testTopics.length / 2)
            return (
              <AnimatedPressable onPress={() => setHeader(item)}>
                <Text
                  key={index}
                  style={{
                    padding: 10,
                    fontSize: 16,
                    paddingVertical: 8,

                    backgroundColor: header === item ? "white" : "#1B1B1E",
                    borderRadius: 16,
                    overflow: "hidden",
                    marginRight: 10,
                    color: header === item ? "#1B1B1E" : "white",
                    fontWeight: "600",
                  }}
                >
                  {item}
                </Text>
              </AnimatedPressable>
            );
        })}
      </ScrollView>
    </View>
  );
};

export default TopicHeader;