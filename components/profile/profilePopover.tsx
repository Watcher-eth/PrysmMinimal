import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import ConfirmBet from "../create/Bet/Confirm";
import { BlurView } from "expo-blur";
import AnimatedPressable from "../common/AnimatedPressable";
import { Activity, Share } from "lucide-react-native";
import { router } from "expo-router";
const { width, height } = Dimensions.get("window");

const ProfilePopover = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  // variables
  const snapPoints = useMemo(() => ["10%", "80%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(1.08);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };
  // renders
  return (
    <View style={styles.container}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Pressable
            onPress={handlePresentModalPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Animated.View style={animatedStyle}>
              <Image
                source={{
                  uri: "https://avatars.githubusercontent.com/u/1097953?v=4",
                }}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 100,
                  overflow: "hidden",
                  marginRight: 20,
                }}
              />
            </Animated.View>
          </Pressable>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            // set `detached` to true
            detached={true}
            style={[
              styles.sheetContainer,
              {
                width: width / 1.12,
                marginTop: height / 2.5,
                marginLeft: 8,
              },
            ]}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            backgroundStyle={{ backgroundColor: "transparent" }}
          >
            <View style={styles.contentContainer}>
              <Image
                source={{
                  uri: "https://avatars.githubusercontent.com/u/1097953?v=4",
                }}
                style={{
                  width: width / 1.13,
                  height: 90,
                  position: "absolute",
                  top: 0,
                  borderTopLeftRadius: 22,
                  borderTopRightRadius: 22,
                  marginBottom: 10,
                  overflow: "hidden",
                }}
              />
              <BlurView
                intensity={540}
                tint="systemUltraThinMaterialDark"
                style={{
                  width: width / 1.12,
                  height: 90,
                  position: "absolute",
                  top: 0,
                  borderTopLeftRadius: 22,
                  borderTopRightRadius: 22,
                  overflow: "hidden",
                  marginBottom: 10,
                }}
              />
              <Image
                source={{
                  uri: "https://avatars.githubusercontent.com/u/1097953?v=4",
                }}
                style={{
                  width: 105,
                  height: 105,
                  borderRadius: 68,
                  overflow: "hidden",
                  marginTop: 15,
                  marginBottom: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 25,
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                Jesse Pollack
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: "#D9D9D9",
                  textAlign: "center",
                  padding: 4,
                  paddingHorizontal: 10,
                  backgroundColor: "#1D1D1D",
                  marginTop: 5,
                  borderRadius: 11,
                  overflow: "hidden",
                  fontWeight: "600",
                }}
              >
                0x1jf4d...r3fx
              </Text>
              <View
                style={{
                  marginTop: 20,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  alignSelf: "center",
                }}
              >
                <AnimatedPressable
                  onPress={() => {
                    return;
                  }}
                  style={{
                    padding: 9,
                    borderRadius: 24,
                    paddingVertical: 10,
                    overflow: "hidden",
                    backgroundColor: "#1D1D1D",
                    width: 130,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Share color={"#D9D9D9"} height={20} strokeWidth={3} />
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#D9D9D9",
                      fontWeight: "800",
                      marginLeft: 2,
                    }}
                  >
                    Share
                  </Text>
                </AnimatedPressable>
                <AnimatedPressable
                  onPress={() =>
                    router.navigate({
                      pathname: "activity",
                    })
                  }
                  style={{
                    marginLeft: 20,
                    padding: 9,
                    paddingVertical: 8,
                    borderRadius: 24,
                    overflow: "hidden",
                    backgroundColor: "#D9D9D9",
                    display: "flex",
                    flexDirection: "row",
                    width: 130,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Activity color={"#1D1D1D"} height={20} strokeWidth={3} />
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#1D1D1D",
                      fontWeight: "800",
                      marginLeft: 2,
                    }}
                  >
                    Activity
                  </Text>
                </AnimatedPressable>
              </View>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  sheetContainer: {
    // add horizontal space
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  contentContainer: {
    alignItems: "center",
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    borderRadius: 22,
    height: 278,
    minHeight: 225,
    backgroundColor: "#141414",
    borderWidth: 2,
    borderColor: "#202020",
    right: width / 1.22,
  },
  input: {
    fontSize: 18,
    display: "flex",
    width: "90%",
    backgroundColor: "#F3F3F3",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 25,
  },
});

export default ProfilePopover;
