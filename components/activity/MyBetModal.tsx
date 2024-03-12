import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import AnimatedPressable from "../common/AnimatedPressable";
import { ArrowLeftRight, ReceiptText } from "lucide-react-native";

const MyBetModal = (props: {
  title: string;
  image: string;
  price: number;
  ownedAmount: number;
  options: string[];
  percentage: number;
}) => {
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(10,10,10, 1)",
        width: width,
        alignSelf: "center",
        paddingBottom: 30,
        gap: 2,
        padding: 15,
        paddingTop: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 5,
        }}
      >
        <Image
          source={{ uri: props.image }}
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            overflow: "hidden",
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 5,
        }}
      >
        <Text style={{ fontSize: 19, color: "white", fontWeight: "600" }}>
          ${props.price}
        </Text>
        <Text
          style={{
            color: props.percentage > 0 ? "green" : "red",
            fontSize: 20,

            fontWeight: "600",
          }}
        >
          {props.percentage}%
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 17, color: "lightgray", fontWeight: "600" }}>
          {props.title}
        </Text>
        <Text
          style={{
            color: props.percentage > 0 ? "green" : "red",
            fontSize: 17,

            fontWeight: "600",
          }}
        >
          Today
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 250,
          marginTop: 10,

          backgroundColor: "#131313",
        }}
      />

      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "rgba(100,100,100, 0.5)",
          marginVertical: 15,
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Text style={{ fontSize: 12, color: "lightgray", fontWeight: "600" }}>
            You own
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 18,

              fontWeight: "600",
            }}
          >
            {props.ownedAmount} {props.options[0]}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ fontSize: 12, color: "lightgray", fontWeight: "600" }}>
            Value
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 18,

              fontWeight: "600",
            }}
          >
            ${(props.ownedAmount * props.price).toFixed(2)}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 5,
          marginBottom: 13,
          alignSelf: "center",
          justifyContent: "space-between",
          width: "99%",
        }}
      >
        <AnimatedPressable
          style={{
            marginTop: 12,

            padding: 10,
            borderRadius: 24,
            overflow: "hidden",
            backgroundColor: "#1D1D1D",
            width: width / 2.3,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            gap: 3,
          }}
        >
          <ArrowLeftRight height={20} color={"#D9D9D9"} strokeWidth={3} />
          <Text
            style={{
              fontSize: 20,
              color: "#D9D9D9",
              fontWeight: "800",
            }}
          >
            Swap
          </Text>
        </AnimatedPressable>
        <AnimatedPressable
          style={{
            marginTop: 12,
            display: "flex",
            flexDirection: "row",
            padding: 8,
            borderRadius: 24,
            overflow: "hidden",
            backgroundColor: "#D9D9D9",
            width: width / 2.3,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ReceiptText height={20} color={"#1D1D1D"} strokeWidth={3} />
          <Text
            style={{
              fontSize: 20,
              color: "#1D1D1D",
              fontWeight: "800",
              marginLeft: 3,
            }}
          >
            Details
          </Text>
        </AnimatedPressable>
      </View>
    </View>
  );
};

export default MyBetModal;
