import { View, Text, Dimensions, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const ConfirmPost = ({ changeStep }) => {
  const { width, height } = Dimensions.get("window");
  const [text, onChangeText] = useState<String>("");

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 20,
        width: "100%",
        marginTop: -5,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ fontSize: 25, color: "black", fontWeight: "700" }}>
            Post
          </Text>
          <Text style={{ fontSize: 16, color: "gray", fontWeight: "500" }}>
            /Oppenheimer
          </Text>
        </View>
        <Text
          style={{
            fontSize: 22,
            color: "#585858",
            fontWeight: "800",
            paddingVertical: 4,
            paddingHorizontal: 10,
            borderRadius: 17,
            overflow: "hidden",
            backgroundColor: "#D9D9D9",
            alignSelf: "flex-start",
          }}
        >
          x
        </Text>
      </View>
      <Text
        style={{
          fontSize: 21,
          display: "flex",

          marginTop: 12,
          width: "99%",
          fontWeight: "700",
        }}
      >
        Will Satoshi Nakamoto reveal himself to the public in 2024? This article
        suggests so 😉
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Image
          source={{
            uri: "https://people.com/thmb/O_xCNbRlz_oLi0iTy2xWUBGOtQY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x222:961x224)/oppenheimer-mag-rollout-7-071923-b6e2ce1f1e034c8585067050f5e4012c.jpg",
          }}
          style={{
            width: width / 1.27,
            height: height / 3.6,
            borderRadius: 8,
            overflow: "hidden",
            marginTop: 13,
          }}
        />

        <Text
          style={{
            color: "white",
            fontSize: 23,
            fontWeight: "700",
            position: "absolute",
            bottom: 39,
            lineHeight: 23,
            left: 11,
            paddingRight: 70,
          }}
        >
          Oppenheimer Review
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 12,
            alignSelf: "center",
            fontWeight: "700",
            bottom: 15,
            left: 11,
            position: "absolute",
            padding: 2,
            paddingHorizontal: 5,
            backgroundColor: "white",
            borderRadius: 9,
            overflow: "hidden",
          }}
        >
          www.people/rfx.com
        </Text>
      </View>
      <View
        style={{
          marginTop: 3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Pressable
          onPress={() => changeStep(0)}
          style={{
            marginTop: 22,

            padding: 10,
            borderRadius: 24,
            overflow: "hidden",
            backgroundColor: "#D9D9D9",
            width: 140,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,

              fontWeight: "800",
            }}
          >
            Cancle
          </Text>
        </Pressable>
        <Pressable
          onPress={() => changeStep(1)} // Assuming the next step index is 1
          style={{
            marginTop: 22,
            marginLeft: 16,
            padding: 10,
            borderRadius: 24,
            overflow: "hidden",
            backgroundColor: "#060606",
            width: 140,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "800",
            }}
          >
            Next
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ConfirmPost;
