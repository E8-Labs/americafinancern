import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";
import ActivePaydayLoans from "./ActivePaydayLoans";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const CloseIcon = require("../assets/American_Finance_App_image/CloseBlackIcon-3x.png");


const MonthlyDebtObligation = ({ navigation, route }) => {

    const [amount, setAmount] = useState('')


    const num  = Number(amount)


    const obligation = route.params.obligation
    obligation.monthly_debt_obligation = num;
    console.log("data ia ", obligation)

    const nextBtnAction = () => {
        navigation.navigate("ActivePaydayLoans", {
            obligation: obligation,
        })
    }


    return (

        <View style={{ height: height, width: width }}>
            <View style={{ margin: 17 / 852 * height, marginTop: 32 / 852 * height, marginBottom: 0, }}>
                <Text style={{ alignSelf: "center",color: "#000", fontSize: 12 / 852 * height, fontWeight: "500" }}>
                    Debt Obligation
                </Text>
                <TouchableOpacity style={{ marginTop: -20 / 852 * height, alignSelf: "flex-end", height: 30 / 852 * height, width: 30 / 852 * height, borderRadius: 15 / 852 * height, backgroundColor: "#ececec", justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 10 / 852 * height, width: 10 / 393 * width, resizeMode: "contain" }} source={CloseIcon} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "column", alignItems: "center", }}>
                <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 26 / 852 * height, color: "#000", marginTop: 27 / 852 * height }}>{obligation.debt_type}</Text>

                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontWeight: "500", fontSize: 12 / 852 * height, color: "#717171" }} >(Please enter the monthly debt obligation </Text>
                    <Text style={{ fontWeight: "500", fontSize: 12 / 852 * height, color: "#717171" }} >for the selected debt)</Text>
                </View>
            </View>
            <View style={{ backgroundColor: "#ececec", borderRadius: 13 / 852 * height, flexDirection: "row", marginTop: 26 / 852 * height, alignItems: "center", marginLeft: 17 / 852 * height, marginRight: 17 / 852 * height }}>
                <Text style={{ fontWeight: "500", fontSize: 14 / 852 * height, color: "#717171", padding: 7 / 852 * height }} >$</Text>
                <TextInput style={{ flex: 1, fontSize: 14 / 852 * height, fontFamily: "PoppinsMedium", paddingRight: 7 / 852 * height }}
                    keyboardType="numeric" 
                    autoFocus={true}
                    value={amount}
                    onChangeText={(text) => setAmount(text)}
                />
            </View>

            <TouchableOpacity style={[globalStyles.capsuleButton, { marginTop: 42 / 852 * height, marginRight: 13 / 852 * height, alignSelf: "flex-end" }]}
                onPress={nextBtnAction}
            >
                <Text style={{ color: '#fff', fontSize: 18 / 852 * height, fontWeight: '500', textAlign: 'center' }}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>

    )

}
export default MonthlyDebtObligation;

const styles = StyleSheet.create({

    incomTextSt: {
        fontSize: 13,
        color: "#000",
        textAlign: "center",
        fontFamily: "PoppinsMedium",
        marginBottom: 10

    },
}
)