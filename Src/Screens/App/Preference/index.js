import {View, Text, TouchableOpacity, Image, BackHandler} from 'react-native';
import React, {useState} from 'react';
import MainContainer from '../../../Components/MainContainer';
import ScreenName from '../../../Constants/ScreenName';
import ImagePaths from '../../../Utlis/ImagePaths';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Strings from '../../../Utlis/String';
import {Color} from '../../../Utlis/Color';
import Input from '../../../Components/Input';
import {ScrollView} from 'react-native-gesture-handler';
import BackHeder from '../../../Components/BackHeder';
import Navigation from '../../../Navigations';

const PreferenceSettings = () => {
  const navigation = useNavigation();
  const [checkbox, setCheckBox] = useState([
    {
      id: 1,
      text: Strings.paymentTermsText1,
      isSelected: false,
    },
    {
      id: 2,
      text: Strings.paymentTermsText2,
      isSelected: false,
    },
    {
      id: 3,
      text: Strings.paymentTermsText3,
      isSelected: false,
    },
    {
      id: 4,
      text: Strings.paymentTermsText4,
      isSelected: false,
    },
    {
      id: 5,
      text: Strings.paymentTermsText5,
      isSelected: false,
    },
    {
      id: 6,
      text: Strings.paymentTermsText6,
      isSelected: false,
    },
  ]);

  return (
    <MainContainer>
      <BackHeder title={Strings.preferenceSetting} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.paymentHedding}>{Strings.paymentTerms}</Text>

        {checkbox.map(item => (
          <TouchableOpacity
            onPress={() => {
              let updatedCheckbox = checkbox?.map(ele => {
                return {...ele, isSelected: item.id == ele.id ? true : false};
              });
              setCheckBox(updatedCheckbox);
            }}>
            <View key={item.id} style={styles.checkBoxContainer}>
              <View
                style={{
                  ...styles.checkBoxView,
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
              <Text style={styles.paymentTextView}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <Text style={styles.contactPersonTextStyle}>
          {Strings.primaryContactPerson}
        </Text>
        <Input placeholder={Strings.name} />
        <Input placeholder={Strings.email} />
        <Input placeholder={Strings.contactNumber} />
        <Text style={styles.contactPersonTextStyle}>
          {Strings.secondaryContactPerson}
        </Text>
        <Input placeholder={Strings.name} />
        <Input placeholder={Strings.email} />
        <Input placeholder={Strings.contactNumber} />

        <Text style={styles.contactPersonTextStyle}>
          {Strings.otherContactNumberPerson}
        </Text>
        <Input placeholder={Strings.name} />
        <Input placeholder={Strings.email} />
        <Input placeholder={Strings.contactNumber} />

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.skipButtonStyle}>
            <Text style={styles.skipTextStyle}>{Strings.skip}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ScreenName.tradeexclusionlist);
            }}
            style={styles.doneButtonStyle}>
            <Text style={styles.doneTextStyle}>{Strings.done}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainContainer>
  );
};

export default PreferenceSettings;
