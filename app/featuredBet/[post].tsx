import { View, Text } from "react-native";
import React from "react";
import PostView from "@/components/post/types/PostView";
import { useLocalSearchParams } from "expo-router";
import FeaturedBet from "@/components/topics/community";
import { BetType } from "@/types/FeedTypes";

const PostViewPage = () => {
  const { id, name, image, topic, description, icon } =
    useLocalSearchParams<BetType>();
  console.log("postPAge", name);
  return (
    <FeaturedBet
      name={name}
      topic={topic}
      image={image}
      id={id}
      description={description}
      icon={icon}
    />
  );
};

export default PostViewPage;
