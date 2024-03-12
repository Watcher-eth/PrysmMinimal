import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import AnimatedPressable from "../AnimatedPressable";

const ErrorScreen = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: width,
        height: height,
        paddingTop: 90,
        backgroundColor: "rgb(19, 19, 22)",
      }}
    >
      <Image
        source={require("../../../assets/images/ErrorScreenIcon.png")}
        style={{ height: width / 1.02, width: width }}
      />
      <Text
        style={{
          fontWeight: "700",
          fontSize: 30,
          color: "white",
          paddingLeft: 28,
          marginTop: -30,
          marginBottom: 5,
        }}
      >
        Sorry...
      </Text>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 48,
          color: "white",
          paddingLeft: 28,
        }}
      >
        Can devs{" "}
      </Text>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 46,
          color: "white",
          paddingLeft: 28,
          marginTop: -6,
        }}
      >
        do something?!
      </Text>
      <Text
        style={{
          fontWeight: "600",
          fontSize: 17,
          color: "lightgray",
          paddingLeft: 28,
          paddingRight: 45,
          marginTop: 8,
        }}
      >
        There was an error on our end. Devs are working hard. Please try again
        later.{" "}
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
          marginTop: 55,
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
        Please reload and try again
      </Text>
    </View>
  );
};

export default ErrorScreen;
