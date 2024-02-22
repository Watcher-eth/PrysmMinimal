import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { TouchableOpacity } from "react-native-gesture-handler";

const ReccomendedTab = () => {
  const { width, height } = Dimensions.get("window");

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: width / 1.25,
        height: width / 2.4,
        borderRadius: 13,

        marginTop: 10,
      }}
    >
      <RecomendedProfile />
      <RecomendedCommunity />
    </View>
  );
};

export default ReccomendedTab;

const RecomendedProfile = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: width / 2.58,
        height: width / 2.5,
        borderRadius: 13,
        border: "1px solid lightgrey",
        backgroundColor: "pink",
      }}
    >
      <Image
        source={{
          uri: "https://pbs.twimg.com/profile_images/1713576030063972352/qEdjq6VQ_400x400.jpg",
        }}
        style={{
          width: width / 2.58,
          height: width / 2.5,
          borderRadius: 9,
          overflow: "hidden",
          position: "absolute",
        }}
      />
      <BlurView
        intensity={65.5}
        tint="regular"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: width / 2.58,
          height: width / 2.5,
          borderRadius: 9,
          overflow: "hidden",
          paddingLeft: 10,
          position: "absolute",
          bottom: 0,
        }}
      />
      <Image
        source={{
          uri: "https://pbs.twimg.com/profile_images/1713576030063972352/qEdjq6VQ_400x400.jpg",
        }}
        style={{
          width: width / 4.95,
          height: width / 4.95,
          borderRadius: 100,
          marginTop: 10,

          overflow: "hidden",
        }}
      />
      <Text
        style={{
          color: "white",
          fontWeight: "700",
          marginTop: 6,
          fontSize: 15.5,
        }}
      >
        0xDesigner
      </Text>
      <TouchableOpacity
        style={{
          padding: 1,
          marginTop: 6,
          paddingHorizontal: 5,
          borderWidth: 2,
          borderColor: "white",
          borderStyle: "dashed",
          borderRadius: 9,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "700",

            fontSize: 13.5,
          }}
        >
          Follow
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const RecomendedCommunity = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: width / 2.58,
        height: width / 2.5,
        borderRadius: 13,
        border: "1px solid lightgrey",
        backgroundColor: "pink",
      }}
    >
      <Image
        source={{
          uri: "https:/raw.githubusercontent.com/farcasterxyz/.github/master/farcaster.jpg",
        }}
        style={{
          width: width / 2.58,
          height: width / 2.5,
          borderRadius: 9,
          overflow: "hidden",
          position: "absolute",
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "flex-start",
          marginLeft: 9,
          marginTop: 9,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "700",

            fontSize: 17.5,
          }}
        >
          Farcaster
        </Text>
        <Text
          style={{
            color: "white",
            fontWeight: "500",

            fontSize: 13.5,
          }}
        >
          Trending
        </Text>
      </View>
    </View>
  );
};
