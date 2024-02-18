// BetsScreen.tsx
import React from "react";
import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { CardType } from "@/types/FeedTypes";

// Define the types for the route parameters
type BetsScreenRouteProp = RouteProp<{ params: CardType }, "params">;

interface BetsScreenProps {
  route: BetsScreenRouteProp;
}

const BetsScreen: React.FC<BetsScreenProps> = ({ route }) => {
  const { name, description, image, icon, topic } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Bets Screen</Text>
      <Text>Passed Prop: {name}</Text>
    </View>
  );
};

export default BetsScreen;
