import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, KeyboardAvoidingView, Platform, Modal, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Apis from "../Api/apipath";
import ApplicationDetailsScreen from "./ApplicationDetailsScreen";
import MonthlyDebtObligation from "./MonthlyDebtObligation";


const ThreeDoteIcon = require("../assets/American_Finance_App_image/ThreeDoteIcon-3x.png");
const blackArrowicon = require("../assets/American_Finance_App_image/blackArrowicon-3x.png");
const AddIcon = require("../assets/American_Finance_App_image/AddIcon-3x.png")
const Arrowicon = require("../assets/American_Finance_App_image/whiteArrowicon-3x.png");
const CloseIcon = require("../assets/American_Finance_App_image/CloseIcon-3x.png");
const blackcheckicon = require("../assets/vector2.png");
const whitecheckicon = require("../assets/vector.png");
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

const OutstandingDebtScreen = (props) => {


    
const addAnotherAccount = () =>{
}


    useEffect(() => {
        const getDebtList = async () => {
            const d = await AsyncStorage.getItem("USER")
            if (d) {
                let u = JSON.parse(d)
                setUser(u)
                console.log("user data is ", u)

                let token = u.token;
                console.log(token)

                const result = await fetch(Apis.ApiGetDebt, {
                    method: 'get',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + token,
                    },

                })

                if (result) {
                    const json = await result.json();
                    // console.log("data is", json)
                    let dat = json.data
                    dat.push({ id: 321453 })
                    setData(dat)

                } else {
                    console.log("error")
                }

            }


        }

        getDebtList();

    }, [])

    // useEffect(() => {
    //     console.log("---------------------------------------")
    //     // console.log("Data is changed", data)
    //     console.log("---------------------------------------")
    // }, [data])



    const [selectedOption, setSelectedOption] = useState("");
    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);

    const [user, setUser] = useState(null)
    const [data, setData] = useState([])


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
                        <Text style={{ marginTop: -20 / 852 * height, alignSelf: "center", color: "#000", fontSize: 12 / 852 * height, fontWeight: "500" }}>
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
                                        height: 20 / 852 * height, width: 20 / 852 * height, resizeMode: "contain",
                                    }}
                                />
                            </View>

                            <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3 / 852 * height, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>
                            <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2 / 852 * height, backgroundColor: "#000" }}></View>

                        </View>
                    </View>

                    <View style={{ flexDirection: "column", alignItems: "center" }}>

                        <View style={{ alignItems: "center", }}>
                            <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 24 / 852 * height, color: "#000", fontWeight: "700" }} >Outstanding debt</Text>
                        </View>

                        <Text style={{ fontSize: 12 / 852 * height, color: '#717171', margin: 10 / 852 * height, marginBottom: 0, fontWeight: "500", }}>
                            (Please ensure all information entered on your application
                        </Text>
                        <Text style={{ fontSize: 12 / 852 * height, color: '#717171', fontWeight: "500" }}>
                            is accurate and verifiable, America Finance will verify the
                        </Text>
                        <Text style={{ fontSize: 12 / 852 * height, color: '#717171', fontWeight: "500" }}>
                            accuracy of all information submitted.)
                        </Text>
                    </View>

                <View style={{height:500/852*height,justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
                    <FlatList style={{}}
                        data={data}
                        renderItem={(listItem) => {
                            return (listItem.index < data.length - 1 ?
                                debtDataVeiw(listItem.item) : (

                                    <TouchableOpacity style={{ height: 93 / 852 * height, width: 354 / 393 * width, borderWidth: 1, borderRadius: 31 / 852 * height, alignSelf: "center", marginTop: 18 / 852 * height, borderColor: "#ececec", justifyContent: "center", alignContent: "center" }} onPress={()=>props.navigation.navigate("MonthlyDebtObligation")} >
                                        <View style={{ borderColor: "#1f0505", flexDirection: "row", alignItems: "center", }}>
                                            <Text style={{ fontSize: 14 / 852 * height, color: "#1f0505", flexDirection: "row", flex: 1, marginLeft: 17 / 852 * height, fontWeight: "500", }}>Add another</Text>

                                            <View style={{ alignSelf: 'flex-end', borderRadius: 30, marginRight: 25 / 852 * height, }} >
                                                <View style={{ height: 59 / 852 * height, width: 59 / 852 * height, backgroundColor: '#2468E8', borderRadius: 35 / 852 * height, alignItems: 'center', justifyContent: 'center', }}>
                                                    <Image source={AddIcon}
                                                        style={{ height: 21.5 / 852 * height, width: 20.5 / 852 * height }}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))
                        }}
                    />
                </View>
                <View style={{ width: width - 20 / 393 * width, marginTop: 20 / 852 * height, }}>
                    <TouchableOpacity style={{ borderRadius: 30 / 852 * height, alignSelf: 'flex-end' }} >
                        <View style={globalStyles.arrowBotton}>
                            <Image source={Arrowicon}
                                style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: "center" }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>


            <Modal
                transparent={true}
                visible={modal2Visible}
                onRequestClose={closeModal2}>

                <View style={{ justifyContent: "flex-end", backgroundColor: '#00000050',height:height, }}>
                    <View style={{ elevation: 5, shadowColor: "#000", height: 375 / 852 * height, width: 353 / 393 * width, alignSelf: "center", backgroundColor: "#fff", borderRadius: 30 / 852 * height, marginTop: 26 / 852 * height }}>
                        <FlatList scrollEnabled={true} style={{ marginTop: 20 / 852 * height }}
                            data={Status}
                            renderItem={({ item }) =>
                                <View >
                                    <TouchableOpacity onPress={() => { setSelectedOption(item.name) }} style={{ margin: 15 / 852 * height, borderWidth: 1, borderRadius: 23 / 852 * height, height: 80 / 852 * height, borderColor: "#ececec" }}>
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
                    <View style={{ elevation: 5, shadowColor: "#000" ,marginBottom:30/852*height}} >
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
                <View style={{ justifyContent: "flex-end", backgroundColor: '#00000050',height:height }}>
                    <View style={{ elevation: 5, shadowColor: "#000", height: 189 / 852 * height, width: 369 / 393 * width, alignSelf: "center", backgroundColor: "#fff", borderRadius: 30 / 852 * height, marginTop: 26 / 852 * height, alignItems: "center", justifyContent: 'center' }}>
                        <Text style={{ fontSize: 14 / 852 * height, fontWeight: "500", color: "#000", margin: 17 / 852 * height }}>
                            More Options
                        </Text>
                        <TouchableOpacity style={{ height: 55 / 852 * height, width: 253 / 393 * width, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: 18 / 852 * height, fontWeight: "500", color: "#000" }}>
                                Edit
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: 55 / 852 * height, width: 253 / 393 * width, alignItems: 'center', }}>
                            <Text style={{ fontSize: 18 / 852 * height, fontWeight: "500", color: "#ff124b" }}>
                                Delete
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ elevation: 5, shadowColor: "#000",marginBottom:30/852*height }} >
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

    function debtDataVeiw(item) {
        console.log("Item ", item)
        return <View style={{ height: 176 / 852 * height, width: 361 / 393 * width, borderRadius: 31 / 852 * height, marginTop: 14 / 852 * height, alignSelf: "center", backgroundColor: "#2468e8", borderColor: "#ececec" }}>
            <View style={{ justifyContent: "space-between", height: 124 / 852 * height, width: 359 / 393 * width, borderWidth: 1, borderRadius: 31 / 852 * height, backgroundColor: "#fff", borderColor: "#ececec", }}>
                <View>
                    <View style={{ flexDirection: "row", marginTop: 17 / 852 * height, marginBottom: 0, justifyContent: "space-between", marginLeft: 22 / 852 * height, marginRight: 22 / 852 * height }}>
                        <Text style={{ fontWeight: "500", color: "#2468e8", fontSize: 18 / 852 * height, }}>{(item.user.firstname) + (item.user.lastname)}</Text>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity style={{ alignSelf: "center", borderRadius: 17 / 852 * height, }} onPress={openModal1}>
                                <View style={{ height: 34 / 852 * height, width: 34 / 852 * height, backgroundColor: "#f2f2f2", justifyContent: "center", alignItems: "center", borderRadius: 17 / 852 * height, }}>
                                    <Image source={ThreeDoteIcon}
                                        style={{ height: 4 / 852 * height, width: 20 / 393 * width, resizeMode: "contain" }} />
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ flexDirection: "row", marginLeft: 22 / 852 * height, marginRight: 22 / 852 * height, justifyContent: "space-between", }}>
                        <Text style={{ color: "#1f0505", fontSize: 14 / 852 * height, fontWeight: "500", }}>Balance</Text>
                        <Text style={{ color: "#2468e8", fontSize: 14 / 852 * height, fontWeight: "bold", marginTop: 6 / 852 * height }}>{item.lender_name}</Text>
                    </View>

                    <Text style={{ marginLeft: 22 / 852 * height, marginRight: 22 / 852 * height, fontSize: 22 / 852 * height, fontWeight: "500", color: "#000", }}>${item.total_balance_amount}</Text>

                </View>


            </View>

            <View style={{ flexDirection: "row", marginTop: 10 / 852 * height, justifyContent: 'space-between', marginLeft: 20 / 852 * height, marginRight: 19 / 852 * height }}>
                <Text style={{ color: "#fff", fontSize: 14 / 852 * height, fontWeight: "500" }}>Mo. Payment : ${item.monthly_payment}</Text>
                <Text style={{ color: "#fff", fontSize: 14 / 852 * height, fontWeight: "500", }}>Due on {item.due_date} </Text>
            </View>

        </View>;
    }
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
        fontSize: 18 / 852 * height,
        color: "#000",
        fontWeight: "500",
        flexDirection: "row",
        flex: 1,
        marginLeft: 15 / 852 * height,
        fontFamily: "PoppinsMedium",
        borderRadius: 23 / 852 * height,
    },
    imageViewSt: {
        backgroundColor: "#1e90ff",
        height: 34 / 852 * height,
        width: 34 / 852 * height,
        borderRadius: 17 / 852 * height,
        margin: 15 / 852 * height,
        justifyContent: "center",
    },
    imageSt: {
        height: 21 / 852 * height,
        width: 21 / 852 * height,
        alignSelf: "center",

    },

})

