import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const SignupScreen = ({navigation}) => {
  return (
    <>
      <Text>Registrazione</Text>
      <Button title="Go to Signin" onPress={()=> navigation.navigate('Signin')} />

      <Button title="Go to Main Flow" onPress={()=> navigation.navigate('mainFLow')} />
    </>
  );
};


const styles = StyleSheet.create({});

export default SignupScreen;
