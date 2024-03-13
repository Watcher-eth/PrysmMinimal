import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import AnimatedPressable from "../common/AnimatedPressable";
import { Globe, Unplug, X } from "lucide-react-native";
import { useAuth } from "@/app/_layout";

const ConnectSocialsModal = ({ changeStep }) => {
  const { width } = Dimensions.get("window");
  const { setIsLoggedIn } = useAuth(); // Access the setIsLoggedIn function

  const handleLogin = () => {
    // Perform login logic here
    setIsLoggedIn(true); // Update the state on successful login
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: 15,
        paddingTop: 3,
        position: "relative",
      }}
    >
      <AnimatedPressable
        style={{
          paddingVertical: 8,
          paddingHorizontal: 6,
          borderRadius: 17,
          overflow: "hidden",
          backgroundColor: "#F1F1F1",
          position: "absolute",
          alignSelf: "flex-end",
          top: -11,
          right: -width / 2.53,
        }}
      >
        <X color={"#787878"} strokeWidth={5} height={20} />
      </AnimatedPressable>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 15,
          gap: -15,
        }}
      >
        <Image
          style={{
            width: 70,
            height: 70,
            borderRadius: 33,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: "lightgray",
          }}
          source={require("../../assets/icons/BlitzIcon.png")}
        />
        <Image
          style={{
            width: 70,
            height: 70,
            borderRadius: 33,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: "lightgray",
          }}
          source={{
            uri: "https://imgs.search.brave.com/otiIOK9aUmNS7f17gZDnon2Wdrwnzcs3rmdFZg6i1aU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1NzA0NTQ0/NHR3aXR0ZXItbG9n/by10cmFuc3BhcmVu/dC1wbmcucG5n",
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 19,
          color: "black",
          fontWeight: "700",
          marginTop: 4,
        }}
      >
        Connect your X
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: "gray",
          fontWeight: "500",
          textAlign: "center",
          paddingHorizontal: 40,
          marginTop: 8,
          marginBottom: 30,
        }}
      >
        Add your X profile to help us find your friends on Prysm
      </Text>
      <AnimatedPressable
        onPress={() => setIsLoggedIn(true)}
        style={{
          width: width / 1.27,
          height: 50,
          borderRadius: 28,
          overflow: "hidden",
          backgroundColor: "#F3F3F3",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          gap: 5,
        }}
      >
        <Text style={{ fontSize: 19, color: "black", fontWeight: "600" }}>
          Connect
        </Text>
      </AnimatedPressable>
    </View>
  );
};

export default ConnectSocialsModal;
