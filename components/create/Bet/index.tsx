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
  FadeOutUp,
  FadeInUp,
  FadeOutDown,
  ZoomInEasyUp,
  ZoomOutDown,
} from "react-native-reanimated";
import AddCover from "./addCover";
import AddTitle from "./addTitle";
import AddQuestion from "./addQuestion";
import ConfirmBet from "./Confirm";
import AddOptions from "./addOptions";
import AnimatedPressable from "@/components/common/AnimatedPressable";
import { Plus } from "lucide-react-native";

const CreateBet = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const modalHeight = useSharedValue(260); // Initial height
  const modalTop = useSharedValue(-260); // Initial top position

  const [currentStep, setCurrentStep] = useState(0);

  const stepHeights = useMemo(() => [260, 280, 330, 490, 570], []);

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
        modalHeight.value = withTiming(newHeight, { duration: 500 });
        modalTop.value = withTiming(-newHeight, { duration: 500 }); // Adjust top position
        setCurrentStep(stepIndex);
      }
    },
    [stepHeights]
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: modalHeight.value,
      minHeight: modalHeight.value,
      top: modalTop.value, // Set top position
    };
  });

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <AddTitle changeStep={changeStep} />; // Pass changeStep as a prop
      case 1:
        return <AddQuestion changeStep={changeStep} />;
      case 2:
        return <AddOptions changeStep={changeStep} />;
      case 3:
        return <AddCover changeStep={changeStep} />;
      case 4:
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
          <AnimatedPressable
            onPress={handlePresentModalPress}
            style={{
              padding: 10,

              backgroundColor: "rgba(90,90,90, 0.3)",
              borderRadius: 20,
              marginHorizontal: 10,
              overflow: "hidden",
              width: 43,
              height: 43,
              alignSelf: "flex-end",
            }}
          >
            <Plus color="white" strokeWidth={3} />
          </AnimatedPressable>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            bottomInset={0}
            detached={true}
            style={[styles.sheetContainer]}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <Animated.View
              entering={ZoomInEasyUp.duration(500)}
              exiting={ZoomOutDown.duration(500)}
              style={[styles.contentContainer, animatedStyle]}
            >
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
    justifyContent: "flex-end", // Align items to the bottom
  },
  sheetContainer: {
    marginHorizontal: 19,
    borderRadius: 22,
    backgroundColor: "transparent",
    flex: 1,
  },
  contentContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 10,
    alignItems: "center",
    borderRadius: 22,
    backgroundColor: "#131313",
    paddingTop: 25,
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
