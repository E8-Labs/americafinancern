import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";
import { SafeAreaView } from "react-native";
import Snackbar from "react-native-snackbar";


const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const whitecheckiconHeight = 21 / 852 * height;
const smallcircleIconHeight = 34 / 852 * height;
const whiteArrowiconHeight = 24 / 852 * height;
const whiteArrowiconWidth = 24 / 412 * width;



const PaymentWallet = require("../assets/American_Finance_App_image/Payment-Finance-Wallet-3x.png");
const blackcheckicon = require("../assets/vector2.png");
const whitecheckicon = require("../assets/vector.png");
const Arrowicon = require("../assets/American_Finance_App_image/whiteArrowicon-3x.png");
const blackArrowicon = require("../assets/American_Finance_App_image/blackArrowicon-3x.png");




const Status = [
    {
        name: "Yes",
        condition: true
    },
    {
        name: "No",
        condition: false

    },

]

const ActivePaydayLoans = ({ navigation, route }) => {

    const [selectedOption, setSelectedOption] = useState(null)

    const nextBtnAction = () => {
        if (!selectedOption) {
            Snackbar.show({
                text: "Please select a condition",
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: 'red',
                marginBottom: 10,

            })
        } else {

            navigation.navigate("BankruptcyPetition", {
                obligation: { active_pay_day_loan: selectedOption }
            })
        }
    };

    return (


        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ height: height, width: width }}>
                {/* <View style={{ flexDirection: 'row', width: width, paddingHorizontal: 12 / 393 * width, justifyContent: 'space-between', alignItems: 'center', }}> */}
                {/* <TouchableOpacity style={{ alignSelf: 'flex-start', }} onPress={() => props.navigation.goBack()} >
                        <Image
                            source={require('../assets/blackArrowicon-3x.png')}
                            style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain', }}
                        />
                     
                    </TouchableOpacity> */}
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 12 / 852 * height, color: "#000", fontWeight: '500', }}>
                        Application Details
                    </Text>
                </View >

                <View style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain' }}>

                </View>
                {/* </View> */}
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

                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 / 852 * height }}>
                    <Text style={{ fontWeight: "700", fontSize: 24 / 852 * height, color: "#000" }}>Active Payday Loans</Text>

                    <Text style={{ fontWeight: "500", fontSize: 14 / 852 * height, color: '#717171', marginBottom: 0, marginTop: 10 / 852 * height, fontFamily: "PoppinsMedium" }}>
                        Are you currently obligated to a Payday
                    </Text>
                    <Text style={{ fontWeight: "500", fontSize: 14 / 852 * height, color: '#717171', fontFamily: "PoppinsMedium" }}>
                        loan whether with America Finance or a
                    </Text>
                    <Text style={{ fontWeight: "500", fontSize: 14 / 852 * height, color: '#717171', fontFamily: "PoppinsMedium" }}>
                        different Lender?
                    </Text>
                </View>

                <View style={{ flex: 2.6, marginTop: 36 / 852 * height, }}>
                    <FlatList scrollEnabled={true} style={{ marginBottom: 0, }} showsVerticalScrollIndicator={false}
                        data={Status}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={{ margin: 15 / 852 * height, borderWidth: 0.5, borderRadius: 23 / 852 * height, borderColor: "#cccc", height: 80 / 852 * height, alignItems: "center", justifyContent: "center" }} onPress={() => {
                                setSelectedOption(item)
                            }}>
                                <View style={styles.textViewSt}>
                                    <Text style={styles.textST}>{item.name}</Text>


                                    <View style={[styles.imageViewSt, { backgroundColor: selectedOption === item ? "#2468E8" : "#ececec" }]}>
                                        <Image source={selectedOption === item ? whitecheckicon : blackcheckicon} style={styles.imageSt} />
                                    </View>


                                </View>
                            </TouchableOpacity>

                        }
                    />
                </View>
                <View style={{ flex: 4 }}>
                    <TouchableOpacity style={[globalStyles.shadowStyle,{
                         alignSelf: 'flex-end', margin: 20 / 852 * height, marginBottom: 20 / 852 * height, borderRadius: 30 / 852 * height,
                          marginRight: 25 / 852 * height, }]}
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
        </SafeAreaView>

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