import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const HomeMap: React.FC = () => {
  const [mapRegion, setMapRegion] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <MapView style={styles.map} initialRegion={mapRegion}>
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Example Marker"
          description="This is an example marker"
        />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 2,
    ...StyleSheet.absoluteFillObject,
    height: 400,
  },
});

export default HomeMap;
