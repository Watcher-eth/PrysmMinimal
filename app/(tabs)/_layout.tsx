import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, Text } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import ProfileModal from "@/components/profile/profileModal";
import FeedHeader from "@/components/Feed/header";

import { BlurView } from "expo-blur";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Activity,
  Compass,
  FlaskConical,
  Globe,
  Home,
  Newspaper,
} from "lucide-react-native";
import { useEmbeddedWallet } from "@privy-io/expo";
import { TabBarButton } from "@/components/common/AnimatedTabBarButton";
import { HomeIcon } from "@/assets/icons/HomeIcon";
import { ExploreIcon } from "@/assets/icons/ExploreIcon";
import { ProfileIcon } from "@/assets/icons/ProfileIcon";
import CreateBet from "@/components/create/Bet";
import AnimatedPressable from "@/components/common/AnimatedPressable";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <BlurView
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        paddingVertical: 12,
        marginHorizontal: 65,
        marginVertical: 34,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 50,
        overflow: "hidden",
        alignItems: "center",
      }}
      tint="systemChromeMaterialDark"
      intensity={100}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <AnimatedPressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            {label === "Tab One" && (
              <Newspaper
                height={30}
                style={{ alignSelf: "center", marginTop: 2 }}
                color={isFocused ? "white" : "gray"}
              />
            )}

            {label === "Tab Two" && (
              <TabBarButton
                title="Profile"
                focused={isFocused}
                icon={ProfileIcon}
                onPress={onPress}
              />
            )}
            {label === "Explore" && (
              <TabBarButton
                title="Explore"
                focused={isFocused}
                icon={ExploreIcon}
                onPress={onPress}
              />
            )}
            {label === "Test" && (
              <FlaskConical
                height={34}
                style={{ alignSelf: "center", marginTop: 1 }}
                color={isFocused ? "white" : "gray"}
              />
            )}
            {label === "Activity" && (
              <Activity
                height={34}
                style={{ alignSelf: "center", marginTop: 1 }}
                color={isFocused ? "white" : "gray"}
              />
            )}
          </AnimatedPressable>
        );
      })}
    </BlurView>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="explore"
      screenOptions={{
        tabBarActiveBackgroundColor: "#070707",
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: false,
          title: "Explore",
          tabBarButton: ({ accessibilityState, onPress }) => (
            <TabBarButton
              title="Explore"
              focused={accessibilityState?.selected}
              icon={ExploreIcon}
              onPress={onPress}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          tabBarButton: ({ accessibilityState, onPress }) => (
            <TabBarButton
              title="Home"
              focused={accessibilityState?.selected}
              icon={HomeIcon}
              onPress={onPress}
            />
          ),
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTransparent: true,
          header: () => <FeedHeader />,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          headerShown: false,
          tabBarButton: ({ accessibilityState, onPress }) => (
            <TabBarButton
              title="Profile"
              focused={accessibilityState?.selected}
              icon={ProfileIcon}
              onPress={onPress}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="test"
        options={{
          title: "Test",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
