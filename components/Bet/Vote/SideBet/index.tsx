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
  ZoomInEasyUp,
  ZoomOutDown,
} from "react-native-reanimated";
import VotingScreen from "./VotingScreen";
import ConfirmationScreen from "./ConfirmationScreen";
import useVotingStore from "@/lib/stores/VotingStore";
import { BetModalProps } from "@/types/BetTypes";
import AnimatedPressable from "@/components/common/AnimatedPressable";
import PollingComponent from "../../BetSlider";

const VoteSideBet = (props: BetModalProps) => {
  const { question, title, betId, options, totalPot, image } = props;
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const setVotingState = useVotingStore((state) => state.setState);

  const modalHeight = useSharedValue(420); // Initial height
  const modalTop = useSharedValue(-420); // For moving the modal up
  const [currentStep, setCurrentStep] = useState(0);

  const stepHeights = useMemo(() => [420, 390, 424, 450], []);

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
        return (
          <VotingScreen
            options={options}
            totalPot={totalPot}
            image={image}
            title={title}
            question={question}
            changeStep={changeStep}
          />
        ); // Pass changeStep as a prop
      case 1:
        return (
          <ConfirmationScreen
            changeStep={changeStep}
            question={question}
            multiplier={3}
            options={["No", "Yes"]}
            image={image}
          />
        );
      // Add other cases for different steps
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <AnimatedPressable onPress={handlePresentModalPress}>
            <PollingComponent yesValue={40} noValue={60} />
          </AnimatedPressable>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            bottomInset={0}
            detached={true}
            style={[styles.sheetContainer, { backgroundColor: "#131313" }]}
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
  },
  sheetContainer: {
    marginHorizontal: 19,
    borderRadius: 22,
    justifyContent: "flex-start",
    flex: 1,
    backgroundColor: "#131313",
    opacity: 0,
    zIndex: 13,
  },
  contentContainer: {
    flex: 1,
    zIndex: 10,
    alignItems: "center",
    borderRadius: 22,
    minHeight: 300,
    height: 300,
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

export default VoteSideBet;
