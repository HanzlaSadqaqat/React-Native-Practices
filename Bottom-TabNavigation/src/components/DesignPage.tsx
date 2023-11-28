import { ScrollView, View, Text, Button, Image, TextInput } from "react-native";
import React from "react";
import { props } from "../model/RouterModel";

const DesignPage: React.FC<props> = ({ navigation }) => {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1, gap: 10, paddingTop: 10 }}>
          <Text style={{ fontSize: 17 }}>Good Morning</Text>
          <Text style={{ fontSize: 25, fontWeight: "500" }}>HS RAJPUT</Text>
          <Text style={{ fontWeight: "200" }}>📍 Lahore, Punjab</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              height: 120,
              width: 120,
              backgroundColor: "#e6e6e6",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
            }}
          >
            <Image
              style={{
                height: 100,
                width: 100,
              }}
              source={require("../../assets/person.png")}
            />
          </View>
        </View>
      </View>
      <View>
        <View>
          <TextInput>Search</TextInput>
        </View>
        <View></View>
      </View>
      <View></View>
    </ScrollView>
  );
};

export default DesignPage;
