import React, { useState } from "react";
import {
    View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, TextInput,
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, ScrollView
} from 'react-native';
import Snackbar from "react-native-snackbar";
import { globalStyles } from "./GlobalStyles";
import axios from "axios";
// import {AsyncStorage} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Apis from "../Api/apipath";
import { SafeAreaView } from "react-native";
import DeviceInfo from "react-native-device-info";


const { height, width } = Dimensions.get('window');

const afimageHeight = 106 / 852 * height;
const afimageWidth = 106 / 393 * width;
const appleIconHeight = 58 / 852 * height;
const appleIconWidth = 58 / 852 * height;


import afimage from '../assets/AFImage.png';
import slectedIcon from '../assets/slectedIcon.png';
import unselectedIcon from "../assets/unslectedIcon.png";
import arrowBotton from '../assets/arrow.png';
import appleIcon from '../assets/appleIcon.png';
import googleIcon from '../assets/googleIcon.png';
import facebookIcon from '../assets/facebookIcon.png';


const SignInScreen = (props) => {

    const paddingBottom = DeviceInfo.hasNotch() ? 60 : 0
    const bottomTextTopMargin = !DeviceInfo.hasNotch() ? 75 / 852 * height : 20;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const loginUser = async () => {

        let d = JSON.stringify({ email: email, password: password })
        // console.log(d)
        // return
        // const url ="https://c165-116-90-112-8.ngrok-free.app/api/users/login";
        const result = await fetch(Apis.ApiLogin, {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: d
        })

        if (result) {

            let json = await result.json();
            console.log("data is ", json)
            if (json.status === true) {
                // Settings.get("user")
                // Settings.set({user: json.data})
                await AsyncStorage.setItem(
                    "USER",
                    JSON.stringify(json.data)
                )
                console.log("Stored user data in local is ", json.data)

                props.navigation.navigate("DashboardBase")
                // if (json.data.user.bank_connected === false) {
                //     if (json.data.user.liabilities_added === true) {
                //         if (json.data.active_payday_loan === null) {
                //             props.navigation.replace("ActivePaydayLoans")
                //         } else {
                //             props.navigation.replace("DashboardBase")

                //         }
                //     } else {
                //         props.navigation.replace("ActivePaydayLoans")

                //     }
                // }
                // else {
                //     props.navigation.replace("BankAccountMainScreen")
                // }

            }
            else {
                Snackbar.show({
                    text: "Invalid Email or Password",
                    duration: Snackbar.LENGTH_SHORT,
                    backgroundColor: 'red',
                    marginBottom: 10
                })
            }
            // Snackbar.show({
            //     text: json.message,
            //     duration: Snackbar.LENGTH_SHORT,
            //     backgroundColor: 'red',
            //     marginBottom: 10
            // })

        }

    };

    const [showSlectedIcon, setShowSlectedIcon] = useState(false)

    const onpressHandel = () => {

        setShowSlectedIcon(!showSlectedIcon)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1, flexDirection: 'column', }}>
                <TouchableWithoutFeedback style={globalStyles.container} onPress={Keyboard.dismiss}>
                    {/* <ScrollView> */}
                    <View style={[globalStyles.container, { backgroundColor: '#fff' }]} >


                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={afimage}
                                style={[globalStyles.logoImageStyle, { marginTop: 20 / 852 * height }]}
                            />
                            <Text style={styles.mainText}>
                                Sign In
                            </Text>
                            <View style={{ flexDirection: 'row', marginTop: 20 / 852 * height, color: "#000" }}>
                                <Text style={{ fontSize: 14 / 852 * height, fontWeight: '500', }}>New Member? </Text>

                                <TouchableOpacity >
                                    <Text style={{ fontSize: 14 / 852 * height, fontWeight: '700', color: '#2468E8' }}>
                                         Apply Now
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <TextInput placeholder="Email Address"
                                style={[globalStyles.inputStyle, { marginTop: 30 / 852 * height, marginBottom: 30 / 852 * height }]}
                                value={email}

                                onChangeText={(text) => setEmail(text)}
                                autoFocus={true}
                                keyboardType="email-address"

                            />

                            <TextInput placeholder="Password"
                                style={globalStyles.inputStyle}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                secureTextEntry={true}

                            />

                        </View>


                        <View style={{ flexDirection: 'row', marginTop: 20 / 852 * height, gap: 125 / 852 * height, marginLeft: -10 / 852 * height, alignItems: "center" }}>

                            <TouchableOpacity>

                                <Text style={{ fontSize: 14 / 852 * height, fontWeight: '500', textDecorationLine: 'underline' }}>
                                    Forget Password
                                </Text>

                            </TouchableOpacity>
                            <View>

                                <TouchableOpacity onPress={onpressHandel}>

                                    <View style={{ flexDirection: 'row', gap: 5 / 393 * width, alignItems: 'center' }}>
                                        <Image source={showSlectedIcon ? slectedIcon : unselectedIcon}
                                            style={{ height: 26 / 853 * height, width: 26 / 393 * width, resizeMode: 'contain' }}
                                        />
                                        <Text style={{ fontSize: 13 / 852 * height, fontWeight: '500', }}>
                                            Remember Me
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ width: width }}>

                            <TouchableOpacity style={[globalStyles.shadowStyle,{ alignSelf: 'flex-end', marginTop: 33 / 852 * height, marginRight: 17 / 852 * height }]}
                                onPress={loginUser}
                            >
                                <View style={globalStyles.arrowBotton}>
                                    <Image source={arrowBotton}
                                        style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: 'contain' }}
                                    />
                                </View>
                            </TouchableOpacity>

                        </View>

                        <Text style={{ fontSize: 14 / 852 * height, fontWeight: '500', marginTop: 50 / 852 * height }}>
                            Or continue with....
                        </Text>

                        <View style={{ flexDirection: 'row', marginTop: 18 / 852 * height, gap: 15 / 852 * height, alignItems: 'center' }}>
                            <TouchableOpacity style={{ borderRadius: 24 / 852 * height }} >
                                <Image source={appleIcon}
                                    style={{ height: appleIconHeight, width: appleIconWidth, resizeMode: 'contain' }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderRadius: 24 / 852 * height }}>
                                <Image source={googleIcon}
                                    style={{ height: appleIconHeight, width: appleIconWidth, resizeMode: 'contain' }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderRadius: 24 / 852 * height }}>
                                <Image source={facebookIcon}
                                    style={{ height: appleIconHeight, width: appleIconWidth, resizeMode: 'contain' }}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ alignItems: 'center', flexDirection: 'column', marginTop: bottomTextTopMargin, paddingBottom: paddingBottom }}>
                            <Text style={{ fontSize: 14 / 852 * height, fontWeight: '500', }}>
                                By creating an account, you agree to the
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                                <TouchableOpacity>
                                    <Text style={{ fontSize: 14 / 852 * height, fontWeight: '700', color: '#2468E8' }}>
                                        Terms & Conditions
                                    </Text>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 14 / 852 * height, fontWeight: '500', }}> and </Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 14 / 852 * height, fontWeight: '500', color: '#2468E8' }}>
                                        Privacy Policy
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <Text style={{ fontSize: 14 / 852 * height, fontWeight: '500', }}>
                                of America Finance
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                {/* </ScrollView> */}
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default SignInScreen;


const styles = StyleSheet.create({
    mainText: {
        //   height:100,
        fontSize: 36 / 852 * height,
        fontWeight: '500',
        marginTop: 15 / 852 * height,
        color: "#000"

    }
})