import React, {useContext} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Context as LocationContext} from '../context/LocationContext';

const TrackForm = () => {
  const {state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);

  return (
    <>
    <TextInput
      style={styles.overlay2}
      placeholder="TrackName"
      onChangeText={changeName}
      value={name}
    />
    { recording
    ? <Button title='Stop' style={styles.overlay} onPress={stopRecording} />
    : <Button title='Crea Traccia' style={styles.overlay} onPress={startRecording} />
      }
    </>

  );
};

const styles = StyleSheet.create({
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

export default TrackForm;
