import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import React from "react";
import { RootStackParamsList } from "../navigation/StackNavigation";
export type props = {
  navigation: StackNavigationProp<RootStackParamsList>;
};
const Home: React.FC<props> = ({ navigation }) => {
  const mapFunction = () => {
    navigation.navigate("HomeMap");
  };
  return (
    <View>
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
          borderColor: "#e88e20",
          backgroundColor: "white",

          borderWidth: 2,
        }}
        onPress={mapFunction}
      >
        <Text style={{ color: "#e88e20" }}>Map</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
