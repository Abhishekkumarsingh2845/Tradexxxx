import {StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import React from 'react';
import Strings from '../../../../Utlis/String';
import {Color} from '../../../../Utlis/Color';
import ImagePaths from '../../../../Utlis/ImagePaths';
import Navigation from '../../../../Navigations';
import { useNavigation } from '@react-navigation/native';
import ScreenName from '../../../../Constants/ScreenName';

const SettingView = ({text,onpress}) => {
 
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={styles.settingView}>
        <Text style={styles.textStyle}>{text}</Text>
        <Image source={ImagePaths.vectorIcon} style={styles.vectorIconStyle} />
      </View>
    </TouchableOpacity>
  );
};

export default SettingView;

const styles = StyleSheet.create({
  settingView: {
    height: 50,
    backgroundColor: Color.white,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  vectorIconStyle: {
    height: 8,
    resizeMode: 'contain',
  },
  textStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Color.black,
  },
});
