import * as Location from 'expo-location'

const requireLocationPermission=async()=>{

    const {status}= await Location.requestForegroundPermissionsAsync()
    if(status!=='granted'){
        console.log("Permission not granted")
    }else{
        console.log("Permission granted successfully")

    }
}

