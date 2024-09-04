import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MainContainer from '../../Components/MainContainer';
import ImagePaths from '../../Utlis/ImagePaths';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Strings from '../../Utlis/String';
import {Color} from '../../Utlis/Color';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../../Constants/ScreenName';

const ClosedPortfolioDetails = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState(false);
  return (
    <MainContainer>
      <View style={styles.headerView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(ScreenName.portfolio);
          }}>
          <Image source={ImagePaths.arrow} style={styles.arrowicon} />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image source={ImagePaths.orangeLogo} style={styles.logoStyle} />
        </View>
      </View>

      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{Strings.groupName}</Text>
          <Text style={styles.subText}>{Strings.enterprisePvtLtd}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.text}>{Strings.totalAmount}</Text>
          <View style={styles.row}>
            <TouchableOpacity>
              <Text
                style={{
                  ...styles.subText,
                  color: Color.Primary,
                  marginRight: 5,
                }}>
                {Strings.view}
              </Text>
            </TouchableOpacity>
            <View style={styles.viewStyle}>
              <Text style={styles.viewTextStyle}>{Strings.one}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.tradeMainContainer}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <View style={styles.row}>
            <Image source={ImagePaths.blueLogo} style={styles.logoImageStyle} />
            <View>
              <View style={styles.row}>
                <Text style={[styles.text, styles.unit]}>
                  {Strings.tradeCompany}
                </Text>
                <Text style={[styles.subText, styles.unit]}>
                  {Strings.unit}
                </Text>
              </View>
              <Text style={[styles.subText, styles.unit]}>
                {Strings.marketPrise}
              </Text>
            </View>

            <View></View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>{Strings.totalAmount}</Text>
            <View style={styles.row}>
              <Text
                style={{
                  ...styles.subText,
                  color: Color.Primary,
                  marginRight: 5,
                }}>
                {Strings.profitAmount}
              </Text>
              <Image source={ImagePaths.profitImage} />
            </View>
          </View>
        </View>
        <View style={styles.prefrenceView}>
          <Text style={styles.text}>{Strings.prefrence}:</Text>
          <Text style={{...styles.text, fontWeight: 0}}>
            {' '}
            {Strings.DeliveryAfterPayment}
          </Text>
        </View>
        <Text style={{...styles.text, textDecorationLine: 'line-through'}}>
          {Strings.AdvancePayment}
        </Text>

        <View style={styles.noteView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.noteText}>{Strings.note} :</Text>
            <Text style={styles.noteSubText}>{Strings.noteText}</Text>
          </View>
          <Text style={{...styles.noteText, fontSize: 10}}>{Strings.date}</Text>
        </View>

        <View style={styles.buttonConatiner}>
          <TouchableOpacity onPress={() => setActive(0)}>
            <View
              style={[styles.buttonView, active === 0 && styles.activeview]}>
              <Text
                style={{
                  ...styles.buttonText,
                  color: active === 0 ? Color.white : Color.Primary,
                }}>
                {Strings.counter}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActive(1)}>
            <View
              style={[styles.buttonView, active === 1 && styles.activeview]}>
              <Text
                style={{
                  ...styles.buttonText,
                  color: active === 1 ? Color.white : Color.Primary,
                }}>
                {Strings.sendC}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </MainContainer>
  );
};

export default ClosedPortfolioDetails;

const styles = StyleSheet.create({
  arrowicon: {
    height: 20,
    width: 22,
    resizeMode: 'cover',
  },
  headerView: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  logoStyle: {
    height: 55,
    width: 55,
    resizeMode: 'contain',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    color: Color.black,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
    color: Color.lightgray,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewStyle: {
    height: 16,
    width: 16,
    borderRadius: 16 / 2,
    backgroundColor: Color.viewBgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTextStyle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Color.Primary,
  },
  tradeMainContainer: {
    marginTop: 15,
    padding: 10,
    backgroundColor: Color.white,
    borderRadius: 10,
  },
  logoImageStyle: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
  unit: {
    marginLeft: 5,
  },
  prefrenceView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  noteView: {
    padding: 10,
    backgroundColor: Color.noteViewColor,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  noteText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: Color.noteTextColor,
  },
  noteSubText: {
    fontSize: 10,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginLeft: 5,
    color:Color.noteTextColor
  },
  buttonView: {
    backgroundColor: Color.viewBgColor,
  
 
   padding:10,
    width: 120,
    borderColor: Color.Primary,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Color.Primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
  activeview: {
    backgroundColor: Color.Primary,
  },
  textActive: {
    color: Color.white,
  },
  buttonConatiner: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
