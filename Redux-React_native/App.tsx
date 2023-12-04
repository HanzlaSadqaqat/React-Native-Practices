import { Provider } from "react-redux";
import { store } from "./src/store";
import BottomNavigation from "./src/navigation/BottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </Provider>
  );
}
