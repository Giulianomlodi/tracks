import React, {useContext} from 'react';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import MapView, {Polyline, Marker, Circle} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';


const Map = () => {
  const { state: { currentLocation } } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
console.log(currentLocation);

  return(
      <MapView
        //showsUserLocation={true}
        style={styles.map,  styles.map1}
        initialRegion={{
          ...currentLocation.coords,
          // latitude:41.931696099999996,
          // longitude:12.518140599999999,
          latitudeDelta:0.01,
          longitudeDelta:0.01,
        }}
//        region={{
//          ...currentLocation.coords,
//          latitudeDelta:0.01,
//          longitudeDelta:0.01,
//        }}

      >
      <Marker
        coordinate= {currentLocation.coords}
//          {marker.latlng}
        image={require('../../assets/test.png')}
        />



      </MapView>
  );
};


const styles = StyleSheet.create({
  map:{
    height:1000,
    width: 1000,
    justifyContent: 'center',
    alignItems:'center',
  },
  map1: {
  ...StyleSheet.absoluteFillObject,
},
});

export default Map;
