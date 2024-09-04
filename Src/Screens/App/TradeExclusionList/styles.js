import {StyleSheet, Dimensions} from 'react-native';
import {Color} from '../../../Utlis/Color';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  tradelistHeddinViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
    alignItems: 'center',
  },
  tradelistnameStyle: {
    fontSize: 16,
    color: Color.gray,
    fontWeight: 'bold',
    marginVertical: 5,
    alignItems: 'center',
  },
  searchboxViewStyle: {
    backgroundColor: Color.white,
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  searchTextinputStyle: {
    color: Color.lightgray,
    flex:1,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    width: width - width * 0.1,
    alignSelf: 'center',
  },
  skipButtonStyle: {
    backgroundColor: Color.white,
    height: 50,
    width: '47%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Color.Primary,
  },
  doneButtonStyle: {
    backgroundColor: Color.white,
    height: 50,
    width: '47%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.Primary,
  },
  skipTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Color.Primary,
  },
  doneTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Color.white,
  },
  activeIconStyle: {
    borderWidth: 0.5,
    borderColor: Color.Primary,

    height: 20,
    width: 20,
    borderRadius: 10,
  },
  dataView: {
    backgroundColor: Color.white,
    height: 80,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  imageStyle: {
    height: 55,
    width: 55,
  borderRadius:55/2,
  resizeMode:'cover'

  
  },
  itemNameStyle: {
    fontSize: 16,
    color: Color.black,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  itemCompanyNameStyle: {
    fontSize: 13,
    marginLeft: 15,
  },
  searchImageStyle: {
    height: 20,
    width: 20,
  },
  activetext: {
    color: Color.black,
  },
});
export default styles;
