import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import ImagePaths from '../../../../Utlis/ImagePaths';
import {Color} from '../../../../Utlis/Color';
import Strings from '../../../../Utlis/String';


const Trending = () => {
  const Data = [
    {
      id: 1,
      name: 'Trade Company Name',
      amount: '$21,1000',
      profitorLose: '-1.25%',
      logoImage: ImagePaths.greenLogo,
      profitorLoseimage: ImagePaths.PandL,
      profitorLoseGraph: ImagePaths.marketDownIndicator,
    },
    {
      id: 2,
      name: 'Trade Company Name',
      amount: '$21,1000',
      profitorLose: '-2.25%',
      logoImage: ImagePaths.orangeLogo,
      profitorLoseimage: ImagePaths.profitImage,
      profitorLoseGraph: ImagePaths.increaseGraph,
    },
    {
      id: 3,
      name: 'Trade Company Name',
      amount: '$21,1000',
      profitorLose: '-1.25%',
      logoImage: ImagePaths.greenLogo,
      profitorLoseimage: ImagePaths.PandL,
      profitorLoseGraph: ImagePaths.marketDownIndicator,
    },
  ];
  return (
    <View>
      <Text style={styles.heddingTextStyle}>{Strings.trending}</Text>
      <FlatList
        horizontal={true}
        data={Data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.mainContainer}>
            <View style={{margin: 10}}>
              <Image source={item.logoImage} style={styles.logoImage} />
              <Text style={styles.textstyle}>{item.name}</Text>
              <View style={styles.mainView}>
                <View>
                  <Text style={styles.textstyle}>{item.amount}</Text>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.profitorLoseText}>
                      {item.profitorLose}
                    </Text>
                    <Image
                      source={item.profitorLoseimage}
                      style={styles.profitorLoseImage}
                    />
                  </View>
                </View>
                <Image
                  source={item.profitorLoseGraph}
                  style={styles.graphImage}
                />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  heddingTextStyle: {
    marginTop: 15,
    color: Color.black,
    fontSize: 15,
    fontWeight: 'bold',
  },
  mainContainer: {
    height: 110,
    width: 160,
    backgroundColor: Color.white,
    marginTop: 0,
    borderRadius: 15,
    marginTop: 15,
    marginRight: 10,
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoImage: {
    height: 25,
    width: 25,
  },
  textstyle: {
    fontSize: 12,

    color: Color.black,
    fontWeight: 'bold',
  },
  profitorLoseImage: {
    height: 15,
    width: 15,
    marginLeft: 5,
  },
  profitorLoseGraph: {},
  graphImage: {
    height: 40,
    width: 70,
  },
  profitorLoseText: {
    color: Color.reddishbrown,
    fontSize: 10,
    fontWeight: 'bold',
  },
});
