import { View, Text, Dimensions, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import AnimatedPressable from "@/components/common/AnimatedPressable";
import { Link } from "expo-router";
import { HandCoins, ImagePlus, LinkIcon, X } from "lucide-react-native";
import usePostStore from "@/lib/stores/UploadPostStore";
import * as ImagePicker from "expo-image-picker";

const AddPost = ({ changeStep, topic }) => {
  const { width, height } = Dimensions.get("window");
  const [text, onChangeText] = useState<string>("");
  const [selectedImageUri, setSelectedImageUri] = useState<string | null>(null);

  const setVotingState = usePostStore((state) => state.setState);
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
      setVotingState({ media: imageUri, type: "Image" });
    } else {
      alert("You did not select any image.");
    }
  };

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
          paddingTop: 4,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row", gap: 9 }}>
          <AnimatedPressable
            onPress={() => setVotingState({ type: "Link" })}
            style={{
              display: "flex",
              height: 30,
              width: 30,
              borderRadius: 20,
              backgroundColor: "darkgray",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LinkIcon height={18} color="white" strokeWidth={3} />
          </AnimatedPressable>
          <AnimatedPressable
            onPress={() => pickImageAsync()}
            style={{
              display: "flex",
              height: 30,
              width: 30,
              borderRadius: 20,
              backgroundColor: "darkgray",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImagePlus height={18} color="white" strokeWidth={3} />
          </AnimatedPressable>
          <AnimatedPressable
            onPress={() => setVotingState({ type: "SideBet" })}
            style={{
              display: "flex",
              height: 30,
              width: 30,
              borderRadius: 20,
              backgroundColor: "darkgray",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HandCoins height={18} color="white" strokeWidth={3} />
          </AnimatedPressable>
        </View>
        <AnimatedPressable
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
        </AnimatedPressable>
      </View>
      <TextInput
        multiline={true}
        maxHeight={145}
        style={{
          fontSize: 20,
          display: "flex",
          marginTop: 8,
          width: "99%",
          fontWeight: "700",
          minHeight: 110,
        }}
        onChangeText={onChangeText}
        value={text}
        placeholder="Will Satoshi Nakamoto reveal himself to the public in 2024? to the  to the public in 2024 to the public in 2024 "
      />
      {selectedImageUri && (
        <Image
          source={{ uri: selectedImageUri }}
          style={{
            marginTop: 8,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: 220,
            borderRadius: 18,
            backgroundColor: "lightgray",
            justifyContent: "center",
            position: "relative",
          }}
        />
      )}
      <View
        style={{
          marginTop: 3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          alignSelf: "flex-end",
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
          onPress={() => {
            setVotingState({ topic: topic, content: text });
            changeStep(1);
          }} // Assuming the next step index is 1
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

export default AddPost;
