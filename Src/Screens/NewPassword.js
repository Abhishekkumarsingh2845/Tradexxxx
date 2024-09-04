import {StyleSheet, Text, View, Image, Modal} from 'react-native';
import React, {useState} from 'react';
import MainContainer from '../Components/MainContainer';
import Strings from '../Utlis/String';
import {Color} from '../Utlis/Color';
import Input from '../Components/Input';
import Button from '../Components/Button';
import {isEmpty, showToast} from '../Utlis/CommonFunctions';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../Constants/ScreenName';
import ImagePaths from '../Utlis/ImagePaths';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ResetPassword from '../Components/PasswordSucessModel';
import BackHeder from '../Components/BackHeder';

const NewPassword = () => {
  const [state, setState] = useState({
    newPassword: '',
    conformPassword: '',
    isModalVisible: false,
  });

  const navigation = useNavigation();

  const submit = () => {
    const {newPassword, conformPassword, isModalVisible} = state;

    if (isEmpty(newPassword)) {
      showToast(Strings.newPasswordAlert, 'error');
      return;
    } else if (newPassword.length < 6) {
      showToast(Strings.passwordLength, 'error');
      return;
    } else if (isEmpty(conformPassword)) {
      showToast(Strings.conformPasswordAlert, 'error');
      return;
    } else if (newPassword != conformPassword) {
      showToast(Strings.passwordNotMatch, 'error');
      return;
    }
    if (!isModalVisible) {
      setState(prev => ({...prev, isModalVisible: true}));
    } else navigation.navigate(ScreenName.Login);
  };

  return (
    <MainContainer>
      <BackHeder />

      <View style={styles.textContainer}>
        <Text style={styles.textstyle}>{Strings.changeNew}</Text>
        <Text style={styles.textstyle}>{Strings.password}</Text>
        <Text style={{fontSize: 13, color: Color.lightgray}}>
          {Strings.NewPasswordSubHedding}
        </Text>

        <Input
          Value={state.newPassword}
          onChangeText={pass => setState({...state, newPassword: pass})}
          placeholder={Strings.enterNewPassword}
          isPassword={true}
        />
        <Input
          Value={state.conformPassword}
          onChangeText={conf => setState({...state, conformPassword: conf})}
          placeholder={Strings.conformNewPassword}
          isPassword={true}
        />

        <Button
          onPress={submit}
          title={Strings.update}
          backgroundColor={Color.Primary}
        />
      </View>
      <Modal
        visible={state.isModalVisible}
        onRequestClose={() =>
          setState(prev => ({...prev, isModalVisible: false}))
        }
        transparent={false}>
        <ResetPassword
          onComplete={() => navigation.navigate(ScreenName.Login)}
          text={Strings.passwordReset}
          subText={Strings.successfully}
        />
      </Modal>
    </MainContainer>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 30,
  },
  textstyle: {
    color: Color.black,
    fontSize: 25,
    fontWeight: 'bold',
  },
  arrowicon: {
    height: 30,
    width: 30,
    resizeMode: 'cover',
  },
});
