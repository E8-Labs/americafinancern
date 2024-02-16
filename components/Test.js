
import { StyleSheet, Text, View,Dimensions,SafeAreaView } from 'react-native';
import React from 'react'

import Video from 'react-native-video';
const { height, width } = Dimensions.get('window')

const Test = () => {
  return (
    <SafeAreaView style={{height:height,width:width,alignItems:"center"}} >
      
      <Video
      source={require("../assets/video/splashGif.mp4")}
      rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          repeat
          style={{ width: 300, height: 300 }}

      />
      <Text style={{color:"red",fontSize:50}} >TALHA</Text>
    

    </SafeAreaView>
    
  )
}

export default Test

const styles = StyleSheet.create({})