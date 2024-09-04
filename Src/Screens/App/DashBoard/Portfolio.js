import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MainContainer from '../../../Components/MainContainer';
import BackHeder from '../../../Components/BackHeder';
import Strings from '../../../Utlis/String';
import {Color} from '../../../Utlis/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ActiveLine from '../../../Components/ActiveLine';

import LiveTrades from './components/LiveTrades';

const Portfolio = () => {
  const [isActive, setisActive] = useState(0);


  return (
    <MainContainer>
      <BackHeder title={Strings.myPortfolio} />
      <View style={styles.titleView}>
        <TouchableOpacity onPress={() => setisActive(0)}>
          <Text style={[styles.titleText, isActive == 0 && styles.activetext]}>
            {Strings.live}
          </Text>
          <ActiveLine isActive={isActive === 0} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setisActive(1)}>
          <Text style={[styles.titleText, isActive == 1 && styles.activetext]}>
            {Strings.closed}
          </Text>
          <ActiveLine isActive={isActive == 1 && styles.activetext} />
        </TouchableOpacity>
      </View>
      <Text style={styles.portfolioText}>{Strings.Portfolio}</Text>

      <View style={styles.portfolioMainView}>
        <View style={styles.portfolioView}>
          <View style={styles.view}>
            <Text style={styles.amount}>{Strings.invest}</Text>
            <Text style={styles.amountText}>{Strings.investment}</Text>
          </View>
        </View>

        <View style={styles.portfolioView}>
          <View style={styles.view}>
            <Text style={styles.amount}>{Strings.return}</Text>
            <Text style={styles.amountText}>{Strings.returnText}</Text>
          </View>
        </View>
      </View>

      <View style={styles.todayReturnView}>
        <Text style={styles.returnText}>{Strings.todayReturn}</Text>
        <Text style={styles.returnText}>{Strings.todayReturnAmount}</Text>
      </View>
  
      <LiveTrades />
  
    </MainContainer>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  titleText: {
    fontSize: 16,
    color: Color.gray,
    fontWeight: 'bold',
  },
  activetext: {
    color: Color.black,
    fontWeight: 'bold',
  },
  portfolioView: {
    backgroundColor: Color.white,
    borderRadius: 10,
    width: '45%',
    height: 90,
    marginTop: 15,
  },
  portfolioMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view: {
    marginTop: 15,
    marginLeft: 10,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 25,
    color: Color.black,
  },
  amountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Color.lightgray,
  },
  portfolioText: {
    fontSize: 14,
    marginTop: 20,
    color: Color.black,
    fontWeight: 'bold',
  },
  todayReturnView: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
  },
  returnText: {
    color: Color.black,
    fontWeight: 'bold',
    fontSize: 13,
  },
 
});
