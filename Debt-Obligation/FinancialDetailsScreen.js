import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";
import OutstandingDebtScreen from "./OutstandingDebtScreen";
import CreditCardDebpt from "./CreditCardDebpt";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


const DollarIcon = require("../assets/American_Finance_App_image/DollarIcon-3x.png");
const blackcheckicon = require("../assets/American_Finance_App_image/blackcheckicon-3x.png");
const whitecheckicon = require("../assets/American_Finance_App_image/whitecheckicon-3x.png");
const Arrowicon = require("../assets/American_Finance_App_image/whiteArrowicon-3x.png");


const jobIconviewHeight = 80 / 852 * height;
const viewborderHeight = 65 / 852 * height;
const blackcheckiconHeight = 21 / 852 * height;
const blackcheckiconWidth = 21 / 412 * width;
const whitecheckiconHeight = 21 / 852 * height;
const whitecheckiconWidth = 21 / 412 * width;
const smallcircleIconHeight = 34 / 852 * height;
// const smallcircleIconWidth = 34;
const largecircleIconHeight = 60 / 852 * height;
const whiteArrowiconHeight = 24 / 852 * height;
const whiteArrowiconWidth = 24 / 412 * width;



const Status = [
    {
        name: "Credit Card"
    },
    {
        name: "Loans"

    },
    {
        name: "Others"
    },
   
]



const FinancialDetailsScreen = ({navigation,route}) => {

    const [selectedOption, setSelectedOption] = useState("")
    const obligation = route.params.obligation;
    obligation.outstanding_debt_type = selectedOption;
    console.log(obligation)

    const nextBtnAction = () =>{
        navigation.navigate("CreditCardDebpt",{
            obligation:obligation
        })
    }
   

    return (
            <View style={{ height: height,width:width }}>
                <View style={{ flexDirection: "column", alignItems: "center", }}>
                    <Text style={styles.incomTextSt}>Application Details</Text>

                    <View style={{ flexDirection: 'row', marginTop: 15 / 852 * height, alignItems: 'center', }}>

                        <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

                        <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>

                        <View style={{
                            height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center", justifyContent: "center", alignItems: "center"
                        }}>
                            <Image source={DollarIcon}
                                style={{
                                    height: 25 / 852 * height, width: 25 / 852 * height, resizeMode: 'contain', alignSelf: 'center', justifyContent: 'center'
                                }}
                            />
                        </View>

                        <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                        <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>



                    </View>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 24, color: "#000" }}>Outstanding debt</Text>

                    <Text style={{ fontSize: 12, color: '#717171', marginBottom: 0, fontFamily: "PoppinsMedium" }}>
                    (Please ensure all information entered on your application
                    </Text>
                    <Text style={{ fontSize: 12, color: '#717171', fontFamily: "PoppinsMedium" }}>
                    is accurate and verifiable, America Finance will verify the
                    </Text>
                    <Text style={{ fontSize: 12, color: '#717171', fontFamily: "PoppinsMedium" }}>
                    accuracy of all information submitted.)
                    </Text>
                </View>






                <View style={{ flex: 2.6, paddingTop: 18, paddingRight: 13, paddingLeft: 13 }}>
                    <FlatList scrollEnabled={true} style={{ marginBottom: 0, }}
                        data={Status}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={{ margin: 6, borderWidth: 0.5, borderRadius: 23, }} onPress={() => {
                                setSelectedOption(item.name)
                            }}>
                                <View style={styles.textViewSt}>
                                    <Text numberOfLines={2} lineBreakMode="tail" style={styles.textST}>{item.name}</Text>


                                    <View style={[styles.imageViewSt, { backgroundColor: selectedOption === item.name ? "#2468E8" : "#f2f2f2" }]}>
                                        <Image source={selectedOption === item.name ? whitecheckicon : blackcheckicon} style={styles.imageSt} />
                                    </View>


                                </View>
                            </TouchableOpacity>

                        }
                    />
                </View>
                <View style={{ flex: 2.5 }}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', margin: 20, marginBottom: 20 / 852 * height, borderRadius: 30, marginRight: 25 / 852 * height, }} 
                        onPress={nextBtnAction}
                    >
                        <View style={globalStyles.arrowBotton}>
                            <Image source={Arrowicon}
                                style={{ height: whiteArrowiconHeight, width: whiteArrowiconWidth, resizeMode: "center" }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>




            </View>

    )

}
export default FinancialDetailsScreen;

const styles = StyleSheet.create({

    incomTextSt: {
        fontSize: 13,
        color: "#000",
        textAlign: "center",
        fontFamily: "PoppinsMedium",
        marginBottom: 10

    },

    textViewSt: {

        // height: viewborderHeight,

        borderColor: "#000",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },

    textST: {
        fontSize: 14,
        color: "#000",
        flexDirection: "row",
        flex: 1,
        marginLeft: 12,
        fontFamily: "PoppinsMedium",
        borderRadius: 23,


    },

    imageViewSt: {
        backgroundColor: "#1e90ff",
        height: smallcircleIconHeight,
        width: smallcircleIconHeight,
        borderRadius: 17,
        margin: 12,
        justifyContent: "center"
    },

    imageSt: {
        height: whitecheckiconHeight,
        width: whitecheckiconHeight,
        alignSelf: "center",
        margin: 6

    },

}) 