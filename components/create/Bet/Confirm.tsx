import { View, Text, Dimensions, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { BlurView } from "expo-blur";

const ConfirmBet = () => {
  const { width, height } = Dimensions.get("window");
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
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
        }}
      >
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ fontSize: 25, color: "black", fontWeight: "700" }}>
            Title
          </Text>
          <Text style={{ fontSize: 16, color: "gray", fontWeight: "500" }}>
            [Max 120 characters]
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
      <Pressable
        onPress={() => pickImageAsync()}
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
            uri: "https://pbs.twimg.com/profile_images/1713576030063972352/qEdjq6VQ_400x400.jpg",
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
          Billboard Hot 1
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
            height: height / 9.1,
            borderBottomLeftRadius: 19,
            borderBottomRightRadius: 19,
            overflow: "hidden",
            paddingLeft: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "white",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Will 0xDesigner mint out his 200th Edition of Design of the day?
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
        }}
      >
        <Pressable
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

export default ConfirmBet;
