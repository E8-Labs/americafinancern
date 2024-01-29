import React from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "./GlobalStyles";
import { SafeAreaView } from "react-native";

const { height, width } = Dimensions.get('window');

const SelectBank = (props) => {
    

    const nextBtnAction = () =>{
        props.navigation.navigate("BankAccountDetails")
    }

    return (
            <View style={{ height: 100 }}>
                <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../assets/buttonImage.png')}
                        style={{ height: 17 / 852 * height, width: 17 / 393 * width, resizeMode: 'contain', borderRadius: 9, }}
                    />
                    <Text style={{ fontSize: 10, fontWeight: '500' }}>
                        Plaid
                    </Text>
                </View>

                <Text style={{ fontSize: 15, fontWeight: '600', marginTop: 40 / 852 * height, marginLeft: 10 }}>
                    Select your bank
                </Text>

                <TextInput placeholder="Search"
                    style={[globalStyles.inputStyle, { marginLeft: 10 }]}
                />
                <View style={{ flexDirection: 'row', margin: 10, marginTop: 20, gap: 15 }}>
                    <View style={{
                        height: 72 / 852 * height, width: 172 / 393 * width, borderWidth: .5,
                        borderColor: '#a7a7a7', borderRadius: 10, gap: 7, padding: 5
                    }}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row',gap:8 }}>
                                <Image source={require('../assets/bankLogo1.png')}
                                    style={{ height: 35 / 852 * height, width: 35 / 393 * width, borderRadius: 10 }}
                                />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 10, fontWeight: '500' }}>
                                        Goldman
                                    </Text>
                                    <Text style={{ fontSize: 10, fontWeight: '500' }}>
                                        Sachs
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        height: 72 / 852 * height, width: 172 / 393 * width, borderWidth: .5,
                        borderColor: '#a7a7a7', borderRadius: 10, gap: 7, padding: 5
                    }}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row',gap:8 }}>
                                <Image source={require('../assets/bankLogo1.png')}
                                    style={{ height: 35 / 852 * height, width: 35 / 393 * width, borderRadius: 10 }}
                                />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 10, fontWeight: '500' }}>
                                        Goldman
                                    </Text>
                                    <Text style={{ fontSize: 10, fontWeight: '500' }}>
                                        Sachs
                                    </Text>
                                </View>
                            </View>

                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{ flexDirection: 'row', margin: 8, gap: 15 }}>
                    <View style={{
                        flexDirection: 'row', height: 72 / 852 * height, width: 172 / 393 * width, borderWidth: .5,
                        borderColor: '#a7a7a7', borderRadius: 10, gap: 7, padding: 5
                    }}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row',gap:8 }}>
                                <Image source={require('../assets/bankLogo1.png')}
                                    style={{ height: 35 / 852 * height, width: 35 / 393 * width, borderRadius: 10 }}
                                />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 10, fontWeight: '500' }}>
                                        Goldman
                                    </Text>
                                    <Text style={{ fontSize: 10, fontWeight: '500' }}>
                                        Sachs
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flexDirection: 'row', height: 72 / 852 * height, width: 172 / 393 * width, borderWidth: .5,
                        borderColor: '#a7a7a7', borderRadius: 10, padding: 5
                    }}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row' ,gap:8}}>
                                <Image source={require('../assets/bankLogo1.png')}
                                    style={{ height: 35 / 852 * height, width: 35 / 393 * width, borderRadius: 10 }}
                                />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 10, fontWeight: '500' }}>
                                        Goldman
                                    </Text>
                                    <Text style={{ fontSize: 10, fontWeight: '500' }}>
                                        Sachs
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ width: width, alignItems: 'center', marginTop: 200 / 852 * height }}>
                    <TouchableOpacity style={[globalStyles.capsuleButton, { backgroundColor: '#000', }]}
                        onPress={nextBtnAction}
                    >
                        <Text style={{ fontSize: 10, fontWeight: '500', color: '#fff' }}>
                            Conect
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
}

export default SelectBank;