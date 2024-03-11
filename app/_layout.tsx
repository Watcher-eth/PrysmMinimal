import "fast-text-encoding";
import "react-native-get-random-values";
import "@ethersproject/shims";

// Import the ethers library
import { ethers } from "ethers";
import { PrivyProvider } from "@privy-io/expo";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { createContext, useContext, useEffect, useState } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { init } from "@airstack/airstack-react";
import {
  InMemoryStorageProvider,
  LensClient,
  development,
  production,
} from "@lens-protocol/client";
import { AsyncStorageProvider } from "@/lib/stores/LensClient";
import Login from "@/components/Feed/Onboarding/Login";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
init(process.env.EXPO_PUBLIC_AIRSTACK!);
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ErrorBoundary>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
      </AuthContext.Provider>
    </ErrorBoundary>
  );
};

export const useAuth = () => useContext(AuthContext);
export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}

function RootLayoutNav() {
  const { isLoggedIn } = useAuth(); // Access the logged-in state
  const colorScheme = useColorScheme();

  if (!isLoggedIn) {
    // If not logged in, show the login screen
    return (
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#101010" }}>
        <Login />
      </GestureHandlerRootView>
    );
  }

  // If logged in, show the tabs screen

  return (
    <PrivyProvider appId="clsz6ft6o05svsulm7mi5b7v6">
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#101010" }}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="modal"
              options={{ presentation: "modal", headerShown: false }}
            />
            <Stack.Screen name="[id]" options={{ headerShown: false }} />
            <Stack.Screen name="post" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />

            <Stack.Screen name="featuredBet" options={{ headerShown: false }} />
          </Stack>
        </GestureHandlerRootView>
      </ThemeProvider>
    </PrivyProvider>
  );
}
