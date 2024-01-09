import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, KeyboardAvoidingView, Platform, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";


const ThreeDoteIcon = require("../assets/American_Finance_App_image/ThreeDoteIcon-3x.png");
const Documentimage = require("../assets/American_Finance_App_image/Documentimage-3x.png");
const AddIcon = require("../assets/American_Finance_App_image/AddIcon-3x.png")
const Arrowicon = require("../assets/American_Finance_App_image/whiteArrowicon-3x.png");



const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const largecircleIconHeight = 70 / 852 * height;
const largecircleIconWidth = 70 / 412 * height;


const FinancialDetailsDebts = () => {

    const [value, onChangeText] = React.useState('Useless Placeholder');




    return (
        <View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text style={globalStyles.textSt}>Income Details</Text>
                <View style={{ alignItems: "center", marginTop: 20 / 852 * height, }}>
                    <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 24, alignSelf: "center", }} >Outstanding debt</Text>
                </View>

                <Text style={{ fontSize: 12, color: '#717171', margin: 10 / 852 * height, marginBottom: 0, fontFamily: "PoppinsMedium" }}>
                    (Please ensure all information entered on your application
                </Text>
                <Text style={{ fontSize: 12, color: '#717171', fontFamily: "PoppinsMedium" }}>
                    is accurate and verifiable, America Finance will verify the
                </Text>
                <Text style={{ fontSize: 12, color: '#717171', fontFamily: "PoppinsMedium" }}>
                    accuracy of all information submitted.)
                </Text>
            </View>

            <View style={{ height: 176 / 852 * height, width: 361 / 393 * width, borderRadius: 31, marginTop: 25 / 852 * height, alignSelf: "center", backgroundColor: "#2468e8", }} >
                <View style={{ justifyContent:"space-between",height: 124 / 852 * height, width: 361 / 393 * width, borderWidth: 1, borderRadius: 31, backgroundColor: "#fff", borderColor: "d0d0d0", }}>
                    <View >
                        <View style={{ flexDirection: "row", margin: 10 / 852 * height, marginBottom: 0, justifyContent: "space-between",marginLeft: 17, marginRight: 17 }}>
                            <Text style={{ fontFamily: "PoppinsSemiBold", color: "#2468e8", fontSize: 18, }}>Noah Nega</Text>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <TouchableOpacity style={{ alignSelf: "center", borderRadius: 30, }} >
                                    <View style={{ height: 34, width: 34, backgroundColor: "#f2f2f2", justifyContent: "center", alignItems: "center", borderRadius: 17, marginRight: 5 }}>
                                        <Image source={ThreeDoteIcon}
                                            style={{ height: 4 / 852 * height, width: 20 / 393 * width, resizeMode: "contain" }}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={{flexDirection:"row",marginLeft: 17, marginRight: 17,justifyContent:"space-between",}}>
                        <Text style={{ color: "#1f0505", fontSize: 14, fontFamily: "PoppinsMedium",marginTop:-6/852*height }}>Balance</Text>
                        <Text style={{ color: "#2468e8", fontSize: 14, fontFamily: "PoppinsMedium", }}>Wells Fargo Bank</Text>
                        </View>

                        <Text style={{marginLeft: 17, marginRight: 17, fontSize: 22/852*height, fontFamily: "PoppinsMedium", color: "#1f0505",marginTop:-6/852*height}}>$2,057</Text>

                    </View>


                </View>

                <View style={{ flexDirection: "row", marginTop: 10 / 852 * height, justifyContent: 'space-between', marginLeft: 17, marginRight: 17 }}>
                    <Text style={{ color: "#fff", fontSize: 14, fontFamily: "PoppinsMedium", }}>Mo. Payment : $247</Text>
                    <Text style={{ color: "#fff", fontSize: 14, fontFamily: "PoppinsMedium", }}>Due on 02.08.2023 </Text>
                </View>
            </View>
            <TouchableOpacity style={{ height: 93 / 852 * height, width: 354 / 393 * width, borderWidth: 1, borderRadius: 31, alignSelf: "center", marginTop: 30 / 852 * height, borderColor: "d0d0d0", justifyContent: "center", alignContent: "center" }}>
                <View style={{ borderColor: "#1f0505", flexDirection: "row", alignItems: "center", }}>
                    <Text style={{ fontSize: 14, color: "#1f0505", flexDirection: "row", flex: 1, marginLeft: 17, fontFamily: "PoppinsMedium", }}>Add another</Text>

                    <View style={{ alignSelf: 'flex-end', borderRadius: 30, marginRight: 25 / 852 * height, }} >
                        <View style={{ height: 59 / 852 * height, width: 59 / 852 * height, backgroundColor: '#2468E8', borderRadius: 35, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={AddIcon}
                                style={{ height: 21.5 / 852 * height, width: 20.5 / 852 * height }}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 110/852*height, marginBottom: 20 / 852 * height, borderRadius: 30, marginRight: 25 / 852 * height, }} >
                <View style={globalStyles.arrowBotton}>
                    <Image source={Arrowicon}
                        style={{ height:24/852*height, width: 24/393*width, resizeMode: "center" }}
                    />
                </View>
            </TouchableOpacity>

        </View>
    );
}
export default FinancialDetailsDebts;