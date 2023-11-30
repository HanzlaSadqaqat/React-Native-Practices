import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddFood from "../screens/AddFood";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AddFood" component={AddFood} />
    </Tab.Navigator>
  );
}
