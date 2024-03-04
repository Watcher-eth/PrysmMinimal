import { View, Text } from "react-native";
import React from "react";
import { lensClient } from "@/lib/stores/LensClient";
import {
  ExplorePublicationType,
  ExplorePublicationsOrderByType,
  PublicationMetadataMainFocusType,
} from "@lens-protocol/client";

const PostFeed = () => {
  const result = await lensClient.explore.publications({
    orderBy: ExplorePublicationsOrderByType.LensCurated,
    where: {
      metadata: {
        mainContentFocus: [
          PublicationMetadataMainFocusType.Link,
          PublicationMetadataMainFocusType.TextOnly,
        ],
      },
    },
  });

  return (
    <View>
      <Text>PostFeed</Text>
    </View>
  );
};

export default PostFeed;
