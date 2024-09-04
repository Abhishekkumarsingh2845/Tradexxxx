import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MainContainer from '../../../Components/MainContainer';
import Strings from '../../../Utlis/String';
import {Color} from '../../../Utlis/Color';
import ImagePaths from '../../../Utlis/ImagePaths';
import BackHeder from '../../../Components/BackHeder';
import SettingView from './components/SettingView';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../../../Constants/ScreenName';

const Setting = () => {
  const navigation = useNavigation();
  return (
    <MainContainer>
      <BackHeder
        title={Strings.setting}
        isRightEnable={true}
        image={ImagePaths.notificationImage}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{Strings.accountSetting}</Text>
        <SettingView
          text={Strings.profileSetting}
          onpress={() => navigation.navigate(ScreenName.profile)}
        />
        <SettingView text={Strings.hundredPointForm} />
        <SettingView text={Strings.preferenceSetting} />
        <SettingView text={Strings.ResetPassword} />
        <SettingView text={Strings.logout} />
        <SettingView text={Strings.deleteAccount} />
        <Text style={{...styles.title, marginTop: 15}}>
          {Strings.energyTradingSettings}
        </Text>
        <SettingView text={Strings.energyTrading} />
        <SettingView text={Strings.privacyPolicy} />
        <SettingView text={Strings.termsOfUse} />
        <SettingView text={Strings.faqs} />
        <SettingView text={Strings.permissions} />
        <SettingView text={Strings.help} />
        <SettingView text={Strings.senfFeedback} />
        <SettingView text={Strings.checkForUpdate} />
        <SettingView text={Strings.needHelp} />
      </ScrollView>
    </MainContainer>
  );
};

export default Setting;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: Color.black,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
