import React from "react";

import { ScrollView } from "react-native-gesture-handler";

import ActivityPage from "@/components/activity";

const Activity = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ActivityPage />
    </ScrollView>
  );
};

export default Activity;
