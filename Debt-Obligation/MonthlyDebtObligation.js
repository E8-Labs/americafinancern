import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";
import ActivePaydayLoans from "./ActivePaydayLoans";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


const BankBagIcon = require("../assets/American_Finance_App_image/BankBagIcon-3x.png");
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



const MonthlyDebtObligation = ({navigation,route}) => {

    const [amount,setAmount] = useState('')

    const obligation = route.params.obligation
    obligation.monthly_debt_obligation = amount;
    console.log("data ia " ,obligation)

    const nextBtnAction = () =>{
        navigation.navigate("ActivePaydayLoans",{
           obligation:obligation,
        })
    }


    return (

            <View style={{ height: height,width:width }}>
                <View style={{ flexDirection: "column", alignItems: "center", }}>
                    <Text style={styles.incomTextSt}>Debt Obligation</Text>

                    <Text style={{ textAlign: "center", fontFamily: "PoppinsSemiBold", fontSize: 24, color: "#000", marginTop: 10 / 852 * height }}>{obligation.debt}</Text>

                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontFamily: "PoppinsMedium", fontSize: 12, color: "#717171" }} >(Please enter the monthly debt obligation </Text>
                        <Text style={{ fontFamily: "PoppinsMedium", fontSize: 12, marginTop: -2.5, color: "#717171" }} >for the selected debt)</Text>
                    </View>
                </View>
                <View style={{backgroundColor:"#f2f2f2",borderRadius:13, flexDirection:"row",margin: 10,alignItems:"center",height:70/852*height}}>
                    <Text style={{fontFamily: "PoppinsMedium", fontSize: 14, color: "#717171",padding:7}} >$</Text>
                    <TextInput style={{flex:1, fontSize:14,fontFamily: "PoppinsMedium",paddingRight:7}} keyboardType="numeric"autoFocus={true}
                        value={amount}
                        onChangeText={(text) =>setAmount(text)}
                    />
                    
                </View>

                <TouchableOpacity style={[globalStyles.capsuleButton, { marginTop: 30/852*height, marginRight: 13, alignSelf: "flex-end" }]}
                    onPress={nextBtnAction}
                >
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500', textAlign: 'center' }}>
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