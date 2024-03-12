import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import AnimatedPressable from "../AnimatedPressable";

const LostConnection = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: width,
        height: height,
        paddingTop: 150,
        backgroundColor: "rgb(19, 19, 22)",
      }}
    >
      <Image
        source={require("../../../assets/images/NoConnection.png")}
        style={{ height: width / 1.25, width: width }}
      />
      <Text
        style={{
          fontWeight: "700",
          fontSize: 45,
          color: "white",
          paddingLeft: 28,
          marginTop: -5,
          marginBottom: -5,
        }}
      >
        Lost{" "}
      </Text>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 45,
          color: "white",
          paddingLeft: 28,
        }}
      >
        connection
      </Text>

      <Text
        style={{
          fontWeight: "600",
          fontSize: 17,
          color: "lightgray",
          paddingLeft: 28,
          paddingRight: 45,
          marginTop: 6,
        }}
      >
        It looks like you are not connected to the internet. Please reconnect to
        continue...
      </Text>
      <AnimatedPressable
        style={{
          padding: 12,
          borderRadius: 25,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          width: width / 1.18,
          backgroundColor: "white",
          marginTop: 88,
        }}
      >
        <Text
          style={{ fontWeight: "600", fontSize: 20, color: "rgba(19,19,22)" }}
        >
          Reload
        </Text>
      </AnimatedPressable>
      <Text
        style={{
          fontWeight: "600",
          fontSize: 14,
          color: "lightgray",

          marginTop: 15,
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        Please connect to the internet and try again
      </Text>
    </View>
  );
};

export default LostConnection;
