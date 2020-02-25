import React, {useContext} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';


const AccountScreen = () => {
  const {signout} = useContext(AuthContext);
  return (
    <View style={styles.viewStyle}>
      <Spacer>
      <Text h4 style={styles.titleStyle}>Account</Text>
      </Spacer>
      <Spacer/>
      <Button title="Signout"  onPress={signout}/>
    </View>
  );
};


const styles = StyleSheet.create({
  titleStyle:{
    alignSelf:'center',
  },
  viewStyle:{
    //borderColor: 'red',
    //borderWidth: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    flex: 1,
    marginBottom: 100,
    marginHorizontal: 30,
  }
});

export default AccountScreen;
