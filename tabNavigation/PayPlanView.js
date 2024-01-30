import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";
import CircularProgress from "react-native-circular-progress-indicator";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const TickCircleIcon = require("../assets/American_Finance_App_image/TickCircleIcon-3x.png");


const Status = [
    {
        id: 1,
        imagepath: TickCircleIcon,
        Status: "Pending",
        FileStatus: "Waived ( $2.8)",
        Amount: "$120",
        PaidDate: "Paid on 12.02.2023",
        DueDate: "Due on 12/04/2023"


    },
    {
        id: 2,
        imagepath: TickCircleIcon,
        Status: "On Time",
        FileStatus: "Waived ( $2.8)",
        Amount: "$200",
        PaidDate: "Paid on 12.02.2023",
        DueDate: "Due on 12.04.2024",

    },
    {
        id: 3,
        imagepath: TickCircleIcon,
        Status: "Late",
        FileStatus: "$2.80 added",
        Amount: "$202.80",
        PaidDate: "Paid on 12.02.2023",
        DueDate: "Due on 12.04.2024",

    },
    {
        id: 4,
        imagepath: TickCircleIcon,
        Status: "Pending",
        FileStatus: "",
        Amount: "$120",
        PaidDate: "Paid on 12.02.2023",
        DueDate: "Due on 12.04.2024"


    },
    {
        id: 5,
        imagepath: TickCircleIcon,
        Status: "On Time",
        FileStatus: "Waived ( $2.8)",
        Amount: "$200",
        PaidDate: "Paid on 12.02.2025",
        DueDate: "Due on 12.04.2024",

    },
    {
        id: 6,
        imagepath: TickCircleIcon,
        Status: "Late",
        FileStatus: "( $2.8) added",
        Amount: "$202.80",
        PaidDate: "Paid on 12.02.2026",
        DueDate: "Due on 12.04.2024",

    },


]

const Tab = createBottomTabNavigator();


const ScheduleLonByPaid = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <View style={{ height: 400 / 852 * height, backgroundColor: "#ecece" }}>
            <FlatList scrollEnabled={true} showsVerticalScrollIndicator={false}
                data={Status}
                renderItem={({ item }) =>
                    <View style={{ borderColor: "#cecece", borderBottomWidth: 1, marginLeft: 17 / 852 * height, marginRight: 17 / 852 * height, height: 90 / 852 * height, width: 368 / 393 * width }} >
                        <View style={{ justifyContent: "space-between", flexDirection: "row", }}>
                            <View style={{ margin: 5 / 852 * height, marginLeft: 10 / 852 * height, }}>
                                <View style={{ height: 5 / 852 * height, width: 5 / 852 * height, marginLeft: -10 / 852 * height, marginTop: 5 / 852 * height, backgroundColor: "red", borderRadius: 3 / 852 * height }} />
                                    <Text style={{ fontSize: 24 / 852 * height, color: "#000", marginLeft: 10 / 852 * height, fontWeight: "500" }}>{item.Amount}</Text>
                                    <Text style={{ fontSize: 14 / 852 * height, marginTop: 13 / 852 * height, marginLeft: 10 / 852 * height }}>
                                        {
                                            item.Status == "Pending" && (
                                                <Text style={{ fontSize: 12 / 852 * height, }}>
                                                    {item.DueDate}
                                                </Text>
                                            )
                                        }
                                        {
                                            item.Status != "Pending" && (
                                                <View >

                                                    <Text style={{ fontSize: 12 / 852 * height, fontWeight: '500', }}>
                                                        {item.FileStatus}
                                                    </Text>
                                                </View>
                                            )
                                        }
                                    </Text>
                            </View>

                            <View style={{ justifyContent: "space-between", marginLeft: 10 / 852 * height, marginRight: 15 / 852 * height, margin: 8 }} >
                                <View style={{ flexDirection: "row", gap: 10 / 852 * height, }}>
                                    <Text style={{ fontSize: 14 / 852 * height, marginTop: 10 / 852 * height, marginLeft: 10 / 852 * height }}>
                                        {
                                            item.Status == "Pending" || (

                                                <Text style={{ fontSize: 12 / 852 * height, }}>
                                                    {item.Status}
                                                </Text>

                                            )
                                        }

                                        {
                                            item.Status != "Pending" || (
                                                <View >
                                                    <TouchableOpacity style={styles.capsuleButton}>
                                                        <Text style={{ color: '#fff', fontSize: 14 / 852 * height, fontWeight: '500', textAlign: 'center' }}>
                                                            Advance Pay
                                                        </Text>
                                                    </TouchableOpacity>

                                                </View>
                                            )
                                        }
                                    </Text>
                                    <View style={{ marginTop: 8 / 852 * height }} >
                                        {
                                            item.Status != "Pending" && (

                                                <Image style={{ marginLeft: 17 / 852 * height, height: 24 / 852 * height, width: 24 / 852 * height, marginRight: 17 / 852 * height, }} source={item.imagepath} />

                                            )
                                        }


                                    </View>
                                </View>

                                <View style={{ flexDirection: "column", }}>
                                    <Text style={{ fontSize: 14 / 852 * height, }}>
                                        {
                                            item.Status == "Pending" || (

                                                <Text style={{ fontSize: 12 / 852 * height, }}>
                                                    {item.PaidDate}
                                                </Text>

                                            )
                                        }


                                    </Text>



                                </View>

                            </View>
                        </View>
                    </View>


                }
            />
        </View>




    )
};
const styles = StyleSheet.create({

    capsuleButton: {
        backgroundColor: '#2468E8',
        borderRadius: 24 / 852 * height,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: 41 / 852 * height,
        width: 113 / 393 * width,





    },
})
export default ScheduleLonByPaid;