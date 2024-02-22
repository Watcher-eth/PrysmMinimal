import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import SearchGrid from "./searchGrid";

const Search = () => {
  const [text, onChangeText] = useState<String>("");

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

  // renders
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
            bottomInset={450}
            // set `detached` to true
            detached={true}
            style={styles.sheetContainer}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <View style={styles.contentContainer}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Search..."
              />
              <SearchGrid />
            </View>
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
    borderRadius: 12,
    justifyContent: "flex-start",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    borderRadius: 12,
    height: 600,
    minHeight: 460,
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

export default Search;
