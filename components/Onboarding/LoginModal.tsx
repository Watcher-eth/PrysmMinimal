import { View, Text, Dimensions, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { AtSign, PhoneCall, X } from "lucide-react-native";

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
import {
  isNotCreated,
  useEmbeddedWallet,
  useLoginWithEmail,
  useLoginWithOAuth,
  useLoginWithSMS,
  usePrivy,
} from "@privy-io/expo";
import AnimatedPressable from "../common/AnimatedPressable";
import useUserStore from "@/lib/stores/UserStore";
import ConnectSocialsModal from "./ConnectSocialsModal";

const LoginPopup = () => {
  const { width, height } = Dimensions.get("window");
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const modalHeight = useSharedValue(335); // Initial height
  const paddingTop = useSharedValue(0); // For moving the modal up

  const [currentStep, setCurrentStep] = useState(0);

  const stepHeights = useMemo(() => [335, 272], []);

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
        return <LoginModal changeStep={changeStep} />; // Pass changeStep as a prop
      case 1:
        return <ConnectSocialsModal changeStep={changeStep} />;
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
          <Pressable
            style={{
              padding: 8,
              paddingHorizontal: 35,
              borderRadius: 18,
              backgroundColor: "white",
              marginTop: 40,
              width: 120,
              alignSelf: "center",
            }}
            onPress={handlePresentModalPress}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "700",
                fontSize: 17,
                alignSelf: "center",
              }}
            >
              Login
            </Text>
          </Pressable>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            bottomInset={300}
            detached={true}
            style={[styles.sheetContainer, {}]}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <Animated.View
              style={[
                styles.contentContainer,
                animatedStyle,
                {
                  width: width / 1.15,
                },
              ]}
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
    width: "87%",
    alignSelf: "center",
  },
  sheetContainer: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    alignItems: "center",
    marginTop: -270,
    backgroundColor: "white",
  },
  contentContainer: {
    zIndex: 10,
    alignItems: "center",
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,

    height: 320,
    minHeight: 320,
    paddingBottom: 20,
    backgroundColor: "white",
    alignSelf: "center",
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
  const [phone, setPhone] = useState<string>("");
  const [loadingState, setLoadingState] = useState<string>("");
  const setUser = useUserStore((state) => state.setState);

  //  const { sendCode } = useLoginWithSMS();

  // const { isReady } = usePrivy();
  // const { user } = usePrivy();
  /* if (user !== null) {
    setUser({ id: "user.id" });
  }
  if (user === null) {
  }
  console.log("ready", isReady);

  function Login() {
    //Login
    setLoadingState("logging in");
    //Create wallet
    if (isReady) {
      setLoadingState("conecting wallet");

      const wallet = useEmbeddedWallet();
      if (isNotCreated(wallet)) {
        setLoadingState("creating wallet");

        wallet.create();
      }
      const { state, login } = useLoginWithOAuth();
      setLoadingState("finished");

      return wallet;
    }

    //Link Twitter (get PFP and Name)

    //Update user store
  }
  //Socials

  //  return state.status === 'done' ? (
  // Email   const {sendCode} = useLoginWithEmail();
  // Switch to confirmation   const {loginWithCode} = useLoginWithEmail();

  //if (isNotCreated(wallet)) {
  //  return <Button onPress={() => wallet.create()}>Create Wallet</Button>;
  // }
  */
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 20,
        width: width / 1.15,
        height: height / 2.4,

        paddingBottom: 15,
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
        <AnimatedPressable
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
        </AnimatedPressable>
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
          textAlign: "center",
        }}
        onChangeText={setPhone}
        value={phone}
        placeholder="+1 685 823904 "
      />
      <AnimatedPressable
        onPress={() => {
          sendCode({ phone });
          changeStep(1);
        }}
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
          width: "98%",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 8,
        }}
      >
        <PhoneCall color={"black"} height={22} />
        <Text
          style={{
            fontSize: 18,
            marginLeft: 7,
            fontWeight: "800",
            color: "black",
          }}
        >
          Sign in with Phone
        </Text>
      </AnimatedPressable>
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
        <AnimatedPressable
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
        </AnimatedPressable>
        <AnimatedPressable
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
        </AnimatedPressable>
        <AnimatedPressable
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
        </AnimatedPressable>
        <AnimatedPressable
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
        </AnimatedPressable>
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
