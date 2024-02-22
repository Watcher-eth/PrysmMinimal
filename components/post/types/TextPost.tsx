import { View, Text, Dimensions, Image } from "react-native";
import React from "react";

const TextPost = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: width / 1.1,
        height: height / 4,
        backgroundColor: "#0F0F0F",
        alignSelf: "center",
        borderRadius: 20,
        padding: 15,
        paddingBottom: 17,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://pbs.twimg.com/profile_images/1713576030063972352/qEdjq6VQ_400x400.jpg",
          }}
          style={{
            width: width / 7.5,
            height: width / 7.5,
            borderRadius: 100,
            overflow: "hidden",
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

            width: width / 1.62,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 6,
            }}
          >
            <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
              TextPost
            </Text>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "400" }}>
              /Oppenheimer
            </Text>
          </View>
          <Text style={{ fontWeight: "700", color: "lightgrey" }}>
            11hr ago
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 16,
          color: "lightgrey",
          marginTop: 9,
        }}
      >
        Rotten 🍅 review for #Oppenheimer is 93% which makes it certified fresh
        🔥 Honestly can’t see how #Oppenheimer could not win this.{" "}
      </Text>
    </View>
  );
};

export default TextPost;
