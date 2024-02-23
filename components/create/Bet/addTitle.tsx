import { View, Text, Dimensions, Pressable } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const AddTitle = ({ changeStep }) => {
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
      <TextInput
        style={{
          fontSize: 45,
          display: "flex",
          marginVertical: 18,
          marginTop: 22,
          width: "99%",
          fontWeight: "700",
        }}
        onChangeText={onChangeText}
        value={text}
        placeholder="Your Title..."
      />
      <View
        style={{
          marginTop: 7,
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

export default AddTitle;
