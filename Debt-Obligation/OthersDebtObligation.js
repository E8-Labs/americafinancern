import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";
import ActivePaydayLoans from "./ActivePaydayLoans";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const CloseIcon = require("../assets/American_Finance_App_image/CloseBlackIcon-3x.png")

const OthersDebtObligation = (props) => {

    const [condition, setCondition] = useState('');
    const [amount, setAmount] = useState('');

    const nextBtnAction = () => {
        //console.log(  condition,)
        props.navigation.navigate("ActivePaydayLoans", {
            obligation: {
                debt_type: condition,
                monthly_debt_obligation: amount,
            },




        })

    }

    return (



        <View style={{ height: height, width: width }}>

            <View style={{ margin: 17 / 852 * height, marginTop: 32 / 852 * height, marginBottom: 0, }}>
                <Text style={{ alignSelf: "center", alignItems: "center", justifyContent: "Center", color: "#000", fontSize: 12 / 852 * height, fontWeight: "500" }}>
                    Debt Obligation
                </Text>
                <TouchableOpacity style={{ marginTop: -20 / 852 * height, alignSelf: "flex-end", height: 30 / 852 * height, width: 30 / 852 * height, borderRadius: 15 / 852 * height, backgroundColor: "#ececec", justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 10 / 852 * height, width: 10 / 393 * width, resizeMode: "contain" }} source={CloseIcon} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center", }}>
                <Text style={{ textAlign: "center", fontWeight:"700", fontSize: 26/852*height, color: "#000", marginTop: 27 / 852 * height }}>Other</Text>
            </View>
            <View style={{ marginTop: 27 / 852 * height,marginBottom:27,marginLeft:17/852*height,marginRight:17/852*height }}>
                <TextInput
                    placeholder="What’s the debt obligation?"
                    value={condition}
                    onChangeText={(item) => setCondition(item)}
                    style={{
                        backgroundColor: "#ececec", fontWeight:"500", color: "#717171", borderRadius:13/852*height
                    }}
                />
            </View>

            <View style={{backgroundColor: "#ececec", fontWeight:"500",marginLeft:17/852*height,marginRight:17/852*height, color: "#717171", borderRadius:13/852*height,}}>
                <TextInput style={{  color: "#000" }} placeholder="$"
                    value={amount}
                    onChangeText={(item) => setAmount(item)}
                />
            </View>


            <TouchableOpacity style={[globalStyles.capsuleButton, { marginTop: 62 / 852 * height, marginRight: 13 / 852 * height, alignSelf: "flex-end" }]}
                onPress={nextBtnAction}
            >
                <Text style={{ color: '#fff', fontSize: 18 / 852 * height, fontWeight: '500', textAlign: 'center' }}>
                    Submit
                </Text>
            </TouchableOpacity>

        </View>

    )

}
export default OthersDebtObligation;

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