import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { globalStyles } from "./GlobalStyles";

const { height, width } = Dimensions.get('window')


const VerifyLicenseScreen = () => {
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
                    Verify Identity
                </Text>
                <Text style={{ fontSize: 17, fontWeight: '700', marginTop: 10, color: '#000000', opacity: 0.4 }}>
                    Upload Gov’t Issued ID
                </Text>


                <View style={{
                    height: 180 / 852 * height, width: 340 / 393 * width, backgroundColor: '#f2f2f2',
                    borderRadius: 30, marginTop: 20
                }}>
                    <View style={{
                        height: 180 / 852 * height, width: 340 / 393 * width, borderWidth: 2, borderStyle: 'dashed',
                        borderColor: '#dedede', borderRadius: 30,
                    }}>
                        <View style={{ width: 330 / 393 * width, alignItems: 'flex-end', }}>
                            <View style={{
                                height: 31 / 852 * height, width: 56 / 393 * width, backgroundColor: '#e6e6e6', borderRadius: 15,
                                margin: 10, marginBottom: 0
                            }}>
                                <Text style={{ fontSize: 10, fontWeight: '500', textAlign: 'center', padding: 2.5 }}>Front</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ alignSelf: 'center', }}>
                            <View style={globalStyles.arrowBotton}>
                                <Image source={require('../assets/addIcon.png')}
                                    style={{ height: 20 / 852 * height, width: 20 / 393 * width }}
                                />
                            </View>
                        </TouchableOpacity>

                        <Text style={{ color: '#a7a7a7', fontSize: 12, fontWeight: '500', textAlign: 'center', marginTop: 5 }}>
                            Tap to take a picture or upload
                        </Text>


                    </View>
                </View>
                <View style={{
                    height: 180 / 852 * height, width: 340 / 393 * width, backgroundColor: '#f2f2f2',
                    borderRadius: 30, marginTop: 20
                }}>
                    <View style={{
                        height: 180 / 852 * height, width: 340 / 393 * width, borderWidth: 2, borderStyle: 'dashed',
                        borderColor: '#dedede', borderRadius: 30,
                    }}>
                        <View style={{ width: 330 / 393 * width, alignItems: 'flex-end', }}>
                            <View style={{
                                height: 31 / 852 * height, width: 56 / 393 * width, backgroundColor: '#e6e6e6', borderRadius: 15,
                                margin: 10, marginBottom: 0
                            }}>
                                <Text style={{ fontSize: 10, fontWeight: '500', textAlign: 'center', padding: 2.5 }}>Back</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ alignSelf: 'center', }}>
                            <View style={globalStyles.arrowBotton}>
                                <Image source={require('../assets/addIcon.png')}
                                    style={{ height: 20 / 852 * height, width: 20 / 393 * width }}
                                />
                            </View>
                        </TouchableOpacity>

                        <Text style={{ color: '#a7a7a7', fontSize: 12, fontWeight: '500', textAlign: 'center', marginTop: 5 }}>
                            Tap to take a picture or upload
                        </Text>
                    </View>
                </View>

                <View style={{ width: width, alignItems: 'flex-end', marginRight: 20, marginTop: 20/852*height }}>
                    <TouchableOpacity>
                        <View style={globalStyles.arrowBotton}>
                            <Image source={require('../assets/arrow.png')} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: "center" }}>

                    <Text style={{ fontSize: 12, color: '#a7a7a7', fontWeight: '500', height: 18, marginTop: 60 / 852 * height }}>
                        For more information and resources regarding
                    </Text>

                    <Text style={{ fontSize: 12, color: '#a7a7a7', fontWeight: '500', height: 18 }}>
                        PayDay loans, please visit
                    </Text>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 12, fontWeight: '600', color: '#2468E8', height: 18 }}>
                            www.AmericaFinance.com
                        </Text>

                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default VerifyLicenseScreen;