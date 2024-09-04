import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainContainer from './MainContainer';
import Strings from '../Utlis/String';
import {Color} from '../Utlis/Color';
import Button from './Button';
import Navigation from '../Navigations';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../Constants/ScreenName';

const ResetPassword = ({onComplete,text,subText}) => {
  
  return (
    <MainContainer style={{}}>
      <View style={styles.chechMarkContainer}>
        <Image
          source={require('../Assets/checkmark1.png')}
          style={styles.imageStyle}
        />
      </View>
      <View style={{marginTop: 40}}>
        <Text style={styles.textStyle}>{text}</Text>
        <Text style={styles.textStyle}>{subText}</Text>
        
        <Button onPress={()=> onComplete()} title={Strings.done} backgroundColor={Color.Primary} />
      </View>
      
    </MainContainer>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  textStyle: {
    color: Color.black,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  chechMarkContainer: {
    height: 140,
    width: 140,
    backgroundColor: Color.Primary,
    borderRadius: 70,
    alignSelf: 'center',
    marginTop:'50%'
  },
  imageStyle: {
    height: 80,
    width: 80,
    resizeMode:'contain',
    alignSelf: 'center',
    marginVertical: 25,
  },
});
