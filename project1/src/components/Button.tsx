import { Button, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../App";
export type props = {
  navigation: StackNavigationProp<RootStackParamsList>;
};
const NowButton: React.FC<props> = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Click Me"
        onPress={() => navigation.navigate("DisplayPicture")}
      />
    </View>
  );
};

export default NowButton;
