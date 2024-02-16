import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput,SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, FlatList, KeyboardAvoidingView, Platform, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";


const blackArrowicon = require("../assets/American_Finance_App_image/blackArrowicon-3x.png");
const ThreeDoteIcon = require("../assets/American_Finance_App_image/ThreeDoteIcon-3x.png");
const Documentimage = require("../assets/American_Finance_App_image/Documentimage-3x.png");
const AddIcon = require("../assets/American_Finance_App_image/AddIcon-3x.png")
const Arrowicon = require("../assets/American_Finance_App_image/whiteArrowicon-3x.png");


const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const Status = [
    {
        Id: 1,
        name: "Noah Nega",
        Occupation:"Occupation",
        yearsStartToEnd:"2022",
        ImageDocment: Documentimage,
        ImageName:"Paystub0220231903.pdf",
        ImageDote: ThreeDoteIcon,
        AmountAndMonth:"$1,500 / Mo",
        PayDay:'Next pay day',
        NextDate:"Dec  10, 2024",

    },
    {
        Id: 3,
        name: "Noah Nega",
        Occupation:"Occupation",
        yearsStartToEnd:"2021- 2023",
        ImageDocment: Documentimage,
        ImageName:"Paystub0220231903.pdf",
        ImageDote: ThreeDoteIcon,
        AmountAndMonth:"$1,500 / Mo",
        PayDay:'Next pay day',
        NextDate:"Dec  10, 2024",

    },
    {
        Id: 4,
        name: "Noah Nega",
        Occupation:"Occupation",
        yearsStartToEnd:"2022- 2024",
        ImageDocment: Documentimage,
        ImageName:"Paystub0220231903.pdf",
        ImageDote: ThreeDoteIcon,
        AmountAndMonth:"$1,500 / Mo",
        PayDay:'Next pay day',
        NextDate:"Jan  10, 2024",
    },
    {
        Id: 5,
        name: "Noah Nega",
        Occupation:"Occupation",
        yearsStartToEnd:"2023- 2025",
        ImageDocment: Documentimage,
        ImageName:"Paystub0220231903.pdf",
        ImageDote: ThreeDoteIcon,
        AmountAndMonth:"$1,500 / Mo",
        PayDay:'Next pay day',
        NextDate:"May  10, 2024",
    },
    {

    }

]


const IncomeDetails = () => {

    return (
        <SafeAreaView style={{ height: height, width: width }}>
            <View style={{ marginLeft: 17 / 852 * height }}>
                <TouchableOpacity style={{ height: 30 / 852 * height, width: 30 / 852 * height, justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 24 / 852 * height, width: 20 / 393 * width, resizeMode: "contain" }} source={blackArrowicon} />
                </TouchableOpacity>
                <Text style={{ marginTop: -20 / 852 * height, alignSelf: "center", alignItems: "center",color: "#000", fontSize: 12 / 852 * height, fontWeight: "500" }}>
                Income Details
                </Text>
            </View>
            <FlatList scrollEnabled={true} style={{ marginTop: 15 / 852 * height }}
                data={Status}
                renderItem={({ item, index }) =>
                    index < Status.length - 1 ? (
                        IncomeComponent(item)
                    ) :
                        (
                            <View style={{ height: 240 / 852 * height, marginTop: 37 / 852 * height }}>
                                <TouchableOpacity style={{ height: 93 / 852 * height, width: 354 / 393 * width, borderWidth: 1, borderRadius: 31 / 852 * height, alignSelf: "center", borderColor: "#ececec", justifyContent: "center", alignContent: "center" }}>
                                    <View style={{ borderColor: "#000", flexDirection: "row", alignItems: "center", }}>
                                        <Text style={{ fontSize: 14 / 852 * height, color: "#000", flexDirection: "row", flex: 1, marginLeft: 17 / 852 * height, fontFamily: "PoppinsMedium", }}>Add source of income</Text>

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



        </SafeAreaView>
    );
}
export default IncomeDetails;

function IncomeComponent(item) {
    return <View style={{ height: 248 / 852 * height, width: 361 / 393 * width, borderRadius: 31 / 852 * height, marginTop: 37 / 852 * height, alignSelf: "center", backgroundColor: "#2468e8", borderColor: "#ececec", }}>
        <View style={{ justifyContent: "space-between", height: 187 / 852 * height, width: 361 / 393 * width, borderWidth: 1, borderRadius: 31 / 852 * height, backgroundColor: "#fff", borderColor: "#ececec", }}>
            <View>
                <View style={{ flexDirection: "row", margin: 17 / 852 * height, marginBottom: 0, justifyContent: "space-between" }}>
                    <Text style={{ fontFamily: "PoppinsSemiBold", color: "#2468e8", fontSize: 18 / 852 * height, }}>{item.name}</Text>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity style={{ alignSelf: "center", borderRadius: 30 / 852 * height, }}>
                            <View style={{ height: 34 / 852 * height, width: 34 / 852 * height, backgroundColor: "#f2f2f2", justifyContent: "center", alignItems: "center", borderRadius: 17 / 852 * height, marginRight: 5 / 852 * height }}>
                                <Image source={item.ImageDote}
                                    style={{ height: 4 / 852 * height, width: 20 / 393 * width, resizeMode: "contain" }} />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ flexDirection: "row", marginTop: -5 / 852 * height }}>
                    <Text style={{ marginLeft: 18 / 852 * height, color: "#2468e8", fontSize: 12 / 852 * height, fontFamily: "PoppinsMedium", }}>Employer Name </Text>
                    <Text style={{ fontSize: 12 / 852 * height, fontFamily: "PoppinsMedium", }}>| Occupation </Text>
                </View>

                <Text style={{ marginLeft: 18 / 852 * height, fontSize: 12 / 852 * height,marginTop:4/852*height ,fontFamily: "PoppinsMedium", color: "#717171", }}>2020- 2022</Text>

            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 18 / 852 * height, marginRight: 22 / 852 * height }}>
                <TouchableOpacity style={{ height: 38 / 852 * height, width: 123 / 393 * width, marginBottom: 8 / 852 * height, }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Image source={item.ImageDocment}
                            style={{ height: 40 / 852 * height, width: 38 / 393 * width, }} />
                        <Text numberOfLines={1} style={{ width: 92 / 393 * width, fontSize: 14 / 852 * height, color: "#000" }}>Paystub0220231903.pdf</Text>
                    </View>
                </TouchableOpacity>


                <Text style={{ fontSize: 14 / 852 * height, marginTop: 10 / 852 * height }}> $1,500 / Mo</Text>


            </View>



        </View>

        <View style={{ flexDirection: "row", marginTop: 14 / 852 * height, justifyContent: 'space-between', marginLeft: 17 / 852 * height, marginRight: 17 / 852 * height }}>
            <Text style={{ color: "#fff", fontSize: 14 / 852 * height, fontFamily: "PoppinsMedium", }}>Next pay day</Text>
            <Text style={{ color: "#fff", fontSize: 18 / 852 * height, fontFamily: "PoppinsMedium", }}>Dec  10, 2024</Text>
        </View>
    </View>;
}
