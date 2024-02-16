import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image, Dimensions, ScrollView, StyleSheet, TurboModuleRegistry } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";


const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const blackArrowicon = require("../assets/American_Finance_App_image/blackArrowicon-3x.png");
const Documentimage = require("../assets/American_Finance_App_image/LargeDocumentimage-3x.png");
const FrountIdCardImage = require("../assets/American_Finance_App_image/FrountIdCardImage-3x.png");
const ImageWithId = require("../assets/American_Finance_App_image/ImageWithId-3x.png");
const BackIdCardImage = require("../assets/American_Finance_App_image/BackIdCardImage-3x.png")

const MyDocumentsScreen = () => {

    return (
        <ScrollView style={{ height: height, width: width, }}>
            <View style={{ flexDirection: "row", margin: 17 / 852 * height, marginTop: 32/852*height, marginBottom: 0 }}>
                <TouchableOpacity>
                <Image style={{ height: 20 / 852 * height, width: 24 / 393 * width, }} source={blackArrowicon} />
                </TouchableOpacity>
                <Text style={{ marginLeft: 150 / 852 * height, color: "#000" }}>
                    My Documents
                </Text>
            </View>
            <View style={{ margin: 17 / 852 * height, flexDirection: "row", justifyContent: "space-between", marginTop: 36 / 852 * height }}>
                <Text style={{ fontSize: 18 / 852 * height, color: "#000", fontWeight: "500" }}>
                    Proof of income
                </Text>
                <TouchableOpacity style={{ height: 27 / 852 * height, width: 34 / 393 * width, alignItems: "center" }}>
                    <Text style={{ fontSize: 18 / 852 * height, color: "#2468e8", fontWeight: "700" }}>
                        Edit
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", margin: 17 / 852 * height, elevationBouttom: 5 }}>
                <TouchableOpacity>
                    <Image style={{ height: 256 / 852 * height, width: 197 / 393 * width, }} source={Documentimage} />
                    <Text style={{ textAlign: "center", fontWeight: "600", marginLeft: 17 / 852 * height, fontSize: 18 / 852 * height, color: "#000" }}>
                        Paystub0220231903.pdf
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 30 / 852 * height, margin: 17 / 852 * height, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18 / 852 * height, color: "#000", fontWeight: "500" }}>
                    Driver’s License
                </Text>
                <TouchableOpacity style={{ height: 27 / 852 * height, width: 34 / 393 * width, alignItems: "center" }}>
                    <Text style={{ fontSize: 18 / 852 * height, color: "#2468e8", fontWeight: "700" }}>
                        Edit
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} >
                <View style={{flexDirection: "column", alignItems: "center", justifyContent: 'center', marginLeft:15/852*height }}>
                    <TouchableOpacity style={{alignItems: "center" , width: 238 / 393 * width, borderRadius: 13 / 852 * height }}>
                        <Image style={{ borderRadius: 13 / 852 * height, height: 200 / 852 * height, width: 238 / 393 * width,borderRadius:13/852*height }} source={FrountIdCardImage} />
                    </TouchableOpacity>
                    <Text style={{ alignItems: "center", fontWeight: "500", fontSize: 18 / 852 * height }}>
                        Front
                    </Text>
                </View>

                <View style={{flexDirection: "column", alignItems: "center", justifyContent: 'center',marginRight:15/852*height,marginLeft:15/852*height }}>
                    <TouchableOpacity style={{alignItems: "center" , width: 238 / 393 * width, borderRadius: 13 / 852 * height }}>
                        <Image style={{ borderRadius: 13 / 852 * height, height: 200 / 852 * height, width: 238 / 393 * width,borderRadius:13/852*height }} source={BackIdCardImage} />
                    </TouchableOpacity>
                    <Text style={{ alignItems: "center", fontWeight: "500", fontSize: 18 / 852 * height }}>
                        Back
                    </Text>
                </View>

            </ScrollView>

            <View style={{ marginTop: 30 / 852 * height, margin: 17 / 852 * height, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18 / 852 * height, color: "#000", fontWeight: "500" }}>
                    Selfie
                </Text>
                <TouchableOpacity style={{ height: 27 / 852 * height, width: 34 / 393 * width, alignItems: "center" }}>
                    <Text style={{ fontSize: 18 / 852 * height, color: "#2468e8", fontWeight: "700" }}>
                        Edit
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", margin: 17/852*height, elevationBouttom: 5, marginBottom: 40/852*height }}>
                <TouchableOpacity style={{ height: 273 / 852 * height, }}>
                    <Image style={{ width: 256 / 852 * height, height: 273 / 852 * height, }} source={ImageWithId} />
                    <Text numberOfLines={1} lineBreakMode={"middle"} style={{width: 100/393*height, textAlign: "center", fontWeight: "600", marginLeft: -10 / 852 * height, marginTop: -25 / 852 * height, fontSize: 18 / 852 * height, color: "#000" }}>
                        Paystub0220231903.pdf
                    </Text>
                </TouchableOpacity>
            </View>

        </ScrollView>

    )
}



const styles = StyleSheet.create({
})



export default MyDocumentsScreen;