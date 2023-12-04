import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import HomeMap from "../components/HomeMap";
export type RootStackParamsList = {
  HomeMap: undefined;
  Home: undefined;
};
function StackNavigation() {
  const Stack = createStackNavigator<RootStackParamsList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMap" component={HomeMap} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
