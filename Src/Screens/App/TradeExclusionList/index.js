import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import MainContainer from '../../../Components/MainContainer';
import BackHeder from '../../../Components/BackHeder';
import Strings from '../../../Utlis/String';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import styles from './styles';
import ImagePaths from '../../../Utlis/ImagePaths';
import {Color} from '../../../Utlis/Color';
import ActiveLine from '../../../Components/ActiveLine';
import Navigation from '../../../Navigations';
import {useNavigation} from '@react-navigation/native';
import Portfolio from '../DashBoard/Portfolio';
import ScreenName from '../../../Constants/ScreenName';

const TradeExclusiveList = () => {
  const navigation = useNavigation();
  const [isactive, setisActive] = useState(0);

  const Data = [
    {
      id: 1,
      name: 'Retailers Name 01',
      companyName: 'Company Name 01',
      Image: ImagePaths.profile,
    },
    {
      id: 2,
      name: 'Retailers Name 02',
      companyName: 'Company Name 02',
      Image: ImagePaths.profile,
    },
    {
      id: 3,
      name: 'Retailers Name 03',
      companyName: 'Company Name 03',
      Image: ImagePaths.profile,
    },
    {
      id: 4,
      name: 'Retailers Name 04',
      companyName: 'Company Name 04',
      Image: ImagePaths.profile,
    },
    {
      id: 5,
      name: 'Retailers Name 05',
      companyName: 'Company Name 05',
      Image: ImagePaths.profile,
    },
    {
      id: 6,
      name: 'Retailers Name 05',
      companyName: 'Company Name 05',
      Image: ImagePaths.profile,
    },
    {
      id: 7,
      name: 'Retailers Name 05',
      companyName: 'Company Name 05',
      Image: ImagePaths.profile,
    },
    {
      id: 8,
      name: 'Retailers Name 05',
      companyName: 'Company Name 05',
      Image: ImagePaths.profile,
    },
  ];

  return (
    <MainContainer>
      <BackHeder title={Strings.tradeexculusionlist} />

      <View style={styles.tradelistHeddinViewStyle}>
        <TouchableOpacity onPress={() => setisActive(0)}>
          <Text style={[styles.tradelistnameStyle,isactive ===0 && styles.activetext]}>{Strings.retailers}</Text>
           <ActiveLine isActive={isactive === 0} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setisActive(1)}>
          <Text style={[styles.tradelistnameStyle,isactive ===1 && styles.activetext]}>{Strings.aggregator}</Text>
          <ActiveLine isActive={isactive === 1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setisActive(2)}>
          <Text style={[styles.tradelistnameStyle,,isactive ===2 && styles.activetext]}>{Strings.ap}</Text>
          <ActiveLine isActive={isactive === 2} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchboxViewStyle}>
        <TextInput style={styles.searchTextinputStyle} placeholder="Search"
        placeholderTextColor={Color.lightgray} />

        <Image source={ImagePaths.searchIcon} style={styles.searchImageStyle} />
      </View>
     
      <FlatList
        style={{marginTop: 20}}
        data={Data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity>
            <View style={styles.dataView}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={item.Image} style={styles.imageStyle} />
                <View>
                  <Text style={styles.itemNameStyle}>{item.name}</Text>

                  <Text style={styles.itemCompanyNameStyle}>
                    {item.companyName}
                  </Text>
                </View>
              </View>

              <View style={styles.activeIconStyle}></View>
            </View>
          </TouchableOpacity>
        )}
      />

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.skipButtonStyle}>
          <Text style={styles.skipTextStyle}>{Strings.skip}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('DashBoardTab')}
          style={styles.doneButtonStyle}>
          <Text style={styles.doneTextStyle}>{Strings.done}</Text>
        </TouchableOpacity>
      </View>
    </MainContainer>
  );
};

export default TradeExclusiveList;
