import React, { useState } from "react";
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { globalStyles } from "./GlobalStyles";
import Snackbar from "react-native-snackbar";

const { height, width } = Dimensions.get('window');


const callIcon = require('../assets/call.png');
const flagIcon = require('../assets/flag.png')
const arrowBotton = require('../assets/arrow.png');




const PhoneNumberScreen = ({ navigation, route }) => {

    const nextButtonAction = () => {
        if (!phoneNumber) {
            Snackbar.show({
                text: "Please Enter Phone Number",
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
                marginBottom: 10
            })
        } else {
            const user = route.params.user;
            user.phone = phoneNumber;
            console.log(user);
            navigation.navigate('VerifyNumberScreen', {
                user: user,
            });
        }
    };


    const [phoneNumber, setPhoneNumber] = useState('')


    return (
        <View style={globalStyles.container}>
            <View style={{ flexDirection: 'row', marginTop: 36 / 852 * height, width: width }}>
                <TouchableOpacity style={{ alignItems: 'flex-start', paddingLeft: 20 / 852 * height, }} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../assets/blackArrowicon-3x.png')}
                        style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: width, marginLeft: -30 }}>
                    <Text style={{ fontSize: 12 / 852 * height, color: "#000", fontWeight: '500', }}>
                        Account Details
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 / 852 * height, alignItems: 'center' }}>

                <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2 / 852 * height, backgroundColor: "#000" }}></View>

                <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3 / 852 * height, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>

                <View style={{
                    height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5/852*height, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                }}>
                    <Image source={callIcon}
                        style={{
                            height: 19 / 852 * height, width: 19 / 393 * width, resizeMode: 'contain', alignSelf: 'center', justifyContent: 'center'
                        }}
                    />
                </View>

                <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3 / 852 * height, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>
                <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2 / 852 * height, backgroundColor: "#000" }}></View>

            </View>
            <Text style={{fontSize:26/852 *height,fontWeight:'600',color:'#000',marginTop:12/852 *height}}>
                Phone Number
            </Text>
            <View style={{ marginTop: 108/852 *height, flexDirection: 'row', }}>
                <Image source={flagIcon}
                    style={{ height: 33 / 853 * height, width: 24 / 393 * width, resizeMode: 'contain', margin: 5/852*height }}
                />
                <TouchableOpacity style={{ alignSelf: 'center', marginRight: 6 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontWeight: '500' }}>(+1)</Text>
                        <Image source={require('../assets/downArrow.png')}
                            style={{ height: 24 / 853 * height, width: 24 / 393 * width, margin: 5/852*height, marginLeft: 0, resizeMode: 'contain' }}

                        />
                    </View>
                </TouchableOpacity>

                <TextInput placeholder="Phone Number"
                    style={{
                        backgroundColor: '#ececec', borderRadius: 10/852*height, padding: 8/852*height, width: 250 / 393 * width
                    }}
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                    autoFocus={true}
                    keyboardType="numeric"
                />

            </View>

            <Text style={[styles.bottomText, { marginTop: 30/852 *height }]}>
                By continuing, you agree to America
            </Text>

            <View style={{ flexDirection: 'row', }}>
                <Text style={styles.bottomText}>
                    Finance’s
                </Text>
                <TouchableOpacity>
                    <Text style={[styles.bottomText, { color: '#2468E8', fontWeight: '500' }]}>
                        SMS Authorization
                    </Text>
                </TouchableOpacity>
                <Text style={styles.bottomText}>
                    and
                </Text>
                <TouchableOpacity>
                    <Text style={[styles.bottomText, { color: '#2468E8', fontWeight: '500' }]}>
                        SMS Policy.
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 30 / 852 * height, width: width }}>
                <TouchableOpacity style={{ margin: 20/852*height, alignItems: 'flex-end' }}
                    onPress={nextButtonAction}
                >
                    <View style={globalStyles.arrowBotton}>
                        <Image source={arrowBotton}
                            style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: 'contain' }}

                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default PhoneNumberScreen;

const styles = StyleSheet.create({
    bottomText: {
        fontSize: 14/852 *height,
        fontWeight: '500',
    }
})