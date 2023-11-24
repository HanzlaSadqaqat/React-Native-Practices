import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DocumentPicker from "react-native-document-picker";

export default function App() {
  const buttonClicked = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log("res", res);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log("error:", error);
      }
    }
  };
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator color={"red"} />
      <Button title="Click Button" color={"red"} onPress={buttonClicked} />
      <TouchableOpacity onPress={buttonClicked}>
        <Text>Input</Text>
      </TouchableOpacity>
      <Text style={styles.text} onPress={() => Alert.alert("press")}>
        CLICK BUTTON
      </Text>
      <TextInput
        placeholder="Input Text"
        style={styles.input}
        placeholderTextColor={"red"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    backgroundColor: "red",
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: "white",
    fontWeight: "600",
    borderRadius: 2,
  },
  horizontal: {
    gap: 20,
    // flexDirection: "row",
  },
  input: {
    borderWidth: 2,
    width: 120,
    backgroundColor: "white",
    color: "blue",
    padding: 10,
  },
});
