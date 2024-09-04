import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../Utlis/Color';

const ActiveLine = ({isActive}) => {
  return (
    <View
      style={[
        styles.line,
        {
          borderBottomWidth: isActive ? 3.5 : 0,
          borderColor: Color.Primary,
        },
      ]}
    />
  );
};

export default ActiveLine;

const styles = StyleSheet.create({
  line: {
    height: 3.5,
    borderRadius: 3.5 / 2,
    width: '150%',
    alignSelf: 'center',
    alignItems: 'center',
    alignItems:"center",
    alignSelf:"center"
  },
});
