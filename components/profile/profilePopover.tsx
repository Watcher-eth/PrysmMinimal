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

const ProfilePopover = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { width, height } = Dimensions.get("window");
  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

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
                marginTop: height / 10,
                marginLeft: 8,
              },
            ]}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <View style={styles.contentContainer}>
              <Image
                source={{
                  uri: "https://pbs.twimg.com/profile_images/1713576030063972352/qEdjq6VQ_400x400.jpg",
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
                  uri: "https://pbs.twimg.com/profile_images/1713576030063972352/qEdjq6VQ_400x400.jpg",
                }}
                style={{
                  width: 115,
                  height: 115,
                  borderRadius: 68,
                  overflow: "hidden",
                  marginTop: 15,
                  marginBottom: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 25,
                  color: "black",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                0xDesigner
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "black",
                  textAlign: "center",
                  padding: 3,
                  paddingHorizontal: 10,
                  backgroundColor: "lightgray",
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
                <Pressable
                  style={{
                    padding: 9,
                    borderRadius: 24,
                    overflow: "hidden",
                    backgroundColor: "lightgray",
                    width: 130,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "black",
                      fontWeight: "800",
                    }}
                  >
                    Share
                  </Text>
                </Pressable>
                <Pressable
                  style={{
                    marginLeft: 20,
                    padding: 9,
                    borderRadius: 24,
                    overflow: "hidden",
                    backgroundColor: "black",
                    width: 130,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      fontWeight: "800",
                    }}
                  >
                    Activity
                  </Text>
                </Pressable>
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
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "lightgrey",
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
