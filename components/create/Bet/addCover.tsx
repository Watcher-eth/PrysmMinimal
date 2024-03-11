import { View, Text, Dimensions, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import useCreateBetStore from "@/lib/stores/UploadBetStore";
import { X } from "lucide-react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
  FadeOutDown,
} from "react-native-reanimated";
import AnimatedPressable from "@/components/common/AnimatedPressable";

const AddCover = ({ changeStep }) => {
  const { width, height } = Dimensions.get("window");
  const setVotingState = useCreateBetStore((state) => state.setState);

  // State to hold the selected image URI
  const [selectedImageUri, setSelectedImageUri] = useState<string | null>(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      const imageUri = result.assets[0].uri;
      setSelectedImageUri(imageUri); // Update state with the selected image URI
      setVotingState({ media: imageUri });
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <Animated.View
      entering={FadeInDown.duration(500)}
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
            Add Cover
          </Text>
          <Text style={{ fontSize: 16, color: "gray", fontWeight: "500" }}>
            [From your library]
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
      {selectedImageUri ? (
        <Image
          source={{ uri: selectedImageUri }}
          style={{
            marginTop: 15,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: height / 2.7,
            height: height / 2.7,
            borderRadius: 18,
            backgroundColor: "lightgray",
            justifyContent: "center",
            position: "relative",
          }}
        />
      ) : (
        <Pressable
          onPress={() => pickImageAsync()}
          style={{
            marginTop: 15,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: height / 2.7,
            height: height / 2.7,
            borderRadius: 18,
            backgroundColor: "lightgray",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <View
            style={{
              width: height / 5,
              height: height / 5,
              borderRadius: height / 5 / 2,

              borderWidth: 3,
              borderColor: "gray",
              borderStyle: "dashed",
            }}
          />
          <View
            style={{
              width: height / 9,
              height: height / 9,
              borderRadius: height / 9 / 2,
              position: "absolute",
              borderWidth: 3,
              borderColor: "gray",
              borderStyle: "dashed",
            }}
          />
        </Pressable>
      )}
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
          onPress={() => changeStep(1)}
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
          onPress={() => changeStep(4)} // Assuming the next step index is 1
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

export default AddCover;
