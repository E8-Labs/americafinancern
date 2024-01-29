import React, { useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { globalStyles } from "./GlobalStyles";
import Snackbar from "react-native-snackbar";
import Apis from "../Api/apipath";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native";



const { height, width } = Dimensions.get('window');

const locationIcon = require('../assets/location.png');
const arrowBotton = require("../assets/arrow.png");
const wightIcon = require('../assets/vector.png');
const blackIcon = require('../assets/vector2.png');


const StateScreen = (props) => {

    const [slected, setSlected] = useState('');
    const [user, setUser] = useState(null);

    const nextButtonAction = () => {
        if (!slected) {
            Snackbar.show({
                text: "Please Select a State",
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: 'red',
                marginBottom: 10,

            })
        } else {
            const selectState = async () => {

                const data = await AsyncStorage.getItem("USER")

                if (data) {

                    let u = JSON.parse(data)
                    setUser(u)
                    console.log("user get data", u)

                    let token = u.token;

                    const result = await fetch(Apis.ApiUpdateProfile, {
                        method: 'Post',
                        headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
                        body: JSON.stringify({ "state": slected })

                    })
                    if (result) {
                        let json = await result.json();
                        console.log("data is ", json)
                        if (json.status === true) {
                            props.navigation.navigate("LoanRequest", {

                                state: slected
                            }
                            );
                        }
                    }
                }

            };
            selectState();
        }
    };


    const states = [
        {
            id: 1,
            Name: 'Alabama',
        },
        {
            id: 2,
            Name: 'California',
        },
        {
            id: 3,
            Name: 'Missouri',
        },
        {
            id: 4,
            Name: 'Other',
        },

    ]


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={globalStyles.container}>
                <View style={{ flexDirection: 'row', width: width, paddingHorizontal: 12 / 393 * width, justifyContent: 'space-between', alignItems: 'center', }}>
                    <TouchableOpacity style={{ alignSelf: 'flex-start', }} onPress={() => props.navigation.goBack()} >
                        <Image
                            source={require('../assets/blackArrowicon-3x.png')}
                            style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain', }}
                        />
                        {/* error */}
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 12 / 852 * height, color: "#000", fontWeight: '500', }}>
                            Account Details
                        </Text>
                    </View >

                    <View style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain' }}>

                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 / 852 * height, alignItems: 'center' }}>

                    <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2, backgroundColor: "#000" }}></View>

                    <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>

                    <View style={{
                        height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                    }}>
                        <Image source={locationIcon}
                            style={{
                                height: 20 / 852 * height, width: 20 / 852 * height, alignSelf: 'center', justifyContent: 'center'
                            }}
                        />
                    </View>

                    <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>
                    <View style={{ width: 2 / 852 * height, height: 2 / 852 * height, borderRadius: 2 / 852 * height, backgroundColor: "#000" }}></View>

                </View>
                <Text style={globalStyles.uperMainText}>
                    In which state do you reside?
                </Text>

                <Text style={{ fontSize: 10 / 852 * height, color: '#a7a7a7', margin: 10 / 852 * height, marginBottom: 0 }}>
                    (Please ensure all information entered on your application
                </Text>
                <Text style={{ fontSize: 10 / 852 * height, color: '#a7a7a7', }}>
                    is correct and up-to-date, America Finance will verify all
                </Text>
                <Text style={{ fontSize: 10 / 852 * height, color: '#a7a7a7' }}>
                    information submitted.)
                </Text>
                <ScrollView style={{ flex: 2.5 }} showsVerticalScrollIndicator = {false}>

                    {
                        states.map((item) => 
                            <TouchableOpacity key={item.id} onPress={() => {
                                if (item.Name == "Other") {
                                    props.navigation.navigate("OtherStateScreen")
                                }
                                else {
                                    setSlected(item.Name)
                                }
                            }}
                            >
                                <View style={styles.stateText}>
                                    <Text style={{ fontSize: 13, fontWeight: '500', color: '#000' }}>
                                        {item.Name}
                                    </Text>
                                    <View style={{
                                        height: 34 / 852 * height, width: 34 / 853 * height, borderRadius: 17/852*height, justifyContent: 'center',
                                        backgroundColor: slected === item.Name ? "#2468E8" : '#f2f2f2'
                                    }}>
                                        <Image source={slected === item.Name ? wightIcon : blackIcon}
                                            style={{ alignSelf: 'center', height: 21 / 853 * height, width: 21 / 393 * width }}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                </ScrollView>
                <View style={{ flex: 0.5, alignItems: "center", width: width }}>
                    <TouchableOpacity style={[globalStyles.shadowStyle,{ alignSelf: 'flex-end', marginTop: 30 / 852 * height, marginEnd: 17 / 393 * width }]}
                        onPress={nextButtonAction}

                    >
                        <View style={globalStyles.arrowBotton}>
                            <Image source={arrowBotton}
                                style={{ height: 24 / 852 * height, width: 24 / 852*height, resizeMode: 'contain' }}

                            />
                        </View>
                    </TouchableOpacity>

                    <Text style={[globalStyles.bottomText, { marginTop: 30 / 852 * height }]}>
                        For more information and resources regarding
                    </Text>

                    <Text style={globalStyles.bottomText}>
                        PayDay loans, please visit
                    </Text>

                    <TouchableOpacity>
                        <Text style={[globalStyles.bottomText, { color: '#2468E8' }]}>
                            www.AmericaFinance.com
                        </Text>

                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )
}

export default StateScreen;


const styles = StyleSheet.create({
    stateText: {

        padding: 15/852*height,
        borderWidth: 1,
        borderRadius: 23/852*height,
        borderColor: '#ececec',
        margin: 10/852*height,
        width: 355 / 393 * width,
        flexDirection: 'row',
        justifyContent: 'space-between',

    }

})