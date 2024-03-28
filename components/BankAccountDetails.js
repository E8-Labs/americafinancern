import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";

import { globalStyles } from "./GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Apis from "../Api/apipath";


const { height, width } = Dimensions.get('window')

const selectedImage = require('../assets/slectedIcon.png');
const unSelectedImage = require('../assets/unslectedIcon.png')

const BankAccountDetails = (props) => {

    const [selectedIcon, setSlectedIcon] = useState(false);
    const [user,setUser] = useState(null)
    const [data, setData] = useState([]);


    useEffect(() => {
        const getPaymentSources = async () => {
            try {
                const data = await AsyncStorage.getItem("USER")

                if (data) {

                    let user = JSON.parse(data)
                    setUser(user)
                    console.log("data is ", user)


                    const result = await fetch(Apis.ApiGetPaymentSource, {
                        method: "get",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + user.token,
                        },

                    })
                    if (result) {
                        let json = await result.json();
                        if (json.status === true) {
                            console.log(json.data)
                            setData(json.data)

                        }

                    }
                }
            } catch (error) {
                console.log('error finding ', error)
            }
        }
        getPaymentSources();
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={globalStyles.container}>
                <Text style={{ fontSize: 10, fontWeight: '500' }}>
                    Application Details
                </Text>

                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>

                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>

                    <View style={{
                        height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                    }}>
                        <Image source={require('../assets/dollarCircle.png')}
                            style={{
                                height: 20 / 852 * height, width: 20 / 852 * height, alignSelf: 'center', justifyContent: 'center'
                            }}
                        />
                    </View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>
                </View>

                <Text style={{ fontSize: 24, fontWeight: '500' }}>
                    Bank account information
                </Text>


                <Text style={{ fontSize: 12, color: '#a7a7a7', margin: 10, marginBottom: 0 }}>
                    (Please ensure all information entered on your application
                </Text>
                <Text style={{ fontSize: 12, color: '#a7a7a7', }}>
                    is correct and up-to-date, America Finance will verify all
                </Text>
                <Text style={{ fontSize: 12, color: '#a7a7a7' }}>
                    information submitted.)
                </Text>
                <ScrollView style={{height:310/924*height}} showsVerticalScrollIndicator= {false} >
                    {
                        data.map(( item, index ) => (
                            // console.log("Index is ", index)
                            index < data.length - 1 ? (
                                <View key={item.id} style={{
                                    height: 104 / 852 * height, width: 360 / 393 * width, borderWidth: .5, borderColor: '#a7a7a7'
                                    , borderRadius: 20, marginTop: 40, flexDirection: 'row', justifyContent: 'space-between'
                                }}>
                                    <View style={{ flexDirection: 'column', paddingHorizontal: 23, paddingVertical: 14 }}>
                                        <Text style={{ fontSize: 16, fontWeight: '600' }}>
                                            {user?user.user.firstname:''} {user?(user.user.lastname):''}
                                        </Text>
                                        <Text style={{ fontSize: 18, fontWeight: '600' }}>
                                            **** **** **** {item.account_number.slice(-4)}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'column', paddingHorizontal: 10, paddingVertical: 15 }}>
                                        <TouchableOpacity onPress={() => setSlectedIcon(!selectedIcon)} style={{ marginLeft: 75 / 393 * width }}>
                                            <Image source={selectedIcon ? selectedImage : unSelectedImage}
                                                style={{ height: 34 / 852 * height, width: 34 / 393 * width, resizeMode: 'contain', }}
                                            />
                                        </TouchableOpacity>
                                        <Text style={{ color: '#00000060', fontSize: 14, fontWeight: '500', marginTop: 10 }}>
                                            {item.bank_name}
                                        </Text>
                                    </View>
                                </View>
                            ) : (
                                <View key={item.id} style={{
                                    width: 360 / 393 * width, borderRadius: 30, borderColor: '#a7a7a7', borderWidth: 1, marginTop: 10, paddingHorizontal: 23, paddingVertical: 17
                                }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500', }}>
                                            Add new account
                                        </Text>
                                        <View style={{ alignItems: 'center' }}>
                                            <TouchableOpacity style={{}} onPress={()=>{props.navigation.pop(1)}}>
                                                <View style={globalStyles.arrowBotton}>
                                                    <Image source={require('../assets/addIcon.png')}
                                                        style={{ height: 20 / 852 * height, width: 20 / 393 * width }}
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                            )
                        ))
                    }


                </ScrollView>


                <TouchableOpacity style={{ marginTop: 30 / 852 * height, flex: 0.5 }} 
                    onPress={()=>{props.navigation.navigate("LoanRequest",{fromTabBar: false})}}
                >
                    <View style={globalStyles.arrowBotton}>
                        <Image source={require('../assets/arrow.png')}
                            style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: 'contain' }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default BankAccountDetails;