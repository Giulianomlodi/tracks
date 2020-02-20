import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const SigninScreen = ({navigation}) => {
  return (
    <>
      <Text>Registrazione</Text>
      <Button title="Go to Signin" onPress={()=> navigation.navigate('Signup')} />
    </>
  );
};


const styles = StyleSheet.create({});

export default SigninScreen;
