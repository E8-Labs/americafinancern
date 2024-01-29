import React, { useState } from "react";
import {
    View, Image, Text, Dimensions, TouchableOpacity, TextInput, Alert,
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, SafeAreaView
} from 'react-native';
import { globalStyles } from "./GlobalStyles";

import Snackbar from "react-native-snackbar";

const { height, width } = Dimensions.get('window');
const messageIcon = require('../assets/message.png');
const arrowBotton = require('../assets/arrow.png');

const EmailDetails = ({ navigation, route }) => {


    const [email, setEmail] = useState('')

    const user = route.params.user;
    user.email = email;
    console.log(user)

    const onPressHandle = () => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validEmail = emailRegex.test(email);

        if (!validEmail) {
            Snackbar.show({
                text: 'Invalid Email',
                backgroundColor: 'red',
                marginBottom: 10,
                duration: Snackbar.LENGTH_LONG,
            })
        } else {
            navigation.navigate('VerifyEmailScreen', {
                user: user,
            })
        }
    };

    return (
        <SafeAreaView style={{ flex:1,backgroundColor:'#fff' }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1, flexDirection: 'column', }}>
                <TouchableWithoutFeedback style={globalStyles.container} onPress={Keyboard.dismiss}>

                    <View style={[globalStyles.container, { backgroundColor: '#fff' }]}>
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
                        <View style={{ flexDirection: 'row', marginTop: 16 / 852 * height, alignItems: 'center' }}>

                            <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2 / 852 * height, backgroundColor: "#000" }}></View>

                            <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3 / 852 * height, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>

                            <View style={{
                                height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                            }}>
                                <Image source={messageIcon}
                                    style={{
                                        height: 20 / 852 * height, width: 20 / 393 * width, resizeMode: 'contain', alignSelf: 'center', justifyContent: 'center'
                                    }}
                                />
                            </View>

                            <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3 / 852 * height, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>
                            <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2 / 852 * height, backgroundColor: "#000" }}></View>

                        </View>
                        <Text style={globalStyles.uperMainText}>
                            Email Address
                        </Text>

                        <View style={{ marginTop: 92 / 852 * height }}>
                            <TextInput placeholder="Email Address" style={globalStyles.inputStyle}
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                autoFocus={true}
                            />
                            {/* { error ? <Text style = {{fontSize:10,color:"red",fontWeight:'400'}}>Please Enter valid Email</Text>:null} */}
                        </View>
                        <View style={{ width: width, marginTop: 58 / 852 * height }}>
                            <TouchableOpacity style={[globalStyles.shadowStyle,{ alignSelf: 'flex-end', marginTop: 20 / 852 * height, marginEnd: 12 / 852 * height }]}
                                onPress={onPressHandle} >

                                <View style={globalStyles.arrowBotton}>
                                    <Image source={arrowBotton}
                                        style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: 'contain' }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )

}

export default EmailDetails;