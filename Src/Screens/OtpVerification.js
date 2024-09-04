import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainContainer from '../Components/MainContainer';
import Strings from '../Utlis/String';
import {Color} from '../Utlis/Color';
import OTPTextView from '../Components/OtpTextView';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../Components/Button';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../Constants/ScreenName';
import ImagePaths from '../Utlis/ImagePaths';

const Otp_verification = () => {
  const navigation = useNavigation();
  const [time, setTime] = useState(59);
  const [running, setRunning] = useState(true);
  useEffect(() => {
    let interval;
    if (running && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setRunning(false);
    }
    return () => clearInterval(interval);
  }, [running, time]);

  const timerrun = () => {
    setTime(59);
    setRunning(true);
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    } ${seconds}`;
  };

  return (
    <MainContainer>
      <View style={{marginTop: 30}}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenName.ForgotPassword)}>
          <Image source={ImagePaths.arrow} style={styles.arrowicon} />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textstyle}>{Strings.otp}</Text>
        <Text style={styles.textstyle}>{Strings.verification}</Text>
        <Text style={{fontSize: 13, color: Color.lightgray}}>
          {Strings.otpSubhedding}
        </Text>

        <OTPTextView
          handleTextChange={otp => {
            console.log(otp);
            if (otp.length === 6) {
              navigation.navigate(ScreenName.NewPassword);
              return;
            }
          }}
        />

        <Text
          style={{
            marginTop: 30,
            fontSize: 35,
            alignSelf: 'center',
            color: Color.Primary,
          }}>
          {formatTime(time)}
        </Text>

        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 13, color: Color.lightgray}}>
            {Strings.didnotGetIt}
          </Text>

          <TouchableOpacity onPress={timerrun} style={{marginLeft: 5}}>
            <Text style={{fontSize: 13, color: Color.Primary}}>
              {Strings.resendOtp}
            </Text>
            <View style={styles.line}></View>
          </TouchableOpacity>
        </View>
      </View>
    </MainContainer>
  );
};

export default Otp_verification;

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 30,
  },
  textstyle: {
    color: Color.black,
    fontSize: 25,
    fontWeight: 'bold',
  },
  line: {
    height: 1.5,
    width: 75,
    backgroundColor: Color.Primary,
    borderRadius: 2,
  },
  arrowicon: {
    height:20,width:22,resizeMode:'contain'
  },
});
