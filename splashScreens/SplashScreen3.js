import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native"
import { globalStyles } from "../components/GlobalStyles"
const { height, width } = Dimensions.get("window");
import { SafeAreaView } from "react-native";
import DeviceInfo from "react-native-device-info";

const SplashScreen3 = (props) => {
    const paddingBottom = DeviceInfo.hasNotch() ? 60 : 0

    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:'#fff' }}>
        <View style={{ alignItems: "center", justifyContent: 'flex-end', height: height, width: width,backgroundColor:'#fff' }}>
            <Image source={require('../assets/AFImage.png')}
                style={{ height: 150 / 582 * height, width: 150 / 393 * width, resizeMode: 'contain' }}
            />
            <View style={{ flexDirection: 'row', marginTop: 100 / 852 * height }}>
                <Text style={{ fontSize: 38 / 852 * height, fontWeight: "bold", color: "#000" }}>Transparent </Text>
                <Text style={{ fontSize: 38 / 852 * height, fontWeight: "400", color: "#000" }}>Terms </Text>
            </View>
            <Text style={[styles.smalText, { marginTop: 20 / 852 * height }]}>At America Finance, we believe in </Text>
            <Text style={styles.smalText}>transparency. Transparency in terms and</Text>
            <Text style={styles.smalText}>conditions, loan repayment, and any</Text>
            <Text style={styles.smalText}>applicable fees.</Text>

            <View style = {{paddingBottom:paddingBottom,alignItems:'center'}}>
                <TouchableOpacity style={[globalStyles.shadowStyle,{ marginTop: 50 / 852 * height }]}
                    onPress={() => props.navigation.navigate('SplashScreen4')}

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
                    <Text style={{ fontSize: 16 / 852 * height, fontWeight: '500', textDecorationLine: 'underline' }}>Skip</Text>
                </TouchableOpacity>

            </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    smalText: {
        fontSize: 16 / 852 * height,
    }
})

export default SplashScreen3;