import {Image, Modal, Text, View} from 'react-native';
import React, {useState} from 'react';
import MainContainer from '../../../Components/MainContainer';
import ImagePaths from '../../../Utlis/ImagePaths';
import styles from './styles';
import Strings from '../../../Utlis/String';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Color} from '../../../Utlis/Color';     
import OrderBookDetail from './components/OrderBookDetail';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../../../Constants/ScreenName';
import Swipe from './components/SwipeButton';

const Sell = () => {
  const navigation = useNavigation();
  const [hide, setHide] = useState(false);
  const [active, setActive] = useState(0);
  const [hide1, setHide1] = useState();
  const [isTogle, setisTogle] = useState();
  const [isTogle1, setisTogle1] = useState(false);
  const [checkbox, setCheckbox] = useState([
    {
      id: 1,
      text: Strings.advancePayment,
      isSelected: false,
    },
    {
      id: 2,
      text: Strings.deliveryAfterPayment,
      isSelected: false,
    },
  ]);

  return (
    <MainContainer>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.navigate(ScreenName.home)}>
          <Image source={ImagePaths.arrow} style={styles.arrowicon} />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image source={ImagePaths.blueLogo} style={styles.logoStyle} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <View style={styles.row}>
              <Text style={styles.text}>{Strings.tradeCompany}</Text>
              <Text style={[styles.subText, styles.unit]}>{Strings.unit}</Text>
            </View>
            <Text style={styles.subText}>{Strings.priceAmount}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>{Strings.totalAmount}</Text>
            <View style={styles.row}>
              <Text style={[styles.subText, styles.profitText]}>
                {Strings.profitAmount}
              </Text>
              <Image source={ImagePaths.profitImage} />
            </View>
          </View>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setActive(0)}>
            <View style={[styles.button, active === 0 && styles.sellButton]}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: active === 0 ? Color.white : Color.reddishbrown,
                }}>
                {Strings.sell}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setActive(1)}>
            <View style={[styles.button, active === 1 && styles.buyButton]}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: active === 1 ? Color.white : Color.Primary,
                }}>
                {Strings.buy}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.viewStyle}>
          <Text style={styles.priceText}>{Strings.price}</Text>
          <View style={styles.priceView}>
            <Text style={styles.priceAmount}>{Strings.sellAmount}</Text>
            <View style={styles.priceView}>
              <TouchableOpacity>
                <View style={styles.minusContainer}>
                  <View style={styles.minusView}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.plusContainer}>
                  <Image
                    source={ImagePaths.plusIcon}
                    style={styles.plusImage}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.viewStyle}>
          <Text style={styles.priceText}>{Strings.quantity}</Text>
          <View style={styles.priceView}>
            <Text style={styles.priceAmount}>{Strings.sellquantity}</Text>
            <View style={styles.priceView}>
              <TouchableOpacity>
                <View style={styles.minusContainer}>
                  <View style={styles.minusView}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.plusContainer}>
                  <Image
                    source={ImagePaths.plusIcon}
                    style={styles.plusImage}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.viewStyle}>
          <View style={styles.priceView}>
            <Text style={styles.text}>{Strings.youPut}</Text>
            <Text style={styles.text}>{Strings.youPuAmount}</Text>
          </View>
          <View style={styles.priceView}>
            <Text style={styles.text}>{Strings.youGet}</Text>
            <Text style={[styles.text, styles.color]}>
              {Strings.youGetAmount}
            </Text>
          </View>
        </View>
        <View style={styles.viewStyle}>
          <View style={styles.priceView}>
            <View style={styles.row}>
              <Image source={ImagePaths.orderBook} style={styles.bookImage} />
              <Text style={[styles.text, styles.unit]}>
                {Strings.orderBook}
              </Text>
            </View>
            <TouchableOpacity onPress={() => setHide1(!hide1)}>
              {hide1 ? (
                <Image
                  source={ImagePaths.vectorIcon}
                  style={styles.vectorIcon}
                />
              ) : (
                <Image
                  source={ImagePaths.upwardVectorIcon}
                  style={styles.vectorIcon}
                />
              )}
            </TouchableOpacity>
          </View>
          {hide1 && <OrderBookDetail />}
        </View>

        <View style={styles.viewStyle}>
          <View style={styles.priceView}>
            <Text style={styles.text}>{Strings.advancedOptions}</Text>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setHide(!hide)}>
              {hide ? (
                <Image
                  source={ImagePaths.vectorIcon}
                  style={styles.vectorIcon}
                />
              ) : (
                <Image
                  source={ImagePaths.upwardVectorIcon}
                  style={styles.vectorIcon}
                />
              )}
            </TouchableOpacity>
          </View>
          {hide && (
            <View>
              <View style={styles.line}></View>

              {checkbox.map (item => (
                <TouchableOpacity
                  onPress={() => {
                    let updatedCheckbox = checkbox?.map(ele => {
                      return {
                        ...ele,
                        isSelected: item.id == ele.id ? true : false,
                      };
                    });
                    setCheckbox(updatedCheckbox);
                  }}>
                  <View key={item.id} style={{...styles.row, marginTop: 10}}>
                    <View
                      style={{
                        ...styles.checkBoxStyle,
                        backgroundColor: item.isSelected
                          ? Color.Primary
                          : Color.white,
                      }}>
                      {item.isSelected ? (
                        <Image
                          source={ImagePaths.SuccessImage}
                          style={{height: 12, width: 12, resizeMode: 'contain'}}
                        />
                      ) : null}
                    </View>

                    <Text
                      style={{
                        ...styles.paymentOptionsText,
                        color: item.isSelected ? Color.black : Color.lightgray,
                        marginLeft: 8,
                      }}>
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        <View style={styles.viewStyle}>
          <View style={styles.priceView}>
            <Text style={styles.text}>{Strings.listALimitedOrders}</Text>
            {isTogle ? (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setisTogle(!isTogle)}
                style={{flex: 1}}>
                <View style={styles.touchView}>
                  <View style={styles.touch}></View>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setisTogle(!isTogle)}
                style={{flex: 1}}>
                <View
                  style={{
                    ...styles.touchView,
                    backgroundColor: Color.viewBgColor,
                    alignItems: 'flex-start',
                  }}>
                  <View style={styles.touch}></View>
                </View>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.line}></View>

          <View style={styles.container}>
            <Text style={styles.text}>{Strings.autoCancelation}</Text>

            {isTogle1 ? (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setisTogle1(!isTogle1)}
                style={{flex: 1}}>
                <View style={styles.touchView}>
                  <View style={styles.touch}></View>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setisTogle1(!isTogle1)}
                style={{flex: 1}}>
                <View
                  style={{
                    ...styles.touchView,
                    backgroundColor: Color.viewBgColor,
                    alignItems: 'flex-start',
                  }}>
                  <View style={styles.touch}></View>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <Swipe />
        <View style={styles.container}>
          <View style={styles.priceView}>
            <Text style={styles.subText}>{Strings.availableBalance}</Text>
            <Text style={styles.availableBalanceText}>
              {Strings.availableBalanceAmount}
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.knowMore}>{Strings.knowMore}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainContainer>
  );
};

export default Sell;
