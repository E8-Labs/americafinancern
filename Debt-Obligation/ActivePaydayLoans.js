import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";
import ApplicationDetailActiveDuty from "./ApplicationDetailActiveDuty";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const whitecheckiconHeight = 21 / 852 * height;
const smallcircleIconHeight = 34 / 852 * height;
const whiteArrowiconHeight = 24 / 852 * height;
const whiteArrowiconWidth = 24 / 412 * width;



const PaymentWallet = require("../assets/American_Finance_App_image/Payment-Finance-Wallet-3x.png");
const blackcheckicon = require("../assets/American_Finance_App_image/blackcheckicon-3x.png");
const whitecheckicon = require("../assets/American_Finance_App_image/whitecheckicon-3x.png");
const Arrowicon = require("../assets/American_Finance_App_image/whiteArrowicon-3x.png");
const blackArrowicon =require ("../assets/American_Finance_App_image/blackArrowicon-3x.png");




const Status = [
    {
        name: "Yes"
    },
    {
        name: "No"

    },

]



const ActivePaydayLoans = ({ navigation, route }) => {

    const [selectedOption, setSelectedOption] = useState("")

    const obligation = route.params.obligation;
    obligation.active_pay_day_loan = selectedOption;
    console.log('after other', obligation)

    const nextBtnAction = () => {
        navigation.navigate("ApplicationDetailActiveDuty", {
            obligation: obligation
        })
    }

    return (



        <View style={{ height: height, width: width }}>
                <View style={{ flexDirection: "row", margin: 17 / 852 * height, marginTop: 32/852*height, marginBottom: 0,gap:110/393*width }}>
                    <Image style={{ height: 20 / 852 * height, width: 24 / 393 * width, }} source={blackArrowicon} />
                        <Text style={{  color: "#000",fontSize:12 / 852 * height,fontWeight:"500" }}>
                        Application Details
                        </Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", }}>

                <View style={{ flexDirection: 'row', marginTop: 30 / 852 * height, alignItems: 'center', }}>

                    <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2 / 852 * height, backgroundColor: "#000" }}></View>

                    <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3 / 852 * height, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>

                    <View style={{
                        height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5 / 852 * height, borderWidth: 1, alignSelf: "center", justifyContent: "center", alignItems: "center"
                    }}>
                        <Image source={PaymentWallet}
                            style={{
                                height: 20 / 852 * height, width: 20 / 852 * height, resizeMode: 'contain', alignSelf: 'center', justifyContent: 'center'
                            }}
                        />
                    </View>

                    <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3 / 852 * height, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>
                    <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2 / 852 * height, backgroundColor: "#000" }}></View>



                </View>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center",marginTop:10/852*height }}>
                <Text style={{ fontWeight:"700", fontSize: 24 / 852 * height, color: "#000" }}>Active Payday Loans</Text>

                <Text style={{ fontWeight:"500",fontSize: 14 / 852 * height, color: '#717171', marginBottom: 0,marginTop:10 / 852 * height, fontFamily: "PoppinsMedium" }}>
                    Are you currently obligated to a Payday
                </Text>
                <Text style={{fontWeight:"500", fontSize: 14 / 852 * height, color: '#717171', fontFamily: "PoppinsMedium" }}>
                    loan whether with America Finance or a
                </Text>
                <Text style={{fontWeight:"500", fontSize: 14 / 852 * height, color: '#717171', fontFamily: "PoppinsMedium" }}>
                    different Lender?
                </Text>
            </View>

            <View style={{ flex: 2.6, marginTop: 36 / 852 * height,}}>
                <FlatList scrollEnabled={true} style={{ marginBottom: 0, }}
                    data={Status}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={{ margin: 15 / 852 * height, borderWidth: 0.5, borderRadius: 23 / 852 * height,borderColor:"#cccc",height:80/ 852 * height,alignItems:"center",justifyContent:"center"  }} onPress={() => {
                            setSelectedOption(item.name)
                        }}>
                            <View style={styles.textViewSt}>
                                <Text style={styles.textST}>{item.name}</Text>


                                <View style={[styles.imageViewSt, { backgroundColor: selectedOption === item.name ? "#2468E8" : "#f2f2f2" }]}>
                                    <Image source={selectedOption === item.name ? whitecheckicon : blackcheckicon} style={styles.imageSt} />
                                </View>


                            </View>
                        </TouchableOpacity>

                    }
                />
            </View>
            <View style={{ flex: 4 }}>
                <TouchableOpacity style={{ alignSelf: 'flex-end', margin: 20 / 852 * height, marginBottom: 20 / 852 * height, borderRadius: 30 / 852 * height, marginRight: 25 / 852 * height, }}
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
export default ActivePaydayLoans;

const styles = StyleSheet.create({

    textViewSt: {

        // height: viewborderHeight,

        borderColor: "#000",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },

    textST: {
        fontSize: 18 / 852 * height,
        color: "#000",
        flexDirection: "row",
        flex: 1,
        marginLeft: 12 / 852 * height,
        fontFamily: "PoppinsMedium",
        borderRadius: 23 / 852 * height,


    },

    imageViewSt: {
        backgroundColor: "#1e90ff",
        height: smallcircleIconHeight,
        width: smallcircleIconHeight,
        borderRadius: 17 / 852 * height,
        margin: 15 / 852 * height,
        justifyContent: "center"
    },

    imageSt: {
        height: whitecheckiconHeight,
        width: whitecheckiconHeight,
        alignSelf: "center",
       

    },

}) 