import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SwipeButton from 'rn-swipe-button';
import {Color} from '../../../../Utlis/Color';
import Strings from '../../../../Utlis/String';
import ImagePaths from '../../../../Utlis/ImagePaths';
import Navigation from '../../../../Navigations';
import ScreenName from '../../../../Constants/ScreenName';
import Button from '../../../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Setting from '../../DashBoard/Setting';
import {Modal} from 'react-native';
import ResetPassword from '../../../../Components/PasswordSucessModel';

const Swipe = () => {
  const navigation = useNavigation();
  const [isModalVisible, setisModalVisible] = useState(false);
  const onSwipeLeft = () => {
    setisModalVisible(true);
  };

  return (
    <SafeAreaView>
      <SwipeButton
        height={40}
        railBackgroundColor={Color.reddishbrown}
        containerStyles={styles.swipeContainer}
        railBorderColor={Color.reddishbrown}
        railFillBackgroundColor={Color.reddishbrown}
        title={Strings.swipeForSell}
        titleColor={Color.white}
        railFillBorderColor={Color.reddishbrown}
        thumbIconImageSource={ImagePaths.swipeImage}
        thumbIconBackgroundColor={Color.white}
        thumbIconWidth={45}
        thumbIconStyles={{
          height: 60,
          borderRadius: 8,
          borderWidth: 0,
        }}
        disableResetOnTap={false}
        enableReverseSwipe={false}
        titleStyles={styles.swipeText}
        swipeSuccessThreshold={90}
        onSwipeSuccess={onSwipeLeft}
      />

      <Modal
        visible={isModalVisible}
        transparent={false}
        onRequestClose={() => {
          setisModalVisible(false);
        }}>
        <ResetPassword
          onComplete={() => navigation.navigate(ScreenName.home)}
          text={Strings.sent}
          subText={Strings.successfully}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default Swipe;

const styles = StyleSheet.create({
  swipeContainer: {
    backgroundColor: Color.reddishbrown,
    padding: 5,
    marginTop: 20,
    borderRadius: 8,
  },
  swipeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.white,
    textAlign: 'center',
  },
});
