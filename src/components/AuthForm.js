import React, {useState, useContext} from 'react';
import {View, StyleSheet, TouchableOpacity,ImageBackground} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';


const AuthForm = ({headerText, errorMessage, onSubmit, buttonTitle }) => {


  const[email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    <Text style={styles.textStyle} h4>{headerText}</Text>
    <Spacer />
    <Input
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      autoCapitalize='none'
      autoCorrect={false}
     />
    <Spacer />
    <Input
      secureTextEntry
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      autoCapitalize='none'
      autoCorrect={false}
    />

    {errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null}
    <Spacer />
    <Button style={styles.buttonStyle} title={buttonTitle} onPress={()=> onSubmit({email, password})} />
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle:{
    //borderColor: 'red',
    //borderWidth: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    flex: 1,
    marginBottom: 100,
    marginHorizontal: 30,
  },
  inputStyle:{
    marginVertical: 20,
    paddingVertical: 20,
    marginHorizontal:40
  },
  textStyle:{
    // marginTop: 50,
    marginVertical: 20,
    alignSelf:'center',


  },
  buttonStyle:{
    marginVertical: 10,
    //paddingHorizontal: 50,
    marginHorizontal: 50
  },

  errorStyle: {
    color: 'red',
    marginTop: 15,
    marginLeft:5,
  },
  signtextStyle: {
    marginTop:25,
    alignSelf:'center',
    //marginLeft: 55,
    color: '#2288dc',
    fontSize: 11,
  },
});

export default AuthForm;
