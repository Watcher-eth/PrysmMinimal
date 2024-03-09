import React from "react";
import { View, TextInput, StyleSheet, Text, Image } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { BlurView } from "expo-blur";
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
  FadeOutDown,
} from "react-native-reanimated";

const SearchResults = () => {
  const betsData = [
    {
      id: "1",
      title: "Will Farcaster reach 100k MAUs in Q3?",
      imageUri:
        "https://raw.githubusercontent.com/farcasterxyz/.github/master/farcaster.jpg", // Replace with your image path
      tag: "/Farcaster",
    },
    // ... other bets
  ];

  const usersData = [
    {
      id: "0",
      name: "Jesse Pollack",
      avatarUri: "https://avatars.githubusercontent.com/u/1097953?v=4", // Replace with your avatar path
      address: "0xdu4...rifdc",
    },
    {
      id: "1",
      name: "Jesse Pollack",
      avatarUri: "https://avatars.githubusercontent.com/u/1097953?v=4", // Replace with your avatar path
      address: "0xdu4...rifdc",
    },
    {
      id: "2",
      name: "Jesse Pollack",
      avatarUri: "https://avatars.githubusercontent.com/u/1097953?v=4", // Replace with your avatar path
      address: "0xdu4...rifdc",
    },
    {
      id: "3",
      name: "Jesse Pollack",
      avatarUri: "https://avatars.githubusercontent.com/u/1097953?v=4", // Replace with your avatar path
      address: "0xdu4...rifdc",
    },
    // ... other users
  ];

  const renderBetItem = ({ item }) => (
    <View
      style={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginTop: 15,
      }}
    >
      <Image source={{ uri: item.imageUri }} style={styles.betImage} />
      <BlurView
        intensity={18}
        tint="systemThinMaterialDark"
        style={{
          width: "100%",
          height: 140,
          position: "absolute",
          borderRadius: 15,
          overflow: "hidden",
        }}
      />
      <Text style={styles.betTitle}>{item.title}</Text>
      <Text style={styles.betTag}>{item.tag}</Text>
    </View>
  );

  const renderUserItem = ({ item }) => (
    <View style={styles.userItem}>
      <Image source={{ uri: item.avatarUri }} style={styles.userAvatar} />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userAddress}>{item.address}</Text>
      </View>
    </View>
  );

  return (
    <Animated.View
      style={styles.container}
      entering={FadeInDown.duration(500).easing(Easing.ease)}
      exiting={FadeOutDown.duration(500).easing(Easing.ease)}
    >
      {/* Render the bets list. You can replace this with a FlatList or ScrollView */}
      {betsData.map((bet) => renderBetItem({ item: bet }))}

      <Text
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "bold",

          marginTop: 12,
          marginBottom: 1,
        }}
      >
        Users
      </Text>
      {/* FlashList for users */}
      <FlashList
        data={usersData}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id}
        estimatedItemSize={100} // Adjust based on your average item height
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "89%",
  },

  sectionTitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",

    marginTop: 15,
    marginBottom: 3,
  },
  betItem: {
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 15,
    overflow: "hidden",
    width: "100%",
    height: 140, // Adjust the height
  },
  betImage: {
    width: "100%",
    height: 140, // Adjust the height
    borderRadius: 12,
    overflow: "hidden",
  },
  betTitle: {
    color: "#fff",
    position: "absolute",
    bottom: 28,
    textAlign: "center",
    left: 15,
    fontSize: 26,
    lineHeight: 28,
    paddingHorizontal: 20,
    alignSelf: "center",
    fontWeight: "700",
  },
  betTag: {
    color: "black",
    position: "absolute",
    top: 27,
    right: 121,
    fontSize: 12.5,
    padding: 3,
    fontWeight: "500",
    paddingHorizontal: 7,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
  },
  userItem: {
    flexDirection: "row",

    alignItems: "center",
    backgroundColor: "#191919", // Slightly lighter than the container for contrast
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 0,
    borderRadius: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "600",
    color: "white",
  },
  userAddress: {
    fontWeight: "400",
    color: "gray",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 1,
    fontSize: 13,
  },
});

export default SearchResults;
