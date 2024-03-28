import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Dimensions, KeyboardAvoidingView, ScrollView, SafeAreaView } from "react-native";
import { globalStyles } from "../components/GlobalStyles";
import Apis from "../Api/apipath";
import AsyncStorage from "@react-native-async-storage/async-storage";
123456789// import { TouchableWithoutFeedback } from "react-native-gesture-handler";


const blackArrowicon = require("../assets/American_Finance_App_image/blackArrowicon-3x.png");
const Bankicon = require("../assets/American_Finance_App_image/BankIcon-3x.png")
const TicketIcon = require("../assets/American_Finance_App_image/TickIcone-3x.png")

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const selectedImage = require('../assets/slectedIcon.png');
const unSelectedImage = require('../assets/unslectedIcon.png')


const Bank_account_information = (props) => {

    const [AccountNumber, setAccountNumber] = useState("");
    const [acountType, setAcountType] = useState("");
    const [BankName, setBankName] = useState("");
    const [RoutingNumber, setRoutingNumber] = useState("");
    const [selectedIcon, setSlectedIcon] = useState(false)


    const addBank = async () => {

        const postData = {
            bank_name: BankName,
            routing_number: RoutingNumber,
            account_number: AccountNumber,
            account_type: acountType,
            is_default: true
        }

        try {
            const data = await AsyncStorage.getItem("USER")
            // console.log("Getting user " ,data)
            if (data) {

                let user = JSON.parse(data)
                console.log("data is ", user)


                const result = await fetch(Apis.ApiAddPaymentSource, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + user.token,
                    },
                    body: JSON.stringify({
                        "bank_name": BankName,
                        "routing_number": RoutingNumber,
                        "account_number": AccountNumber,
                        "account_type": acountType,
                        "is_default": selectedIcon
                    })
                })
                if (result) {
                

                    let json = await result.json();
                    console.log("result is ", json)
                    if (json.status === true) {
                        
                        console.log(json.data)
                        console.log("account data  is ", json.data)
                        props.navigation.navigate("BankAccountDetails")
                    }

                }
            }
        } catch (error) {
            console.log('error finding ', error)
        }

    }



    return (
        <SafeAreaView >
            <TouchableWithoutFeedback>
                <View style={{ height: height, width: width }}>
                    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
                        <View style={{ margin: 17 / 852 * height, marginTop: 32 / 852 * height, marginBottom: 0, }}>
                            <TouchableOpacity style={{ height: 30 / 852 * height, width: 30 / 852 * height, justifyContent: "center", alignItems: "center" }}>
                                <Image style={{ height: 24 / 852 * height, width: 20 / 393 * width, resizeMode: "contain" }} source={blackArrowicon} />
                            </TouchableOpacity>
                            <Text style={{ marginTop: -20 / 852 * height, alignSelf: "center", alignItems: "center", color: "#000", fontSize: 12 / 852 * height, fontWeight: "500" }}>
                                Add New Account
                            </Text>
                        </View>

                        <View style={{ alignItems: 'center', marginTop: 23 / 852 * height }}>
                            <TextInput style={globalStyles.inputStyle}
                                placeholder="Account number" Value={AccountNumber} onChangeText={(text) => setAccountNumber(text)}
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={{ alignItems: 'center', marginTop: 23 / 852 * height }}>
                            <TextInput style={globalStyles.inputStyle}
                                placeholder="Account type" Value={acountType} onChangeText={(text) => setAcountType(text)} />
                        </View>

                        <View style={{ alignItems: 'center', marginTop: 23 / 852 * height }}>
                            <TextInput style={globalStyles.inputStyle}
                                placeholder="Bank name" Value={BankName} onChangeText={(text) => setBankName(text)} />
                        </View>

                        <View style={{ alignItems: 'center', marginTop: 23 / 852 * height }}>
                            <TextInput style={globalStyles.inputStyle}
                                placeholder="Routing number" Value={RoutingNumber} onChangeText={(text) => setRoutingNumber(text)} keyboardType="numeric" />
                        </View>
                        <View style={{ flexDirection: 'row', width: width, alignItems: 'center', paddingLeft: 20, marginTop: 20, gap: 10 }}>

                            <TouchableOpacity onPress={() => setSlectedIcon(!selectedIcon)} style={{}}>
                                <Image source={selectedIcon ? selectedImage : unSelectedImage}
                                    style={{ height: 34 / 852 * height, width: 34 / 393 * width, resizeMode: 'contain', }}
                                />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 17, fontWeight: '500' }}>Save my prefered bank for withdrawals</Text>

                        </View>

                        <View style={{ alignSelf: 'center', flexDirection: "row", justifyContent: 'flex-end', marginTop: 31 / 852 * height, }}>
                            <TouchableOpacity style={{ backgroundColor: '#2468E8', margin: 25 / 852 * height, justifyContent: "center", alignItems: "center", height: 64 / 852 * height, width: 64 / 852 * height, borderRadius: 32 / 852 * height, }}
                                onPress={addBank}
                            >
                                < Image style={{ height: 15 / 852 * height, width: 21 / 852 * height, }} source={TicketIcon} />
                            </TouchableOpacity>
                        </View>



                    </KeyboardAvoidingView>

                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>

    );

}

export default Bank_account_information;