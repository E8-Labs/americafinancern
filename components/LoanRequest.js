import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, Image, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "./GlobalStyles";
import Snackbar from "react-native-snackbar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Apis from "../Api/apipath";

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
            navigation.navigate("LoanReviewScreen", { LoanAmount: amount, fromTabBar: fromTabBar })

        }

    }
    return (
        <View style={globalStyles.container}>

            <View style={{ flexDirection: 'row', marginTop: 36 / 852 * height, width: width, marginLeft: 20 / 852 * height }}>
                <TouchableOpacity style={{ alignItems: 'flex-start', }} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../assets/blackArrowicon-3x.png')}
                        style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain', }}
                    />
                </TouchableOpacity>
                <View style={{ alignItems: 'center', width: width, marginLeft: -30 }}>
                    <Text style={{ fontSize: 12 / 852 * height, color: "#000", fontWeight: '500', }}>
                        Account Security
                    </Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 15 / 852 * height, alignItems: 'center' }}>

                <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>

                <View style={{
                    height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                }}>
                    <Image source={require('../assets/dollarBag.png')}
                        style={{
                            height: 20 / 852 * height, width: 20 / 852 * height, alignSelf: 'center', justifyContent: 'center'
                        }}
                    />
                </View>

                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>
                <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>
            </View>
            <Text style={globalStyles.uperMainText}>
                Loan Request
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 65 / 852 * height }}>
                <Text style={{ fontSize: 40 / 852 * height, fontWeight: '500', color: '#a7a7a7', }}>
                    $
                </Text>
                <View style={{ height: 100 / 852 * height, width: 200 / 393 * width }}>
                    <Text
                        style={{ fontSize: 80 / 852 * height, fontWeight: '500', color: text === "" ? 'grey' : '#000', }}
                    >
                        {text === "" ? "0.00" : text}
                    </Text>
                </View>
            </View>
            <Text style={{ fontSize: 14 / 852 * height, fontWeight: '500', color: '#2468E8' }}>
                Min Of $100 To Max Of $500
            </Text>


            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 30, flex: 1.5 }}>
                <View style={{ flexDirection: 'row', gap: 40 / 393 * width }}>
                    <TouchableOpacity onPress={() => setText(text + 1)}>
                        <View style={{
                            height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1, borderColor: '#00000010',
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Text >1</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setText(text + 2)}>
                        <View style={{
                            height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1, borderColor: '#00000010',
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Text >2</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setText(text + 3)}>
                        <View style={{
                            height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1, borderColor: '#00000010',
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Text >3</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', gap: 40 / 393 * width, marginTop: 30 / 852 * height }}>
                    <TouchableOpacity onPress={() => setText(text + 4)}>
                        <View style={{
                            height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1, borderColor: '#00000010',
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Text >4</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setText(text + 5)}>
                        <View style={{
                            height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1, borderColor: '#00000010',
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Text >5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setText(text + 6)}>
                        <View style={{
                            height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1, borderColor: '#00000010',
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Text >6</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', gap: 40 / 393 * width, marginTop: 30 / 852 * height }}>
                    <TouchableOpacity onPress={() => setText(text + 7)}>
                        <View style={{
                            height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1, borderColor: '#00000010',
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Text >7</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setText(text + 8)}>
                        <View style={{
                            height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1, borderColor: '#00000010',
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Text >8</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setText(text + 9)}>
                        <View style={{
                            height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1, borderColor: '#00000010',
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Text >9</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', gap: 40 / 393 * width, marginTop: 30 / 852 * height }}>
                    <View style={{
                        height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height,
                        alignItems: 'center', justifyContent: 'center'
                    }}></View>
                    <TouchableOpacity
                        onPress={() => setText(text + 0)} >
                        <View style={{
                            height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1, borderColor: '#00000010',
                            alignItems: 'center', justifyContent: 'center',
                        }}>
                            <Text >0</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setText(text.slice(0, -1))}>
                        <View style={{
                            height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 35 / 852 * height, borderWidth: 1, borderColor: '#00000010',
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Text>Del</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity
                onPress={sndLoanRqust} >
                <View style={globalStyles.arrowBotton}>
                    <Image source={require('../assets/arrow.png')}
                        style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: 'contain' }}
                    />
                </View>
            </TouchableOpacity>

        </View>
    );

}

export default LoanRequest;