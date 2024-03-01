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
import VotingScreen from "./VotingScreen";
import ConfirmationScreen from "./ConfirmationScreen";
import useVotingStore from "@/lib/stores/VotingStore";
import { BetModalProps } from "@/types/BetTypes";

const VoteSideBet = (props: BetModalProps) => {
  const { question, title, betId, options, totalPot, image } = props;
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const setVotingState = useVotingStore((state) => state.setState);

  const modalHeight = useSharedValue(440); // Initial height
  const translateY = useSharedValue(0); // For moving the modal up
  const paddingTop = useSharedValue(0); // For moving the modal up
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
      transform: [{ translateY: translateY.value }],
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
          <Button
            onPress={handlePresentModalPress}
            title="Present Modal"
            color="black"
          />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            bottomInset={360}
            detached={true}
            style={[styles.sheetContainer, { backgroundColor: "#131313" }]}
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
    justifyContent: "flex-start",
    flex: 1,
    backgroundColor: "#131313",
    opacity: 0,
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
