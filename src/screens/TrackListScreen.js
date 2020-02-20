import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const TrackListScreen = ({navigation}) => {
  return (
    <>
      <Text>TrackList</Text>
      <Button title="Go Details" onPress={()=> navigation.navigate('TrackDetail')} />
    </>
  );
};


const styles = StyleSheet.create({});

export default TrackListScreen;
