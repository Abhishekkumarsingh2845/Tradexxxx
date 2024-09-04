import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import MainContainer from '../Components/MainContainer';
import ImagePaths from '../Utlis/ImagePaths';
import Strings from '../Utlis/String';
import {Color} from '../Utlis/Color';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../Constants/ScreenName';
import Input from '../Components/Input';
import Button from '../Components/Button';
import {isEmpty, regex, showToast} from '../Utlis/CommonFunctions';
import {ScrollView} from 'react-native-gesture-handler';
import PhoneInput from 'react-native-phone-number-input';
import BackHeder from '../Components/BackHeder';
import {hasteMapCacheDirectory} from '../../metro.config';

const CreateAccount = () => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    conformPassword: '',
    companyName: '',
    phone: '',
    isSelected: false,
  });

  const SignUP = () => {
    const {name, email, password, conformPassword, companyName, phone} = state;
    if (isEmpty(name)) {
      showToast(Strings.nameAlert, 'error');
      return;
    } else if (isEmpty(email)) {
      showToast(Strings.emailAlert, 'error');
      return;
    } else if (!regex.test(email)) {
      showToast(Strings.invalidEmail, 'error');
      return;
    } else if (isEmpty(companyName)) {
      showToast(Strings.companyNameAlert, 'error');
      return;
    } else if (isEmpty(phone)) {
      showToast(Strings.phoneAlert, 'error');
      return;
    } else if (isEmpty(password)) {
      showToast(Strings.passwordAlert, 'error');
      return;
    } else if (password && password.length < 6) {
      showToast(Strings.passwordLength, 'error');
    } else if (isEmpty(conformPassword)) {
      showToast(Strings.conformPassAlert, 'error');
      return;
    } else if (password !== conformPassword) {
      showToast(Strings.passwordNotMatch, 'error');
    }
  };

  const _handleInputChange = (stateName, value) => {
    setState(prev => ({...prev, [stateName]: value}));
  };

  return (
    <MainContainer>
      <BackHeder />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <Text style={styles.textstyle}>{Strings.createAn}</Text>
          <Text style={styles.textstyle}>{Strings.account}</Text>
          <Text style={{fontSize: 13, color: Color.lightgray}}>
            {Strings.NewPasswordSubHedding}
          </Text>

          <Input
            Value={state.name}
            onChangeText={val => _handleInputChange('name', val)}
            placeholder={Strings.name}
          />

          <Input
            Value={state.email}
            onChangeText={val => _handleInputChange('email', val)}
            placeholder={Strings.email}
          />

          <Input
            Value={state.companyName}
            onChangeText={val => _handleInputChange('companyName', val)}
            placeholder={Strings.companyName}
          />
          <View style={{marginTop: 20, alignItems: 'center'}}>
            <PhoneInput
              value={state.phone}
              initialCountry="india"
              defaultValue={state.phone}
              onChangeText={val => _handleInputChange('phone', val)}
              flagStyle={{
                marginRight: 10,
                borderRadius: 100,
                overflow: 'hidden',
                
              }}
              textInputProps={{autoFocus: false, maxLength: 10}}
              containerStyle={{height: 50, borderRadius: 8, width: '100%'}}
              textInputStyle={{
                height: 50,
                color: Color.black,
                alignItems: 'center',
              }}
            />
          </View>
          <Input
            Value={state.password}
            onChangeText={val => _handleInputChange('password', val)}
            isPassword={true}
            placeholder={Strings.password}
          />

          <Input
            Value={state.conformPassword}
            onChangeText={val => _handleInputChange('conformPassword', val)}
            isPassword={true}
            placeholder={Strings.confirmPassword}
          />

          <View style={{marginTop: 15, flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                setState(prev => ({...prev, isSelected: !prev.isSelected}));
              }}>
              <View
                style={{
                  ...styles.checkBoxView,
                  backgroundColor: state.isSelected
                    ? Color.Primary
                    : Color.white,
                }}>
                {state.isSelected ? (
                  <Image
                    source={ImagePaths.SuccessImage}
                    style={styles.checkboxImage}
                  />
                ) : null}
              </View>
            </TouchableOpacity>
            <Text style={styles.checkBoxText}> {Strings.chechboxHedding}</Text>
            <TouchableOpacity>
              <Text style={styles.checkBoxTextUnderline}>
                {Strings.termCoonditions}
              </Text>
            </TouchableOpacity>
            <Text> & </Text>
            <TouchableOpacity>
              <Text style={styles.checkBoxTextUnderline}>
                {Strings.privacy}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={{...styles.checkBoxTextUnderline, marginLeft: 25}}>
              {Strings.policy}
            </Text>
          </TouchableOpacity>

          <Button
            onPress={SignUP}
            title={Strings.signUp}
            backgroundColor={Color.Primary}
          />
        </View>
      </ScrollView>
    </MainContainer>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  arrowicon: {
    height: 30,
    width: 30,
    resizeMode: 'cover',
  },
  textstyle: {
    color: Color.black,
    fontSize: 25,
    fontWeight: 'bold',
  },
  textContainer: {
    marginTop: 20,
  },
  checkBoxView: {
    height: 18,
    width: 18,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0.5,
    borderRadius: 2,
  },
  checkBoxText: {
    fontSize: 12,
  },
  checkBoxTextUnderline: {
    fontSize: 13,
    color: Color.Primary,
    textDecorationLine: 'underline',
  },
  checkboxImage: {
    height: 12,
    width: 12,
    resizeMode: 'contain',
  },
});
