import {StyleSheet} from 'react-native';
import {Color} from '../../../Utlis/Color';

const styles = StyleSheet.create({
  arrowicon: {
    height: 30,
    width: 30,
    resizeMode: 'cover',
  },
  textstyle: {
    color: Color.black,
    fontSize: 25,
    fontWeight: 'bold',
  },
  textContainer: {
    marginTop: 20,
  },
  informationStyle: {
    marginTop: 15,
    color: Color.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkBoxView: {
    height: 18,
    width: 18,
    backgroundColor: Color.Secondary,
    shadowColor: '#000',
    shadowRadius: 1,
    elevation: 1,
    borderRadius: 3,
    alignItems:"center",
    justifyContent:"center"
  },
  informationTextStyle: {
    marginTop: 15,
    fontSize: 13,
    color: Color.lightgray,
  },

  checkboxTextStyle: {
    marginLeft: 10,
    fontSize: 13,
    color: Color.black,
  },
  checkBoxTextView: {
    marginTop: 15,
    flexDirection: 'row',
  },
  checkboxImage: {
    height: 12,
    width: 12,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 3,
  },
  subhedding: {
    fontSize: 13,
    color: Color.lightgray,
  },
  textInputStyle: {
    height: 50,
    color: Color.black,
    alignItems: 'center',
  },
  phonecontainerStyle: {
    height: 50,
    borderRadius: 8,
    width: '100%',
    marginTop: 15,
  },
  addmoreViewStyle: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  addmoreTextStyle: {
    fontSize: 15,

    textDecorationLine: 'underline',
    color: Color.Primary,
  },
  subhitHedding: {
    fontSize: 13,
    marginTop: 5,
  },
});

export default styles;
