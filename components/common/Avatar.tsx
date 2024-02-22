import { View, Text, Image } from "react-native";
import React from "react";

function Avatar(props: { image: string; height: number; width: number }) {
  return (
    <Image
      source={{ uri: props.image }}
      style={{
        width: props.width,
        height: props.height,
        borderRadius: props.height / 2,
        overflow: "hidden",
        marginRight: -props.width / 4,
      }}
    />
  );
}

export const AvatarGroup = (props: {
  images: string[];
  height: number;
  width: number;
}) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
      }}
    >
      {props.images.map((image, index) => {
        return (
          <Avatar image={image} height={props.height} width={props.width} />
        );
      })}
    </View>
  );
};

export default Avatar;
