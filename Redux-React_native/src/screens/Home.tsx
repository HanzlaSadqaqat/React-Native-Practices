import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function Home() {
    return (
        <View><Text>Home</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825, // Initial latitude for the map
                    longitude: -122.4324, // Initial longitude for the map
                    latitudeDelta: 0.0922, // Zoom level (adjust as needed)
                    longitudeDelta: 0.0421, // Zoom level (adjust as needed)
                }}
            >
                {/* Example marker */}
                <Marker
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                    title="Example Marker"
                    description="This is an example marker"
                />
                {/* Add more markers or shapes as needed */}
            </MapView>        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default Home;