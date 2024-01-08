import React from "react";
import { View, Text, Dimensions, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { globalStyles } from "./GlobalStyles";

const { height, width } = Dimensions.get('window')

const LicenseDetailsScreen = () => {
    return (
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
                            <Image source={require('../assets/usertag.png')}
                                style={{
                                    height: 20 / 852 * height, width: 20 / 852 * height, alignSelf: 'center', justifyContent: 'center'
                                }}
                            />
                        </View>

                        <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                        <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>
                    </View>
                    <Text style={{ fontSize: 17, fontWeight: '700', marginTop: 10 }}>
                        Driver’s License or
                    </Text>
                    <Text style={{ fontSize: 17, fontWeight: '700' }}>
                        State Issued ID
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

                    <View style={{ height: 70 / 852 * height, width: 357 / 393 * width, backgroundColor: '#f2f2f2', borderRadius: 13, marginTop: 50 / 852 * height }}>

                    </View>

                    <TextInput placeholder="ID Number"
                        style={globalStyles.inputStyle}
                        keyboardType="numeric"
                    />

                    <View style={{
                        height: 57 / 852 * height, width: 357 / 393 * width, borderRadius: 10, backgroundColor: '#f2f2f2', marginTop: 15,
                        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
                    }}>
                        <TextInput placeholder="Expitration Date"
                            style={{ fontSize: 10, fontWeight: '500', padding: 7, flex: 1 }}
                            keyboardType="numeric"
                        />
                        <Image source={require('../assets/calender2.png')}
                            style={{ height: 20 / 852 * height, width: 20 / 393 * width, marginRight: 10 }}
                        />
                    </View>

                    <View style = {{width:width,alignItems:'flex-end',marginTop:20,marginRight:20}}>
                        <TouchableOpacity>
                            <View style={globalStyles.arrowBotton}>
                                <Image source={require('../assets/arrow.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
    )
}


export default LicenseDetailsScreen;