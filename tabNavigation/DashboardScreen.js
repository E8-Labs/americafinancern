import React, { useEffect, useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, ImageBackground, } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

import { globalStyles } from "../components/GlobalStyles";
import { useFocusEffect } from '@react-navigation/native';
import Apis from "../Api/apipath";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoanProgressViewScreen from "./LoanProgressViewScreen";


const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


const lightDotte = require("../assets/American_Finance_App_image/lightDotte-3x.png");
const lightBlueBG = require("../assets/American_Finance_App_image/lightBlueBG-3x.png");
const LogoIcon = require("../assets/American_Finance_App_image/LogoIcon-3x.png");
const CloseCircleIcon = require("../assets/American_Finance_App_image/CloseCircleIcon-3x.png");
const TickCircleIcon = require("../assets/American_Finance_App_image/TickCircleIcon-3x.png");
const YellowTickCircleIcon = require("../assets/American_Finance_App_image/YellowTickCircleicon.png");
const BlueArrowicon = require("../assets/American_Finance_App_image/BlueArrowicon-3x.png");

const DashboardScreen = (props) => {

    const [user, setUser] = useState(null);
    const [loans, setLoans] = useState([]);
    const [showProgressBarView, setShowProgressBarView] = useState(false);

    useFocusEffect(

        React.useCallback(() => {
            console.log("Use Focus Effect")
            getUserProfile()
            getUserLoans()
        },[])
    )

    const getUserProfile = async () => {
        try {
            console.log("Fetching live profile")
            const data = await AsyncStorage.getItem('USER')

            if (data) {
                let u = JSON.parse(data)
                setUser(u)
                console.log('user saved profile is', u)
                const token = u.token
                const result = await fetch(Apis.ApiUserStatus, {
                    method: 'post',
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                })
                if (result) {

                    let json = await result.json()
                    if (json.status === true) {
                        u.user = json.data
                        setUser(u)
                        console.log("result profile is ", json.data)
                        // u.user = json.data;
                        //save into local storage 
                        await AsyncStorage.setItem( "USER", JSON.stringify(u) )
                        
                    }
                }
            }
        } catch (error) {
            console.log("error finding profile ", error)
        }
    };

    const getUserLoans = async () => {

        const data = await AsyncStorage.getItem('USER')
        if (data) {
            let u = JSON.parse(data)
            setUser(u);
            console.log("User get data is ", u)

            let token = u.token;

            let result = await fetch(Apis.ApiGetUserLoans, {
                method: 'get',
                headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
            })
            if (result) {
                let json = await result.json();

                if (json.status === true) {
                    setLoans(json.data)
                    console.log("Loan calculations", json.data)
                }
            }
        }

    };


    const Capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    useEffect(() => {


        const getUser = async () => {
            let data = await AsyncStorage.getItem("USER")
            // console.log(data)
            if (data) {
                let u = JSON.parse(data)
                setUser(u)

                //console.log("user stored data is ", user.user.houses_connected)
                // console.log("user token  is ", u.token)
                //check bank contected      
                const result = await fetch(Apis.ApiUserStatus, {
                    method: 'Post',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + u.token,
                    },
                    
                })
                if (result) {
                    let json = await result.json();
                    console.log("udated data is ", json)
                    if (json.status === true) {
                        if (json.data.houses_connected === true) {
                            setShowProgressBarView(true)
                        }
                    }

                }
            }
        };

        getUser();       
        getUserLoans();
    }, []);

    const getIcon = (loan) => {
        if (loan.loan_status === "rejected") {
            return CloseCircleIcon
        }
        else if (loan.loan_status === "pending") {
            return YellowTickCircleIcon
        }
        else if (loan.loan_status === "approved") {
            return TickCircleIcon
        }
        else if (loan.loan_status === "completed") {
            return TickCircleIcon
        }
    };

    const showLoanShedule = (loan) => {

        props.navigation.navigate('LoanShedule', {
            loan: loan
        })
    }
    
    return (
        <View style={{ height: height, width: width, }}>
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: "#2468E8", height: height / 2, width: width, }}>
                   
                        <ImageBackground style={{ height: height / 2, width: width, }} source={lightDotte}>
                            <ImageBackground style={{ height: height / 2, width: width ,paddingTop:10}} source={lightBlueBG}>
                                <View style={{ width: width }}>
                                    <Image
                                        style={{ height: 51 / 852 * height, width: 51 / 393 * width, marginTop: 18 / 852 * height, marginLeft: 23 / 852 * height, marginBottom: 0 }}
                                        source={LogoIcon}
                                    />
                                    <Text style={{ fontSize: 28 / 852 * height, color: "#fff", marginLeft: 30 / 852 * height }}>
                                        Dashboard
                                    </Text>
                                    {showProgressBarView ? progressBarView() : <LoanProgressViewScreen  onNext={(screen) => {
                                        props.navigation.navigate(screen)
                                    }}/>}
                                </View>
                            </ImageBackground>
                        </ImageBackground>
                 
                </View>

            </View>
            <View style={{ height: height / 2.3, width: width, paddingBottom: 105 / 852 * height, alignSelf: "center",backgroundColor:"#fafafa",justifyContent:"center",alignItems:"center" }}>
                <View style={{ height:350/852*height,backgroundColor:"#fff",width:371/393*width,marginTop:0/852*height,paddingTop:10/852*height,
                            borderTopRightRadius:25/852*height,borderTopLeftRadius:25/852*height }}>
                    <Text style={{ marginLeft: 26 / 852 * height, fontSize: 16 / 852 * height, fontWeight: "500", color: "#000", }}>
                        Past Loans
                    </Text>
                    <View >
                        {loans.length < 1 ? <Text style={{ fontSize: 18 / 852 * height, fontWeight: '500', marginTop: 50 / 852 * height, alignSelf: 'center' }}>No Loans</Text> :

                            <FlatList style={{ marginTop: 20 / 852 * height, marginBottom: 30 / 852 * height }}
                                showsVerticalScrollIndicator={false}
                                data={loans}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <TouchableOpacity style={{ borderColor: "#ececec", borderBottomWidth: 1, marginLeft: 17 / 852 * height, marginRight: 17 / 852 * height, height: 90 / 852 * height, width: 368 / 393 * width }}
                                        onPress={() => {
                                            showLoanShedule(item)
                                        }}>
                                        <View style={{ flexDirection: "row", margin: 10 / 852 * height, justifyContent: "space-between" }}>
                                            <Text style={{ fontSize: 24 / 852 * height, color: "#000" }}>${item.amount_requested}</Text>
                                            <View style={{ flexDirection: "row", marginTop: 6 / 852 * height, gap: 20 / 852 * height }}>
                                                <Text style={{ fontSize: 14 / 852 * height }}>
                                                    {Capitalize(item.loan_status)}
                                                </Text>
                                                <Image style={{ height: 24 / 852 * height, width: 24 / 852 * height, marginRight: 17 / 852 * height }}
                                                    source={getIcon(item)}
                                                />
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 10 / 852 * height, marginRight: 15 / 852 * height }} >
                                            <Text style={{ fontSize: 14 / 852 * height, }}>
                                                {item.FileStatus}
                                            </Text>
                                            <View style={{ flexDirection: "row", gap: 12 / 852 * height }} >
                                                <Text style={{ fontSize: 12 / 852 * height, }}>
                                                    {item.Date}
                                                </Text>
                                                <Image style={{ height: 24 / 852 * height, width: 24 / 852 * height, marginTop: -2 / 852 * height, marginRight: 17 / 852 * height }}
                                                    source={BlueArrowicon}
                                                />
                                            </View>
                                        </View>

                                    </TouchableOpacity>
                                }
                            />
                        }
                    </View>
                </View>
            </View>


        </View>




    )


    function progressBarView() {
        return <View style={{  height: 268 / 852 * height, width: 359 / 393 * width, borderRadius: 29 / 852 * height, backgroundColor: "#fff", marginLeft: 20 / 852 * height, marginRight: 20 / 852 * height, marginTop: 20 / 852 * height }}>
            <View style = {{flexDirection:'row',justifyContent:"space-between",}}>
                <View style={{
                    alignSelf: 'flex-start', backgroundColor: '#1CFF77', borderRadius: 34 / 852 * height, height: 23 / 852 * height,
                    width: 60 / 393 * width, alignItems: "center", justifyContent: "center", marginLeft: 14, marginTop: 10 / 852 * height,
                    marginBottom: 13 / 852 * height,
                }}>

                    <Text style={{
                        fontSize: 14 / 852 * height, color: "#000", fontWeight: "500",

                    }}>
                        Active
                    </Text>
                </View>
                <View style={{marginTop:22/852*height,marginRight:22/852*height }}>

                    <CircularProgress
                        radius={50 / 852 * height}
                        value={89}
                        fontSize={24 / 852 * height}
                        valueSuffix={"%"}
                        activeStrokeColor={"#2468E8"}
                        inActiveStrokeWidth={4 / 852 * height}
                        progressValueColor="#000"
                        activeStrokeWidth={4 / 852 * height}
                        strokeLinecap="square"
                        inActiveStrokeColor={"#a6c1f5"} />
                </View>
            </View>
            <View style={{ marginTop:-76/852*height, marginLeft: 25 / 852 * height, flexDirection: "row", gap: 50 / 852 * height, }}>

                <Text style={{ fontSize: 12 / 852 * height, }}>
                    Amount
                </Text>
                <Text style={{ fontSize: 12 / 852 * height, }}>
                    Balance
                </Text>

            </View>
            <View style={{ marginLeft: 25 / 852 * height, flexDirection: "row", gap: 40 / 852 * height }}>
                <Text style={{ fontSize: 24 / 852 * height, color: "#000", fontWeight: "500" }}>
                    $500
                </Text>
                <Text style={{ fontSize: 24 / 852 * height, color: "#000", fontWeight: "500" }}>
                    $250
                </Text>
            </View>

            <View style={{ marginTop: 50 / 852 * height, marginLeft: 25 / 852 * height, marginRight: 25 / 852 * height, marginBottom: 18 / 852 * height }}>
                <Text style={{ fontSize: 12 / 852 * height, color: '#000' }}>
                    Next Scheduled payday
                </Text>
                <Text style={{ fontSize: 14 / 852 * height, color: "#000", fontWeight: "600" }}>
                    24th Mar 2024
                </Text>
            </View>
            <TouchableOpacity style={[globalStyles.capsuleButton, { marginTop: 14 / 852 * height, alignSelf: "center", width: 315 / 393 * width, height: 54 / 852 * height, borderRadius: 24 / 852 * height }]}>
                <Text style={{ color: '#fff', fontSize: 18 / 852 * height, fontWeight: '500', textAlign: 'center' }}>
                    View Details
                </Text>
            </TouchableOpacity>
        </View>;
    }
};

export default DashboardScreen;
