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

const OthersDebtObligation = (props) => {

   const[condition,setCondition] = useState('');
   const[amount,setAmount] = useState('');

    const nextBtnAction = () =>{
        //console.log(  condition,)
        props.navigation.navigate("ActivePaydayLoans",{
            obligation:{
                debt_type: condition,
                monthly_debt_obligation: amount,
            },


          

        })

    }

    return (

       

            <View style={{ height: height,width:width }}>
                <View style={{ flexDirection: "column", alignItems: "center", }}>
                    <Text style={styles.incomTextSt}>Debt Obligation</Text>
                    <Text style={{ textAlign: "center", fontFamily: "PoppinsSemiBold", fontSize: 24, color: "#000", marginTop: 10 / 852 * height }}>Other</Text>
                </View>
                <View style={{ margin: 15/852*height, }}>
                    <TextInput 
                        placeholder="What’s the debt obligation?"
                        value={condition}
                        onChangeText={(item)=>setCondition(item)}
                        style={{
                             backgroundColor:"#f2f2f2",fontFamily:"PoppinsMedium",color:"#717171",height:49,borderRadius:13,padding:13,fontSize:14,}}
                    />
                </View>

                <View style={{ margin: 15/852*height,marginTop:5 }}>
                    <TextInput style={[globalStyles.textInputSt,{color:"#000"}]}  placeholder="$"
                         value={amount}
                         onChangeText={(item)=>setAmount(item)}
                    />
                </View>

                
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 42 / 852 * height, marginBottom: 20 / 852 * height, borderRadius: 30, marginRight: 25 / 852 * height, }}
                   onPress={nextBtnAction}
                >
                    <View style={globalStyles.arrowBotton}>
                        <Image source={Arrowicon}
                            style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: "center" }}
                        />
                    </View>
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