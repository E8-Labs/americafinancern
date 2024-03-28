import { View, Text, Dimensions ,TouchableOpacity} from 'react-native'
import React from 'react';
import { globalStyles } from '../components/GlobalStyles'
const {width,height} = Dimensions.get('window')

export default function OnbordingFailScreen() {
  return (
    <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style = {{fontSize:18,fontWeight:'500',width:width-40,textAlign:'center'}}> Thank you, we cannot process your application at the moment, our team is reviewing your account and will get back to you shortly.</Text>
        <TouchableOpacity style = {[globalStyles.capsuleButton,{backgroundColor:'#000',marginTop:50}]} >
            <Text style = {{fontSize:14,fontWeight:'500',color:'#fff'}}>Contact Admin</Text>
        </TouchableOpacity>
    </View>

  )
}