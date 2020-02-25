import React, {useState, useContext} from 'react';
import {View, StyleSheet, TouchableOpacity,ImageBackground, StatusBar} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({navigation}) => {
  const {state, signin, clearErrorMessage} = useContext(AuthContext);
  return (

    <SafeAreaView forceInset={{top:'always'}} style={styles.viewStyle}>
      <StatusBar barStyle='dark-content' />
      <NavigationEvents
          // onWillFocus={() => {}}
          // onDidFocus= {() => {}}
          onWillBlur={clearErrorMessage}
          // onDidBlur={() => {}}
      />
      <AuthForm
        headerText="Effettua il login al Tracker"
        errorMessage={state.errorMessage}
        buttonTitle="Signin"
        onSubmit={signin}
      />
      <NavLink
        text="Non hai un account? Registrati"
        routeName='Signup'
       />
    </SafeAreaView>
  );
};

SigninScreen.navigationOptions = () => {
  return  {
    headerShown: false
  };
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
  signtextStyle: {
    marginTop:25,
    alignSelf: 'center',
    //marginLeft: 70,
    color: '#2288dc',
    fontSize: 11,
  },
});


export default SigninScreen;
