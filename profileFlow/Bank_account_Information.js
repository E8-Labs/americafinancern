import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput,TouchableWithoutFeedback, Dimensions, KeyboardAvoidingView, ScrollView, SafeAreaView } from "react-native";
// import { TouchableWithoutFeedback } from "react-native-gesture-handler";


const blackArrowicon = require("../assets/American_Finance_App_image/blackArrowicon-3x.png");
const Bankicon = require("../assets/American_Finance_App_image/BankIcon-3x.png")
const TicketIcon = require("../assets/American_Finance_App_image/TickIcone-3x.png")

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


const Bank_account_information = () => {

    const [AccountNumber, setAccountNumber] = useState("");

    const [ConfirmAccountNumber, setConfirmAccountNumber] = useState("");

    const [BankName, setBankName] = useState("");

    const [RoutingNumber, setRoutingNumber] = useState("");


    return (
        <SafeAreaView >
            <TouchableWithoutFeedback>
        <View style={{height: height, width:width }}>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
            <View style={{ margin: 17 / 852 * height, marginTop: 32 / 852 * height, marginBottom: 0, }}>
                <TouchableOpacity style={{ height: 30 / 852 * height, width: 30 / 852 * height,  justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 24 / 852 * height, width: 20 / 393 * width, resizeMode: "contain" }} source={blackArrowicon} />
                </TouchableOpacity>
                <Text style={{ marginTop: -20 / 852 * height, alignSelf: "center", alignItems: "center", justifyContent: "Center", color: "#000", fontSize: 12 / 852 * height, fontWeight: "500" }}>
                Add New Account
                </Text>
            </View>

                <View style={{ alignItems: 'center', marginTop:23 / 852 * height }}>
                    <TextInput  style={{ paddingLeft:13/852*height,fontSize: 18 / 852 * height, backgroundColor: "#ececec", borderRadius: 13 / 852 * height, width: 360 / 393 * width,}}
                        placeholder="Account number" Value={AccountNumber} onChangeText={setAccountNumber}/>
                </View>

                <View style={{ alignItems: 'center', marginTop: 23 / 852 * height }}>
                    <TextInput  style={{ paddingLeft:13/852*height,fontSize: 18 / 852 * height, backgroundColor: "#ececec",borderRadius: 13 / 852 * height,width: 360 / 393 * width,}}
                    placeholder="Confirm account number"Value={ConfirmAccountNumber} onChangeText={setConfirmAccountNumber}/>
                </View>

                <View style={{ alignItems: 'center', marginTop: 23 / 852 * height }}>
                    <TextInput style={{paddingLeft:13/852*height,fontSize: 18 / 852 * height,backgroundColor: "#ececec",borderRadius: 13 / 852 * height,width: 360 / 393 * width,}}
                        placeholder="Bank name" Value={BankName} onChangeText={setBankName}/>
                </View>

                <View style={{ alignItems: 'center', marginTop: 23 / 852 * height }}>
                    <TextInput style={{paddingLeft:13/852*height,fontSize: 18 / 852 * height,backgroundColor: "#ececec",borderRadius: 13 / 852 * height,width: 360 / 393 * width }}
                        placeholder="Routing number" Value={RoutingNumber} onChangeText={setRoutingNumber}/>
                </View>

                <View style={{flexDirection:"row",justifyContent: 'flex-end',marginTop: 31 / 852 * height, }}>
                    <TouchableOpacity style={{backgroundColor: '#2468E8',margin: 25 / 852 * height,justifyContent:"center",alignItems:"center" ,height: 64 / 852 * height,width: 64 /852*height,borderRadius: 32 / 852 * height,}}>
                        < Image style={{ height: 15 / 852 * height, width: 21 /852*height, }} source={TicketIcon} />
                    </TouchableOpacity>
                </View>



            </KeyboardAvoidingView>

        </View>
        </TouchableWithoutFeedback>
        </SafeAreaView>

    );

}

export default Bank_account_information;