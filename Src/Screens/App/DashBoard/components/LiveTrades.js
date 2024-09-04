import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {Color} from '../../../../Utlis/Color';
import ImagePaths from '../../../../Utlis/ImagePaths';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Strings from '../../../../Utlis/String';
import { useNavigation } from '@react-navigation/native';
import ScreenName from '../../../../Constants/ScreenName';

const LiveTrades = () => {
  const navigation=useNavigation()
  const LiveTrades = [
    {
      id: 1,
      logo: ImagePaths.orangeLogo,
      name: 'Group Name',
      totalAmount: '$21,000',
      graphImage: ImagePaths.increaseGraph,
      price: 'Enterprise Pvt.Ltd',
      view: 'View',
    },
    {
      id: 2,
      logo: ImagePaths.blueLogo,
      name: 'Group Name',
      totalAmount: '$21,000',
      graphImage: ImagePaths.marketDownIndicator,
      price: 'Enterprise Pvt.Ltd',
      pending: 'Pending',
    },
    {
      id: 3,
      logo: ImagePaths.greenLogo,
      name: 'Group Name',
      totalAmount: '$21,000',
      graphImage: ImagePaths.marketDownIndicator,
      price: 'Enterprise Pvt.Ltd',
      view: 'View',
    },
    {
      id: 4,
      logo: ImagePaths.greenLogo,
      name: 'Group Name',
      totalAmount: '$21,000',
      graphImage: ImagePaths.marketDownIndicator,
      price: 'Enterprise Pvt.Ltd',
      pending: 'pending',
    },
    {
      id: 5,
      logo: ImagePaths.orangeLogo,
      name: 'Group Name',
      totalAmount: '$21,000',
      graphImage: ImagePaths.increaseGraph,
      price: 'Enterprise Pvt.Ltd',
      view: 'View',
    },
    {
      id: 6,
      logo: ImagePaths.orangeLogo,
      name: 'Group Name',
      totalAmount: '$21,000',
      graphImage: ImagePaths.increaseGraph,
      price: 'Enterprise Pvt.Ltd',
      pending: 'pending',
    },
  ];
  return (
    
    <View style={{flex:1}}> 
        <Text style={styles.liveTradeText}>{Strings.liveTrade}</Text>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={LiveTrades}
     keyExtractor={(item)=>item.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity onPress={()=>{
          navigation.navigate(ScreenName.ClosedPortfolioDetails)
        }}>
          <View style={styles.mainContainer}>
            <View style={styles.primaryViewStyle}>
              <View style={styles.viewStyle}>
                <Image source={item.logo} style={styles.logoImageStyle} />
                <View style={{marginLeft: 10}}>
                  <Text style={styles.textStyle}>{item.name}</Text>
                  <Text style={styles.priceStyle}>{item.price}</Text>
                </View>
              </View>
              <Image source={item.graphImage} style={styles.graphImage} />
              <View style={{alignItems: 'center'}}>
                <Text style={styles.textStyle}>{item.totalAmount}</Text>

                <View style={styles.viewStyle}>
                  <Text style={{...styles.statusStyle, color: Color.Primary}}>
                    {item.view}
                  </Text>

                  <Text style={styles.statusStyle}>{item.pending}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        
      )}
    />
    </View>
  );
};

export default LiveTrades;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.white,
    height: 60,
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  primaryViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Color.black,
  },
  logoImageStyle: {
    height: 35,
    width: 35,
    resizeMode:'contain'
  },
  graphImage: {
    height: 30,
    width: 60,
  },
  statusStyle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: Color.lightgray,
    marginRight: 5,
  },
  priceStyle: {
    fontSize: 11,
    fontWeight: 'bold',
    color:Color.lightgray
  },
  liveTradeText: {
    marginTop: 15,
    fontWeight: 'bold',
    color: Color.black,
    fontSize: 14,
  },
});
