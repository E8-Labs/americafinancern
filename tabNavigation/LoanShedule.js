import React, { useState } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, ImageBackground, } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import LoanDetails from "./LoanDetails";
import { SafeAreaView } from "react-native";
import PayPlanView from "./PayPlanView";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


const lightDotte = require("../assets/American_Finance_App_image/lightDotte-3x.png");
const lightBlueBG = require("../assets/American_Finance_App_image/lightBlueBG-3x.png");

const LoanShedule = ({ navigation, route }) => {
    const loan = route.params.loan;
    console.log("Loan in loan schedule ", loan)
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        // <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: height, width: width, backgroundColor: "ececec" }}>
            <View style={{ backgroundColor: "#2468E8", height: height / 2, width: width, }}>

                <ImageBackground style={{ height: height / 2, width: width }} source={lightDotte}>

                    <ImageBackground style={{ height: height / 2, width: width }} source={lightBlueBG}>
                       
                            <TouchableOpacity style={{marginTop:35/852*height,marginLeft:16/393*width,alignSelf:'flex-start',}} onPress={() => {
                                console.log("Here go back")
                                navigation.goBack()
                            }}>
                                <Image
                                    source={require('../assets/American_Finance_App_image/backArrow.png')}
                                    style={{ height: 32 / 852 * height, width: 32 * width / 393 }}
                                />
                            </TouchableOpacity>
                            <View style={{ flexDirection: "row",marginTop:62/852*height,alignItems:"center",}} >
                                <View style = {{marginLeft:38/393*width}}>
                                    <CircularProgress
                                        radius={60 / 852 * height}
                                        value={80}
                                        progressValueFontSize={24 / 852 * height}
                                        valueSuffix={"%"}
                                        title="Paid"
                                        titleColor="#fff"
                                        titleFontSize={14 / 852 * height}
                                        activeStrokeColor={"#fff"}
                                        inActiveStrokeOpacity={0.14}
                                        inActiveStrokeWidth={3 / 393 * width}
                                        progressValueColor="#fff"
                                        activeStrokeWidth={3 / 393 * width}
                                        strokeLinecap="square"
                                        inActiveStrokeColor={"#fff"}
                                    />

                                </View>
                                <View style={{marginLeft:41/393*width, height: 52 / 852 * height, width: 70 / 393 * width, borderRadius: 10 / 852 * height, backgroundColor: "#ffffff20" }}>
                                    <Text style={{ color: "#FFF", fontSize: 12 / 852 * height, fontWeight: '500', padding: 10 / 852 * height, paddingBottom: 0 }}>
                                        Balance

                                    </Text>
                                    <Text style={{ color: "#FFF", fontSize: 14 / 852 * height, fontWeight: '500', paddingLeft: 10 / 393 * width, paddingTop: 5 / 852 * height }}>
                                        $120

                                    </Text>
                                </View>

                                <View style={{marginLeft:18/393*width, height: 52 / 852 * height, width: 79 / 393 * width, borderRadius: 10 / 852 * height, backgroundColor: "#ffffff20" }}>
                                    <Text style={{ color: "#FFF", fontSize: 12 / 852 * height, padding: 10 / 852 * height, paddingBottom: 0 }}>
                                        Paid
                                    </Text>
                                    <Text style={{ color: "#FFF", fontSize: 14 / 852 * height, paddingLeft: 10 / 393 * width, paddingTop: 5 / 852 * height }}>
                                        $280

                                    </Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 20 / 852 * height, marginLeft: 37 / 393 * width, }}>
                                <View style={{ flexDirection: "row", gap: 159 / 852 * height }}>
                                    <Text style={{ fontSize: 10 / 852 * height, color: "#fff", }}>
                                        Next installment
                                    </Text>
                                    <Text style={{ fontSize: 10 / 852 * height, color: "#fff", }}>
                                        Due
                                    </Text>
                                </View>

                                <View style={{ flexDirection: "row", gap: 205 / 852 * height }}>
                                    <Text style={{ fontSize: 14 / 852 * height, color: "#fff", }}>
                                        $120
                                    </Text>

                                    <Text style={{ fontSize: 14 / 852 * height, color: "#fff", }}>
                                        12.05.2023
                                    </Text>
                                </View>


                            </View>


                        <View style={{ alignSelf: "center", justifyContent: "center", marginTop: 78 / 852 * height }}>
                            <View style={{
                                flexDirection: "column", height: height / 1.5, width: 371 / 393 * width, borderTopRightRadius: 25 / 852 * height,
                                borderTopLeftRadius: 25 / 852 * height, backgroundColor: "#fff", alignItems: "center"
                            }}>
                                <View style={{
                                    paddingLeft: 4 / 852 * height, justifyContent: "flex-start", height: 33 / 852 * height, width: 181 / 393 * width,
                                    backgroundColor: "#ececec", marginTop: 13 / 852 * height, borderRadius: 9 / 852 * height, alignItems: "center", flexDirection: "row"
                                }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setSelectedTab(0);
                                        }}
                                        style={{
                                            height: 27 / 852 * height,
                                            width: 84 / 393 * width,
                                            backgroundColor: selectedTab == 0 ? '#fff' : '#ececec',
                                            borderRadius: 8 / 852 * height,
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }} >
                                        <Text style={{ fontSize: 14 / 852 * height, color: "#000", fontWeight: "500" }}>
                                            Pay Plan
                                        </Text>
                                    </TouchableOpacity>
                                    <View style={{ paddingLeft: 6 / 852 * height }}>
                                        <TouchableOpacity onPress={() => {
                                            setSelectedTab(1);
                                        }}
                                            style={{
                                                height: 27 / 852 * height,
                                                width: 84 / 393 * width,
                                                backgroundColor: selectedTab == 1 ? '#fff' : '#ececec',
                                                borderRadius: 8 / 852 * height,
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }} >
                                            <Text style={{ fontSize: 14 / 852 * height, color: "#000", fontWeight: "500" }}>
                                                Details
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{ paddingTop:26/852*height,}} >
                                    {
                                        selectedTab == 0 && (

                                            <PayPlanView />
                                        )
                                    }
                                    {
                                        selectedTab == 1 && (
                                            <LoanDetails loan={loan} />
                                        )
                                    }
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </ImageBackground>

            </View>



        </View>
        // </SafeAreaView>
    )
};
const styles = StyleSheet.create({

    capsuleButton: {
        backgroundColor: '#2468E8',
        borderRadius: 58 / 852 * height,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: 41 / 852 * height,
        width: 113 / 393 * width,





    },
})
export default LoanShedule;