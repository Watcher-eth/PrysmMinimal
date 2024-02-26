import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

import AddComment from "./addComment";

const CreateComment = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const modalHeight = useSharedValue(85); // Initial height
  const translateY = useSharedValue(0); // For moving the modal up
  const paddingTop = useSharedValue(0); // For moving the modal up

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      paddingTop: paddingTop.value,
      minHeight: 180,
      height: 190,
    };
  });

  return (
    <View style={styles.container}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Button
            onPress={handlePresentModalPress}
            title="Comment"
            color="black"
          />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            bottomInset={190}
            detached={true}
            style={styles.sheetContainer}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <Animated.View style={[styles.contentContainer, animatedStyle]}>
              <AddComment />
            </Animated.View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "lightgrey",
  },
  sheetContainer: {
    // add horizontal space
    flex: 1,
    marginHorizontal: 19,
    borderRadius: 22,
    justifyContent: "flex-start",
  },
  contentContainer: {
    alignItems: "center",
    borderRadius: 22,
    backgroundColor: "white",
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

export default CreateComment;
