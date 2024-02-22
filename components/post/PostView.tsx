import { View, Text, Dimensions } from "react-native";
import React from "react";

const PostView = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View>
      <Text>PostView</Text>
    </View>
  );
};

export default PostView;
