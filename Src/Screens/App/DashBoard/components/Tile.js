import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Color} from '../../../../Utlis/Color';
import ImagePaths from '../../../../Utlis/ImagePaths';
import Strings from '../../../../Utlis/String';

const Tile = ({image, text, isRightEnable = false, rightImage, rightText}) => {
  return (
    <View style={styles.mainView}>
      <View style={{flexDirection: 'row'}}>
        <Image source={image} style={styles.imagestyle} />
        <Text style={styles.detailNameText}>{text}</Text>
      </View>

      {isRightEnable && (
        <TouchableOpacity>
          <View style={styles.addMainView}>
            <View style={styles.view}>
              <Image source={rightImage} style={styles.butttonImage} />
              <Text style={styles.buttonText}>{rightText}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Tile;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Color.white,
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    alignItems: 'center',
    height: 50,
  },
  imagestyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  detailNameText: {
    color: Color.black,
    marginLeft: 10,
  },
  addMainView: {
    padding:8,
    borderWidth: 1,
    borderColor: Color.Primary,
    width: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CBFFED',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  butttonImage: {
    height: 15,
    width: 15,
  },
  buttonText: {
    fontSize: 12,
    color: Color.Primary,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
