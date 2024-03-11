import { View, Text, Dimensions, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { BlurView } from "expo-blur";
import useCreateBetStore from "@/lib/stores/UploadBetStore";
import { Upload, X } from "lucide-react-native";
import Animated, { FadeInUp, FadeOutDown } from "react-native-reanimated";
import AnimatedPressable from "@/components/common/AnimatedPressable";

const ConfirmBet = ({ changeStep }) => {
  const { width, height } = Dimensions.get("window");
  const setVotingState = useCreateBetStore((state) => state.setState);
  const { media, title, question } = useCreateBetStore((state) => state);
  console.log("props", title, question);

  return (
    <Animated.View
      entering={FadeInUp.duration(200)}
      exiting={FadeOutDown.duration(200)}
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
          width: "100%",
        }}
      >
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ fontSize: 25, color: "white", fontWeight: "700" }}>
            Upload
          </Text>
          <Text style={{ fontSize: 15, color: "gray", fontWeight: "500" }}>
            [Make sure to define a clear question!]
          </Text>
        </View>
        <Pressable
          style={{
            paddingVertical: 8,
            paddingHorizontal: 6,
            borderRadius: 17,
            overflow: "hidden",
            backgroundColor: "#D9D9D9",
            alignSelf: "flex-start",
          }}
        >
          <X color={"#585858"} strokeWidth={5} height={20} />
        </Pressable>
      </View>
      <Pressable
        style={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          height: height / 2.1,
          borderRadius: 18,
          backgroundColor: "lightgray",
          justifyContent: "flex-end",
          position: "relative",
        }}
      >
        <Image
          source={{
            uri: media,
          }}
          style={{
            width: "100%",
            height: height / 2.1,
            borderRadius: 18,
            overflow: "hidden",
            position: "absolute",
            zIndex: 0,
          }}
        />
        <Text
          style={{
            fontSize: 43,
            color: "white",
            fontWeight: "700",
            marginLeft: 10,
            paddingRight: 40,
            lineHeight: 40,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 21,
            color: "white",
            opacity: 90,
            fontWeight: "600",
            marginLeft: 10,
            paddingRight: 40,
            lineHeight: 40,
            marginTop: -12,
          }}
        >
          Billboard Hot 1
        </Text>
        <BlurView
          intensity={60}
          tint="systemUltraThinMaterialDark"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: height / 10,
            borderBottomLeftRadius: 19,
            borderBottomRightRadius: 19,
            overflow: "hidden",
            paddingLeft: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16.5,
              color: "white",
              fontWeight: "600",
            }}
          >
            {question}
          </Text>
        </BlurView>
      </Pressable>
      <View
        style={{
          marginTop: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <AnimatedPressable
          onPress={() => changeStep(2)} // Assuming the next step index is 1
          style={{
            marginTop: 22,

            padding: 10,
            borderRadius: 24,
            overflow: "hidden",
            backgroundColor: "#1D1D1D",
            width: 140,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#D9D9D9",
              fontWeight: "800",
            }}
          >
            Back
          </Text>
        </AnimatedPressable>
        <AnimatedPressable
          style={{
            marginTop: 22,
            marginLeft: 16,
            padding: 10,
            borderRadius: 24,
            overflow: "hidden",
            backgroundColor: "#D9D9D9",
            width: 140,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            gap: 3,
          }}
          onPress={() => changeStep(1)} // Assuming the next step index is 1
        >
          <Upload color={"#1D1D1D"} height={22} width={21} strokeWidth={3} />
          <Text
            style={{
              fontSize: 20,
              color: "#1D1D1D",
              fontWeight: "800",
            }}
          >
            Upload
          </Text>
        </AnimatedPressable>
      </View>
    </Animated.View>
  );
};

export default ConfirmBet;
