import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  "(tabs)": undefined; // Assuming "(tabs)" is a placeholder for your tab navigator
  modal: undefined;
  Bets: { someProp: string }; // Add your Bets screen with expected params
};

// Define route prop types for each screen if needed
export type BetsScreenRouteProp = RouteProp<RootStackParamList, "Bets">;
