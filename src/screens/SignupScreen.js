import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({navigation}) => {
  return (

    <View>

      <Text style={styles.textStyle} h3>Registrati al Tracker</Text>
      <Spacer />
      <Input style={styles.inputStyle} placeholder="Email" />
      <Spacer />
      <Input style={styles.inputStyle} placeholder="Password" />
      <Button style={styles.buttonStyle} title="Go to Signin" onPress={()=> navigation.navigate('Signin')} />

      <Button title="Go to Main Flow" onPress={()=> navigation.navigate('mainFLow')} />

    </View>
  );
};


const styles = StyleSheet.create({
  inputStyle:{
    marginVertical: 20,
    paddingVertical: 20
  },
  textStyle:{
    marginVertical: 20,

  },
  buttonStyle:{
    marginVertical: 20,
    paddingVertical: 20
  },
});

export default SignupScreen;
