import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ImagePaths from '../../../../Utlis/ImagePaths';
import {Color} from '../../../../Utlis/Color';
import LinearGradient from 'react-native-linear-gradient';
import Strings from '../../../../Utlis/String';

const Banner = () => {
  return (
    <View style={styles.linearGradientView}>
      <LinearGradient
        colors={['#060B1C', '#E25252']}
        start={{x: 0.2, y: 0}}
        end={{x: 0, y: 1}}
        style={{flex: 1, borderRadius: 15}}>
        <View style={styles.marketDownMainContainer}>
          <View>
            <Text style={styles.marketDownTextStyle}>
              {Strings.marketIsDown}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.percantageTextStyle}>-11.17%</Text>
              <Image
                source={ImagePaths.percenatgeDownImage}
                style={styles.percentageDownImageStyle}
              />
            </View>
            <Text style={styles.marketDownSubhedding}>{Strings.inThePast}</Text>
          </View>
          <Image
            source={ImagePaths.marketDownIndicator}
            style={styles.marketDownIndicatorImage}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  linearGradientView: {
    height: 105,
    marginTop: 20,
  },

  marketDownTextStyle: {
    color: Color.white,
    fontWeight: 'bold',
    fontSize: 15,
  },
  percentageDownImageStyle: {
    height: 20,
    width: 20,
    marginLeft: 5,
  },
  marketDownSubhedding: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Color.lightSilver,
  },
  marketDownMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  marketDownIndicatorImage: {
    height: 60,
    width: 130,
  },
  percantageTextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Color.reddishbrown,
  },
});
