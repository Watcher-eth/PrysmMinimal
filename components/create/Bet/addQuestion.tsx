import { View, Text, Dimensions, Pressable } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import useCreateBetStore from "@/lib/stores/UploadBetStore";
import { X } from "lucide-react-native";
import Animated, { FadeInUp, FadeOutDown } from "react-native-reanimated";

const AddQuestion = ({ changeStep }) => {
  const { width, height } = Dimensions.get("window");
  const [text, onChangeText] = useState<string>("");
  const setVotingState = useCreateBetStore((state) => state.setState);

  return (
    <Animated.View
      entering={FadeInUp.duration(500)}
      exiting={FadeOutDown.duration(500)}
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 20,
        width: "100%",
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
          <Text style={{ fontSize: 25, color: "white", fontWeight: "700" }}>
            Question
          </Text>
          <Text style={{ fontSize: 16, color: "gray", fontWeight: "500" }}>
            [The question you are predicting]
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
      <TextInput
        multiline={true}
        maxHeight={95}
        style={{
          fontSize: 23,
          display: "flex",
          color: "white",
          marginTop: 22,
          width: "99%",
          fontWeight: "700",
        }}
        onChangeText={onChangeText}
        value={text}
        placeholder="Will Satoshi Nakamoto reveal himself to the public in 2024? "
      />
      <View
        style={{
          marginTop: 7,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <Pressable
          onPress={() => changeStep(0)}
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
        </Pressable>
        <Pressable
          onPress={() => {
            changeStep(2);
            setVotingState({ question: text });
          }} // Assuming the next step index is 1
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
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#1D1D1D",
              fontWeight: "800",
            }}
          >
            Next
          </Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

export default AddQuestion;
