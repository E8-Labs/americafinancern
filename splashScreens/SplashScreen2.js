import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native"
import { globalStyles } from "../components/GlobalStyles";
import DeviceInfo from 'react-native-device-info';
import { SafeAreaView } from "react-native";


const { height, width } = Dimensions.get("window");

const SplashScreen2 = (props) => {

    const paddingBottom = DeviceInfo.hasNotch() ? 60 :0
    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:'#fff' }}>
        <View style={{ alignItems: "center", justifyContent: 'center', height: height, width: width,backgroundColor:'#fff'}}>
            <View style={{ flex: 1, height: height / 2, justifyContent: 'flex-end' }}>
                <Image source={require('../assets/AFImage.png')}
                    style={{ height: 120 / 852 * height, width: 132 / 852*height}}
                />
            </View>
            <View style={{justifyContent: 'flex-end', height: height / 2, paddingBottom: paddingBottom,alignItems:'center'}}>
                <View style={{ flexDirection: 'row', marginTop: 130 / 852 * height, }}>
                    <Text style={{ fontSize: 38 / 852 * height, fontWeight: 400, color: "#000" }}>Apply in </Text>
                    <Text style={{ fontSize: 38 / 852 * height, fontWeight: 600, color: "#000" }}>Minutes </Text>
                </View>
                <Text style={[styles.smalText, { marginTop: 20 / 852 * height, color: "#000" }]}>Provide some basic information and  </Text>
                <Text style={styles.smalText}>you'll be ready to start borrowing</Text>
                <Text style={styles.smalText}>within minutes. </Text>
                <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                    <TouchableOpacity style={[globalStyles.shadowStyle,{ marginTop: 50 / 852 * height }]}
                        onPress={() => props.navigation.navigate('SplashScreen3')}
                    >
                        <View style={globalStyles.arrowBotton}>
                            <Image source={require('../assets/arrow.png')}
                                style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: 'contain' }}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 20 / 852 * height, marginBottom: 40 / 852 * height }}
                        onPress={() => props.navigation.navigate('Main')}
                    >
                        <Text style={{ fontSize: 16 / 852 * height, fontWeight: '500', textDecorationLine: 'underline', color: "#000" }}>Skip</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    smalText: {
        fontSize: 16 / 852 * height,
        color: "#000"
    }
})

export default SplashScreen2;