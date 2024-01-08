import React, { useState } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import LoanDetails from "./LoanDetails";
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
        <View style={{ height: height, width: width, backgroundColor: "ececec" }}>
            <View style={{ backgroundColor: "#2468E8", height: height / 2, width: width, }}>

                <Image
                    style={{ height: height / 2, width: width }}
                    source={lightDotte}
                />

                <Image
                    style={{ position: "absolute", height: height / 2, width: width }}
                    source={lightBlueBG}
                />

            </View>
            <View style={{ position: "absolute", top: 97 / 852 * height, left: 30 / 852 * height, flexDirection: "row" }} >
                <TouchableOpacity style={{ top: -70 / 852 * height }} onPress={() => {
                    console.log("Here go back")
                    navigation.goBack()
                }}>
                    <Image
                        source={require('../assets/American_Finance_App_image/backArrow.png')}
                        style={{ height: 32 / 852 * height, width: 32 * width / 393 }}
                    />
                </TouchableOpacity>
                <View>
                    <CircularProgress
                        radius={60 / 852 * height}
                        value={80}
                        progressValueFontSize={24 / 852 * height}
                        valueSuffix={"%"}
                        siz
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
                <View style={{ left: 26 / 852 * height, top: 25 / 852 * height, height: 52 / 852 * height, width: 88 / 393 * width, borderRadius: 10 / 852 * height, backgroundColor: "#ffffff20" }}>
                    <Text style={{ color: "#FFF", fontSize: 12 / 852 * height, margin: 10 / 852 * height, marginBottom: 0 }}>
                        Pay left

                    </Text>
                    <Text style={{ color: "#FFF", fontSize: 14 / 852 * height, marginLeft: 10 / 852 * height }}>
                        $120

                    </Text>
                </View>

                <View style={{ left: 44 / 852 * height, top: 25 / 852 * height, height: 52 / 852 * height, width: 97 / 393 * width, borderRadius: 10 / 852 * height, backgroundColor: "#ffffff20" }}>
                    <Text style={{ color: "#FFF", fontSize: 12 / 852 * height, margin: 10 / 852 * height, marginBottom: 0 }}>
                        Pay mode
                    </Text>
                    <Text style={{ color: "#FFF", fontSize: 14 / 852 * height, marginLeft: 10 / 852 * height }}>
                        $280

                    </Text>
                </View>
            </View>
            <View style={{ position: "absolute", }}>
                <View style={{ flexDirection: "row", top: 235 / 852 * height, }}>
                    <Text style={{ fontSize: 10 / 852 * height, color: "#fff", left: 51 / 393 * width }}>
                        Next installment
                    </Text>
                    <Text style={{ fontSize: 10 / 852 * height, color: "#fff", left: 112 / 393 * width }}>
                        Next Payday
                    </Text>
                    <Text style={{ fontSize: 10 / 852 * height, color: "#fff", left: 167 / 393 * width }}>
                        Loan Due
                    </Text>
                </View>

                <View style={{ flexDirection: "row", top: 247 / 852 * height, }}>
                    <Text style={{ fontSize: 14 / 852 * height, color: "#fff", left: 53 / 393 * width }}>
                        $120
                    </Text>
                    <Text style={{ fontSize: 14 / 852 * height, color: "#fff", left: 151 / 393 * width }}>
                        12/02/2023
                    </Text>
                    <Text style={{ fontSize: 14 / 852 * height, color: "#fff", left: 185 / 393 * width }}>
                        12/05/2023
                    </Text>
                </View>


            </View>
            <View style={{ alignSelf: "center", justifyContent: "center", height: 139 / 852 * height, backgroundColor: 'red' }}>
                <View style={{ flexDirection: "column", height: 603 / 852 * height, width: 371 / 393 * width, borderRadius: 25 / 852 * height, backgroundColor: "#fff", top: 139 / 852 * height, alignItems: "center" }}>
                    <View style={{ paddingLeft: 4 / 852 * height, justifyContent: "flex-start", height: 33 / 852 * height, width: 181 / 393 * width, backgroundColor: "#ececec", marginTop: 13 / 852 * height, borderRadius: 9 / 852 * height, alignItems: "center", flexDirection: "row" }}>
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
                </View>
            </View>
            <View style={{marginTop:-140/852*height}} > 
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