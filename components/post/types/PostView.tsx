import { View, Text, Dimensions, Image, Pressable } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { FlashList } from "@shopify/flash-list";
import TextPost from "./TextPost";
import LinkPost from "./LinkPost";
import SideBet from "./SideBet";
import { ScrollView } from "react-native-gesture-handler";
import { ChevronLeft, Share } from "lucide-react-native";

const PostView = (props: PostFeedType) => {
  const { post, name, image, type } = props;
  const feedData = [{ type: "Text" }, { type: "Link" }, { type: "Text" }];

  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: width,
        backgroundColor: "#070707",
        height: height,
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: width,
          padding: 12,
          height: height / 6,
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingBottom: 30,
          marginBottom: -30,
        }}
      >
        <Image
          source={{
            uri: "https://people.com/thmb/O_xCNbRlz_oLi0iTy2xWUBGOtQY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x222:961x224)/oppenheimer-mag-rollout-7-071923-b6e2ce1f1e034c8585067050f5e4012c.jpg",
          }}
          style={{
            width: width,

            height: height / 6,

            position: "absolute",
          }}
        />
        <BlurView
          intensity={5.5}
          tint="systemMaterialDark"
          style={{
            width: width,
            position: "absolute",

            height: height / 6,
          }}
        />
        <LinearGradient
          // Background Linear Gradient
          colors={["transparent", "#070707"]}
          style={{
            width: width,
            height: height * 0.11,
            position: "absolute",
            top: height / 8.5 / 2,
          }}
        />
        <Pressable
          onPress={() => {
            router.back();
          }}
          style={{
            height: 30,
            width: 30,

            backgroundColor: "rgba(100, 100, 100, 0.4)",
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            zIndex: 4,
            left: 10,
          }}
        >
          <ChevronLeft height={21} color={"white"} strokeWidth={4} />
        </Pressable>

        <Text style={{ fontSize: 22, color: "white", fontWeight: "700" }}>
          Oppenheimer
        </Text>
        <Pressable
          onPress={() => {
            router.back();
          }}
          style={{
            height: 30,
            width: 30,

            backgroundColor: "rgba(100, 100, 100, 0.4)",
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            zIndex: 4,
            right: 10,
          }}
        >
          <Share height={16} color={"white"} strokeWidth={4} />
        </Pressable>
      </View>
      <ScrollView
        style={{
          alignSelf: "center",
          width: width,
          display: "flex",
          marginTop: 30,
          paddingTop: 8,
          marginLeft: 13,
        }}
      >
        {type === "Text" && (
          <View style={{ alignSelf: "center", marginBottom: 10 }}>
            <TextPost border={false} />
          </View>
        )}
        {type === "Link" && (
          <View style={{ alignSelf: "center", marginBottom: 10 }}>
            <LinkPost border={false} />
          </View>
        )}
        {type === "SideBet" && (
          <View style={{ alignSelf: "center", marginBottom: 10 }}>
            <SideBet border={false} />
          </View>
        )}
        <FlashList
          style={{
            zIndex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
            width: width / 1.1,
          }}
          renderItem={({ item, index }) => {
            if (item.type === "Text")
              return (
                <View key={index} style={{ alignSelf: "center" }}>
                  <TextPost border={false} />
                </View>
              );
            if (item.type === "Link")
              return (
                <View key={index} style={{ alignSelf: "center" }}>
                  <LinkPost border={false} />
                </View>
              );
            if (item.type === "SideBet")
              return (
                <View key={index} style={{ alignSelf: "center" }}>
                  <SideBet border={false} />
                </View>
              );
            return (
              <View key={index} style={{ alignSelf: "center" }}>
                <TextPost border={true} />
              </View>
            );
          }}
          estimatedItemSize={3}
          data={feedData}
          centerContent={true}
        />
      </ScrollView>
    </View>
  );
};

export default PostView;
