import { Image, StyleSheet,  View } from 'react-native'
import React from 'react'
import ImagePaths from '../../../../Utlis/ImagePaths'

const Header = () => {
  return (
    <View style={styles.headerViewStyle}>
    <Image
      source={ImagePaths.headerImage}
      style={styles.headerHeddingImage}
    />
    <Image
      source={ImagePaths.profileImage}
      style={styles.headerProfileImage}
    />
  </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerViewStyle: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      headerProfileImage: {
        height: 35,
        width: 35,
        resizeMode: 'contain',
      },
      headerHeddingImage: {
        height: 40,
        width: 100,
        resizeMode: 'contain',
      },
})