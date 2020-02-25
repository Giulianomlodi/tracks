import '../_mockLocation';
import React, {useContext, useCallback} from 'react';
import {View,TextInput, StyleSheet} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import {SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';


const TrackCreateScreen = ({isFocused}) => {
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback((location) => {
    addLocation(location, state.recording);
  }, [state.recording]);
  
  const [err] = useLocation(isFocused, callback);


  return (
    <SafeAreaView style={styles.viewStyle} forceInset={{top:'always'}}>
      <Map/>
      <TrackForm />
      {err ? <Text style={styles.overlay2}> Devi abilitare la geolocalizzazione per usufruire delle funzionalità dell'app</Text> : null}
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  viewStyle:{
    //borderColor: 'red',
    //borderWidth: 1,
    //alignSelf: 'center',
    //alignItems: 'center',
    flex: 1,
    marginTop: 30,
    //paddingLeft:100
  },
  overlay: {
    //borderWidth:1,
    width: 200,
    flexDirection:'column-reverse',
    alignSelf: 'flex-end',
    justifyContent:'flex-end',
    position: 'absolute',
    top:550,
    right: 20,
    //paddingTop:550,
    //paddingHorizontal:70,
    //backgroundColor: 'rgba(255, 255, 255, 1)',
},
overlay2: {

  borderWidth:1,
  paddingLeft: 6,
  borderColor: '#e7e7e7',
  height: 40,
  backgroundColor: "white",
  width: 200,
  flexDirection:'column-reverse',
  alignSelf: 'flex-end',
  justifyContent:'flex-end',
  position: 'absolute',
  top:520,
  right: 20,
}
});

export default withNavigationFocus(TrackCreateScreen);
