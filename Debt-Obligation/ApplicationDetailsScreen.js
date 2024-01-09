import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";
import MonthlyDebtObligation from "./MonthlyDebtObligation";
import OthersDebtObligation from "./OthersDebtObligation";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


const BankBagIcon = require("../assets/American_Finance_App_image/BankBagIcon-3x.png");
const blackcheckicon = require("../assets/American_Finance_App_image/blackcheckicon-3x.png");
const whitecheckicon = require("../assets/American_Finance_App_image/whitecheckicon-3x.png");
const Arrowicon = require("../assets/American_Finance_App_image/whiteArrowicon-3x.png");
const blackArrowicon =require ("../assets/American_Finance_App_image/blackArrowicon-3x.png");


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
        id:1,
        name: "Auto Payment"
    },
    {
        id:2,
        name: "Bills"

    },
    {
        id:3,
        name: "Child Care"
    },
    {
        id:4,
        name: "Emergency"
    },
    {
        id:5,
        name: "Expenses"
    },
    {
        id:6,
        name: "Funeral"
    },
    {
        id:7,
        name: "General Household"
    },
    {
        
        id:8,
        name: "Medical"
    },
    {
        id:9,
        name: "Mortgage"
    },
    {
        id:10,
        name: "Payment Obligation"
    },
    {
        id:11,
        name: "Rent"
    },
    {
        id:12,
        name: "School"
    },
    {
        id:13,
        name: "Utilities"

    },
    {
        id:14,
        name: "Other"
    },

]



const ApplicationDetailsScreen = (props) => {

    const nextBtnAction = () => {
        props.navigation.navigate("MonthlyDebtObligation", {
            obligation: { debt_type: selectedOption }
        })
    }
    const [selectedOption, setSelectedOption] = useState("")

    return (

        <View >

            <View style={{ height: height }}>
            <View style={{ flexDirection: "row", margin: 17 / 852 * height, marginTop: 32/852*height, marginBottom: 0,gap:110/393*width }}>
                    <Image style={{ height: 20 / 852 * height, width: 24 / 393 * width, }} source={blackArrowicon} />
                        <Text style={{  color: "#000",fontSize:12 / 852 * height,fontWeight:"500" }}>
                        Application Details
                        </Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", }}>

                    <View style={{ flexDirection: 'row', marginTop: 20 / 852 * height, alignItems: 'center', }}>

                        <View style={{ width: 2/ 852 * height, height: 2/ 852 * height, borderRadius: 2/ 852 * height, backgroundColor: "#000",marginTop:4/ 852 * height }}></View>

                        <View style={{ width: 6/ 852 * height, height: 6/ 852 * height, borderRadius: 3/ 852 * height, backgroundColor: "#000", marginRight: 9/ 852 * height, marginLeft: 6/ 852 * height }}></View>

                        <View style={{
                            height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5/ 852 * height, borderWidth: 1, alignSelf: "center", justifyContent: "center", alignItems: "center"
                        }}>
                            <Image source={BankBagIcon}
                                style={{
                                    height: 20 / 852 * height, width: 20 / 852 * height, resizeMode: 'contain', alignSelf: 'center', justifyContent: 'center'
                                }}
                            />
                        </View>

                        <View style={{ width: 6/ 852 * height, height: 6/ 852 * height, borderRadius: 3/ 852 * height, backgroundColor: "#000", marginRight: 9/ 852 * height, marginLeft: 6/ 852 * height }}></View>
                        <View style={{ width: 2/ 852 * height, height: 2/ 852 * height, borderRadius: 2/ 852 * height, backgroundColor: "#000" }}></View>



                    </View>
                </View>


                <Text style={{ fontWeight:"700",textAlign: "center", fontSize: 24/ 852 * height, color: "#000" }}>Debt Obligation</Text>

                <Text style={{ fontWeight:"500",color: '#717171', textAlign: "center", fontFamily: "PoppinsMedium", fontSize: 12/ 852 * height, marginLeft: 6/ 852 * height, marginRight: 6/ 852 * height, marginBottom: 12/ 852 * height }} >(Please select your monthly debt obligation)</Text>





                <View style={{ flex: 2.6, paddingTop: 26/ 852 * height,}}>
                    <FlatList scrollEnabled={true} style={{ marginBottom: 0, }}
                        data={Status}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={{ margin: 15/ 852 * height, borderWidth: 0.5, borderRadius: 23/ 852 * height,height:80/ 852 * height,alignItems:"center",justifyContent:"center"  }} onPress={() => {
                                if (item.name === "Other") {
                                    props.navigation.navigate("OthersDebtObligation")
                                } else {
                                    setSelectedOption(item.name)
                                }
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
                <View style={{ flex: 0.8 }}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', margin: 20/ 852 * height, marginBottom: 20 / 852 * height, borderRadius: 30/ 852 * height, marginRight: 25 / 852 * height, }}
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

        </View>

    )

}
export default ApplicationDetailsScreen;

const styles = StyleSheet.create({
    textViewSt: {
        borderColor: "#000",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },

    textST: {
        fontSize: 18/ 852 * height,
        fontWeight:"500",
        color: "#000",
        flexDirection: "row",
        flex: 1,
        marginLeft: 12/ 852 * height,
        fontFamily: "PoppinsMedium",
        borderRadius: 23/ 852 * height,


    },

    buttonViewSt: {
        backgroundColor: "#E9E9E9",
        height: smallcircleIconHeight,
        width: smallcircleIconHeight,
        borderRadius: 17/ 852 * height,
        margin: 15/ 852 * height,
        borderRadius: 23/ 852 * height,

    },

    imageViewSt: {
        backgroundColor: "#1e90ff",
        height: smallcircleIconHeight,
        width: smallcircleIconHeight,
        borderRadius: 17/ 852 * height,
        margin: 15/ 852 * height,
        justifyContent: "center"
    },

    imageSt: {
        height: whitecheckiconHeight,
        width: whitecheckiconHeight,
        alignSelf: "center",
  

    },

}) 