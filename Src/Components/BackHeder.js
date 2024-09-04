import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImagePaths from '../Utlis/ImagePaths';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../Utlis/Color';
import Navigation from '../Navigations';
import ScreenName from '../Constants/ScreenName';

const BackHeder = ({title, isRightEnable = false, image}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerView}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={ImagePaths.arrow} style={styles.arrowicon} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
      {isRightEnable ? (
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenName.notification)}>
          <Image source={image} style={styles.notificationImage} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

export default BackHeder;

const styles = StyleSheet.create({
  headerView: {
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    color: Color.black,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  arrowicon: {
    height: 20,
    width: 22,
    resizeMode: 'contain',
    flex: 1,
  },
  notificationImage: {
    height: 25,
    width: 20,
    resizeMode: 'contain',
    flex: 1,
  },
});
