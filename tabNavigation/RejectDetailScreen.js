import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";
import CircularProgress from "react-native-circular-progress-indicator";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";





const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


const lightDotte = require("../assets/American_Finance_App_image/lightDotte-3x.png");
const lightBlueBG = require("../assets/American_Finance_App_image/lightBlueBG-3x.png");



const Status = [
    {
        id: 1,
        Status: "completed",
        Amount: "$400",


    },
    {
        id: 1,
        Status: "Rejected",
        FileStatus: "1 waives . 2 Refund ",
        Amount: "$400",
        Date: "4/21/20"

    },
    {
        id: 1,
        Status: "Rejected",
        Amount: "$400",
    },

]

const Tab = createBottomTabNavigator();

const RejectDetailScreen = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <View style={{ height: height, width: width, }}>
            <View style={{ backgroundColor: "#2468E8", height: 485 / 852 * height, width: width, }}>
                <View>
                    <Image
                        style={{ height: 485 / 852 * height, width: width }}
                        source={lightDotte}
                    />
                </View>

                <Image
                    style={{ position: "absolute", height: 485 / 852 * height, width: width }}
                    source={lightBlueBG}
                />


            </View>




            <View style={{ position: "absolute", top: 97 / 852 * height, left: 30 / 852 * height, flexDirection: "row" }} >
                <View>
                    <CircularProgress

                        radius={60 / 852 * height}
                        value={10}
                        progressValueFontSize={24 / 852 * height}
                        valueSuffix={"%"}
                        siz
                        title="Paid"
                        titleColor="#fff"
                        titleFontSize={14 / 852 * height}
                        activeStrokeColor={"#fff"}
                        inActiveStrokeOpacity={0.14}
                        inActiveStrokeWidth={3 / 393 * width}
                        progressValueColor="#fff"
                        activeStrokeWidth={3 / 393 * width}
                        strokeLinecap="square"
                        inActiveStrokeColor={"#fff"}


                    />

                </View>

                <View style={{ left: 26 / 852 * height, top: 25 / 852 * height, height: 52 / 852 * height, width: 88 / 393 * width, borderRadius: 10 / 852 * height, backgroundColor: "#ffffff20" }}>
                    <Text style={{ color: "#FFF", fontSize: 12 / 852 * height, margin: 10 / 852 * height, marginBottom: 0 }}>
                        Pay left

                    </Text>
                    <Text style={{ color: "#FFF", fontSize: 14 / 852 * height, marginLeft: 10 / 852 * height }}>
                        --

                    </Text>
                </View>

                <View style={{ left: 44 / 852 * height, top: 25 / 852 * height, height: 52 / 852 * height, width: 97 / 393 * width, borderRadius: 10 / 852 * height, backgroundColor: "#ffffff20" }}>
                    <Text style={{ color: "#FFF", fontSize: 12 / 852 * height, margin: 10 / 852 * height, marginBottom: 0 }}>
                        Pay made
                    </Text>
                    <Text style={{ color: "#FFF", fontSize: 14 / 852 * height, marginLeft: 10 / 852 * height }}>
                        --

                    </Text>
                </View>



            </View>
            <View style={{position:"absolute", }}>
                <View style={{flexDirection:"row",top:235/852*height,}}>
                    <Text style={{fontSize:10/852*height,color:"#fff",left:51/393*width}}>
                        Next installment
                    </Text>
                    <Text style={{fontSize:10/852*height,color:"#fff",left:112/393*width}}>
                    Next Payday
                    </Text>
                    <Text style={{fontSize:10/852*height,color:"#fff",left:167/393*width}}>
                    Loan Due
                    </Text>
                </View>

                <View style={{flexDirection:"row",top:257/852*height,}}>
                    <Text style={{fontSize:14/852*height,color:"#fff",left:53/393*width}}>
                        0
                    </Text>
                    <Text style={{fontSize:14/852*height,color:"#fff",left:176/393*width}}>
                    --/--/--
                    </Text>
                    <Text style={{fontSize:14/852*height,color:"#fff",left:249/393*width}}>
                    --/--/--
                    </Text>
                </View>
                

            </View>
            <View style={{alignSelf:"center",justifyContent:"center",position:"absolute"}}>
                    <View style={{height:603/852*height,width:371/393*width,borderRadius:25,backgroundColor:"#fff",top:330/852*height,alignItems:"center"}}>
                    <View style={{paddingLeft:4/852*height,justifyContent:"flex-start",height:33/852*height,width:181/393*width,backgroundColor:"#ececec",marginTop:13/852*height,borderRadius:9/852*height,alignItems:"center",flexDirection:"row"}}>
                        <TouchableOpacity 
                        onPress={()=>{
                            setSelectedTab(0);
                        }}
                        style={{
                            height:27/852*height,
                            width:84/393*width,
                            backgroundColor: selectedTab == 0 ? '#fff' : '#ececec',
                            borderRadius:8/852*height,
                            alignItems:"center",
                            justifyContent:"center",}} >
                            <Text style={{fontSize:14/852*height}}>
                            Pay Plan
                            </Text>
                        </TouchableOpacity>
                        <View style={{paddingLeft:6/852*height}}>
                        <TouchableOpacity onPress={()=>{
                            setSelectedTab(1);
                        }}
                         style={{
                            height:27/852*height,
                            width:84/393*width,
                            backgroundColor: selectedTab == 1 ? '#fff' : '#ececec',
                            borderRadius:8/852*height,
                            alignItems:"center",
                            justifyContent:"center",}} >
                            <Text style={{fontSize:14/852*height}}>
                            Details
                            </Text>
                        </TouchableOpacity>
                        </View>
                        
                        
                    </View>
                    <View style={{marginTop:50/852*height, height:171/852*height,width:330/393*width,backgroundColor:"#fafafa",borderRadius:25/852*height}}>
                    <View style={{paddingTop:18/852*height,paddingBottom:18/852*height,paddingLeft:16/393*width,paddingRight:16/393*width}}>
                    <Text style={{ fontSize: 18 / 852 * height, color: '#000', fontFamily: "PoppinsMedium" }}>
                        This loan was rejected for the
                    </Text>
                    <Text style={{ fontSize: 18 / 852 * height, color: '#000', fontFamily: "PoppinsMedium" }}>
                        following reason. The content can
                    </Text>
                    <Text style={{ fontSize: 18 / 852 * height, color: '#000', fontFamily: "PoppinsMedium" }}>
                        come here and replace the
                    </Text>
                    <Text style={{ fontSize: 18 / 852 * height, color: '#000', fontFamily: "PoppinsMedium" }}>
                        payment schedule we have for
                    </Text>
                    <Text style={{ fontSize: 18 / 852 * height, color: '#000', fontFamily: "PoppinsMedium" }}>
                        loans in progress or loan closed
                    </Text>
                    </View>
                    </View>
                    </View>
                </View>



        </View>



    )
}
export default RejectDetailScreen;