import { View, Text, Image, Pressable, Dimensions } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { ScanFace, Vote } from "lucide-react-native";
import useVotingStore from "@/lib/stores/VotingStore";
import { BetModalConfirmationScreenProps } from "@/types/BetTypes";
import AnimatedPressable from "@/components/common/AnimatedPressable";

const ConfirmationScreen = (props: BetModalConfirmationScreenProps) => {
  const { image, options, question, multiplier, changeStep } = props;
  const amount = useVotingStore((state) => state.amount);
  const Option = useVotingStore((state) => state.option);
  const { width, height } = Dimensions.get("window");

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 5,
        backgroundColor: "#131313",
        paddingVertical: 10,

        borderRadius: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          width: "100%",
          marginVertical: 15,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{
            height: 88,
            width: 88,
            borderRadius: 44,
            overflow: "hidden",
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 24,
          color: "white",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: 6,
        }}
      >
        Confirm your prediction
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "lightgray",
          fontWeight: "500",
          textAlign: "center",
          marginBottom: 5,
          paddingHorizontal: 50,
        }}
      >
        {question}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 15,
          padding: 4,
          paddingHorizontal: 10,
          borderRadius: 11,

          backgroundColor: Option === 1 ? "#75171D" : "#013145",
          marginBottom: -30,
          zIndex: 3,
        }}
      >
        <Vote
          color={Option === 1 ? "#E23B3B" : "#0596FF"}
          height={20}
          style={{ marginBottom: 1.2 }}
        />
        <Text
          style={{
            fontSize: 16,
            color: Option === 1 ? "#E23B3B" : "#0596FF",
            fontWeight: "600",
            textAlign: "center",
            marginBottom: 2,
          }}
        >
          {options[Option - 1]}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#1B1B1E",
          borderRadius: 15,
          position: "relative",
          width: "90%",
          marginVertical: 15,
          padding: 18,
          paddingVertical: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontSize: 45,
              color: "white",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: 2,
            }}
          >
            {amount.toPrecision(8)}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            color: "lightgray",
            fontWeight: "600",
            textAlign: "center",
            marginBottom: 2,
          }}
        >
          Current multiplier {multiplier}x
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          marginBottom: 15,
        }}
      >
        <AnimatedPressable
          onPress={() => changeStep(0)}
          style={{
            marginTop: 12,

            padding: 12,
            borderRadius: 24,
            overflow: "hidden",
            backgroundColor: "#1D1D1D",
            width: width / 2.5,
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
            Cancel
          </Text>
        </AnimatedPressable>
        <AnimatedPressable
          style={{
            marginTop: 12,
            display: "flex",
            flexDirection: "row",
            marginLeft: 16,
            padding: 12,
            borderRadius: 24,
            overflow: "hidden",
            backgroundColor: "#D9D9D9",
            width: width / 2.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ScanFace color="black" strokeWidth={3} height={23} />
          <Text
            style={{
              fontSize: 20,
              color: "#1D1D1D",
              fontWeight: "800",
              marginLeft: 3,
            }}
          >
            Confirm
          </Text>
        </AnimatedPressable>
      </View>
    </View>
  );
};

export default ConfirmationScreen;
