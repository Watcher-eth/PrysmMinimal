import { View, Text } from "react-native";
import React from "react";
import ProfileModal from "../profile/profileModal";
import { Camera } from "lucide-react-native";
import { BlurView } from "expo-blur";
import ProfilePopover from "../profile/profilePopover";

const FeedHeader = () => {
  return (
    <BlurView
      intensity={80}
      tint="dark"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingRight: 15,
        paddingLeft: 15,
        padding: 11,
        marginTop: 16,
      }}
    >
      <View>
        <ProfilePopover />
      </View>
      <Text style={{ color: "white", fontSize: 18, fontWeight: "500" }}>
        Trending
      </Text>
      <View>
        <ProfileModal />
      </View>
    </BlurView>
  );
};

export default FeedHeader;
