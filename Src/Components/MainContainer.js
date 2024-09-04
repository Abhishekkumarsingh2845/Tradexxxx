import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import ImagePaths from '../Utlis/ImagePaths'

const MainContainer = ({children, style}) => {
  return (
    <ImageBackground 
        resizeMode='cover' 
        source={ImagePaths.bg}
        style={{flex:1,height:"100%",width:"100%", ...style}}>
          <View style={{flex:1,padding:20}}>
            {children}
          </View>
    </ImageBackground>
  )
}

export default MainContainer