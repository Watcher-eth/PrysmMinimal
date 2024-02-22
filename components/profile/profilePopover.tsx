import { View, Text, Pressable } from "react-native";
import React from "react";

import { useAnimatedStyle } from "react-native-reanimated";
import { withSpring, useSharedValue } from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { useCallback, useMemo, useRef } from "react";
import { StyleSheet, Button } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";

const ProfilePopover = () => {
  // ref
  const snapPoints = useMemo(() => ["25%"], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  // renders
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        // add bottom inset to elevate the sheet
        bottomInset={236}
        // set `detached` to true
        detached={true}
        style={styles.sheetContainer}
      >
        <View style={styles.contentContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "700" }}>Title</Text>
            <Text style={{ fontSize: 28, fontWeight: "700" }}> 🎉</Text>
          </View>
          <Text style={{ fontSize: 18 }}>[Max 120 characters]</Text>
          <Text
            style={{
              fontSize: 42,
              paddingTop: 30,
              fontWeight: "800",
            }}
          >
            100K MAU’s
          </Text>
          <View
            style={{
              marginTop: 30,
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
                width: 135,
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
                marginLeft: 15,
                padding: 10,
                borderRadius: 24,
                overflow: "hidden",
                backgroundColor: "#060606",
                width: 135,
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
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    width: "100%",
    backgroundColor: "grey",
  },
  sheetContainer: {
    // add horizontal space
    display: "flex",
    flexDirection: "column",

    marginHorizontal: 24,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contentContainer: {
    flex: 1,
    minHeight: 250,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingRight: 20,
    paddingLeft: 20,
    height: 400,
  },
});

export default ProfilePopover;
