import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView,SafeAreaView, StyleSheet, FlatList, KeyboardAvoidingView, Platform, TurboModuleRegistry, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";

const blackArrowicon = require("../assets/American_Finance_App_image/blackArrowicon-3x.png");
const ThreeDoteIcon = require("../assets/American_Finance_App_image/ThreeDoteIcon-3x.png");
const TickIcone = require("../assets/American_Finance_App_image/TickSmartIcone-3x.png");
const AddIcon = require("../assets/American_Finance_App_image/AddIcon-3x.png")
const blackcheckicon = require("../assets/American_Finance_App_image/blackcheckicon-3x.png");


const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const Status = [
    {
        id: 0,
        name: "Noah M",
        AtmNumber: "**** **** **** 9020",
        bankName: "Wells Fargo Bank",
        delBtn: "Delete",
        imagePathA: TickIcone,
        imagePathB: blackcheckicon,


    },
    {
        id: 1,
        name: "Noah N",
        AtmNumber: "**** **** **** 9021",
        bankName: "Wells Fargo Bank",
        delBtn: "Delete",
        imagePathA: TickIcone,
        imagePathB: blackcheckicon,

    },
    {
        id: 2,
        name: "Noah O",
        AtmNumber: "**** **** **** 9022",
        bankName: "Wells Fargo Bank",
        delBtn: "Delete",
        imagePathA: TickIcone,
        imagePathB: blackcheckicon,


    },
    {
        id: 3,
        name: "Noah P",
        AtmNumber: "**** **** **** 9023",
        bankName: "Wells Fargo Bank",
        delBtn: "Delete",
        imagePathA: TickIcone,
        imagePathB: blackcheckicon,


    },
    {
        id: 4,
        name: "Noah Q",
        AtmNumber: "**** **** **** 9024",
        bankName: "Wells Fargo Bank",
        delBtn: "Delete",
        imagePathA: TickIcone,
        imagePathB: blackcheckicon,


    },
    {
        id: 5,
        name: "Noah R",
        AtmNumber: "**** **** **** 9025",
        bankName: "Wells Fargo Bank",
        delBtn: "Delete",
        imagePathA: TickIcone,
        imagePathB: blackcheckicon,

    },
    {

    }


]



const BankInformatin = () => {

    const [selectedOption, setSelectedOption] = useState("")


    return (
        <SafeAreaView style={{ height: height, width: width }}>
        <View style={{ height: height, width: width }}>
            <View style={{ marginLeft: 17 / 852 * height,  }}>
                <TouchableOpacity style={{ height: 30 / 852 * height, width: 30 / 852 * height, justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 24 / 852 * height, width: 20 / 393 * width, resizeMode: "contain" }} source={blackArrowicon} />
                </TouchableOpacity>
                <Text style={{ marginTop: -20 / 852 * height, alignSelf: "center", alignItems: "center", color: "#000", fontSize: 12 / 852 * height, fontWeight: "500" }}>
                Bank Accounts Infrmation
                </Text>
            </View>

            <FlatList scrollEnabled={true} style={{ marginTop: 15 / 852 * height }}
                data={Status}
                renderItem={({ item, index }) =>
                    index < Status.length - 1 ? (
                        ATMDetails(item, index)
                    ) :
                        (
                            <View style={{ height: 240 / 852 * height, marginTop: 37 / 852 * height }}>
                                <TouchableOpacity style={{ height: 93 / 852 * height, width: 360 / 393 * width, borderWidth: 1, borderRadius: 31 / 852 * height, alignSelf: "center", borderColor: "#ececec", justifyContent: "center", alignContent: "center" }}>
                                    <View style={{ borderColor: "#000", flexDirection: "row", alignItems: "center", }}>
                                        <Text style={{ fontSize: 14 / 852 * height, color: "#000", flexDirection: "row", flex: 1, marginLeft: 17 / 852 * height, fontFamily: "PoppinsMedium", }}>Add new account</Text>

                                        <View style={{ alignSelf: 'flex-end', borderRadius: 30 / 852 * height, marginRight: 25 / 852 * height, }} >
                                            <View style={{ height: 59 / 852 * height, width: 59 / 852 * height, backgroundColor: '#2468E8', borderRadius: 35 / 852 * height, alignItems: 'center', justifyContent: 'center', }}>
                                                <Image source={AddIcon}
                                                    style={{ height: 21.5 / 852 * height, width: 20.5 / 852 * height }}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={[globalStyles.capsuleButton, { marginTop: 25 / 852 * height, alignSelf: "center", width: 164 / 393 * width }]}>
                                    <Text style={{ color: '#fff', fontSize: 18/852*height, fontWeight: '500', textAlign: 'center' }}>
                                        Continue
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        )
                }
            />





        </View>
        </SafeAreaView>
    );

    function ATMDetails(item, index) {
        return <View style={{ height: 106 / 852 * height, width: 361 / 393 * width, alignSelf: "center", borderRadius: 20 / 852 * height, borderWidth: 0.5, borderColor: "#ececec", marginTop: 25 }}>
            <View style={{ flexDirection: "row", marginLeft: 22 / 852 * height, gap: 13 / 852 * height, marginTop: 10 / 852 * height }}>
                <Text style={{ fontSize: 16 / 852 * height, color: "#000" }}>
                    {item.name}
                </Text>

                {index === 0 ? <View style={{ height: 28 / 852 * height, alignSelf: "center", borderRadius: 5 / 852 * height, backgroundColor: "#f4f7fe", fontWeight: "500", alignItems: "center",padding: 5 / 852 * height, borderRadius: 5 / 852 * height }}>
                    <Text style={{ color: "#2468E8", fontSize: 15 / 852 * height, fontWeight: "500" }}>Default</Text>
                </View> : ""}

            </View>
            <View style={{ flexDirection: "row", justifyContent: 'flex-end', marginRight: 16 / 852 * height, marginTop: 8 / 852 * height }}>
                <TouchableOpacity style={[styles.imageViewSt, { backgroundColor: selectedOption === item.name ? "#2468E8" : "#f2f2f2" }]} onPress={() => { setSelectedOption(item.name); } }>
                    <Image source={selectedOption === item.name ? item.imagePathA : item.imagePathB} style={styles.imageSt} />
                </TouchableOpacity>
            </View>
            <Text style={{ color: "#000", fontSize: 18 / 852 * height, fontWeight: "500", marginLeft: 22 / 852 * height }}>
                {item.AtmNumber}
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: "#666666", fontSize: 14 / 852 * height, fontWeight: "500", marginLeft: 22 / 852 * height, }}>
                    {item.bankName}
                </Text>
                <TouchableOpacity>
                    <Text style={{ color: "#FF124B", fontSize: 14 / 852 * height, fontWeight: "500", marginRight: 22 / 852 * height, marginTop: 2 / 852 * height }}>
                        {item.delBtn}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>;
    }
}
export default BankInformatin;
const styles = StyleSheet.create({

    imageViewSt: {
        height: 34 / 852 * height,
        width: 34 / 852 * height, 
        alignSelf: "center", 
        borderRadius: 17 / 852 * height, 
        marginTop: -28 / 852 * height,
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#2468E8", 
        fontWeight: "500",
    },

    imageSt: {
        height: 21 / 852 * height, 
        width: 21 / 852 * height, 
        resizeMode: "center" 

    },

}) 


