import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Dimensions,TouchableWithoutFeedback,Keyboard, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { globalStyles } from "../components/GlobalStyles";


const blackArrowicon = require("../assets/American_Finance_App_image/blackArrowicon-3x.png");
const Crose = require("../assets/American_Finance_App_image/DeleteIcon-3x.png")
const TickIcone = require("../assets/American_Finance_App_image/TickIcone-3x.png")

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


const Manage_account = (props) => {

    const [FirstName, setFirstName] = useState("");
    const [MiddleName, setMiddleName] = useState("");
    const [LastName, setLastName] = useState("");

    return (
        <SafeAreaView style = {globalStyles.container}  >

            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} style={{ height: height, width: width }}>
                <TouchableWithoutFeedback style={globalStyles.container} onPress={Keyboard.dismiss}>
                <View style = {globalStyles.container}>
                    <View style={{ flexDirection: 'row', width: width, paddingHorizontal: 12 / 393 * width, justifyContent: 'space-between', alignItems: 'center', }}>
                        <TouchableOpacity style={{ alignSelf: 'flex-start', }} onPress={() => props.navigation.goBack()} >
                            <Image
                                source={require('../assets/blackArrowicon-3x.png')}
                                style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain', }}
                            />
                            {/* error */}
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 12 / 852 * height, color: "#000", fontWeight: '500', }}>
                                Manage Account
                            </Text>
                        </View >

                        <View style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain' }}>

                        </View>
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 47 / 852 * height }}>

                        <TextInput style={globalStyles.inputStyle}
                            placeholder="First Name" Value={FirstName} onChangeText={setFirstName} />

                    </View>

                    <View style={{ alignItems: 'center', marginTop: 20 / 852 * height }}>
                        <TextInput style={globalStyles.inputStyle}
                            placeholder="Middle Name" Value={MiddleName} onChangeText={setMiddleName} />
                    </View>


                    <View style={{ alignItems: 'center', marginTop: 20 / 852 * height }}>
                        <TextInput style={globalStyles.inputStyle}
                            placeholder="Last Name" Value={LastName} onChangeText={setLastName} />
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 22 / 852 * height, marginLeft: 25 / 852 * height, alignItems: "center",width:width }}>
                        <TouchableOpacity style={{
                            height: 41 / 852 * height, justifyContent: "center", alignItems: "center", gap: 10 / 852 * height,
                            paddingLeft: 10 / 852 * height, paddingRight: 10 / 852 * height, flexDirection: 'row', borderRadius: 52 / 852 * height,
                            borderWidth: 1, borderColor: '#ececec'
                        }}>
                            <Text style={{ color: 'black', fontSize: 14 / 852 * height, fontWeight: "500" }}>
                                Dona Elquita
                            </Text>
                            < Image style={{ height: 16 / 852 * height, width: 16 / 393 * width, }} source={Crose} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginRight: 28 / 852 * height }}>
                            <Text style={{ color: '#2468E8', fontSize: 14 / 852 * height, fontWeight: "500" }}>
                                Add Alias
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: 'flex-end', marginTop: 31 / 852 * height, }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#2468E8', margin: 25 / 852 * height, justifyContent: "center",
                            alignItems: "center", height: 64 / 852 * height, width: 64 / 852 * height, borderRadius: 32 / 852 * height,
                        }}>
                            < Image style={{ height: 15 / 852 * height, width: 21 / 852 * height, }} source={TickIcone} />
                        </TouchableOpacity>
                    </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>





    );
}


export default Manage_account;