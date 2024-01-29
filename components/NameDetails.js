import React, { useState } from "react";
import { View, Image, Text, Dimensions, TouchableOpacity, TextInput,
KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard
} from 'react-native';
import { globalStyles } from "./GlobalStyles";
import Snackbar from "react-native-snackbar";
import { SafeAreaView } from "react-native";
import DeviceInfo from "react-native-device-info";

const { height, width } = Dimensions.get('window');
const accountIcon = require('../assets/accountIcon.png');
const arrowBotton = require('../assets/arrow.png');




const NameDetails = (props) => {

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');

    const paddingBottom = DeviceInfo.hasNotch() ? 60 : 0
    const bottomTextTopMargin = !DeviceInfo.hasNotch() ? 120 / 852 * height : 75 / 852 * height;


    const onPressHandle = () => {
        if (!firstName, !middleName, !lastName) {
            Snackbar.show({
                text: "Please fill fll boxes",
                fontSize: 12,
                fontWeight: '500',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
                marginBottom: 10
            })
        } else {
            props.navigation.navigate('EmailDetails', {
                user: {
                    firstname: firstName,
                    middlename: middleName,
                    lastname: lastName,
                }
            })
        };
    }

    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:'#fff' }}>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1, flexDirection: 'column', }}>
            <TouchableWithoutFeedback style={globalStyles.container} onPress={Keyboard.dismiss}>

                <View style={[globalStyles.container, { backgroundColor: '#fff' }]}>
                    <View style={{ flexDirection: 'row', width: width, paddingHorizontal: 12 / 393 * width, justifyContent: 'space-between', alignItems: 'center', }}>
                        <TouchableOpacity style={{ alignSelf: 'flex-start', }}onPress={()=>props.navigation.goBack()} >
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
                    <View style={{ flexDirection: 'row', marginTop: 25 / 852 * height, alignItems: 'center', }}>

                        <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2 / 852 * height, backgroundColor: "#000" }}></View>

                        <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3 / 852 * height, backgroundColor: "#000", marginRight: 9 / 393 * width, marginLeft: 6 / 393 * width }}></View>

                        <View style={{
                            height: 35 / 852 * height, borderRadius: 17.5 / 852 * height, borderWidth: 1, alignSelf: "center", width: 35 / 852 * height
                        }}>
                            <Image source={accountIcon}
                                style={{
                                    height: 19 / 852 * height, width: 19 / 393 * width, margin: 4 / 852 * height, resizeMode: 'contain', alignSelf: 'center', justifyContent: 'center'
                                }}
                            />
                        </View>

                        <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3 / 852 * height, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                        <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2 / 852 * height, backgroundColor: "#000" }}></View>


                    </View>
                    <Text style={globalStyles.uperMainText}>
                        Name
                    </Text>

                    <View style={{ marginTop: 93 / 852 * height, alignItems: 'center' }}>
                        <TextInput placeholder="First name" style={[globalStyles.inputStyle,]}
                            autoFocus={true}
                            value={firstName}
                            onChangeText={(text) => setFirstName(text)}
                        />
                        <TextInput placeholder="Middle name (if applicable)" style={[globalStyles.inputStyle, { marginTop: 20 / 852 * height }]}
                            onChangeText={(text) => setMiddleName(text)}
                            value={middleName}
                        />
                        <TextInput placeholder="Last name" style={[globalStyles.inputStyle, { marginTop: 20 / 852 * height }]}
                            value={lastName}
                            onChangeText={(text) => setLastName(text)}
                        />
                    </View>

                    <View style={{ width: width, marginTop: 150 / 852 * height }}>
                        <TouchableOpacity style={[globalStyles.shadowStyle,{ alignSelf: 'flex-end', marginRight: 17 / 852 * height }]}
                            onPress={onPressHandle}
                        >
                            <View style={globalStyles.arrowBotton}>
                                <Image source={arrowBotton}
                                    style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: 'contain' }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignItems: 'center', flexDirection: 'column', marginTop: bottomTextTopMargin, paddingBottom: paddingBottom }}>
                        <Text style={globalStyles.bottomText}>
                            By creating an account, you agree to the
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                            <TouchableOpacity>
                                <Text style={[globalStyles.bottomText, { color: '#2468E8', fontWeight: '700' }]}>
                                    Terms & Conditions
                                </Text>
                            </TouchableOpacity>
                            <Text style={globalStyles.bottomText}> and </Text>
                            <TouchableOpacity>
                                <Text style={[globalStyles.bottomText, { color: '#2468E8', fontWeight: '700' }]}>
                                    Privacy Policy
                                </Text>
                            </TouchableOpacity>

                        </View>
                        <Text style={globalStyles.bottomText}>
                            of America Finance
                        </Text>
                    </View>
                </View>

            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </SafeAreaView>
    )

}

export default NameDetails;
