import { View, Text, Image, Dimensions, Button } from "react-native";
import React from "react";
import { isNotCreated, useEmbeddedWallet } from "@privy-io/expo";
import LoginPopup from "./LoginModal";
import { useAuth } from "@/app/_layout";

const Login = () => {
  const { width, height } = Dimensions.get("window");
  // const wallet = useEmbeddedWallet();
  //console.log("Wallet", wallet);

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
      <LoginPopup />
    </View>
  );
};

export default Login;
