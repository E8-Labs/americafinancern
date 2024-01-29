import React from "react";
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from "react-native";
import { globalStyles } from "./GlobalStyles";

const { height, width } = Dimensions.get('window');


const sheild = require('../assets/sheildIcon.png');
const faceIcon = require('../assets/face.png');



const FaceIdScreen = ({ navigation, route }) => {

    const user = route.params.user;

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
                <View style={{ flexDirection: 'row', marginTop: 15 / 852 * height, alignItems: 'center', }}>

                    <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2, backgroundColor: "#000" }}></View>

                    <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>

                    <View style={{
                        height: 35 / 852 * height, width: 35 / 853 * height, borderRadius: 17.5 / 852 * height, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                    }}>
                        <Image source={sheild}
                            style={{
                                height: 19 / 852 * height, width: 19 / 393 * width, resizeMode: 'contain', alignSelf: 'center', justifyContent: 'center'
                            }}
                        />
                    </View>

                    <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>
                    <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2, backgroundColor: "#000" }}></View>


                </View>
                <Text style={globalStyles.uperMainText}>
                    Secure with FaceID
                </Text>

                <Image source={faceIcon}
                    style={{ height: 104 / 853 * height, width: 104 / 393 * width, resizeMode: 'contain', marginTop: 60 / 852 * height, }}
                />
                <TouchableOpacity style={[globalStyles.capsuleButton, { marginTop: 109 / 852 * height }]}
                    onPress={() => navigation.navigate('PasswordScreen', {
                        user: user,
                    })}
                >
                    <Text style={{ color: '#fff', fontSize: 16 / 852 * height, fontWeight: '500', }}>
                        Enable FaceID
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 30 / 852 * height }}
                    onPress={() => navigation.navigate('PasswordScreen', {
                        user: user,
                    })}

                >
                    <Text style={{ fontSize: 18 / 852 * height, fontWeight: '500', color: '#000' }}>
                        Skip
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default FaceIdScreen;

