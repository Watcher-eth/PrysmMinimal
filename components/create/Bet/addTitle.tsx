import { View, Text, Dimensions, Pressable } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import useCreateBetStore from "@/lib/stores/UploadBetStore";
import { X } from "lucide-react-native";
import Animated, { FadeInUp, FadeOutDown } from "react-native-reanimated";
import AnimatedPressable from "@/components/common/AnimatedPressable";

const AddTitle = ({ changeStep }) => {
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
          <Text style={{ fontSize: 25, color: "white", fontWeight: "700" }}>
            Title
          </Text>
          <Text style={{ fontSize: 16, color: "gray", fontWeight: "500" }}>
            [Max 120 characters]
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
        style={{
          fontSize: 45,
          display: "flex",
          marginVertical: 18,
          marginTop: 22,
          width: "99%",
          fontWeight: "700",
          color: "white",
        }}
        onChangeText={onChangeText}
        value={text}
        placeholder="Your Title..."
      />
      <View
        style={{
          marginTop: 8,
          gap: 5,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <AnimatedPressable
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
          onPress={() => {
            setVotingState({ title: text });
            changeStep(1);
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
        </AnimatedPressable>
      </View>
    </Animated.View>
  );
};

export default AddTitle;
