import React from "react";
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { globalStyles } from "./GlobalStyles";

const { height, width } = Dimensions.get('window');


const sheild = require('../assets/sheildIcon.png');
const faceIcon = require('../assets/face.png');



const FaceIdScreen = ({ navigation, route }) => {

    const user = route.params.user;

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

            <View style={{ flexDirection: 'row', marginTop: 15/852 *height, alignItems: 'center', }}>

                <View style={{ width: 2/852 *height, height: 2/852 *height, borderRadius: 2, backgroundColor: "#000" }}></View>

                <View style={{ width: 6/852 *height, height: 6/852 *height, borderRadius: 3, backgroundColor: "#000", marginRight: 9/852 *height, marginLeft: 6/852 *height }}></View>

                <View style={{
                    height: 35 / 852 * height, width: 35 / 853 * height, borderRadius: 17.5/852*height, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                }}>
                    <Image source={sheild}
                        style={{
                            height: 19 / 852 * height, width: 19 / 393 * width, resizeMode: 'contain', alignSelf: 'center', justifyContent: 'center'
                        }}
                    />
                </View>

                <View style={{ width: 6/852 *height, height: 6/852 *height, borderRadius: 3, backgroundColor: "#000", marginRight: 9/852 *height, marginLeft: 6/852 *height }}></View>
                <View style={{ width: 2/852 *height, height: 2/852 *height, borderRadius: 2, backgroundColor: "#000" }}></View>


            </View>
            <Text style={globalStyles.uperMainText}>
                Secure with FaceID
            </Text>

            <Image source={faceIcon}
                style={{ height: 104 / 853 * height, width: 104 / 393 * width, resizeMode: 'contain', marginTop: 60/852 *height, }}
            />
            <TouchableOpacity style={[globalStyles.capsuleButton, { marginTop: 109/852 *height }]}
                onPress={() => navigation.navigate('PasswordScreen', {
                    user: user,
                })}
            >
                <Text style={{ color: '#fff', fontSize: 12/852 *height, fontWeight: '500', }}>
                    Enable FaceID
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginTop: 30/852*height }}
                onPress={() => navigation.navigate('PasswordScreen', {
                    user: user,
                })}

            >
                <Text style={{ fontSize: 18/852 *height, fontWeight: '500', color:'#000'}}>
                    Skip
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default FaceIdScreen;

