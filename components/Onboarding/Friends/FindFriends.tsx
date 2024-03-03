import {
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useQuery } from "@airstack/airstack-react";
import {
  onchainFollowingQuery,
  onchainFollowingQuery2,
} from "@/lib/queries/GetOnchainFollowing";
import { FindFriendsPropData } from "@/constants/testData";
import AnimatedPressable from "@/components/common/AnimatedPressable";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  FadeIn,
  FadeOut,
} from "react-native-reanimated";
import { convertIpfsUrl } from "@/lib/utils/modifyIpfsUrl";
import { LinearGradient } from "expo-linear-gradient";
const FindFriends = () => {
  const address = "0x8512B8f41a6D1f2Aa0D09ae710b705498735F265";
  const [text, onChangeText] = useState<String>("");
  const [results, onChangeResults] = useState<[]>([]);
  const { width, height } = Dimensions.get("window");
  //Fetch following from Airstack

  // Execute the query with the useQuery hook
  const { data, error, loading } = useQuery(
    onchainFollowingQuery2,
    {},
    {
      cache: false,
    }
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! {error.message}</Text>;

  const handleTextChange = (text) => {
    onChangeText(text); // Update text input state
    // Directly filter FindFriendsPropData based on the new text input
    const filteredResults = data.SocialFollowings.Following.filter(
      (item) =>
        item.followingAddress.socials[0].profileName
          .toLowerCase()
          .includes(text.toLowerCase()) ||
        item.followingAddress.socials[0].profileHandle
          .toLowerCase()
          .includes(text.toLowerCase())
    );
    onChangeResults(filteredResults); // Update results state
  };
  const dataToRender =
    text === "" ? data?.SocialFollowings?.Following : results;

  console.log(
    "Re:",
    data?.SocialFollowings?.Following[0].followingAddress.socials
  );
  if (data)
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          padding: 8,
          backgroundColor: "#FCFCFC",
        }}
      >
        <Text
          style={{
            fontSize: 19,
            color: "black",
            fontWeight: "700",
            marginTop: 50,
          }}
        >
          Find your Friends
        </Text>
        <AnimatedPressable
          style={{
            display: "flex",
            width: width / 1.05,
            marginLeft: 10,
            alignSelf: "center",
          }}
        >
          <TextInput
            style={{
              fontSize: 18,
              display: "flex",
              width: "90%",
              backgroundColor: "#F3F3F3",
              padding: 10,
              marginHorizontal: 10,
              marginTop: 15,

              borderRadius: 20,
            }}
            onChangeText={handleTextChange}
            value={text}
            placeholder="Search..."
          />
        </AnimatedPressable>
        <Text
          style={{
            fontSize: 16,
            color: "gray",
            fontWeight: "600",
            marginVertical: 12,
            alignSelf: "flex-start",
            marginLeft: 22,
            marginTop: 18,
          }}
        >
          Find friends on other apps
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
            padding: 8,
            borderRadius: 20,
            height: 80,
            backgroundColor: "#F4F4F4",
            paddingHorizontal: 15,
          }}
        >
          <AnimatedPressable>
            <Image
              style={{
                height: 55,
                width: 55,
                borderRadius: 10,
                overflow: "hidden",
              }}
              source={{
                uri: "https://avatars.githubusercontent.com/u/108458858?s=200&v=4",
              }}
            />
          </AnimatedPressable>
          <AnimatedPressable>
            <Image
              style={{
                height: 55,
                width: 55,
                borderRadius: 10,
                overflow: "hidden",
                backgroundColor: "black",
              }}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png",
              }}
            />
          </AnimatedPressable>
          <AnimatedPressable>
            <Image
              style={{
                height: 55,
                width: 55,
                borderRadius: 10,
                overflow: "hidden",
              }}
              source={{
                uri: "https://s3-alpha.figma.com/hub/file/2654611074/ce2996c3-aa3d-470f-9cd1-ad5d8ddd72c1-cover.png",
              }}
            />
          </AnimatedPressable>
          <AnimatedPressable>
            <Image
              style={{
                height: 55,
                width: 55,
                borderRadius: 10,
                overflow: "hidden",
              }}
              source={{
                uri: "https://publish.one37pm.net/wp-content/uploads/2023/11/Screenshot-2023-11-29-at-2.41.58-PM-e1701286954195.png?resize=630%2C682",
              }}
            />
          </AnimatedPressable>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: "gray",
            fontWeight: "600",
            marginVertical: 12,
            alignSelf: "flex-start",
            marginLeft: 22,
            marginTop: 14,
          }}
        >
          People you may know
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: height / 1.78, width: "88%" }}
        >
          {dataToRender.map((item, index) => {
            console.log(item.followingAddress.socials[0]);
            return (
              <Animated.View
                entering={FadeIn.duration(500)} // Entry animation
                exiting={FadeOut.duration(500)} // Exit animation
                key={index} // Don't forget to provide a unique key
                style={{ display: "flex", flexDirection: "column" }}
              >
                <FindFriendsItem
                  isFollowing={item.isFollowing}
                  pfp={item.followingAddress.socials[0].profileImage}
                  handle={item.followingAddress.socials[0].profileHandle}
                  name={item.followingAddress.socials[0].profileName}
                />
                <View
                  style={{
                    height: 1,
                    width: width / 1.42,
                    backgroundColor: "lightgray",
                    alignSelf: "flex-end",
                    marginVertical: 1,
                  }}
                />
              </Animated.View>
            );
          })}
        </ScrollView>
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(200,200,200,0.1)", "white"]}
          style={{
            width: width,
            height: 30,
            position: "absolute",
            bottom: 80,
          }}
        />
        <View
          style={{
            width: width,
            height: 80,
            position: "absolute",
            bottom: 0,
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <AnimatedPressable
            style={{
              width: width / 1.2,
              height: 50,
              borderRadius: 28,
              overflow: "hidden",
              backgroundColor: "#F3F3F3",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: "600",
                marginVertical: 12,

                marginLeft: 22,
                marginTop: 14,
              }}
            >
              Done
            </Text>
          </AnimatedPressable>
        </View>
      </View>
    );
};

export default FindFriends;

function FindFriendsItem(props: {
  name: string;
  pfp: string;
  handle: string;
  isFollowing: boolean;
}) {
  const { name, pfp, handle, isFollowing } = props;
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginVertical: 8,
      }}
    >
      <AnimatedPressable
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            height: 40,
            width: 40,
            borderRadius: 19,
            overflow: "hidden",
          }}
          source={{
            uri: convertIpfsUrl(pfp),
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 8,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              color: "black",
              fontWeight: "700",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "gray",
              fontWeight: "500",
            }}
          >
            {handle}
          </Text>
        </View>
      </AnimatedPressable>
      <AnimatedPressable>
        <Text
          style={{
            color: !isFollowing ? "white" : "gray",
            fontWeight: "700",
            fontSize: 14,
            padding: 10,
            borderRadius: 18,
            overflow: "hidden",
            backgroundColor: !isFollowing ? "black" : "lightgray",
          }}
        >
          {isFollowing ? "Following" : "Follow"}
        </Text>
      </AnimatedPressable>
    </View>
  );
}
