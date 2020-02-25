import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Spaces from './Spacer';
import {withNavigation} from 'react-navigation';


const NavLink = ({navigation, text, routeName}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Text style={styles.signtextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signtextStyle: {
    marginTop:25,
    alignSelf:'center',
    //marginLeft: 55,
    color: '#2288dc',
    fontSize: 11,
  },
});


export default withNavigation(NavLink);
