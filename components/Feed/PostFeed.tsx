import { View, Text, ActivityIndicator, Dimensions } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { lensClient } from "@/lib/stores/LensClient";
import {
  ExplorePublicationType,
  ExplorePublicationsOrderByType,
  PublicationMetadataMainFocusType,
} from "@lens-protocol/client";
import TextPost from "../post/types/TextPost";
import SideBet from "../post/types/SideBet";
import LinkPost from "../post/types/LinkPost";
import { FlashList } from "@shopify/flash-list";

// Define a fetch function
/*const fetchPublications = async () => {
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
  return result;
};
 */
const PostFeed = () => {
  const { width, height } = Dimensions.get("window");
  // Use the useQuery hook
  /*  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchPublications(),
  });

  if (isLoading) {
    return <ActivityIndicator />; // Show a loading spinner
  }

  if (error) {
    return (
      <View>
        <Text>Error fetching posts</Text>
      </View>
    );
  }
 */
  const feedData = [
    { type: "Text" },
    { type: "Link" },
    { type: "Text" },
    { type: "SideBet" },
    { type: "Image" },
    { type: "Text" },
  ];

  return (
    <View
      style={{
        width: width, // Full width of the screen
        height: height, // Full height of the screen
        display: "flex",

        backgroundColor: "#101010",
      }}
    >
      <FlashList
        style={{
          width: "100%", // Take the full width provided by the parent View
          height: "100%", // Take the full height provided by the parent View
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
        renderItem={({ item, index }) => {
          if (item.type === "Text") {
            if (index === 0) {
              return (
                <View
                  key={index}
                  style={{ alignSelf: "center", marginTop: 100 }}
                >
                  <TextPost border={true} />
                </View>
              );
            }
            return (
              <View key={index} style={{ alignSelf: "center" }}>
                <TextPost border={true} />
              </View>
            );
          }

          if (item.type === "Link")
            return (
              <View key={index} style={{ alignSelf: "center" }}>
                <LinkPost border={true} />
              </View>
            );
          if (item.type === "SideBet")
            return (
              <View key={index} style={{ alignSelf: "center" }}>
                <SideBet border={true} />
              </View>
            );
          return (
            <View key={index} style={{ alignSelf: "center" }}>
              <TextPost border={true} />
            </View>
          );
        }}
        estimatedItemSize={3}
        data={feedData}
        centerContent={true}
      />
    </View>
  );
};

export default PostFeed;
