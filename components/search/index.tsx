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
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import SearchResults from "./SearchResults";
import { Search as SearchIcon } from "lucide-react-native";
const Search = () => {
  const [text, onChangeText] = useState<String>("");
  const { width } = Dimensions.get("window");
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
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <Animated.View
              style={[styles.contentContainer, { width: width / 1.09 }]}
            >
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
    backgroundColor: "white",

    marginTop: 180,
    // add horizontal space
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  contentContainer: {
    alignItems: "center",
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,

    height: 488,
    minHeight: 400,
    backgroundColor: "white",
    alignSelf: "center",

    marginRight: 9.5,
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

export default Search;
