import { View, Text, Image, Pressable } from "react-native";
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

const ProfileModal = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

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
  return (
    <BottomSheetModalProvider>
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
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={{}}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </BottomSheetModalProvider>
  );
};

export default ProfileModal;
