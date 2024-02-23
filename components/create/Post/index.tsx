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

import AddTitle from "../Bet/addTitle";
import AddQuestion from "../Bet/addQuestion";
import AddPost from "./AddPost";
import ConfirmPost from "./ConfirmPost";

const CreatePost = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const modalHeight = useSharedValue(195); // Initial height
  const translateY = useSharedValue(0); // For moving the modal up
  const paddingTop = useSharedValue(0); // For moving the modal up

  const [currentStep, setCurrentStep] = useState(0);

  const stepHeights = useMemo(() => [210, 402], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const changeStep = useCallback(
    (stepIndex: number) => {
      if (stepIndex >= 0 && stepIndex < stepHeights.length) {
        const newHeight = stepHeights[stepIndex];
        const initialBottomPosition = 200; /* Determine the initial bottom position of the modal */

        // Calculate the expected bottom position based on the new height
        const expectedBottomPosition = initialBottomPosition - newHeight;

        // Adjust translateY to ensure the bottom of the modal remains at the initial bottom position
        translateY.value = withTiming(expectedBottomPosition, {
          duration: 500,
          easing: Easing.bezier(0.22, 1, 0.36, 1), // Customize this bezier curve as needed
        });

        modalHeight.value = withTiming(newHeight, { duration: 500 });
        if (stepIndex === 0)
          paddingTop.value = withTiming(16, {
            duration: 500,
            easing: Easing.bezier(0.22, 1, 0.36, 1), // Customize this bezier curve as needed
          });
        if (stepIndex > 0)
          paddingTop.value = withTiming(23, {
            duration: 500,
            easing: Easing.bezier(0.22, 1, 0.36, 1), // Customize this bezier curve as needed
          }); // For moving the modal up

        setCurrentStep(stepIndex);
      }
    },
    [stepHeights]
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: modalHeight.value,
      paddingTop: paddingTop.value,
      minHeight: modalHeight.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <AddPost changeStep={changeStep} />; // Pass changeStep as a prop
      case 1:
        return <ConfirmPost changeStep={changeStep} />;

      // Add other cases for different steps
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Button
            onPress={handlePresentModalPress}
            title="Present Modal"
            color="black"
          />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            bottomInset={30}
            detached={true}
            style={styles.sheetContainer}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <Animated.View style={[styles.contentContainer, animatedStyle]}>
              {renderStepContent()}
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

    marginHorizontal: 19,
    borderRadius: 22,
    justifyContent: "flex-start",
  },
  contentContainer: {
    flex: 1,
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

export default CreatePost;
