import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { globalStyles } from "./GlobalStyles";
import PlaidLink from "react-native-plaid-link-sdk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native";
import Apis from "../Api/apipath";

const { height, width } = Dimensions.get('window')

const IdentityConnectionFailed = (props) =>{

    const logoutUser = async () => {

        try {
            await AsyncStorage.clear()
        } catch (e) {
            console.log('user could not logged in')
        }

        props.navigation.replace('SplashScreen1')
        console.log('Done.')

    };

return (
    <SafeAreaView style={{ flex: 1 }}>
            <View style={globalStyles.container}>
            <TouchableOpacity style={{ alignSelf: 'flex-start', marginLeft: 12}} onPress={() => {
                    logoutUser()
                }} >
                            <Text>Logout</Text>
                            
                </TouchableOpacity>
            <Image source={require("../assets/bankIcon.png")}
                        style={{ height: 146 / 852 * height, width: 146 / 393 * width, marginTop: 140 / 852 * height, resizeMode: 'contain',}}
                    />

                    <Text style={{ fontSize: 18 / 852 * height, fontWeight: '500', marginTop: 50 / 852 * height, paddingHorizontal: 12, textAlign: 'center' }}>
                        We are unable to verify the identity automatically. Contact the admin using the button below to manually verify.

                    </Text>
                    
                    <TouchableOpacity style={[globalStyles.capsuleButton, { flexDirection: 'row', backgroundColor: '#000', marginTop: 40 / 852 * height }]}>
                            <Image source={require('../assets/buttonImage.png')}
                                style={{ height: 31 / 852 * height, width: 31 / 393 * width, resizeMode: 'contain' }}
                            />
                            <Text style={{ color: '#fff', fontSize: 14/852*height, fontWeight: '500' }}>
                                Contact Admin
                            </Text>
                        </TouchableOpacity>

            </View>
    </SafeAreaView>
)}

export default IdentityConnectionFailed;