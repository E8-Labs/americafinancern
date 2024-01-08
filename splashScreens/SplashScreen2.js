import React from "react"
import { View, Text ,StyleSheet,TouchableOpacity,Image,Dimensions} from "react-native"
import { globalStyles } from "../components/GlobalStyles";

const {height,width} = Dimensions.get("window");

const SplashScreen2 = (props) => {
    return (
        <View style={{ alignItems: "center", justifyContent: 'flex-end',height:height,width:width}}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 38/852*height, fontWeight: 400 ,color:"#000"}}>Apply in </Text>
                <Text style={{ fontSize: 38/852*height, fontWeight: 600,color:"#000" }}>Minutes </Text>
            </View>
            <Text style = {[styles.smalText,{marginTop:20/852*height,color:"#000"}]}>Provide some basic information and  </Text>
            <Text style = {styles.smalText}>you'll be ready to start borrowing</Text>
            <Text style = {styles.smalText}>within minutes. </Text>

            <TouchableOpacity style = {{marginTop:50/852*height}}
                onPress={()=>props.navigation.navigate('SplashScreen3')}
            >
                <View style = {globalStyles.arrowBotton}>
                    <Image source={require('../assets/arrow.png')} 
                        style = {{height:24/852*height,width:24/393*width,resizeMode:'contain'}}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style = {{marginTop:20/852*height,marginBottom:40/852*height}}
                onPress={()=>props.navigation.navigate('SplashScreen4')}
            >
                <Text style = {{fontSize:16/852*height,fontWeight:'500',textDecorationLine:'underline',color:"#000"}}>Skip</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    smalText:{
        fontSize:16/852*height,
        color:"#000"
    }
})

export default SplashScreen2;