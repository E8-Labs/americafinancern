import React, { useState } from "react";
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from "./GlobalStyles";
import Apis from "../Api/apipath";
import { SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Snackbar from "react-native-snackbar";



const { height, width } = Dimensions.get('window');
const passwordIcon = require('../assets/passwordIcon.png');
const arrowBotton = require('../assets/arrow.png');

const PasswordScreen = ({ navigation, route }) => {

    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)


    const nextButtonAction = async () => {
        let user = route.params.user;

        user.password = password;
        //call register api
        console.log("User data is in Pass sc")
        console.log(user)



        if (!password) {
            Snackbar.show({
                text: "Please Enter Password",
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
                marginBottom: 10
            })
        } else {

            const result = await fetch(Apis.ApiRegister, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),

            })

            if (result) {
                let json = await result.json();
                console.log(json)
                if (json.status === true) {
                    //save user data
                    await AsyncStorage.setItem(
                        "USER",
                        JSON.stringify(json.data)
                    )
                    navigation.navigate('CongratesScreen')
                }
                else{
                    Snackbar.show({
                        text: json.message,
                        duration: Snackbar.LENGTH_LONG,
                        backgroundColor: 'red',
                        marginBottom: 10
                    })
                }
            }
        }

    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableWithoutFeedback style={globalStyles.container} onPress={Keyboard.dismiss}>
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

                    <View style={{ flexDirection: 'row', marginTop: 15 / 852 * height, alignItems: 'center' }}>

                        <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2, backgroundColor: "#000" }}></View>

                        <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>

                        <View style={{
                            height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5 / 852 * height, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                        }}>
                            <Image source={passwordIcon}
                                style={{
                                    height: 20 / 852 * height, width: 20 / 852 * height, alignSelf: 'center', justifyContent: 'center'
                                }}
                            />
                        </View>

                        <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>
                        <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2, backgroundColor: "#000" }}></View>

                    </View>
                    <Text style={globalStyles.uperMainText}>
                        Set Password
                    </Text>

                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Password " style={styles.inputStyle}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={!showPassword}
                            autoFocus={true}
                        />
                        <TouchableOpacity style={{ alignSelf: 'center', marginRight: 20 / 852 * height }}
                            onPress={() => {
                                setShowPassword(!showPassword)
                            }}

                        >
                            <Text style={{ color: '#2468E8', fontSize: 12 / 852 * height, fontWeight: '500' }}>
                                Show
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ width: width, marginTop: 78 / 852 * height }}>
                        <TouchableOpacity style={[globalStyles.shadowStyle,{ alignSelf: 'flex-end', marginTop: 20 / 852 * height, marginEnd: 12 / 393 * width }]}
                            onPress={nextButtonAction}
                        >
                            <View style={globalStyles.arrowBotton}>
                                <Image source={arrowBotton}
                                    style={{ height: 24 / 853 * height, width: 24 / 383 * width, resizeMode: "contain" }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )

}

export default PasswordScreen;

const styles = StyleSheet.create({
    inputStyle: {
        flex: 1,
        padding: 8 / 852 * height,
    },
    inputContainer: {
        marginTop: 70 / 852 * height,

        flexDirection: 'row',
        backgroundColor: '#ececec',
        width: 360 / 393 * width,
        borderRadius: 13 / 852 * height,
        height: 55 / 852 * height,

    }
})