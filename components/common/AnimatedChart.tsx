import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineGraph } from "react-native-graph";
import * as Haptics from "expo-haptics";
import { SelectionDot } from "./CustomSelectionDot";

export const { width: SIZE } = Dimensions.get("window");
export interface GraphPoint {
  value: number;
  date: Date;
}
const sampleData: GraphPoint[] = [
  { value: 10.941, date: new Date("2024-03-07") },
  { value: 11.62, date: new Date("2024-03-08") },
  { value: 9.7, date: new Date("2024-03-09") },
  { value: 11.275, date: new Date("2024-03-10") },
  { value: 12.948, date: new Date("2024-03-11") },
  { value: 12.94, date: new Date("2024-03-12") },
  { value: 12.432, date: new Date("2024-03-13") },
  { value: 12.94, date: new Date("2024-03-14") },
  { value: 14.55, date: new Date("2024-03-15") },
  { value: 13.82, date: new Date("2024-03-16") },
  { value: 11.94, date: new Date("2024-03-17") },

  { value: 10.94, date: new Date("2024-03-18") },
];
const GRADIENT_FILL_COLORS = ["#7476df5D", "#7476df4D", "#7476df00"];
const calculateXPosition = (index, dataLength) => {
  const graphWidth = SIZE * 0.9; // Assuming the graph takes the full width for simplicity
  return (graphWidth / (dataLength - 1)) * index;
};

// Calculate max and min values
const maxValue = Math.max(...sampleData.map((p) => p.value));
const minValue = Math.min(...sampleData.map((p) => p.value));

// Find their indices
const maxIndex = sampleData.findIndex((p) => p.value === maxValue);
const minIndex = sampleData.findIndex((p) => p.value === minValue);

// Calculate x positions
const maxX = calculateXPosition(maxIndex, sampleData.length);
const minX = calculateXPosition(minIndex, sampleData.length);

export function BasicExample() {
  const [price, updatePrice] = useState<GraphPoint>();
  function resetPrice() {
    updatePrice(sampleData[-1]);
  }
  return (
    <View
      style={{
        width: "104%",
      }}
    >
      <LineGraph
        SelectionDot={SelectionDot}
        points={sampleData}
        animated={true}
        color="#FC4C4E"
        gradientFillColors={GRADIENT_FILL_COLORS}
        enableIndicator={true}
        indicatorPulsating={true}
        enableFadeInMask={true}
        style={{
          alignSelf: "center",
          width: "105%",
          aspectRatio: 1.45,
          marginVertical: 10,
          marginBottom: 5,
        }}
        enablePanGesture={true}
        onGestureStart={() =>
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        }
        onPointSelected={(p) => {
          console.log(price);
          updatePrice(p);
        }}
        TopAxisLabel={() => <AxisLabel x={maxX} value={maxValue} />}
        BottomAxisLabel={() => <AxisLabel x={minX} value={minValue} />}
        onGestureEnd={() => resetPrice()}
      />
    </View>
  );
}

interface AxisLabelProps {
  x: number;
  value: number;
}

export const AxisLabel: React.FC<AxisLabelProps> = ({ x, value }) => {
  return (
    <View style={[styles.container, { left: x }]}>
      <Text style={styles.text}>{`$${value.toFixed(2)}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute", // Adjust position based on the x value
    bottom: 0, // Adjust according to your graph's design
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  text: {
    color: "#FFFFFF", // White text color for better readability
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Aeonik-Bold",
  },
});
