import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, Image, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "./GlobalStyles";
import Snackbar from "react-native-snackbar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native";
import Apis from "../Api/apipath";
import DeviceInfo from "react-native-device-info";

const { height, width } = Dimensions.get('window');

const LoanRequest = ({ navigation, route }) => {


    console.log("Route is ", route)
    console.log("Params are ", route.params)
    const fromTabBar = route.params.fromTabBar;
    console.log("From tabbar ", fromTabBar)



    const [text, setText] = useState('');


    const sndLoanRqust = async () => {

        let amount = (Number(text))


        if (amount < 100 || amount > 500) {
            Snackbar.show({
                text: 'Please select loan from given limit',
                duration: Snackbar.LENGTH_SHORT,
                marginBottom: 10,
                backgroundColor: 'red'
            })
            return
        } else {
            console.log("Here from tabbar is now ", fromTabBar)

            console.log("Here go forward")
            navigation.navigate("LoanReviewScreen", { LoanAmount:amount , fromTabBar: fromTabBar })
        }

    };

    const handleButtonPress = (value) => {
        if (text.length < 4) {
            setText(text + value)
        }

    };

    const marginTop = DeviceInfo.hasNotch() ? 25 : 32

    return (
        <SafeAreaView style={{ height:height,backgroundColor:'#fff' }}>
            <View style={globalStyles.container}>
                <View style={{ flexDirection: 'row', width: width, paddingHorizontal: 12 / 393 * width, justifyContent: 'space-between', alignItems: 'center', }}>
                    <TouchableOpacity style={{ alignSelf: 'flex-start', }} onPress={() => navigation.goBack()} >
                        <Image
                            source={require('../assets/blackArrowicon-3x.png')}
                            style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain', }}
                        />
                        {/* error */}
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 12 / 852 * height, color: "#000", fontWeight: '500', }}>
                            Account Details
                        </Text>
                    </View >

                    <View style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain' }}>

                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20 / 852 * height, alignItems: 'center' }}>

                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

                    <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>

                    <View style={{
                        height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5 / 852 * height, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                    }}>
                        <Image source={require('../assets/dollarBag.png')}
                            style={{
                                height: 20 / 852 * height, width: 20 / 852 * height, alignSelf: 'center', justifyContent: 'center'
                            }}
                        />
                    </View>

                    <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3 / 852 * height, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>
                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>
                </View>
                <Text style={globalStyles.uperMainText}>
                    Loan Request
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 60 / 852 * height }}>
                    <Text style={{ fontSize: 40 / 852 * height, fontWeight: '500', color: '#a7a7a7', }}>
                        $
                    </Text>
                    <View style={{ height: 90 / 852 * height,  alignItems: 'center', }}>
                        <Text
                            style={{ fontSize: 80 / 852 * height, fontWeight: '500', color: text === "" ? 'grey' : '#000', }}
                        >
                            {text === "" ? "0.00" : text}

                        </Text>
                    </View>
                </View>
                <Text style={{ fontSize: 14 / 852 * height, fontWeight: '500', color: '#2468E8',marginTop:6/852*height }}>
                    Min Of $100 To Max Of $500
                </Text>


                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 20/852*height,}}>
                    <View style={{ flexDirection: 'row', gap: 30/ 852 * height }}>
                        <TouchableOpacity onPress={() => handleButtonPress("1")}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1.5/ 852 * height, borderColor: '#00000010',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 32 / 852 * height, color: "#000" }}>1</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleButtonPress("2")}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1.5/ 852 * height, borderColor: '#00000010',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 32 / 852 * height, color: "#000" }} >2</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleButtonPress("3")}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1.5/ 852 * height, borderColor: '#00000010',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 32 / 852 * height, color: "#000" }} >3</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row', gap: 30 / 852 * height, marginTop: 30 / 852 * height }}>
                        <TouchableOpacity onPress={() => handleButtonPress("4")}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1.5/ 852 * height, borderColor: '#00000010',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 32 / 852 * height, color: "#000" }}>4</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleButtonPress("5")}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1.5, borderColor: '#00000010',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 32 / 852 * height, color: "#000" }} >5</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleButtonPress("6")}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1.5, borderColor: '#00000010',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 32 / 852 * height, color: "#000" }} >6</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row', gap: 30 / 852 * height, marginTop: 30 / 852 * height }}>
                        <TouchableOpacity onPress={() => handleButtonPress("7")}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1.5, borderColor: '#00000010',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 32 / 852 * height, color: "#000" }}>7</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleButtonPress("8")}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1.5/ 852 * height, borderColor: '#00000010',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 32 / 852 * height, color: "#000" }}>8</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleButtonPress("9")}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1.5/ 852 * height, borderColor: '#00000010',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 32 / 852 * height, color: "#000" }} >9</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row', gap: 30 / 852 * height, marginTop: 30 / 852 * height, }}>
                        <TouchableOpacity
                            onPress={() => {
                                if (text.includes(".")) {
                                }
                                else {
                                    setText(text + ".")
                                }
                            }}
                        >
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height,
                                alignItems: 'center', justifyContent: 'center', borderWidth: 1.5/ 852 * height, borderColor: '#00000010',
                            }}>
                                <Text style={{ fontSize: 32/852*height, color: "#000",  textAlign: 'center' }} >.</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleButtonPress("0")} >
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1.5/ 852 * height, borderColor: '#00000010',
                                alignItems: 'center', justifyContent: 'center',
                            }}>
                                <Text style={{ fontSize: 32 / 852 * height, color: "#000" }}>0</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setText(text.slice(0, -1))}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1.5/ 852 * height, borderColor: '#00000010',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Image
                                    source={require('../assets/Unionicon-3x.png')}
                                    style={{ height: 32 / 852 * height, width: 32 / 852 * height, resizeMode: 'contain' }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style ={[globalStyles.shadowStyle,{marginTop:marginTop}]}
                    onPress={sndLoanRqust} >
                    <View style={globalStyles.arrowBotton}>
                        <Image source={require('../assets/arrow.png')}
                            style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: 'contain' }}
                        />
                    </View>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );

}

export default LoanRequest;