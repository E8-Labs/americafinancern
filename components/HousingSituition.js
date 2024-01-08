import React, { useState } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { globalStyles } from "./GlobalStyles";
import Snackbar from "react-native-snackbar";
const { height, width } = Dimensions.get('window');


const wightIcon = require('../assets/vector.png');
const blackIcon = require('../assets/vector2.png');

const HousingSituition = (props) => {

    const nextBtnAction = () => {

        if (slected == null) {
            Snackbar.show({
                text: 'Please enter all cridentials',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: 'red',
                marginBottom: 10,
            })
            return
        }
        if (slected === 2) {
            props.navigation.navigate("HouseRentAmount", {
                house: {
                    housing_situation: slected,
                    onwership_status_other: ""
                },
            })
        } else {
            props.navigation.navigate("HousingDurationScreen", {
                house: {
                    housing_situation: slected,
                    onwership_status_other: ""
                },
            })
        }
    };

    const [slected, setSlected] = useState(null);
    // const[housingSituition , setHousingSituition] = useState("");k


    const situitions = [
        {
            id: 1,
            data: "Live with family"
        },
        {
            id: 2,
            data: "Rent"
        },
        {
            id: 3,
            data: "Own"
        },
        {
            id: 100,
            data: "Other"
        },
    ]

    return (
        <View style={globalStyles.container}>

            <View style={{ flexDirection: 'row', marginTop: 36 / 852 * height, width: width, marginLeft: 20 / 852 * height }}>
                <TouchableOpacity style={{ alignItems: 'flex-start', }} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../assets/blackArrowicon-3x.png')}
                        style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain', }}
                    />
                </TouchableOpacity>
                <View style={{ alignItems: 'center', width: width, marginLeft: -30 }}>
                    <Text style={{ fontSize: 12 / 852 * height, color: "#000", fontWeight: '500', }}>
                        Application Details
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20/852*height, alignItems: 'center' }}>

                <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2, backgroundColor: "#000" }}></View>

                <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>

                <View style={{
                    height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                }}>
                    <Image source={require('../assets/usertag.png')}
                        style={{
                            height: 20 / 852 * height, width: 20 / 852 * height, alignSelf: 'center', justifyContent: 'center'
                        }}
                    />
                </View>

                <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>
            </View>
            <Text style={{ fontSize: 24 / 852 * height, fontWeight: '700', marginTop: 10 / 852 * height, color: '#000' }}>
                Housing
            </Text>
            <Text style={{ fontSize: 14 / 852 * height, fontWeight: '500', marginTop: 5 / 852 * height, color: '#a7a7a7', }}>
                What best describes your housing
            </Text>
            <Text style={{ fontSize: 14 / 852 * height, fontWeight: '500', color: '#a7a7a7', }}>
                situation?
            </Text>
            <ScrollView style={{ flex: 2.5 }}>
                {
                    situitions.map((item) =>
                        <TouchableOpacity key={item.id} onPress={() => {
                            if (item.id === 100) {
                                props.navigation.navigate("OtherHousingSituition")
                            } else {
                                setSlected(item.id)
                                // setHousingSituition(item.id)
                            }
                        }
                        }
                        >
                            <View style={{
                                padding: 15, borderWidth: 1, borderColor: '#cccccc', justifyContent: 'space-between', flexDirection: 'row',
                                width: 357 / 393 * width, borderRadius: 20, margin: 10 / 852 * height
                            }}>
                                <Text style={{ fontSize: 18 / 852 * height, fontWeight: '500', color: '#000' }}>{item.data}</Text>
                                <View style={{
                                    height: 34 / 852 * height, width: 34 / 853 * height, borderRadius: 17, justifyContent: 'center',
                                    backgroundColor: slected === item.id ? "#2468E8" : '#ececec'
                                }}>
                                    <Image source={slected === item.id ? wightIcon : blackIcon}
                                        style={{
                                            height: 21 / 852 * height, width: 21 / 393 * width, alignSelf: 'center'
                                        }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }
            </ScrollView>

            <View style={{ flex: 0.5 }}>

                <View style={{ width: width, alignItems: 'flex-end', marginRight: 20, marginTop: 20 / 852 * height }}>
                    <TouchableOpacity
                        onPress={nextBtnAction}
                    >
                        <View style={globalStyles.arrowBotton}>
                            <Image source={require('../assets/arrow.png')}
                                style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: 'contain' }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: "center" }}>

                    <Text style={{ fontSize: 14 / 852 * height, color: '#a7a7a7', fontWeight: '500', marginTop: 20 / 852 * height }}>
                        For more information and resources regarding
                    </Text>

                    <Text style={{ fontSize: 14 / 852 * height, color: '#a7a7a7', fontWeight: '500', }}>
                        PayDay loans, please visit
                    </Text>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 14 / 852 * height, fontWeight: '600', color: '#2468E8', }}>
                            www.AmericaFinance.com
                        </Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default HousingSituition;  