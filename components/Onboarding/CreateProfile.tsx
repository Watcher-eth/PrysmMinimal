import { View, Text, Image, Dimensions } from "react-native";
import React from "react";

const CreateProfile = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: width,
        height: height,
        backgroundColor: "black",
      }}
    >
      <Image
        style={{ height: height * 0.51, width: width }}
        source={require("../../assets/images/ProfileCreate.png")}
      />
      <Image
        style={{ height: width * 0.4, width: width * 1.2, marginTop: 38 }}
        source={require("../../assets/images/splash.png")}
      />
      <Text
        style={{
          fontSize: 30,
          color: "white",
          fontWeight: "700",
          textAlign: "center",
          paddingHorizontal: 60,
          marginTop: 18,
        }}
      >
        Satoshi Nakamoto
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: "lightgray",
          fontWeight: "500",
          textAlign: "center",
          paddingHorizontal: 60,
          marginTop: 5,
        }}
      >
        Your Username
      </Text>
    </View>
  );
};

export default CreateProfile;
