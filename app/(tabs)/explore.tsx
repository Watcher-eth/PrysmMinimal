import { View, Text, Button } from "react-native";
import React from "react";
import Login from "@/components/Onboarding/Login";
import CreateProfile from "@/components/Onboarding/CreateProfile";
import SearchResults from "@/components/search/SearchResults";
import VoteSideBet from "@/components/Bet/Vote/SideBet";
import ParalaxHeader from "@/components/Bet/ParalaxHeader";
import { isNotCreated, useEmbeddedWallet, usePrivy } from "@privy-io/expo";
import { Loader } from "lucide-react-native";
import LoginPopup from "@/components/Onboarding/LoginModal";

const Explore = () => {
  return <LoginPopup />;
};

export default Explore;
