import { View, Text, Dimensions, Pressable } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

const AddCover = () => {
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
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          height: height / 2.3,
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

export default AddCover;
