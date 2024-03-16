import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import React from "react";
import { ActivityChartData } from "@/constants/testData";
import AnimatedPressable from "../common/AnimatedPressable";
const { width, height } = Dimensions.get("window");

const Chart = () => {
  return (
    <AnimatedPressable
      style={[
        styles.container,
        {
          width: width / 1.1,
          height: height / 6,
        },
      ]}
    >
      <View style={[styles.Box, { width: width / 2, height: height / 7.5 }]}>
        <Text style={[{ fontSize: 16, color: "lightgray", fontWeight: "700" }]}>
          Your Predictions
        </Text>

        <View style={[styles.BoxItem, {}]}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              marginBottom: 2,
            }}
          >
            <Image
              style={{
                width: 25,
                height: 25,
                borderRadius: 13,
                overflow: "hidden",
              }}
              source={require("../../assets/images/PrysmLogo.png")}
            />
            <Text style={[{ fontSize: 23, color: "white", fontWeight: "600" }]}>
              234,985
            </Text>
          </View>
          <Text
            style={[{ fontSize: 13, color: "lightgray", fontWeight: "500" }]}
          >
            At Risk
          </Text>
        </View>
      </View>

      {ActivityChartData.map((item, index) => {
        if (index < 6)
          return (
            <View
              key={index}
              style={[
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                },
              ]}
            >
              <ChartBar amount={item.amount} />
              <Image
                style={{
                  height: 23,
                  width: 23,
                  borderRadius: 14,
                  marginTop: 9,
                  marginBottom: -4,
                  overflow: "hidden",
                }}
                source={{
                  uri: item.image,
                }}
              />
            </View>
          );
      })}
    </AnimatedPressable>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    borderRadius: 17,
    backgroundColor: "#1B1B1E",
    marginTop: 20,
    alignSelf: "center",
    marginBottom: -5,
    shadowColor: "#373737",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    display: "flex",
    flexDirection: "row",
    elevation: 20,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
  },
  Box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  BoxItem: {
    display: "flex",
    flexDirection: "column",
  },
});


// Create the styles
const BarStyles = StyleSheet.create({
  barContainer: {
    height: height / 10.5, // Adjust the height of the bar
    width: 400, // Subtract some width for padding
    backgroundColor: "#D6EDE2", // Light grey color for unfilled part
    borderRadius: 7, // Rounded corners for the bar
    overflow: "hidden", // Ensures the filled part doesn't overflow
    display: "flex",
    justifyContent: "flex-end",
  },
  filledBar: {
    height: "100%", // Fill the height of the container
    backgroundColor: "#2DA56B", // Dark green color for filled part
  },
});
