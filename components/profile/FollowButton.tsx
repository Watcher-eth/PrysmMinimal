import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { UserRoundPlus } from "lucide-react-native";
import { lensClient } from "@/lib/stores/LensClient";

const FollowButton = ({ profileId }) => {
  const [isFollowing, setFollowing] = useState(false);
  const scale = useSharedValue(1);
  async function checkFollowing() {
    const { isFollowedByMe } = await lensClient.profile.fetch({
      forProfileId: profileId,
    });
    setFollowing(isFollowedByMe);
  }
  checkFollowing();
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(1.08);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  async function FollowUser() {
    const result = await lensClient.profile.follow({
      follow: [
        {
          profileId: profileId,
        },
      ],
    });
    if (result.isSuccess()) {
      setFollowing(true);
    }
  }
  return (
    <Pressable
      onPress={FollowUser}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={[
          animatedStyle,
          {
            display: "flex",
            flexDirection: "row",
            padding: 10,
            borderRadius: 24,
            overflow: "hidden",
            backgroundColor: "#060606",
            width: 140,
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          },
        ]}
      >
        <UserRoundPlus color={"white"} height={18} strokeWidth={3.2} />
        <Text style={{ color: "white", fontWeight: "700", fontSize: 19 }}>
          Follow
        </Text>
      </Animated.View>
    </Pressable>
  );
};

export default FollowButton;
