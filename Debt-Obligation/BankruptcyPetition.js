import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, SafeAreaView, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";
import Snackbar from "react-native-snackbar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Apis from "../Api/apipath";


const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


const PiggyBank = require("../assets/American_Finance_App_image/PiggyBank-3x.png");
const blackcheckicon = require("../assets/vector2.png");
const whitecheckicon = require("../assets/vector.png");
const Arrowicon = require("../assets/American_Finance_App_image/whiteArrowicon-3x.png");
const blackArrowicon = require("../assets/American_Finance_App_image/blackArrowicon-3x.png");



const whitecheckiconHeight = 21 / 852 * height;
const smallcircleIconHeight = 34 / 852 * height;
const whiteArrowiconHeight = 24 / 852 * height;
const whiteArrowiconWidth = 24 / 412 * width;

const Status = [
    {
        id: 0,
        name: "No",
        minYear: null,
        maxYear: null
    },
    {
        id: 1,
        name: "Within 3 months",
        minYear: 0,
        maxYear: 3

    },
    {
        id: 2,
        name: "Within 3-6 Months",
        minYear: 3,
        maxYear: 6
    },
    {
        id: 3,
        name: "Within 6-9 Months",
        minYear: 6,
        maxYear: 9

    },
    {
        id: 4,
        name: "Within 9-12 Months",
        minYear: 9,
        maxYear: 12
    },

]



const BankruptcyPetition = ({ navigation, route }) => {

    const [selectedOption, setSelectedOption] = useState("");
    const [user, setUser] = useState(null)

    const obligation = route.params.obligation;

    console.log("received data is ", obligation)

    const nextBtnAction = () => {

        if (!selectedOption) {
            Snackbar.show({
                text: "Please select an option",
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: 'red',
                marginBottom: 10,

            })
        } else {
            // navigation.navigate("FinancialDetailsScreen", {
            //     obligation: obligation
            // })
            const APIcall = async () => {

                // console.log("salected data is ,",selectedOption.id)


                const data = await AsyncStorage.getItem("USER")

                if (data) {

                    let u = JSON.parse(data)
                    setUser(u)
                    // console.log("user get data", u)

                    let token = u.token;

                    // call liabilities API

                    const result = await fetch(Apis.ApiLiabilities, {
                        method: "get",
                        headers:
                        {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + token,
                        },
                    })

                    if (result) {
                        let json = await result.json()
                        // console.log("get data is ", json)


                        if (json.status === true) {
                            console.log('Api Called')

                            //call update profile API

                            console.log("revevied data before api", obligation.active_pay_day_loan.condition)

                            const data = await fetch(Apis.ApiUpdateProfile, {
                                method: 'Post',
                                headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
                                body: JSON.stringify({
                                    "active_payday_loan": obligation.active_pay_day_loan.condition,
                                    "bankruptcy_status": selectedOption.id

                                })
                            })
                            if (data) {
                                let json = await data.json();
                                console.log("update bank ruptcy  ", json)
                                if (json.status === true) {
                                    navigation.navigate("DashboardBase");
                                }
                            }
                        };
                    };
                }

            };
            APIcall();
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ height: height, width: width }}>
                <View style={{ flexDirection: 'row', width: width, paddingHorizontal: 12 / 393 * width, justifyContent: 'space-between', alignItems: 'center', }}>
                    <TouchableOpacity style={{ alignSelf: 'flex-start', }} onPress={() => navigation.goBack()} >
                        <Image
                            source={require('../assets/blackArrowicon-3x.png')}
                            style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain', }}
                        />

                    </TouchableOpacity>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 12 / 852 * height, color: "#000", fontWeight: '500', }}>
                            Account Details
                        </Text>
                    </View >

                    <View style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain' }}>

                    </View>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", }}>

                    <View style={{ flexDirection: 'row', marginTop: 30 / 852 * height, alignItems: 'center', }}>

                        <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2 / 852 * height, backgroundColor: "#000" }}></View>

                        <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3 / 852 * height, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>

                        <View style={{
                            height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5 / 852 * height, borderWidth: 1, alignSelf: "center", justifyContent: "center", alignItems: "center"
                        }}>
                            <Image source={PiggyBank}
                                style={{
                                    height: 20 / 852 * height, width: 20 / 852 * height, alignSelf: 'center', justifyContent: 'center', marginTop: 4
                                }}
                            />
                        </View>

                        <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3 / 852 * height, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>
                        <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2 / 852 * height, backgroundColor: "#000" }}></View>



                    </View>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 / 852 * height }}>
                    <Text style={{ fontWeight: "700", fontSize: 24 / 852 * height, color: "#000" }}>Bankruptcy Status</Text>

                    <Text style={{ fontWeight: "500", fontSize: 14 / 852 * height, color: '#717171', marginBottom: 0, fontFamily: "PoppinsMedium" }}>
                        In the past year, have you filed a
                    </Text>
                    <Text style={{ fontWeight: "500", fontSize: 14 / 852 * height, color: '#717171', fontFamily: "PoppinsMedium" }}>
                        bankruptcy petition or been involved in
                    </Text>
                    <Text style={{ fontWeight: "500", fontSize: 14 / 852 * height, color: '#717171', fontFamily: "PoppinsMedium" }}>
                        a bankruptcy proceeding?
                    </Text>
                </View>






                <View style={{ flex: 2.6, paddingTop: 18 / 852 * height, }}>
                    <FlatList scrollEnabled={true} style={{ marginBottom: 0, }} showsVerticalScrollIndicator={false}
                        data={Status}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={{ margin: 15 / 852 * height, borderWidth: 0.5, borderRadius: 23 / 852 * height, height: 80 / 852 * height, alignItems: "center", justifyContent: "center", borderColor: "#ccc" }} onPress={() => {
                                setSelectedOption(item)
                            }}>
                                <View style={styles.textViewSt}>
                                    <Text numberOfLines={2} lineBreakMode="tail" style={styles.textST}>{item.name}</Text>


                                    <View style={[styles.imageViewSt, { backgroundColor: selectedOption === item ? "#2468E8" : "#ececec" }]}>
                                        <Image source={selectedOption === item ? whitecheckicon : blackcheckicon} style={styles.imageSt} />
                                    </View>


                                </View>
                            </TouchableOpacity>

                        }
                    />
                </View>
                <View style={{ flex: 0.8 }}>
                    <TouchableOpacity style={[globalStyles.shadowStyle,{
                        alignSelf: 'flex-end', margin: 20 / 852 * height, marginBottom: 20 / 852 * height, borderRadius: 30 / 852 * height,
                        marginRight: 25 / 852 * height,
                    }]}
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
export default BankruptcyPetition;

const styles = StyleSheet.create({
    textViewSt: {
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
        marginLeft: 15 / 852 * height,
        fontFamily: "PoppinsMedium",
        borderRadius: 23 / 852 * height,
        fontWeight: "500"


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