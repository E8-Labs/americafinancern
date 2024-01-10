import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, KeyboardAvoidingView, Platform, Modal, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";


const ThreeDoteIcon = require("../assets/American_Finance_App_image/ThreeDoteIcon-3x.png");
const blackArrowicon = require("../assets/American_Finance_App_image/blackArrowicon-3x.png");
const AddIcon = require("../assets/American_Finance_App_image/AddIcon-3x.png")
const Arrowicon = require("../assets/American_Finance_App_image/whiteArrowicon-3x.png");
const CloseIcon = require("../assets/American_Finance_App_image/CloseIcon-3x.png");
const blackcheckicon = require("../assets/American_Finance_App_image/blackcheckicon-3x.png");
const whitecheckicon = require("../assets/American_Finance_App_image/whitecheckicon-3x.png");
const Dollaricon = require("../assets/American_Finance_App_image/DollarIcon-3x.png");



const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


const Status = [
    {
        name: "Credit Card"
    },
    {
        name: "Loans"

    },
    {
        name: "Others"
    },

]

const transparent = "#121212"

const OutstandingDebtScreen = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);


    const openModal1 = () => {
        setModal1Visible(true);
    };

    const closeModal1 = () => {
        setModal1Visible(false);
    };

    const openModal2 = () => {
        setModal2Visible(true);
    };

    const closeModal2 = () => {
        setModal2Visible(false);
    };



    return (
        <View  >
            <View >
            <View style={{ margin: 17 / 852 * height, marginTop: 32 / 852 * height, marginBottom: 0, }}>
                <TouchableOpacity style={{ height: 30 / 852 * height, width: 30 / 852 * height, borderRadius: 15 / 852 * height, backgroundColor: "#ececec", justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 10 / 852 * height, width: 10 / 393 * width, resizeMode: "contain" }} source={blackArrowicon} />
                </TouchableOpacity>
                <Text style={{ marginTop: -20 / 852 * height, alignSelf: "center", alignItems: "center", justifyContent: "Center", color: "#000", fontSize: 12 / 852 * height, fontWeight: "500" }}>
                    Application Details
                </Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center", }}>

                <View style={{ flexDirection: 'row', marginTop: 37 / 852 * height, alignItems: 'center', }}>

                    <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2 / 852 * height, backgroundColor: "#000" }}></View>

                    <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3 / 852 * height, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>

                    <View style={{
                        height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5 / 852 * height, borderWidth: 1, alignSelf: "center", justifyContent: "center", alignItems: "center"
                    }}>
                        <Image source={Dollaricon}
                            style={{
                                height: 20/852*height, width: 20/852*height,resizeMode:"contain",
                            }}
                        />
                    </View>

                    <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3 / 852 * height, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>
                    <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2 / 852 * height, backgroundColor: "#000" }}></View>



                </View>
            </View>

            <View style={{ flexDirection: "column", alignItems: "center" }}>

                <View style={{ alignItems: "center",  }}>
                    <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 24/852*height,color:"#000", alignSelf: "center",fontWeight:"700" }} >Outstanding debt</Text>
                </View>

                <Text style={{ fontSize: 12/852*height, color: '#717171', margin: 10 / 852 * height, marginBottom: 0, fontWeight: "500", }}>
                    (Please ensure all information entered on your application
                </Text>
                <Text style={{ fontSize: 12/852*height, color: '#717171', fontWeight: "500" }}>
                    is accurate and verifiable, America Finance will verify the
                </Text>
                <Text style={{ fontSize: 12/852*height, color: '#717171', fontWeight: "500" }}>
                    accuracy of all information submitted.)
                </Text>
            </View>

                <View style={{ justifyContent: "space-between", height: 136 / 852 * height, width: 373 / 393 * width, borderWidth: 1, borderRadius: 31/852*height, backgroundColor: "#fff", borderColor: "#ececec", alignSelf: "center", marginTop: 26 / 852 * height }}>
                    <View  >
                        <View style={{ flexDirection: "row", margin: 15 / 852 * height, marginBottom: 0, justifyContent: "space-between", }}>
                            <Text style={{ fontWeight:"500", color: "#2468e8", fontSize: 18 / 852 * height, marginBottom: 0 }}>Noah Nega</Text>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <TouchableOpacity style={{ alignSelf: "center", borderRadius: 30/852*height, }} onPress={openModal1}>
                                    <View style={{ height: 34 / 852 * height, width: 34 / 852 * height, backgroundColor: "#f2f2f2", opacity: 0.5, justifyContent: "center", alignItems: "center", borderRadius: 17/852*height, marginRight: 19/852*height }}>
                                        <Image source={ThreeDoteIcon}
                                            style={{ height: 4 / 852 * height, width: 20 / 393 * width, resizeMode: "contain" }}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>


                        <Text style={{ marginLeft: 17/852*height, marginRight: 17/852*height, color: "#1f0505", fontSize: 14 / 852 * height, fontWeight:"500", marginTop: -8 / 852 * height }}>Account Number</Text>


                        <View style={{ flexDirection: "row", marginLeft: 17/852*height,marginTop:5/852*height, marginRight: 17/852*height, justifyContent: "space-between", }}>
                            <Text style={{ fontSize: 22 / 852 * height, fontWeight:"500", color: "#1f0505", }}>$8,257</Text>
                            <Text style={{ color: "#717171", fontSize: 14 / 852 * height, fontWeight:"500", }}>Balance: $247</Text>
                        </View>

                        <Text style={{ alignSelf: "flex-end", marginLeft: 17/852*height, marginRight: 17/852*height, color: "#717171", fontSize: 14 / 852 * height, fontWeight:"500", }}>Due on 02/08/2023</Text>
                    </View>


                </View>



                <TouchableOpacity style={{ height: 93 / 852 * height, width: 354 / 393 * width, borderWidth: 1, borderRadius: 31/852*height, alignSelf: "center", marginTop: 18 / 852 * height, borderColor: "#ececec", justifyContent: "center", alignContent: "center" }} onPress={openModal2} >
                    <View style={{ borderColor: "#1f0505", flexDirection: "row", alignItems: "center", }}>
                        <Text style={{ fontSize: 14/852*height, color: "#1f0505", flexDirection: "row", flex: 1, marginLeft: 17/852*height, fontWeight:"500", }}>Add another</Text>

                        <View style={{ alignSelf: 'flex-end', borderRadius: 30, marginRight: 25 / 852 * height, }} >
                            <View style={{ height: 59 / 852 * height, width: 59 / 852 * height, backgroundColor: '#2468E8', borderRadius: 35/852*height, alignItems: 'center', justifyContent: 'center', }}>
                                <Image source={AddIcon}
                                    style={{ height: 21.5 / 852 * height, width: 20.5 / 852 * height }}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 145 / 852 * height,borderRadius: 30/852*height, marginRight: 25 / 852 * height, }} >
                    <View style={globalStyles.arrowBotton}>
                        <Image source={Arrowicon}
                            style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: "center" }}
                        />
                    </View>
                </TouchableOpacity>
            </View>


            <Modal
                transparent={true}
                visible={modal2Visible}
                onRequestClose={closeModal2}>

                <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: '#00000050' }}>
                    <View style={{ elevation: 5, shadowColor: "#000", height: 375 / 852 * height, width: 353 / 393 * width, alignSelf: "center", backgroundColor: "#fff", borderRadius: 30/852*height, marginTop: 26/852*height }}>
                        <FlatList scrollEnabled={true} style={{ marginTop: 20 / 852 * height }}
                            data={Status}
                            renderItem={({ item }) =>
                                <View >
                                    <TouchableOpacity onPress={() => {setSelectedOption(item.name)}} style={{ margin: 15/852*height, borderWidth: 1, borderRadius: 23/852*height, height: 80 / 852 * height,borderColor:"#ececec" }}>
                                        <View style={styles.textViewSt}>
                                            <Text numberOfLines={2} lineBreakMode="tail" style={styles.textST}>{item.name}</Text>


                                            <View style={[styles.imageViewSt, { backgroundColor: selectedOption === item.name ? "#2468E8" : "#f2f2f2" }]}>
                                                <Image source={selectedOption === item.name ? whitecheckicon : blackcheckicon} style={styles.imageSt} />
                                            </View>


                                        </View>
                                    </TouchableOpacity>
                                </View>

                            }
                        />


                    </View>
                    <View style={{ elevation: 5, shadowColor: "#000" }} >
                        <TouchableOpacity onPress={closeModal2} style={{ height: 81 / 852 * height, width: 81 / 852 * height, backgroundColor: "#fff", justifyContent: "center", alignItems: "center", alignSelf: "center", borderRadius: 40.5 / 852 * height, margin: 13 / 852 * height }}  >
                            <View >
                                <Image
                                    source={CloseIcon} style={{ height: 24 / 852 * height, width: 24 / 852 * height }} />

                            </View>
                        </TouchableOpacity>

                    </View>
                </View>


            </Modal>


            <Modal
                transparent={true}
                visible={modal1Visible}
                onRequestClose={closeModal1}


            >
                <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: '#00000050' }}>
                    <View style={{ elevation: 5, shadowColor: "#000", height: 189 / 852 * height, width: 369 / 393 * width, alignSelf: "center", backgroundColor: "#fff", borderRadius: 30/852*height, marginTop: 26/852*height, alignItems: "center" }}>
                        <Text style={{ fontSize: 14 / 852 * height, fontWeight: "500", color: "#000", margin: 17 / 852 * height }}>
                            More Options
                        </Text>
                        <TouchableOpacity style={{ height: 55 / 852 * height, width: 253 / 393 * width, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: 18 / 852 * height, fontWeight: "500", color: "#000" }}>
                                Edit
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: 55 / 852 * height, width: 253 / 393 * width, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: 18 / 852 * height, fontWeight: "500", color: "#ff124b" }}>
                                Delete
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ elevation: 5, shadowColor: "#000" }} >
                        <TouchableOpacity onPress={closeModal1} style={{ height: 81 / 852 * height, width: 81 / 852 * height, backgroundColor: "#fff", justifyContent: "center", alignItems: "center", alignSelf: "center", borderRadius: 40.5 / 852 * height, margin: 13 / 852 * height }}>
                            <View >
                                <Image
                                    source={CloseIcon} style={{ height: 24 / 852 * height, width: 24 / 852 * height }} />

                            </View>
                        </TouchableOpacity>

                    </View>
                </View>


            </Modal>






        </View>
    );
}
export default OutstandingDebtScreen;

const styles = StyleSheet.create({
    textViewSt: {
        borderColor: "#000",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    textST: {
        fontSize: 18/852*height,
        color: "#000",
        fontWeight:"500",
        flexDirection: "row",
        flex: 1,
        marginLeft: 15/852*height,
        fontFamily: "PoppinsMedium",
        borderRadius: 23/852*height,
    },
    imageViewSt: {
        backgroundColor: "#1e90ff",
        height: 34 / 852 * height,
        width: 34 / 852 * height,
        borderRadius: 17/852*height,
        margin: 15/852*height,
        justifyContent: "center",
    },
    imageSt: {
        height: 21 / 852 * height,
        width: 21 / 852 * height,
        alignSelf: "center",

    },

})

