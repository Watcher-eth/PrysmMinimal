import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import SearchGrid from "./searchGrid";
import Animated, {
  ZoomInEasyDown,
  ZoomInEasyUp,
  ZoomOutDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import SearchResults from "./SearchResults";
import { Search as SearchIcon } from "lucide-react-native";
import { BlurView } from "expo-blur";
const Search = () => {
  const [text, onChangeText] = useState<String>("");
  const { width, height } = Dimensions.get("window");
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
    scale.value = withSpring(1.01);
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
              <SearchIcon color="white" strokeWidth={4} />
            </Animated.View>
          </Pressable>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            bottomInset={0}
            // set `detached` to true
            detached={true}
            style={[styles.sheetContainer, { width: width / 1.09 }]}
            backgroundStyle={{ backgroundColor: "#131313" }}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <Animated.View
              entering={ZoomInEasyDown.duration(500)}
              exiting={ZoomOutDown.duration(500)}
              style={[
                styles.contentContainer,
                {
                  width: width / 1.09,
                  height: height / 1.7,
                  minHeight: 400,
                },
              ]}
            >
              <BlurView
                intensity={50}
                tint="systemChromeMaterialDark"
                style={[
                  styles.contentContainer,
                  {
                    width: width / 1.09,
                    borderRadius: 20,
                    overflow: "hidden",
                    height: height / 1.7,
                    paddingTop: 22,
                    minHeight: 400,
                    position: "absolute",
                  },
                ]}
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Search..."
              />
              {text.length > 2 ? <SearchResults /> : <SearchGrid />}
            </Animated.View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  sheetContainer: {
    backgroundColor: "#131313",

    marginTop: 180,
    // add horizontal space
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    marginRight: 9.5,
  },
  contentContainer: {
    alignItems: "center",
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,

    alignSelf: "center",

    marginRight: 9.5,
  },
  input: {
    fontSize: 18,
    display: "flex",
    width: "90%",
    color: "white",
    backgroundColor: "rgba(255,255,255, 0.25)",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 25,
    marginTop: 18,
    marginBottom: -10,
  },
});

export default Search;
