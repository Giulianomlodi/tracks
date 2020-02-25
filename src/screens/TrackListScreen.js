import React from 'react';
import {View, Text, Button, TextInput, StyleSheet, StatusBar} from 'react-native';

const TrackListScreen = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Text>TrackList</Text>
      <Button title="Go Details" onPress={()=> navigation.navigate('TrackDetail')} />
    </>
  );
};


const styles = StyleSheet.create({});

export default TrackListScreen;
