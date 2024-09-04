import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MainContainer from '../../../Components/MainContainer';
import {ScrollView} from 'react-native-gesture-handler';
import ImagePaths from '../../../Utlis/ImagePaths';
import styles from './styles';
import Strings from '../../../Utlis/String';
import {Color} from '../../../Utlis/Color';
import Input from '../../../Components/Input';
import PhoneInput from 'react-native-phone-number-input';
import Button from '../../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../../../Constants/ScreenName';
import BackHeder from '../../../Components/BackHeder';


const HundredPointForm = () => {
  const navigation = useNavigation();

  const [checkboxes, setCheckBoxes] = useState ([
    {
      id: 1,
      text: Strings.checkboxText1Hedding,
      isSelected: false,
    },
    {
      id: 2,
      text: Strings.checkboxText2Hedding,
      isSelected: false,
    },
  ])

  return (
    <MainContainer>
      <BackHeder />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <Text style={styles.textstyle}>{Strings.hundredPoint}</Text>
          <Text style={styles.textstyle}>{Strings.form}</Text>
        </View>
        <Text style={styles.subhedding}>
          {Strings.hundredPointFormSubHedding}
        </Text>

        <Text style={styles.informationStyle}>
          {Strings.generalInformation}
        </Text>

        <Input placeholder={Strings.fullName} />

        <Input placeholder={Strings.tradingName} />

        <Input placeholder={Strings.acn} />

        <Input placeholder={Strings.abn} />

        <Text style={styles.informationStyle}>
          {Strings.registeredOfficeAddress}
        </Text>
        <Text style={{color:Color.lightgray}}>{Strings.poBox}</Text>

        <Input placeholder={Strings.street} />

        <Input placeholder={Strings.suburb} />

        <Input placeholder={Strings.state} />

        <Input placeholder={Strings.postCode} />

        <PhoneInput
          initialCountry="india"
          flagStyle={{
            marginRight: 10,
            borderRadius: 100,
            overflow: 'hidden',
          }}
          textInputProps={{autoFocus: false, maxLength: 10}}
          containerStyle={styles.phonecontainerStyle}
          textInputStyle={styles.textInputStyle}
        />
        <Input placeholder={Strings.mobileNumber} />
        <Input placeholder={Strings.faxNumber} />
        <Input placeholder={Strings.email} />
        <Input placeholder={Strings.alternateNumber} />

        <Input placeholder={Strings.documentUpload} editable={false} />

        <Text style={styles.informationTextStyle}>
          {Strings.hundredFormInformations}
        </Text>
        <Text style={styles.informationStyle}>
          {Strings.registeredOfficeAddress}
        </Text>



        {checkboxes.map(item => (
          <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            let updatedCheckbox = checkboxes?.map(ele => { return ({...ele, isSelected: item.id == ele.id? true:false })})
            setCheckBoxes(updatedCheckbox)
         
          }}
          key={item.id} style={styles.checkBoxTextView}>
            <View >
              <View style={{...styles.checkBoxView,backgroundColor:item.isSelected ?Color.Primary:Color.white}}>
                {item.isSelected ? (
                  <Image
                    source={ImagePaths.SuccessImage}
                    style={{height: 12, width: 12, resizeMode: 'contain'}}
                  />
                ) : null}
              </View>
            </View>
            <Text style={styles.checkboxTextStyle}>{item.text}</Text>
          </TouchableOpacity>
        ))}

      
      
      
      
        <View style={{marginTop: 15}}>
          <Text style={{fontSize: 13,color:"gray"}}>
            <Text style={{fontWeight: 'bold',color:"gray"}}>Directors</Text>
            {Strings.directorsRequired}
          </Text>

          <Text style={{color:"gray"}}>{Strings.fillGiven}</Text>
        </View>
        <Input placeholder={Strings.enterName} />

        <View style={styles.addmoreViewStyle}>
          <TouchableOpacity>
            <Text style={styles.addmoreTextStyle}>{Strings.addMore}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subhedding}>{Strings.checkboxWarning}</Text>
        <Button
          onPress={() => {
            navigation.navigate(ScreenName.PreferenceSettings);
          }}
          title={Strings.submit}
          backgroundColor={Color.Primary}
        />
      </ScrollView>
    </MainContainer>
  );
};

export default HundredPointForm;
