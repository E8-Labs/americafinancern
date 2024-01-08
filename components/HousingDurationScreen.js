import React, { useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native";
import { globalStyles } from "./GlobalStyles";
import Snackbar from "react-native-snackbar";

const { height, width } = Dimensions.get('window');



const wightIcon = require('../assets/vector.png');
const blackIcon = require('../assets/vector2.png');

const HousingDurationScreen = ({ navigation, route }) => {

    const nextBtnAction = () => {
        if (!slected) {
            Snackbar.show({
                text: 'Please enter all cridentials',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: 'red',
                marginBottom: 10,
            })
            return
        }
        const housingData = route.params.house;
            housingData.min_living_year = slected.minYears,
            housingData.max_living_year = slected.maxYears,
            housingData.duration = slected.data,

            console.log("Duration is", housingData)
        console.log("data is", housingData.max_living_year)

        navigation.navigate("HouseDetails", {
            house: housingData,

        })
    }


    const [slected, setSlected] = useState('');
    const durations = [
        {
            id: 1,
            data: '1 Year or Less',
            minYears: 0,
            maxYears: 1,
        },
        {
            id: 2,
            data: 'Between 1 and 2 Years',
            minYears: 1,
            maxYears: 2,

        },
        {
            id: 3,
            data: 'Between 2 and 3 Years',
            minYears: 2,
            maxYears: 3,
        },
        {
            id: 4,
            data: 'Between 3 and 5 Years',
            minYears: 3,
            maxYears: 5,
        },
        {
            id: 5,
            data: '5+ Years',
            minYears: 5,
            maxYears: 1000,
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
                        Account Details
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 / 852 * height, alignItems: 'center' }}>

                <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2, backgroundColor: "#000" }}></View>

                <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>

                <View style={{
                    height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                }}>
                    <Image source={require('../assets/home.png')}
                        style={{
                            height: 20 / 852 * height, width: 20 / 852 * height, alignSelf: 'center', justifyContent: 'center'
                        }}
                    />
                </View>

                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>
            </View>
            <Text style={{ fontSize: 24 / 852 * height, fontWeight: '700', marginTop: 10 / 852 * height, color: '#000' }}>
                Housing
            </Text>
            <Text style={{ fontSize: 12, fontWeight: '500', color: '#717171', marginBottom: 30 / 852 * height }}>
                Length of time at this location?
            </Text>
            <ScrollView style={{ flex: 2.5 }}>

                {
                    durations.map((item) =>
                        <TouchableOpacity key={item.id} style={{ marginBottom: 18 / 852 * height }} onPress={() => {
                            setSlected(item)
                        }}>
                            <View style={{
                                height: 74 / 852 * height, width: 357 / 393 * width, borderRadius: 23, borderWidth: 1, borderColor: '#cccccc', padding: 15,
                                justifyContent: 'space-between', flexDirection: 'row', margin: 5 / 852 * height,
                            }}>
                                <Text style={{ fontSize: 18 / 852 * height, fontWeight: '500', }}>{item.data}</Text>
                                <View style={{
                                    height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17, alignItems: 'center',
                                    justifyContent: 'center', backgroundColor: slected.id === item.id ? '#2468E8' : "#ececec"
                                }}>
                                    <Image source={slected.id === item.id ? wightIcon : blackIcon}
                                        style={{ height: 21 / 852 * height, width: 21 / 393 * width, }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }
            </ScrollView>

            <View style={{ flex: 0.5 }}>

                <View style={{ width: width, alignItems: 'flex-end', marginRight: 20 / 852 * height, marginTop: 20 / 852 * height }}>
                    <TouchableOpacity onPress={nextBtnAction}>
                        <View style={globalStyles.arrowBotton}>
                            <Image source={require('../assets/arrow.png')}
                                style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: 'contain' }}

                            />
                        </View>
                    </TouchableOpacity>
                </View >

                <View style={{ alignItems: "center" }}>

                    <Text style={{ fontSize: 14 / 852 * height, color: '#a7a7a7', fontWeight: '500', height: 18, marginTop: 20 / 852 * height }}>
                        For more information and resources regarding
                    </Text>

                    <Text style={{ fontSize: 14 / 852 * height, color: '#a7a7a7', fontWeight: '500', height: 18 }}>
                        PayDay loans, please visit
                    </Text>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 14 / 852 * height, fontWeight: '600', color: '#2468E8', height: 18 }}>
                            www.AmericaFinance.com
                        </Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default HousingDurationScreen;