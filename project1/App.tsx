import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import DisplayPicture from "./src/components/DisplayPicture";
import NowButton from "./src/components/Button";
export type RootStackParamsList = {
  DisplayPicture: undefined;
  Button: undefined;
};
const Stack = createStackNavigator<RootStackParamsList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Button">
        <Stack.Screen name="Button" component={NowButton} />
        <Stack.Screen name="DisplayPicture" component={DisplayPicture} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
