import { View, Text, Dimensions, Pressable } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import useCreateBetStore from "@/lib/stores/UploadBetStore";
import { X } from "lucide-react-native";
import Animated, { FadeInUp, FadeOutDown } from "react-native-reanimated";
import AnimatedPressable from "@/components/common/AnimatedPressable";

const AddOptions = ({ changeStep }) => {
  const { width, height } = Dimensions.get("window");
  const [option1, onChangeOption] = useState<string>("");
  const [option2, onChangeOption2] = useState<string>("");
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
            Options
          </Text>
          <Text style={{ fontSize: 16, color: "gray", fontWeight: "500" }}>
            [Possible Answers]
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
          fontSize: 35,
          display: "flex",

          marginTop: 22,
          width: "99%",
          fontWeight: "700",
          color: "#0596FF",
          textAlign: "center",
          padding: 10,
          borderRadius: 15,
          backgroundColor: "#1D1D1D",
        }}
        onChangeText={onChangeOption}
        value={option1}
        placeholder="Yes"
      />
      <TextInput
        style={{
          fontSize: 35,
          display: "flex",
          marginVertical: 18,
          marginBottom: 10,
          width: "99%",
          fontWeight: "700",
          color: "#E23B3B",
          textAlign: "center",
          padding: 10,
          borderRadius: 15,
          backgroundColor: "#1D1D1D",
        }}
        onChangeText={onChangeOption2}
        value={option2}
        placeholder="No"
      />
      <View
        style={{
          gap: 5,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <AnimatedPressable
          onPress={() => {
            changeStep(1);
          }}
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
            changeStep(3);
            setVotingState({ options: [option1, option2] });
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

export default AddOptions;
