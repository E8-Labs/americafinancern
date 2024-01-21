import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { globalStyles } from '../StylesSheet/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';




const GreenTick = require("../assets/American_Finance_App_image/TickCircleGreen-3x.png");
const GrayTick = require("../assets/American_Finance_App_image/TickCircleGray-3x.png");
const LineDote = require("../assets/American_Finance_App_image/Line&D-3x.png");
const FullGraphLine = require("../assets/American_Finance_App_image/GraphLineFull-3x.png");



const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const LoanProgressViewScreen = () => {

    const [user, setUser] = useState(null);
    const [isHidden, setIsHidden] = useState(true);

    const Status = [
        {
            id: 1,
            status: "Profile",
            tickImage: GreenTick,
            lineDoteImage: LineDote,
            FullGraphLineImage: FullGraphLine,
        },
        {
            id: 2,
            status: "Identity",
            tickImage: GreenTick,
            lineDoteImage: LineDote,
            FullGraphLineImage: FullGraphLine,
        },
        {
            id: 3,
            status: "Loan Detail",
            tickImage: GreenTick,
            lineDoteImage: LineDote,
            FullGraphLineImage: FullGraphLine,
        },
        {
            id: 4,
            status: "Income",
            tickImage: GreenTick,
            lineDoteImage: LineDote,
            FullGraphLineImage: FullGraphLine,
        },
        {
            id: 5,
            status: "Debt",
            tickImage: GreenTick,
            lineDoteImage: LineDote,
            FullGraphLineImage: FullGraphLine,
        },
        {
            id: 6,
            status: "Housing",
            tickImage: (user ? (user.user.houses_connected === true ? GreenTick : GrayTick) : GrayTick),
            lineDoteImage: LineDote,
            FullGraphLineImage: FullGraphLine,
        },


    ];


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
    }, [])



    return (
        <View style={{ alignItems: "center", marginTop: 25 / 852 * height }}>
            <View style={{ height: 268 / 852 * height, width: 359 / 393 * width, borderRadius: 29 / 852 * height, backgroundColor: "#fff" }} >
                <Text style={{ fontSize: 14 / 852 * height, fontWeight: "500", color: "#000", marginTop: 21 / 852 * height, paddingLeft: 23 / 393 * width }}>
                    Loan In Progress
                </Text>
                <FlatList scrollEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false}
                    data={Status}
                    renderItem={({ item }) =>

                        <View style={{ alignItems: 'center', marginTop: 10 / 852 * height, marginBottom: 20 / 852 * height }}>
                            <View style={{ marginTop: 10 / 852 * height }} >
                                <View style={{ borderTopWidth: 1, width: 119.9 / 852 * height, borderColor: "#3e51fe", }}></View>
                                <ImageBackground source={item.FullGraphLineImage} style={{ height: height / 4, }} >
                                    <Image source={item.lineDoteImage} style={{ height: 70 / 852 * height, width: 40 / 852 * height, marginLeft: 50 / 393 * width, marginTop: -12 / 852 * height }} />
                                    <View style={{ alignItems: "center" }} >
                                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 8 / 852 * height, marginTop: 40 / 852 * height, }} >
                                            <Image source={item.tickImage} style={{ height: 20 / 852 * height, width: 20 / 852 * height }} />
                                            <Text style={{ fontSize: 14 / 852 * height, fontWeight: "500", }}> {item.status} </Text>
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>
                                {/* <View style={{ borderTopWidth: 1, width: 150 / 852*height,borderColor:"#3e51fe",marginTop:-58/852*height}}></View> */}
                            </View>
                        </View>
                    }
                />
                <TouchableOpacity style={[globalStyles.capsuleButton, { marginBottom: 15 / 852 * height, alignSelf: "center", width: 315 / 393 * width, height: 54 / 852 * height, borderRadius: 24 / 852 * height }]}>
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
