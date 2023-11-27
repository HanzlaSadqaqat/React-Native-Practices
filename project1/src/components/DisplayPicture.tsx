import {
  ActivityIndicator,
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import { props } from "./Button";

const DisplayPicture: React.FC<props> = ({ navigation }) => {
  const [file, setFile] = useState<DocumentPicker.DocumentPickerAsset[] | null>(
    null
  );
  const buttonClicked = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: "*/*" });

      setFile(result.assets);
    } catch (error) {
      console.log("Error documentPicker", error);
    }
  };
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator color={"red"} />
      <Button title="Click Button" color={"red"} onPress={buttonClicked} />
      {file ? (
        <Image
          source={{ uri: file[0].uri }}
          style={{
            width: 200,
            height: 200,
            marginBottom: 20,
            borderRadius: 100,
          }}
        />
      ) : (
        <></>
      )}
      <TouchableOpacity onPress={buttonClicked} style={styles.button}>
        <Text style={{ backgroundColor: "white", margin: 10, color: "red" }}>
          Input
        </Text>
      </TouchableOpacity>
      <Text style={styles.text} onPress={() => navigation.navigate("Button")}>
        CLICK BUTTON
      </Text>
      <TextInput
        placeholder="Input Text"
        style={styles.input}
        placeholderTextColor={"red"}
      />
    </View>
  );
};
export default DisplayPicture;
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
  button: {
    backgroundColor: "red",
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
