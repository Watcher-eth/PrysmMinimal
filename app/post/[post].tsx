import { View, Text } from "react-native";
import React from "react";
import PostView from "@/components/post/types/PostView";
import { useLocalSearchParams } from "expo-router";

const PostViewPage = () => {
  const { post, name, image, type } = useLocalSearchParams<PostFeedType>();

  return <PostView name={name} type={type} image={image} post={post} />;
};

export default PostViewPage;
