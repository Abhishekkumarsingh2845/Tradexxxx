import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Strings from '../Utlis/String';
import ImagePaths from '../Utlis/ImagePaths';
import {Color} from '../Utlis/Color';
import Input from '../Components/Input';
import Button from '../Components/Button';

import {isEmpty, showToast, regex} from '../Utlis/CommonFunctions';
import {useNavigation} from '@react-navigation/native';
import MainContainer from '../Components/MainContainer';
import ScreenName from '../Constants/ScreenName';
import BackHeder from '../Components/BackHeder';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const submit = () => {
    if (isEmpty(email)) {
      showToast(Strings.emailAlert, 'error');
      return;
    } else if (!regex.test(email)) {
      showToast(Strings.invalidEmail, 'error');
      return;
    }
    navigation.navigate(ScreenName.OtpVerification);
  };

  return (
    <MainContainer>
        <BackHeder/>
      <View style={styles.textContainer}>
      
        <Text style={styles.textstyle}>{Strings.forgot}</Text>
        <Text style={styles.textstyle}>{Strings.password}</Text>
        <Text style={{fontSize: 13, color: Color.lightgray}}>
          {Strings.forgotSubHedding}
        </Text>
        <Input
          Value={email}
          onChangeText={mail => setEmail(mail)}
          placeholder={Strings.email}
        />

        <View style={styles.forgotContainer}>
          <Text style={{fontSize: 13}}>{Strings.remember} </Text>
          <TouchableOpacity>
            <Text style={{fontSize: 13, color: Color.Primary}}>
              {Strings.sign}
            </Text>
            <View style={styles.line}></View>
          </TouchableOpacity>
        </View>
        <Button
          onPress={submit}
          title={Strings.next}
          backgroundColor={Color.Primary}
        />
      </View>
    </MainContainer>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 20,
  },
  textstyle: {
    color: Color.black,
    fontSize: 25,
    fontWeight: 'bold',
  },
  forgotContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  line: {
    height: 1.5,
    width: 48,
    backgroundColor: Color.Primary,
    borderRadius: 2,
  },
  arrowicon:{
    height:20,width:22,resizeMode:'contain'

  }
});
