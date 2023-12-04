import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddFood from "../screens/AddFood";
import { Ionicons } from "@expo/vector-icons";
import Chat from "../screens/Chat";
import Food from "../screens/Food";
import Setting from "../screens/Setting";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = focused ? "home" : "home-outline";

            return <Ionicons name={iconName} size={20} color={"#e88e20"} />;
          },
        }}
      />
      <Tab.Screen
        name="AddFood"
        component={AddFood}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = focused
              ? "add-circle"
              : "add-circle-outline";
            return <Ionicons name={iconName} size={20} color={"#e88e20"} />;
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = focused
              ? "chatbubbles"
              : "chatbubbles-outline";
            return <Ionicons name={iconName} size={20} color={"#e88e20"} />;
          },
        }}
      />
      <Tab.Screen
        name="Food"
        component={Food}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = focused ? "fast-food" : "fast-food-outline";
            return <Ionicons name={iconName} size={20} color={"#e88e20"} />;
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = focused ? "fast-food" : "fast-food-outline";
            return <Ionicons name={iconName} size={20} color={"#e88e20"} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
