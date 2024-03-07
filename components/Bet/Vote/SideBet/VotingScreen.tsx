import { View, Text, Dimensions, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { BlurView } from "expo-blur";
import Animated from "react-native-reanimated";
import { AvatarGroup } from "@/components/common/Avatar";
import AnimatedSlider from "@/components/common/AnimatedSlider";
import useVotingStore from "@/lib/stores/VotingStore";
import { VotingScreenProps } from "@/types/BetTypes";
import { Coins } from "lucide-react-native";

const VotingScreen: React.FC<VotingScreenProps> = ({
  changeStep,
  image,
  question,
  title,
  totalPot,
  options,
}) => {
  const { width, height } = Dimensions.get("window");
  const [sliderValue, setSliderValue] = useState(0); // State to hold the slider value
  const setVotingState = useVotingStore((state) => state.setState);

  //TODO: get current Balance
  const currentBalance = 221;
  // Function to be called when the slider value changes
  const handleSliderChange = (value: React.SetStateAction<number>) => {
    setSliderValue(value);
    // You can also do other actions here if needed, based on the new slider value
  };

  const confirmSelection = (option: number) => {
    setVotingState({
      amount: sliderValue,
      option: option,
    });
    changeStep(1);
  };
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 20,
        width: "100%",
        paddingTop: 15,
        backgroundColor: "#131313",
        borderRadius: 20,
      }}
    >
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
            uri: image,
          }}
          style={{
            width: width / 1.21,
            height: height / 3.5,
            borderRadius: 11,
            overflow: "hidden",
          }}
        />
        <BlurView
          intensity={5.5}
          tint="systemMaterialDark"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: width / 1.21,
            height: width / 7.5,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            overflow: "hidden",

            marginTop: -50,
          }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: "700",
            position: "absolute",
            bottom: 48,
            lineHeight: 25,
            left: 10,
            paddingRight: 70,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 14,
            alignSelf: "center",
            fontWeight: "600",
            bottom: 12,
            left: 11,
            width: "85%",
            position: "absolute",
          }}
        >
          {question}
        </Text>
        <View
          style={{
            display: "flex",
            alignSelf: "center",
            flexDirection: "row",
            top: 12,
            right: 7,
            position: "absolute",
            padding: 3,
            paddingHorizontal: 6,
            backgroundColor: "white",
            borderRadius: 9,
            overflow: "hidden",
          }}
        >
          <Coins height={15} color={"black"} strokeWidth={2.2} />
          <Text style={{ color: "black", fontSize: 14, fontWeight: "700" }}>
            Side Bet
          </Text>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 20,
          paddingRight: 4,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: -5,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#BEBDBD" }}>
            Total Pot
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 28, fontWeight: "700", color: "#D9D9D9" }}>
              ${totalPot}
            </Text>
          </View>
        </View>
        <AvatarGroup
          images={[
            "https://pbs.twimg.com/profile_images/1484575656759472128/4vLR6_4F_400x400.png",

            "data:image/jpeg;base64,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",
            "https://pbs.twimg.com/profile_images/1484575656759472128/4vLR6_4F_400x400.png",
          ]}
          height={38}
          width={38}
        />
      </View>
      <View
        style={{
          height: 1,
          width: width / 1.23,
          marginVertical: 10,
          backgroundColor: "lightgray",
        }}
      />
      <View
        style={{
          marginTop: 14,
          display: "flex",
          flexDirection: "column",
          marginBottom: 10,
          width: "100%",
        }}
      >
        <View
          style={{
            marginTop: -3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 4,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "700", color: "#D9D9D9" }}>
            {sliderValue.toPrecision(4)} PRSM
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "700", color: "#D9D9D9" }}>
            Max {currentBalance}
          </Text>
        </View>
        <AnimatedSlider onValueChange={handleSliderChange} />
      </View>
      <View
        style={{
          marginTop: 7,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          marginBottom: 23,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Pressable
          onPress={() => confirmSelection(1)}
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
            {options[0]}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => confirmSelection(2)} // Assuming the next step index is 1
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
            {options[1]}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default VotingScreen;
