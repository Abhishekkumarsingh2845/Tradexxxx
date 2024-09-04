import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Color} from '../../../../Utlis/Color';
import Strings from '../../../../Utlis/String';
import MainContainer from '../../../../Components/MainContainer';

const OrderBookDetail = () => {
  const sellItems = [
    {
      toSPrice: '8.2',
      toSellPrice: '123534',
      toBPrice: '7.4',
      toBuyPrice: '123534',
    },
    {
      toSPrice: '8.2',
      toSellPrice: '123534',
      toBPrice: '7.4',
      toBuyPrice: '123534',
    },
    {
      toSPrice: '8.2',
      toSellPrice: '123534',
      toBPrice: '7.4',
      toBuyPrice: '123534',
    },
    {
      toSPrice: '8.2',
      toSellPrice: '123534',
      toBPrice: '7.4',
      toBuyPrice: '123534',
    },
    {
      toSPrice: '8.2',
      toSellPrice: '123534',
      toBPrice: '7.4',
      toBuyPrice: '123534',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainView}>
        <View style={styles.sellViewStyle}>
          <View style={styles.priceView}>
            <Text style={styles.orderBookText}>{Strings.price}</Text>
            <Text style={{...styles.orderBookText, color: Color.reddishbrown}}>
              <Text style={styles.orderBookText}>{Strings.to} </Text>
              {Strings.sell}
            </Text>
          </View>
        </View>

        <View style={styles.buyViewStyle}>
          <View style={styles.priceView}>
            <Text style={styles.orderBookText}>{Strings.price}</Text>
            <Text style={{...styles.orderBookText, color: Color.Primary}}>
              <Text style={styles.orderBookText}>{Strings.to} </Text>
              {Strings.buy}
            </Text>
          </View>
        </View>
      </View>

      {sellItems?.map((item, index) => (
        <View style={styles.mainView}>
          <View key={index} style={styles.sellViewStyle}>
            <View style={styles.priceView}>
              <Text style={styles.orderBookText}>{item?.toSPrice}</Text>
              <Text style={styles.orderBookText}>{item?.toSellPrice}</Text>
            </View>
          </View>

          <View style={styles.buyViewStyle}>
            <View style={styles.priceView}>
              <Text style={styles.orderBookText}>{item?.toBPrice}</Text>
              <Text style={styles.orderBookText}>{item?.toBuyPrice}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default OrderBookDetail;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.viewBgColor,
    width: '100%',

    marginTop: 10,
    borderRadius: 10,
    padding: 1,
  },
  mainView: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'cyan',
    marginVertical: 0.5,
  },
  sellViewStyle: {
    flex: 0.499,
    backgroundColor: 'white',
    height: 25,
    borderTopLeftRadius: 1,
    padding: 5,
  },
  buyViewStyle: {
    flex: 0.499,
    backgroundColor: 'white',
    height: 25,
    borderTopRightRadius: 1,
    marginLeft: 1,
    padding: 5,
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderBookText: {
    fontSize: 11,
    color: Color.black,
    fontWeight: 'bold',
  },
});
