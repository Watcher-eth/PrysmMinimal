import { View, Text, Dimensions, Pressable } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const AddPost = ({ changeStep }) => {
  const { width, height } = Dimensions.get("window");
  const [text, onChangeText] = useState<String>("");

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
          <View
            style={{
              display: "flex",
              height: 30,
              width: 30,
              borderRadius: 20,
              backgroundColor: "darkgray",
            }}
          />
          <View
            style={{
              display: "flex",
              height: 30,
              width: 30,
              borderRadius: 20,
              backgroundColor: "darkgray",
            }}
          />
          <View
            style={{
              display: "flex",
              height: 30,
              width: 30,
              borderRadius: 20,
              backgroundColor: "darkgray",
            }}
          />
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
          onPress={() => changeStep(1)} // Assuming the next step index is 1
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
