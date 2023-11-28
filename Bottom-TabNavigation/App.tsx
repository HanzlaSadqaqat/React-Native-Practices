import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/components/Home";
import Detail from "./src/components/Detail";
import DesignPage from "./src/components/DesignPage";
import { RouterParams } from "./src/model/RouterModel";

const Tab = createBottomTabNavigator<RouterParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Details" component={Detail} />
        <Tab.Screen name="DesignPage" component={DesignPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
