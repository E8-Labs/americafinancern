import React from "react";
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import { globalStyles } from "./GlobalStyles";


const { height, width } = Dimensions.get('window');

const DOBScreen = () => {
    return (
        <View>
            <View style={globalStyles.container}>
                <Text style={{ fontSize: 10, fontWeight: '500' }}>
                    Application Details
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>

                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>

                    <View style={{
                        height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                    }}>
                        <Image source={require('../assets/calender2.png')}
                            style={{
                                height: 20 / 852 * height, width: 20 / 852 * height, alignSelf: 'center', justifyContent: 'center'
                            }}
                        />
                    </View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>
                </View>
                <Text style={{ fontSize: 17, fontWeight: '700', marginTop: 10 }}>
                    Verify Identity
                </Text>
                <Text style={{ fontSize: 13, fontWeight: '700', color: '#a7a7a7', marginTop: 5 }}>
                    DOB
                </Text>
                <Text style={{ fontSize: 10, color: '#a7a7a7', margin: 10, marginBottom: 0 }}>
                    (Please ensure all information entered on your application
                </Text>
                <Text style={{ fontSize: 10, color: '#a7a7a7', }}>
                    is correct and up-to-date, America Finance will verify all
                </Text>
                <Text style={{ fontSize: 10, color: '#a7a7a7' }}>
                    information submitted.)
                </Text>
                 
                 <View style={{ width: width, alignItems: 'flex-end', marginRight: 20, marginTop: 20 / 852 * height }}>
                    <TouchableOpacity>
                        <View style={globalStyles.arrowBotton}>
                            <Image source={require('../assets/arrow.png')} />
                        </View>
                    </TouchableOpacity>
                </View>

                 
                <Text style={{ fontSize: 10, color: '#a7a7a7', margin: 10, marginBottom: 0 }}>
                    (Please ensure all information entered on your application
                </Text>
                <Text style={{ fontSize: 10, color: '#a7a7a7', }}>
                    is correct and up-to-date, America Finance will verify all
                </Text>
                <Text style={{ fontSize: 10, color: '#a7a7a7' }}>
                    information submitted.)
                </Text>
            </View>
        </View>
    )
}

export default DOBScreen;