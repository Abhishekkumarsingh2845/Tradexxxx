import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import MainContainer from '../../Components/MainContainer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePaths from '../../Utlis/ImagePaths';
import {Color} from '../../Utlis/Color';
import Strings from '../../Utlis/String';

const LivePortfolioDetails = () => {

 
  return (
    <MainContainer>
      <View style={styles.headerView}>
        <TouchableOpacity>
          <Image source={ImagePaths.arrow} style={styles.arrowicon} />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image source={ImagePaths.greenLogo} style={styles.logoStyle} />
        </View>
      </View>

      <View style={styles.view}>
        <View>
          <View style={styles.tradeView}>
            <Text style={styles.textstyle}>{Strings.tradeCompany}</Text>
            <Text style={{...styles.subTextStyle, marginLeft: 5}}>
              {Strings.unit}
            </Text>
          </View>
          <Text style={styles.subTextStyle}>{Strings.marketPrise}</Text>
        </View>
        <Text style={styles.textstyle}>{Strings.totalAmount}</Text>
      </View>
      <View style={styles.MainContainer}>
        <View style={styles.row}>
          <View>
            <Text style={styles.textstyle}>{Strings.orderId}</Text>
            <Text style={styles.subTextStyle}>{Strings.dateLive}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                ...styles.subTextStyle,
                color: Color.Primary,
                marginRight: 5,
              }}>
              {Strings.settled}
            </Text>
            <View style={styles.checkboxView}>
              <Image
                source={ImagePaths.greenCheckBox}
                style={styles.checkBoxIMage}
              />
            </View>
          </View>
        </View>

        <View style={styles.orderTypeTextView}>
          <Text style={{...styles.textstyle, fontSize: 13}}>
            {Strings.orderType}
          </Text>
          <Text style={{...styles.textstyle, fontSize: 13}}>
            {Strings.limit}
          </Text>
        </View>
        <View style={styles.line}></View>

        <View style={styles.orderTypeTextView}>
          <Text style={styles.orderTypeText}>{Strings.quantity}</Text>
          <Text style={styles.orderTypeText}>{Strings.one}</Text>
        </View>
        <View style={styles.orderTypeView}>
          <Text style={styles.orderTypeText}>{Strings.price}</Text>
          <Text style={styles.orderTypeText}>{Strings.one}</Text>
        </View>
        <View style={styles.orderTypeView}>
          <Text style={styles.orderTypeText}>{Strings.taxesServices}</Text>
          <Text style={styles.orderTypeText}>{Strings.one}</Text>
        </View>
        <View style={styles.orderTypeView}>
          <Text style={styles.orderTypeText}>{Strings.TotalAmount}</Text>
          <Text style={styles.orderTypeText}>{Strings.one}</Text>
        </View>
      </View>
    </MainContainer>
  );
};

export default LivePortfolioDetails;

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
  MainContainer: {
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  view: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textstyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Color.black,
  },
  subTextStyle: {
    fontSize: 12,
    color: Color.lightgray,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tradeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxView: {
    height: 16,
    width: 16,
    borderRadius: 16 / 2,
    backgroundColor: Color.viewBgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBoxIMage: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
  },
  orderTypeTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  line: {
    marginTop: 10,
    height: 1,
    backgroundColor: Color.viewBgColor,
  },
  orderTypeText: {
    fontSize: 13,
    color: Color.black,
  },
  orderTypeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
   
  },
});
