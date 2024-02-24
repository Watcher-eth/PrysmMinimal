import { View, Text, Image, Dimensions } from "react-native";
import React from "react";

const Login = () => {
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
        style={{ height: height * 0.7, width: width }}
        source={require("../../assets/images/Login.png")}
      />
      <Text
        style={{
          fontSize: 23,
          color: "white",
          fontWeight: "700",
          textAlign: "center",
          paddingHorizontal: 60,
          marginTop: 20,
        }}
      >
        Predict the future with your friends
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: "lightgray",
          fontWeight: "500",
          textAlign: "center",
          paddingHorizontal: 60,
          marginTop: 15,
        }}
      >
        Predict the future with your friends
      </Text>
      
    </View>
  );
};

export default Login;
