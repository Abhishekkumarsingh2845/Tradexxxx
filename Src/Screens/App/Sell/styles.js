import {StyleSheet} from 'react-native';
import MainContainer from '../../../Components/MainContainer';
import {Color} from '../../../Utlis/Color';

const styles = StyleSheet.create({
  arrowicon: {
    height: 20,
    width: 22,
    resizeMode: 'cover',
  },
  headerView: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  logoStyle: {
    height: 55,
    width: 55,
    resizeMode: 'contain',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: Color.black,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
    color: Color.lightgray,
    fontWeight: '500',
  },
  unit: {
    marginLeft: 8,
  },
  profitText: {
    color: Color.Primary,
    marginRight: 5,
  },
  button: {
    backgroundColor: Color.white,
    padding: 12,
    width: 130,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: Color.white,
    fontWeight: 'bold',
  },
  buttonView: {
    backgroundColor: Color.white,
    padding: 5,
    marginTop: 20,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewStyle: {
    backgroundColor: Color.white,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  priceText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Color.black,
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceAmount: {
    fontSize: 25,
    color: Color.black,
    fontWeight: 'bold',
  },
  minusView: {
    height: 3,
    backgroundColor: Color.Primary,
    width: 15,
    marginTop: 15,
  },
  plusContainer: {
    backgroundColor: Color.viewBgColor,
    height: 35,
    width: 35,
    borderWidth: 1,
    borderColor: Color.Primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusImage: {
    height: 15,
    width: 15,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  minusContainer: {
    backgroundColor: Color.viewBgColor,
    height: 35,
    width: 35,
    borderWidth: 1,
    borderColor: Color.Primary,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 15,
  },
  color: {
    color: Color.Primary,
  },
  bookImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  vectorIcon: {
    height: 10,
    width: 16,
    resizeMode: 'contain',
  },
  line: {
    height: 1,
    backgroundColor: Color.viewBgColor,
    marginTop: 10,
  },
  paymentOptionsText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Color.gray,
  },
  checkBoxStyle: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: Color.checboxColor,
    borderRadius: 20 / 5,
   
    alignItems:"center",
    justifyContent:'center'
  },
  touchView: {
    width: 50,
    height: 25,
    backgroundColor: Color.Primary,
    borderRadius: 30 / 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 3,
  },
  touch: {
    height: 20,
    width: 20,
    backgroundColor: Color.white,
    borderRadius: 20 / 2,
  },
  imageStyle: {
    height: 30,
    width: 25,
    resizeMode: 'contain',
  },
  knowMore: {
    fontSize: 12,
    color: Color.lightgray,
    fontWeight: '500',
    color: Color.Primary,
    textDecorationLine: 'underline',
  },
  availableBalanceText: {
    marginLeft: 8,
    color: Color.Primary,
    fontSize: 12,
  },
  orderBookText: {
    fontSize: 11,
    color: Color.black,
    fontWeight: 'bold',
  },
  sellButton: {
    backgroundColor: Color.reddishbrown,
  },
  buyButton: {
    backgroundColor: Color.Primary,
  },
});

export default styles;
