import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../Utlis/Color';

const Button = ({onPress, title, backgroundColor, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.loginContainer, (backgroundColor = {backgroundColor})]}>
      <Text style={{fontSize: 18, color: Color.white, fontWeight: 'bold'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  loginContainer: {
    marginTop: 25,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
