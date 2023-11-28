import { View, Text, Button } from "react-native";
import React from "react";
import { props } from "../model/RouterModel";

const Detail: React.FC<props> = ({ navigation }) => {
  const buttonClicked = () => {
    navigation.navigate("Home");
  };
  const buttonClicked2 = () => {
    navigation.navigate("DesignPage");
  };
  return (
    <View style={{ flex: 1, gap: 10, padding: 10 }}>
      <Text>Detail</Text>
      <Button onPress={buttonClicked} title="Home Page" />
      <Button onPress={buttonClicked2} title="DesignPage Page" />
    </View>
  );
};

export default Detail;
