import { View, Text, Button } from "react-native";
import React from "react";
import { props } from "../model/RouterModel";

const Home: React.FC<props> = ({ navigation }) => {
  const buttonClicked = () => {
    navigation.navigate("Details");
  };
  return (
    <View>
      <Text>Home</Text>
      <Button title="Detail Page" onPress={buttonClicked} />
    </View>
  );
};

export default Home;
