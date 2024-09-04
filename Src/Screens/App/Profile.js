import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainContainer from '../../Components/MainContainer';
import BackHeder from '../../Components/BackHeder';
import Strings from '../../Utlis/String';
import ImagePaths from '../../Utlis/ImagePaths';
import {Color} from '../../Utlis/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Tile from './DashBoard/components/Tile';

const Profile = () => {
  return (
    <MainContainer>
      <BackHeder
        title={Strings.profile}
        isRightEnable={true}
        image={ImagePaths.notificationImage}
      />

      <View style={styles.profileImageView}>
        <Image
          source={ImagePaths.profileImage}
          style={styles.profileImagestyle}
        />
        <View style={styles.EditView}>
          <Image source={ImagePaths.homeImage} style={styles.homeImageStyle} />
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.nameTextstyle}>{Strings.name}</Text>
        <Text style={styles.userIdTextStyle}>{Strings.userId}</Text>
        <Text style={{color:Color.lightgray}}>{Strings.emailId}</Text>
      </View>
      <View style={{marginTop:5}}>
        <Tile
          image={ImagePaths.walletIcon}
          text={Strings.balance}
          isRightEnable={true}
          rightImage={ImagePaths.addIcon}
          rightText={Strings.add}
        />
        <Tile
          image={ImagePaths.referIcon}
          text={Strings.refer}
          isRightEnable={true}
          rightImage={ImagePaths.whatsappIcon}
          rightText={Strings.invite}
        />
        <TouchableOpacity>
          <Tile image={ImagePaths.invoiceIcon} text={Strings.invoice} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Tile
            image={ImagePaths.accountDetailIcon}
            text={Strings.accountDetails}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Tile image={ImagePaths.bankDetailIcon} text={Strings.bankDetails} />
        </TouchableOpacity>
      </View>
    </MainContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileImageView: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    alignSelf: 'center',
  },
  profileImagestyle: {
    height: 120,
    width: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  nameTextstyle: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: Color.black,
  },
  userIdTextStyle: {
    fontSize: 18,
    color: Color.Primary,
  },
  EditView: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    backgroundColor: Color.white,
    position: 'absolute',
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeImageStyle: {height: 15, width: 15},
});
