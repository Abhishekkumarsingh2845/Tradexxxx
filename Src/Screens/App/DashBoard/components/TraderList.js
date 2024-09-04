import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Strings from '../../../../Utlis/String';
import {Color} from '../../../../Utlis/Color';
import ImagePaths from '../../../../Utlis/ImagePaths';
import { useNavigation } from '@react-navigation/native';
import ScreenName from '../../../../Constants/ScreenName';


const TraderList = () => {
  const navigation=useNavigation()
  const TraderRecord = [
    {
      id: 1,
      companyName: 'Trade Company',
      totalAmount: '$21,000',
      profitorLose: '+8.88%',
      profitorLoseImage: ImagePaths.profitImage,
      unit: '(56 AUD/Unit)',
      logoImage: ImagePaths.blueLogo,
      price: '$200/100U US $200.00',
    },
    {
      id: 2,
      companyName: 'Trade Company',
      totalAmount: '$21,000',
      profitorLose: '+8.88%',
      profitorLoseImage: ImagePaths.profitImage,
      unit: '(56 AUD/Unit)',
      logoImage: ImagePaths.orangeLogo,
      price: '$200/100U US $200.00',
    },
    {
      id: 3,
      companyName: 'Trade Company',
      totalAmount: '$21,000',
      profitorLose: '+8.88%',
      profitorLoseImage: ImagePaths.profitImage,
      unit: '(56 AUD/Unit)',
      logoImage: ImagePaths.orangeLogo,
      price: '$200/100U US $200.00',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <Text style={styles.textStyle}>{Strings.traderList}</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={TraderRecord}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.mainContainer}>
            <View style={styles.trendingMainView}>
              <View style={styles.logoImageView}>
                <Image source={item.logoImage} style={styles.logoImage} />

                <View style={{marginLeft: 10}}>
                  <View style={styles.logoImageView}>
                    <Text style={styles.companyName}>{item.companyName}</Text>
                    <Text style={styles.unitText}>{item.unit}</Text>
                  </View>

                  <Text style={styles.priceText}>{item.price}</Text>
                </View>
              </View>

              <View>
                <Text style={styles.totalAmountText}>{item.totalAmount}</Text>
                <View style={styles.logoImageView}>
                  <Text style={styles.profitorLose}>{item.profitorLose}</Text>
                  <Image source={item.profitorLoseImage} />
                </View>
              </View>
            </View>
            <View style={styles.buttonmainContainer}>
              <TouchableOpacity onPress={()=>navigation.navigate(ScreenName.sell)} style={styles.buttonView}>
                <Text style={styles.buttonText}>{Strings.sell}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{...styles.buttonView, backgroundColor: Color.Primary}}>
                <Text style={styles.buttonText}>{Strings.buy}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TraderList;

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 15,
    color: Color.black,
    fontSize: 15,
    fontWeight: 'bold',
  },
  mainContainer: {
    backgroundColor: Color.white,
    marginTop: 0,
    borderRadius: 15,
    marginTop: 15,
    marginRight: 10,
    padding: 10,
  },
  trendingMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoImageView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoImage: {
    height: 30,
    width: 30,
  },
  companyName: {
    fontSize: 12,
    color: Color.black,
    fontWeight: 'bold',
  },
  unitText: {
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 5,
    color:Color.lightgray
  },
  priceText: {
    fontSize: 10,
    fontWeight: 'bold',
    color:Color.lightgray
  },
  totalAmountText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Color.black,
  },
  profitorLose: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Color.Primary,
    marginRight: 5,
  },
  buttonmainContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonView: {
    height: 40,
    width: '47%',
    backgroundColor: Color.reddishbrown,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: Color.white,
    fontWeight: 'bold',
  },
});
