import { View, Text, Dimensions, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { AtSign, X } from "lucide-react-native";

import { useCallback, useMemo, useRef } from "react";
import { StyleSheet, Button } from "react-native";
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

const LoginPopup = () => {
  const { width, height } = Dimensions.get("window");
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const modalHeight = useSharedValue(29); // Initial height
  const translateY = useSharedValue(0); // For moving the modal up
  const paddingTop = useSharedValue(0); // For moving the modal up

  const [currentStep, setCurrentStep] = useState(0);

  const stepHeights = useMemo(() => [230], []);

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
          paddingTop.value = withTiming(28, {
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
        return <LoginModal changeStep={changeStep} />; // Pass changeStep as a prop
      case 1:
        return <LoginModal changeStep={changeStep} />;
      case 2:
        return <LoginModal changeStep={changeStep} />;
      case 3:
        return <LoginModal changeStep={changeStep} />;
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
            bottomInset={130}
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
    marginHorizontal: 19,
    borderRadius: 22,
    justifyContent: "flex-start",
  },
  contentContainer: {
    zIndex: 10,
    alignItems: "center",
    borderRadius: 22,
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

const LoginModal = ({ changeStep }) => {
  const { width, height } = Dimensions.get("window");
  const [text, onChangeText] = useState<string>("");
  //  const {isReady} = usePrivy();
  //const wallet =                          useEmbeddedWallet();
  //const {user} = usePrivy();
  //if (user !== null) continue
  //if (user === null) return
  // Socials   const {state, login} = useLoginWithOAuth();
  //  return state.status === 'done' ? (
  // Email   const {sendCode} = useLoginWithEmail();
  // Switch to confirmation   const {loginWithCode} = useLoginWithEmail();

  //if (isNotCreated(wallet)) {
  //  return <Button onPress={() => wallet.create()}>Create Wallet</Button>;
  // }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 20,
        width: "100%",
        marginTop: 10,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 2,
        }}
      >
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ fontSize: 25, color: "black", fontWeight: "700" }}>
            Login
          </Text>
          <Text style={{ fontSize: 16, color: "gray", fontWeight: "500" }}>
            Login to your Prysm account
          </Text>
        </View>
        <Pressable
          style={{
            paddingVertical: 8,
            paddingHorizontal: 6,
            borderRadius: 17,
            overflow: "hidden",
            backgroundColor: "#D9D9D9",
            alignSelf: "flex-start",
          }}
        >
          <X color={"#585858"} strokeWidth={5} height={20} />
        </Pressable>
      </View>
      <TextInput
        multiline={true}
        maxHeight={95}
        style={{
          fontSize: 20,
          display: "flex",
          marginLeft: 1,
          marginTop: 24,
          padding: 11,
          height: 45,
          paddingBottom: 0,
          paddingTop: 10,
          alignSelf: "center",
          alignItems: "center",
          borderRadius: 8,
          overflow: "hidden",
          width: "98%",
          fontWeight: "700",
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "#D9D9D9",
          color: "#585858",
        }}
        onChangeText={onChangeText}
        value={text}
        placeholder="satoshi@email.com "
      />
      <Pressable
        onPress={() => changeStep(0)}
        style={{
          marginTop: 12,
          display: "flex",
          flexDirection: "row",
          padding: 10,
          borderRadius: 24,
          overflow: "hidden",
          alignSelf: "center",
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "#D9D9D9",
          width: width / 1.28,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 8,
        }}
      >
        <AtSign color={"black"} />
        <Text
          style={{
            fontSize: 18,
            marginLeft: 5,
            fontWeight: "800",
            color: "black",
          }}
        >
          Sign in with Email
        </Text>
      </Pressable>
      <View
        style={{
          marginVertical: 7,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10,
          width: "100%",
          gap: 10,
        }}
      >
        <View
          style={{
            height: 2,
            width: "43%",
            borderRadius: 1,
            backgroundColor: "lightgray",
          }}
        />
        <Text
          style={{
            fontSize: 17,
            color: "lightgray",
            fontWeight: "600",
          }}
        >
          or
        </Text>

        <View
          style={{
            height: 2,
            width: "43%",
            borderRadius: 1,
            backgroundColor: "lightgray",
          }}
        />
      </View>
      <View
        style={{
          marginTop: 7,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={() => changeStep(0)}
          style={{
            borderRadius: 24,
            overflow: "hidden",
            backgroundColor: "#D9D9D9",

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              overflow: "hidden",
            }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/2048px-X_icon_2.svg.png",
            }}
          />
        </Pressable>
        <Pressable
          onPress={() => changeStep(0)}
          style={{
            borderRadius: 24,
            overflow: "hidden",

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              overflow: "hidden",
            }}
            source={{
              uri: "https://www.dockhunt.com/_next/image?url=https%3A%2F%2Fdockhunt-images.nyc3.cdn.digitaloceanspaces.com%2F84cc64af-2488-42c3-860d-3e40388b8240&w=384&q=75",
            }}
          />
        </Pressable>
        <Pressable
          onPress={() => changeStep(0)}
          style={{
            borderRadius: 24,
            overflow: "hidden",
            backgroundColor: "#D9D9D9",

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              overflow: "hidden",
            }}
            source={{
              uri: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
            }}
          />
        </Pressable>
        <Pressable
          onPress={() => changeStep(0)}
          style={{
            borderRadius: 24,
            overflow: "hidden",
            backgroundColor: "#D9D9D9",

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              overflow: "hidden",
            }}
            source={{
              uri: "https://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg",
            }}
          />
        </Pressable>
      </View>
      <Text
        style={{
          fontSize: 13,
          color: "gray",
          fontWeight: "500",
          textAlign: "center",
          paddingHorizontal: 50,
          marginTop: 15,
        }}
      >
        By signing up you agree to our Terms and Conditions
      </Text>
    </View>
  );
};

export default LoginPopup;
