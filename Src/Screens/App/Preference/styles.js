import {StyleSheet} from 'react-native';
import {Color} from '../../../Utlis/Color';

const styles = StyleSheet.create({
 
  checkBoxView: {
    height: 18,
    width: 18,
    backgroundColor: Color.Secondary,
    shadowColor: '#000',
    shadowRadius: 1,
    elevation: 1,
    borderRadius: 3,
    alignItems:"center",
    justifyContent:'center'
  },

  paymentHedding: {
    marginTop: 10,
    fontSize: 15,
    color: Color.black,
    fontWeight: '600',
  },
  checkBoxContainer: {
    marginTop: 10,
    fontSize: 15,
    color: Color.black,
    fontWeight: '600',
    flexDirection: 'row',
  },
  paymentTextView: {
    color: Color.black,
    fontSize: 13,
    marginLeft: 10,
  },
  contactPersonTextStyle: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.black,
  },
  buttonView: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipButtonStyle: {
    backgroundColor: Color.white,
    height: 50,
    width: '45%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Color.Primary,
  },
  doneButtonStyle: {
    backgroundColor: Color.white,
    height: 50,
    width: '45%',
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

});

export default styles;
