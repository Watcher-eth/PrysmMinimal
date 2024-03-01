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
import AddCover from "./addCover";
import AddTitle from "./addTitle";
import AddQuestion from "./addQuestion";
import ConfirmBet from "./Confirm";

const CreateBet = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const modalHeight = useSharedValue(240); // Initial height
  const translateY = useSharedValue(0); // For moving the modal up
  const paddingTop = useSharedValue(0); // For moving the modal up

  const [currentStep, setCurrentStep] = useState(0);

  const stepHeights = useMemo(() => [240, 260, 470, 550], []);

  if (currentStep === 1) {
  }

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const changeStep = useCallback(
    (stepIndex) => {
      if (stepIndex >= 0 && stepIndex < stepHeights.length) {
        const newHeight = stepHeights[stepIndex];

        // Calculate the expected bottom position based on the new height

        modalHeight.value = withTiming(newHeight, { duration: 500 });

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
    };
  });

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <AddTitle changeStep={changeStep} />; // Pass changeStep as a prop
      case 1:
        return <AddQuestion changeStep={changeStep} />;
      case 2:
        return <AddCover changeStep={changeStep} />;
      case 3:
        return <ConfirmBet changeStep={changeStep} />;
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
            bottomInset={380}
            detached={true}
            style={[styles.sheetContainer]}
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
    marginHorizontal: 19,
    borderRadius: 22,

    flex: 1,
    backgroundColor: "#131313",
  },
  contentContainer: {
    flex: 1,
    zIndex: 10,
    alignItems: "center",
    borderRadius: 22,

    backgroundColor: "#131313",
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

export default CreateBet;
