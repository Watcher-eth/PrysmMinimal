import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

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

export const PollingComponentImage = ({ yesValue, noValue }) => {
  // Ensure the values sum up to 100%
  const total = yesValue.amount + noValue.amount;
  const yesPercentage = (yesValue.amount / total) * 100;
  const noPercentage = (noValue.amount / total) * 100;

  return (
    <View style={styles.container}>
      <View
        style={{ ...styles.box, ...styles.noBox, width: `${noPercentage}%` }}
      >
        <Text style={styles.text}>{`${noPercentage.toFixed(0)}% ${
          noValue.name
        }`}</Text>
        <Image
          source={{ uri: noValue.image }}
          style={{
            height: 32,
            width: 32,
            borderRadius: 3,
            overflow: "hidden",
            marginVertical: -12,
            marginRight: -5,
          }}
        />
      </View>
      <View style={styles.divider} />
      <View
        style={{ ...styles.box, ...styles.yesBox, width: `${yesPercentage}%` }}
      >
        <Image
          source={{ uri: yesValue.image }}
          style={{
            height: 32,
            width: 32,
            borderRadius: 3,
            overflow: "hidden",
            marginVertical: -12,
            marginLeft: -5,
          }}
        />
        <Text style={styles.text}>{`${yesValue.name} ${yesPercentage.toFixed(
          0
        )}%`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

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
    backgroundColor: "#0067E1",
    borderRadius: 8,
    borderBottomLeftRadius: 8,
    paddingVertical: 11,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  yesBox: {
    backgroundColor: "#CB0000",
    borderRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: 11,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
