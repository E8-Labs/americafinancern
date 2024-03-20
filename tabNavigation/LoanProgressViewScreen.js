import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { globalStyles } from '../StylesSheet/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HousingSituition from '../components/HousingSituition';



const GreenTick = require("../assets/American_Finance_App_image/TickCircleGreen-3x.png");
const GrayTick = require("../assets/American_Finance_App_image/TickCircleGray-3x.png");
const LineDote = require("../assets/American_Finance_App_image/Line&D-3x.png");
const FullGraphLine = require("../assets/American_Finance_App_image/GraphLineFull-3x.png");

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const LoanProgressViewScreen = (props) => {

    const [user, setUser] = useState(null);
    const [progress, setProgress] = useState(0)

    const Status = [
        {
            id: 1,
            status: "Profile",
            // tickImage: GreenTick,
            // lineDoteImage: LineDote,
            FullGraphLineImage: FullGraphLine,
        },
        {
            id: 2,
            status: "Identity",
            // tickImage: GreenTick,
            // lineDoteImage: LineDote,
            FullGraphLineImage: FullGraphLine,
        },
        {
            id: 3,
            status: "Loan Detail",
            // tickImage: user ? (user.user.active_loan = null ? GrayTick : GreenTick) : GrayTick,
            // lineDoteImage: LineDote,
            FullGraphLineImage: FullGraphLine,
        },
        {
            id: 4,
            status: "Income",
            // tickImage: GreenTick,
            // lineDoteImage: LineDote,
            FullGraphLineImage: FullGraphLine,
        },
        {
            id: 5,
            status: "Debt",
            // tickImage: (user ? (user.user.active_pay_day_loan != null ? GreenTick : GrayTick) : GrayTick),
            // lineDoteImage: LineDote,
            FullGraphLineImage: FullGraphLine,
        },
        {
            id: 6,
            status: "Housing",
            // tickImage: (user ? (user.user.houses_connected === true ? GreenTick : GrayTick) : GrayTick),
            // lineDoteImage: LineDote,
            FullGraphLineImage: FullGraphLine,
        },
    ];

    // getProgress();
    useEffect(() => {



        const getUser = async () => {
            let data = await AsyncStorage.getItem("USER")
            // console.log(data)
            if (data) {
                let u = JSON.parse(data)
                setUser(u)
                console.log("user get data from storage ", u)
            }
        };
        getUser();

    }, []);

    useEffect(() => {
        const getProgress = () => {
            console.log("User while chekcing progress", user)
            // profile connected 
            let p = 0
            // identity connected 
            user ? (user.user.identity_connected === 'success' ? p = p + 1 : p = p + 0) : p = p + 0
            if (p == 1) {
                user ? (user.user.liabilities_added === true ? p = p + 1 : p = p + 0) : p = p + 0  // may incorporate user loan flow here if wanted
            }
            if (p == 2) {
                p = p + 1 // for income details since we are not getting it as of now
            }
            if (p == 3) {
                user ? (user.user.liabilities_added === true ? p = p + 1 : p = p + 0) : p = p + 0  // user debt flow 
            }
            // p = p + 1 //   user ? (user.user.liabilities_added === true ? p = p + 1 : p = p + 0) : p = p + 0  // user debt flow 
            if (p == 4) {
                user ? (user.user.houses_connected === true ? p = p + 1 : p = p + 0) : p = p + 0

            }
        
            setProgress(p)

        };
        getProgress()
    }, [user])
    const continoueBtnHandle = () => {

        if (progress === null) {
            //profile added
        }

        if (progress === 0) {
            // identity conected true 
        }


        if (progress === 1) {
            if (user ? (user.user.active_payday_loan === null) : '') {
                // props.navigation.navigate("ActivePaydayLoans")

            }
        }
        if (progress === 2) {
            //income conected true
        }

        if (progress === 3) {
            props.navigation.navigate("ActivePaydayLoans")

        }
        if (progress === 4) {
            props.onNext("HousingSituition")
        }
    };


    return (
        <View style={{ alignItems: "center", marginTop: 25 / 852 * height }}>
            <View style={{ height: 268 / 852 * height, width: 359 / 393 * width, borderRadius: 29 / 852 * height, backgroundColor: "#fff" }} >
                <Text style={{ fontSize: 14 / 852 * height, fontWeight: "500", color: "#000", marginTop: 21 / 852 * height, paddingLeft: 23 / 393 * width }}>
                    Loan In Progress
                </Text>
                <FlatList scrollEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false}
                    data={Status}
                    renderItem={({ item, index }) =>

                        <View style={{ alignItems: 'center', marginTop: 10 / 852 * height, marginBottom: 20 / 852 * height }}>
                            <View style={{ marginTop: 10 / 852 * height }} >
                                <View style={{ borderTopWidth: 1, width: 120, borderColor: "#3e51fe", }}></View>
                                <ImageBackground source={item.FullGraphLineImage} style={{ height: height / 4, }} >
                                    {
                                        progress != index && (
                                            <View style={{ height: 70 / 852 * height, width: 40 / 852 * height, marginLeft: 50 / 393 * width, marginTop: -12 / 852 * height, backgroundColor: 'transparent' }}></View>
                                        )
                                    }
                                    {
                                        progress == index && (
                                            <Image source={LineDote} style={{ height: 70 / 852 * height, width: 40 / 852 * height, marginLeft: 50 / 393 * width, marginTop: -12 / 852 * height }} />
                                        )
                                    }

                                    <View style={{ alignItems: "center" }} >
                                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 / 852 * height, marginTop: 40 / 852 * height, }} >
                                            <Image source={progress < index ? GrayTick : GreenTick} style={{ height: 20 / 852 * height, width: 20 / 852 * height }} />
                                            <Text style={{ fontSize: 14 / 852 * height, fontWeight: "500", }}> {item.status} </Text>
                                        </View>
                                    </View>
                                </ImageBackground>
                                {/* <View style={{ borderTopWidth: 1, width: 150 / 852*height,borderColor:"#3e51fe",marginTop:-58/852*height}}></View> */}
                            </View>
                        </View>
                    }
                />
                <TouchableOpacity style={[globalStyles.capsuleButton, {
                    marginBottom: 15 / 852 * height, alignSelf: "center",
                    width: 315 / 393 * width, height: 54 / 852 * height, borderRadius: 24 / 852 * height
                }]}
                    onPress={continoueBtnHandle}
                >
                    <Text style={{ color: '#fff', fontSize: 18 / 852 * height, fontWeight: '500', textAlign: 'center' }}>
                        Continue
                    </Text>
                </TouchableOpacity>

                {/* </LinearGradient> */}
            </View>
        </View>
    );
};

export default LoanProgressViewScreen;
