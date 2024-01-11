import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, KeyboardAvoidingView, Platform, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";


const ThreeDoteIcon = require("../assets/American_Finance_App_image/ThreeDoteIcon-3x.png");
const Documentimage = require("../assets/American_Finance_App_image/Documentimage-3x.png");
const AddIcon = require("../assets/American_Finance_App_image/AddIcon-3x.png")
const Arrowicon = require("../assets/American_Finance_App_image/whiteArrowicon-3x.png");
const CloseIcon = require("../assets/American_Finance_App_image/blackArrowicon-3x.png");
const Dollaricon = require("../assets/American_Finance_App_image/DollarIcon-3x.png");



const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const largecircleIconHeight = 70 / 852 * height;
const largecircleIconWidth = 70 / 412 * height;


const FinancialDetailsDebts = () => {

    const [value, onChangeText] = React.useState('Useless Placeholder');




    return (
        <View>
            <View style={{ margin: 17 / 852 * height, marginTop: 32 / 852 * height, marginBottom: 0, }}>
                <TouchableOpacity style={{ height: 30 / 852 * height, width: 30 / 852 * height, borderRadius: 15 / 852 * height, backgroundColor: "#ececec", justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 10 / 852 * height, width: 10 / 393 * width, resizeMode: "contain" }} source={CloseIcon} />
                </TouchableOpacity>
                <Text style={{ marginTop: -20 / 852 * height, alignSelf: "center", alignItems: "center", justifyContent: "Center", color: "#000", fontSize: 12 / 852 * height, fontWeight: "500" }}>
                    Application Details
                </Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center", }}>

                <View style={{ flexDirection: 'row', marginTop: 37 / 852 * height, alignItems: 'center', }}>

                    <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2 / 852 * height, backgroundColor: "#000" }}></View>

                    <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3 / 852 * height, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>

                    <View style={{
                        height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5 / 852 * height, borderWidth: 1, alignSelf: "center", justifyContent: "center", alignItems: "center"
                    }}>
                        <Image source={Dollaricon}
                            style={{
                                height: 20/852*height, width: 20/852*height,resizeMode:"contain",
                            }}
                        />
                    </View>

                    <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3 / 852 * height, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>
                    <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2 / 852 * height, backgroundColor: "#000" }}></View>



                </View>
            </View>

            <View style={{ flexDirection: "column", alignItems: "center" }}>

                <View style={{ alignItems: "center",  }}>
                    <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 24/852*height,color:"#000", alignSelf: "center",fontWeight:"700" }} >Outstanding debt</Text>
                </View>

                <Text style={{ fontSize: 12/852*height, color: '#717171', margin: 10 / 852 * height, marginBottom: 0, fontWeight: "500", }}>
                    (Please ensure all information entered on your application
                </Text>
                <Text style={{ fontSize: 12/852*height, color: '#717171', fontWeight: "500" }}>
                    is accurate and verifiable, America Finance will verify the
                </Text>
                <Text style={{ fontSize: 12/852*height, color: '#717171', fontWeight: "500" }}>
                    accuracy of all information submitted.)
                </Text>
            </View>

            <View style={{ justifyContent: "space-between", height: 136 / 852 * height, width: 373 / 393 * width, borderWidth: 1, borderRadius: 31/852*height, backgroundColor: "#fff", borderColor: "#ececec", alignSelf: "center", marginTop: 26 / 852 * height }}>
                    <View  >
                        <View style={{ flexDirection: "row", margin: 17 / 852 * height, marginBottom: 0, justifyContent: "space-between", }}>
                            <Text style={{ fontWeight:"500", color: "#2468e8", fontSize: 18 / 852 * height, marginBottom: 0 }}>Noah Nega</Text>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <TouchableOpacity style={{ alignSelf: "center", borderRadius: 30/852*height, }} onPress={openModal1}>
                                    <View style={{ height: 34 / 852 * height, width: 34 / 852 * height, backgroundColor: "#f2f2f2", opacity: 0.5, justifyContent: "center", alignItems: "center", borderRadius: 17/852*height,  }}>
                                        <Image source={ThreeDoteIcon}
                                            style={{ height: 4 / 852 * height, width: 20 / 393 * width, resizeMode: "contain" }}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>


                        <Text style={{ marginLeft: 17/852*height, marginRight: 17/852*height, color: "#1f0505", fontSize: 14 / 852 * height, fontWeight:"500", marginTop: -8 / 852 * height }}>Account Number</Text>


                        <View style={{ flexDirection: "row", marginLeft: 17/852*height,marginTop:5/852*height, marginRight: 17/852*height, justifyContent: "space-between", }}>
                            <Text style={{ fontSize: 22 / 852 * height, fontWeight:"500", color: "#1f0505", }}>$8,257</Text>
                            <Text style={{ color: "#717171", fontSize: 14 / 852 * height, fontWeight:"500", }}>Balance: $247</Text>
                        </View>

                        <Text style={{ alignSelf: "flex-end", marginLeft: 17/852*height, marginRight: 17/852*height, color: "#717171", fontSize: 14 / 852 * height, fontWeight:"500", }}>Due on 02/08/2023</Text>
                    </View>


                </View>
            <TouchableOpacity style={{ height: 93 / 852 * height, width: 354 / 393 * width, borderWidth: 1, borderRadius: 31/852*height, alignSelf: "center", marginTop: 18 / 852 * height, borderColor: "#ececec", justifyContent: "center", alignContent: "center" }}>
                <View style={{ borderColor: "#1f0505", flexDirection: "row", alignItems: "center", }}>
                    <Text style={{ fontSize: 14/852*height, color: "#1f0505", flexDirection: "row", flex: 1, marginLeft: 27/852*height, fontWeight:"500", }}>Add another</Text>

                    <View style={{ alignSelf: 'flex-end', borderRadius: 31/852*height, marginRight: 25 / 852 * height, }} >
                        <View style={{ height: 59 / 852 * height, width: 59 / 852 * height, backgroundColor: '#2468E8', borderRadius: 31/852*height, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={AddIcon}
                                style={{ height: 21.5 / 852 * height, width: 20.5 / 852 * height }}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 117 / 852 * height, borderRadius: 30/852*height, marginRight: 25 / 852 * height, }} >
                <View style={globalStyles.arrowBotton}>
                    <Image source={Arrowicon}
                        style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: "center" }}
                    />
                </View>
            </TouchableOpacity>

        </View>
    );
}
export default FinancialDetailsDebts;