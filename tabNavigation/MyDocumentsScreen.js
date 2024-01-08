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
            <View style={{ flexDirection: "row", margin: 17 / 852 * height }}>
                <Image style={{ height: 20 / 852 * height, width: 24 / 393 * width, }} source={blackArrowicon} />
                <Text style={{ marginLeft: 120 / 852 * height, color: "#000" }}>
                    My Documents
                </Text>
            </View>
            <View style={{ margin: 17 / 852 * height, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18 / 852 * height, color: "#000", fontWeight: "500" }}>
                    Proof of income
                </Text>
                <TouchableOpacity style={{ height: 27 / 852 * height, width: 34 / 393 * width, alignItems: "center" }}>
                    <Text style={{ fontSize: 18 / 852 * height, color: "#2468e8", fontWeight: "700" }}>
                        Edit
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", margin: 17, elevationBouttom: 5 }}>
                <TouchableOpacity>
                    <Image style={{ height: 256 / 852 * height, width: 197 / 393 * width, }} source={Documentimage} />
                    <Text style={{ textAlign: "center", fontWeight: "600", marginLeft: 17 / 852 * height, marginTop: -18 / 852 * height, fontSize: 18 / 852 * height, color: "#000" }}>
                        Paystub0220231903.pdf
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{  marginTop:30/852*height, margin: 17 / 852 * height, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18 / 852 * height, color: "#000", fontWeight: "500" }}>
                    Driver’s License
                </Text>
                <TouchableOpacity style={{ height: 27 / 852 * height, width: 34 / 393 * width, alignItems: "center" }}>
                    <Text style={{ fontSize: 18 / 852 * height, color: "#2468e8", fontWeight: "700" }}>
                        Edit
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
            <View style={{  margin: 12, elevationBouttom: 5,flexDirection:"row" }}>
                <TouchableOpacity>
                    <Image style={{ height: 170 / 852 * height, width: 238 / 393 * width, }} source={FrountIdCardImage} />
                    <Text style={{ fontWeight: "600", marginLeft: 108 / 852 * height,marginTop: -20 / 852 * height, fontSize: 18 / 852 * height, color: "#000" }}>
                    Front
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image style={{ height: 170 / 852 * height, width: 238 / 393 * width, }} source={BackIdCardImage} />
                    <Text style={{ fontWeight: "600", marginLeft: 108 / 852 * height,marginTop: -20 / 852 * height, fontSize: 18 / 852 * height, color: "#000" }}>
                    Back
                    </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>

            <View style={{  marginTop:30/852*height, margin: 17 / 852 * height, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18 / 852 * height, color: "#000", fontWeight: "500" }}>
                Selfie
                </Text>
                <TouchableOpacity style={{ height: 27 / 852 * height, width: 34 / 393 * width, alignItems: "center" }}>
                    <Text style={{ fontSize: 18 / 852 * height, color: "#2468e8", fontWeight: "700" }}>
                        Edit
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", margin: 17, elevationBouttom: 5 ,}}>
                <TouchableOpacity>
                    <Image style={{ height: 256 / 852 * height, width: 197 / 393 * width, }} source={ImageWithId} />
                    <Text style={{ textAlign: "center", fontWeight: "600", marginLeft: -10 / 852 * height, marginTop: -18 / 852 * height, fontSize: 18 / 852 * height, color: "#000" }}>
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