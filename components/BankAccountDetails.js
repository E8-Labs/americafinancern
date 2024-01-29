import React, { useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native";

import { globalStyles } from "./GlobalStyles";

const { height, width } = Dimensions.get('window')

const selectedImage = require('../assets/slectedIcon.png');
const unSelectedImage = require('../assets/unslectedIcon.png')

const BankAccountDetails = () => {

    const [selectedIcon, setSlectedIcon] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
                        <Image source={require('../assets/dollarCircle.png')}
                            style={{
                                height: 20 / 852 * height, width: 20 / 852 * height, alignSelf: 'center', justifyContent: 'center'
                            }}
                        />
                    </View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>
                </View>

                <Text style={{ fontSize: 18, fontWeight: '800' }}>
                    Bank account information
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
                <ScrollView style ={{flex:2.7}}>
                <View style={{
                    height: 104 / 852 * height, width: 360 / 393 * width, borderWidth: .5, borderColor: '#a7a7a7'
                    , borderRadius: 20, marginTop: 40, flexDirection: 'row', justifyContent: 'space-between'
                }}>
                    <View style={{ flexDirection: 'column', paddingLeft: 15, paddingTop: 5 }}>
                        <Text style={{ fontSize: 13, fontWeight: '600' }}>
                            Noah N
                        </Text>
                        <Text style={{ fontSize: 13, fontWeight: '600' }}>
                            **** **** **** 9021
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'column', padding: 10 }}>
                        <TouchableOpacity onPress={() => setSlectedIcon(!selectedIcon)} style={{ marginLeft: 75 / 393 * width }}>
                            <Image source={selectedIcon ? selectedImage : unSelectedImage}
                                style={{ height: 34 / 852 * height, width: 34 / 393 * width, resizeMode: 'contain', }}
                            />
                        </TouchableOpacity>
                        <Text style={{ color: '#a7a7a7', fontSize: 10, fontWeight: '500', marginTop: 10 }}>
                            Wells Fargo Bank
                        </Text>
                    </View>
                </View>
                <View style={{
                    height: 93 / 852 * height, width: 360 / 393 * width, borderRadius: 30, borderColor: '#a7a7a7', borderWidth: 1, marginTop: 10
                 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 10, fontWeight: '500', padding: 25 }}>
                            Add new account
                        </Text>
                        <TouchableOpacity style={{ margin: 7, marginRight: 7, }}>
                            <View style={globalStyles.arrowBotton}>
                                <Image source={require('../assets/addIcon.png')}
                                    style={{ height: 20 / 852 * height, width: 20 / 393 * width }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
                </ScrollView>


                <TouchableOpacity style={{ marginTop: 100 / 852 * height,flex:0.5 }}>
                    <View style={globalStyles.arrowBotton}>
                        <Image source={require('../assets/arrow.png')}
                            style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: 'contain' }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
    )
}

export default BankAccountDetails;