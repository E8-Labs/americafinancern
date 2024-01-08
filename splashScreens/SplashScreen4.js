import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native"
import { globalStyles } from "../components/GlobalStyles";
const { height, width } = Dimensions.get("window");

const SplashScreen4 = (props) => {
    return (
        <View style={{ alignItems: "center", justifyContent: 'flex-end', height:height,width:width }}>
            <Image source={require('../assets/aprovalLogo.png')}
                style={{ height: 200 / 582 * height, width: 400 / 393 * width, resizeMode: 'contain' }}
            />
            <View style={{ flexDirection: 'row', marginTop: 50 / 852 * height }}>
                <Text style={{ fontSize: 38/852*height, fontWeight: "bold",color:"#000" }}>Instant </Text>
                <Text style={{ fontSize: 38/852*height, fontWeight: "400" ,color:"#000"}}> Approval </Text>
            </View>
            <Text style={[styles.smalText, { marginTop: 20 / 852 * height }]}>Need cash fast? America Finance makes it</Text>
            <Text style={styles.smalText}>simple to request funds. Enter your desired</Text>
            <Text style={styles.smalText}>amount and we’ll guide you step by step. </Text>

            <TouchableOpacity style={[globalStyles.capsuleButton, { marginTop: 50 / 852 * height,height:72/852*height }]}
                onPress={()=>props.navigation.navigate('Main')}
            
            >
                <View style = {{flexDirection:'row',gap:10/852*height}}>
                    <Text style = {{fontSize:16/852*height,fontWeight:'500',color:"#fff"}}>Get Started</Text>
                    <Image source={require('../assets/arrow.png')}
                        style={{ height: 24 / 852 * height, width: 24 / 393 * width ,resizeMode:'contain'}}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginTop: 20 / 852 * height, marginBottom: 40 / 852 * height }}>
                <Text style={{ fontSize: 16/852*height,fontWeight:'500',color:"#000",textDecorationLine: 'underline' }}>Skip</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    smalText: {
        fontSize: 16/852*height,
        color:"#000"
    }
})

export default SplashScreen4;