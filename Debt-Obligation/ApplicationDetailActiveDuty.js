import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";
import BankruptcyPetition from "./BankruptcyPetition";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


const StarIcon = require("../assets/American_Finance_App_image/StarIcon-3x.png");
const blackcheckicon = require("../assets/vector2.png");
const whitecheckicon = require("../assets/vector.png");
const Arrowicon = require("../assets/American_Finance_App_image/whiteArrowicon-3x.png");
const blackArrowicon =require ("../assets/American_Finance_App_image/blackArrowicon-3x.png");


const whitecheckiconHeight = 21 / 852 * height;
const smallcircleIconHeight = 34 / 852 * height;
const whiteArrowiconHeight = 24 / 852 * height;
const whiteArrowiconWidth = 24 / 412 * width;



const Status = [
    {
        name: "Army"
    },
    {
        name: "Navy"

    },
    {
        name: "Airforce"
    },
    {
        name: "Marine"

    },
    {
        name: "Coast Guard"
    },
    {
        name: "None"

    },

]



const ApplicationDetailActiveDuty = ({navigation,route}) => {

    const [selectedOption, setSelectedOption] = useState("");

    const obligation = route.params.obligation;
    obligation.active_duty_force = selectedOption;

    const nextBtnAction = () =>{
        navigation.navigate("BankruptcyPetition",{
            obligation:obligation
        })
    }

    return (

            <View style={{ height: height,width:width }}>
                 <View style={{ margin: 17 / 852 * height, marginTop: 32 / 852 * height, marginBottom: 0, }}>
                <TouchableOpacity style={{ height: 30 / 852 * height, width: 30 / 852 * height, borderRadius: 15 / 852 * height, backgroundColor: "#ececec", justifyContent: "center", alignItems: "center", }}>
                    <Image style={{ height: 10 / 852 * height, width: 10 / 393 * width, resizeMode: "contain" }} source={blackArrowicon} />
                </TouchableOpacity>
                <Text style={{ marginTop: -20 / 852 * height, alignSelf: "center", color: "#000", fontSize: 12 / 852 * height, fontWeight: "500", }}>
                    Application Details
                </Text>
            </View>
                <View style={{ flexDirection: "column", alignItems: "center", }}>

                    <View style={{ flexDirection: 'row', marginTop: 30 / 852 * height, alignItems: 'center', }}>

                        <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2 / 852 * height, backgroundColor: "#000" }}></View>

                        <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3 / 852 * height, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 }}></View>

                        <View style={{
                            height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5 / 852 * height, borderWidth: 1, alignSelf: "center", justifyContent: "center", alignItems: "center"
                        }}>
                            <Image source={StarIcon}
                                style={{
                                    height: 20 / 852 * height, width: 20 / 852 * height, resizeMode: 'contain', alignSelf: 'center', justifyContent: 'center'
                                }}
                            />
                        </View>

                        <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3 / 852 * height, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>
                        <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2 / 852 * height, backgroundColor: "#000" }}></View>



                    </View>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontWeight:"700", fontSize: 24 / 852 * height, color: "#000",marginTop:10/ 852 * height }}>Active Duty</Text>

                    <Text style={{ fontWeight:"500",fontSize: 14 / 852 * height, color: '#717171', marginBottom: 0, fontFamily: "PoppinsMedium",marginTop:10/ 852 * height }}>
                        Are you currently serving on active duty
                    </Text>
                    <Text style={{ fontWeight:"500",fontSize: 14 / 852 * height, color: '#717171', fontFamily: "PoppinsMedium" }}>
                        in the U.S. Armed Forces for purposes
                    </Text>
                    <Text style={{fontWeight:"500", fontSize: 14 / 852 * height, color: '#717171', fontFamily: "PoppinsMedium" }}>
                        other than training?
                    </Text>
                </View>


                <View style={{ flex: 2.6, paddingTop: 32 / 852 * height, }}>
                    <FlatList scrollEnabled={true} style={{ marginBottom: 0, }}
                        data={Status}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={{ margin: 15 / 852 * height, borderWidth: 0.5, borderRadius: 23 / 852 * height,borderColor:"#ccc",height:80/ 852 * height,alignItems:"center",justifyContent:"center" }} onPress={() => {
                                setSelectedOption(item.name)
                            }}>
                                <View style={styles.textViewSt}>
                                    <Text numberOfLines={2} lineBreakMode="tail" style={styles.textST}>{item.name}</Text>

                                    <View style={[styles.imageViewSt, { backgroundColor: selectedOption === item.name ? "#2468E8" : "#ececec" }]}>
                                        <Image source={selectedOption === item.name ? whitecheckicon : blackcheckicon} style={styles.imageSt} />
                                    </View>


                                </View>
                            </TouchableOpacity>

                        }
                    />
                </View>
                <View style={{ flex: 0.8 }}>
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
export default ApplicationDetailActiveDuty;

const styles = StyleSheet.create({

    textViewSt: {

        // height: viewborderHeight,

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
        marginLeft: 12/ 852 * height,
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