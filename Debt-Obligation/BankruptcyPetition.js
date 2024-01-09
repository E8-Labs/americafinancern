import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";
import OutstandingDebtScreen from "./OutstandingDebtScreen";
import FinancialDetailsScreen from "./FinancialDetailsScreen";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


const PiggyBank = require("../assets/American_Finance_App_image/PiggyBank-3x.png");
const blackcheckicon = require("../assets/American_Finance_App_image/blackcheckicon-3x.png");
const whitecheckicon = require("../assets/American_Finance_App_image/whitecheckicon-3x.png");
const Arrowicon = require("../assets/American_Finance_App_image/whiteArrowicon-3x.png");
const blackArrowicon =require ("../assets/American_Finance_App_image/blackArrowicon-3x.png");



const whitecheckiconHeight = 21 / 852 * height;
const smallcircleIconHeight = 34 / 852 * height;
const whiteArrowiconHeight = 24 / 852 * height;
const whiteArrowiconWidth = 24 / 412 * width;



const Status = [
    {
        name: "No",
        minYear:null,
        maxYear:null
    },
    {
        name: "Within 3 months",
        minYear:0,
        maxYear:3

    },
    {
        name: "Within 3-6 Months",
        minYear:3,
        maxYear:6
    },
    {
        name: "Within 6-9 Months",
        minYear:6,
        maxYear:9

    },
    {
        name: "Within 9-12 Months",
        minYear:9,
        maxYear:12
    },

]



const BankruptcyPetition = ({navigation,route}) => {

    const [selectedOption, setSelectedOption] = useState("");

    const obligation = route.params.obligation;
  
    obligation.bankruptcy_min_year = selectedOption.minYear;
    obligation.bankruptcy_max_year = selectedOption.maxYear;
    console.log(obligation)

    const nextBtnAction = () =>{
        navigation.navigate("FinancialDetailsScreen",{
            obligation:obligation
        })
    }
  

    return (

      

            <View style={{ height: height,width:width }}>
                <View style={{ flexDirection: "row", margin: 17 / 852 * height, marginTop: 32/852*height, marginBottom: 0,gap:110/393*width }}>
                    <Image style={{ height: 20 / 852 * height, width: 24 / 393 * width, }} source={blackArrowicon} />
                        <Text style={{  color: "#000",fontSize:12 / 852 * height,fontWeight:"500" }}>
                        Application Details
                        </Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", }}>

                    <View style={{ flexDirection: 'row', marginTop: 37 / 852 * height, alignItems: 'center', }}>

                        <View style={{ width: 2/ 852 * height, height: 2/ 852 * height, borderRadius: 2/ 852 * height, backgroundColor: "#000" }}></View>

                        <View style={{ width: 6/ 852 * height, height: 6/ 852 * height, borderRadius: 3/ 852 * height, backgroundColor: "#000", marginRight: 9/ 852 * height, marginLeft: 6/ 852 * height }}></View>

                        <View style={{
                            height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5/ 852 * height, borderWidth: 1, alignSelf: "center" ,justifyContent: "center", alignItems: "center"}}>
                            <Image source={PiggyBank}
                                style={{
                                    height: 21, width: 21, alignSelf: 'center', justifyContent: 'center',marginTop:4
                                }}
                            />
                        </View>

                        <View style={{ width: 6/ 852 * height, height: 6/ 852 * height, borderRadius: 3/ 852 * height, backgroundColor: "#000", marginRight: 9/ 852 * height, marginLeft: 6/ 852 * height }}></View>
                        <View style={{ width: 2/ 852 * height, height: 2/ 852 * height, borderRadius: 2/ 852 * height, backgroundColor: "#000" }}></View>



                    </View>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontWeight:"500", fontSize: 24/ 852 * height, color: "#000" }}>Bankruptcy Status</Text>

                    <Text style={{fontWeight:"500", fontSize: 14/ 852 * height, color: '#717171', marginBottom: 0, fontFamily: "PoppinsMedium" }}>
                    In the past year, have you filed a 
                    </Text>
                    <Text style={{ fontWeight:"500",fontSize: 14/ 852 * height, color: '#717171', fontFamily: "PoppinsMedium" }}>
                    bankruptcy petition or been involved in
                    </Text>
                    <Text style={{ fontWeight:"500",fontSize: 14/ 852 * height, color: '#717171', fontFamily: "PoppinsMedium" }}>
                    a bankruptcy proceeding?
                    </Text>
                </View>






                <View style={{ flex: 2.6, paddingTop: 18/ 852 * height, }}>
                    <FlatList scrollEnabled={true} style={{ marginBottom: 0, }}
                        data={Status}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={{ margin: 15/ 852 * height, borderWidth: 0.5, borderRadius: 23/ 852 * height,height:80/ 852 * height,alignItems:"center",justifyContent:"center",borderColor:"#ccc" }} onPress={() => {
                                setSelectedOption(item)
                            }}>
                                <View style={styles.textViewSt}>
                                    <Text numberOfLines={2} lineBreakMode="tail" style={styles.textST}>{item.name}</Text>


                                    <View style={[styles.imageViewSt, { backgroundColor: selectedOption === item ? "#2468E8" : "#f2f2f2" }]}>
                                        <Image source={selectedOption === item ? whitecheckicon : blackcheckicon} style={styles.imageSt} />
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
        fontSize: 18/ 852 * height,
        color: "#000",
        flexDirection: "row",
        flex: 1,
        marginLeft: 15/ 852 * height,
        fontFamily: "PoppinsMedium",
        borderRadius: 23/ 852 * height,
        fontWeight:"500"


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