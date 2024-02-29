import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PollingComponent = ({ yesValue, noValue }) => {
  // Ensure the values sum up to 100%
  const total = yesValue + noValue;
  const yesPercentage = (yesValue / total) * 100;
  const noPercentage = (noValue / total) * 100;

  return (
    <View style={styles.container}>
      <View
        style={{ ...styles.box, ...styles.noBox, width: `${noPercentage}%` }}
      >
        <Text style={styles.text}>{`${noPercentage.toFixed(0)}% NO`}</Text>
      </View>
      <View style={styles.divider} />
      <View
        style={{ ...styles.box, ...styles.yesBox, width: `${yesPercentage}%` }}
      >
        <Text style={styles.text}>{`YES ${yesPercentage.toFixed(0)}%`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: 2,
    paddingHorizontal: 1,

    margin: 6,
    marginTop: 8,
  },
  box: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  noBox: {
    backgroundColor: "#E20038",
    borderRadius: 5,
    borderBottomLeftRadius: 5,
    paddingVertical: 11,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  yesBox: {
    backgroundColor: "#16CC9F",
    borderRadius: 5,
    borderBottomRightRadius: 5,
    paddingVertical: 11,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  divider: {
    width: 5,
    backgroundColor: "white",
    height: 45,
    marginHorizontal: 5,
    borderRadius: 9,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default PollingComponent;
