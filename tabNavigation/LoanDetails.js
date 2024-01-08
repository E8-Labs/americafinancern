import React,{useState,useEffect} from "react";
import { View, Text, Image, Dimensions,ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Apis from "../Api/apipath";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const QuestionIcon = require("../assets/American_Finance_App_image/QuestionIcon-3x.png")

const LoanDetails = ({navigation,route, loan}) => {
console.log("Loan in loan details ", loan)
    // const amount = route.params.amount;

    const [calculationData, setCalculationData] = useState(null)  

    return (
        
        <ScrollView style={{ height: height, width: width,marginBottom:31/852*height }} >
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 15 / 852 * height }}>
                <View style={{ justifyContent: "space-between", flexDirection: "row", height: 54 / 852 * height, borderBottomWidth: 0.3, width: 319 / 393 * width, alignItems: "center" }}>
                    <Text style={{ fontSize: 14 / 852 * height, color: "#000" }} >
                        Annual percentage rate
                    </Text>
                    <Text style={{ fontSize: 24 / 852 * height, color: "#000" }}>
                       {loan.calculations.apr} %
                    </Text>
                </View>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 15 / 852 * height }}>
                <View style={{ justifyContent: "space-between", flexDirection: "row", height: 54 / 852 * height, borderBottomWidth: 0.3, width: 319 / 393 * width, alignItems: "center", }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 14 / 852 * height, marginRight: 5, color: "#000" }} >
                            Finance charge
                        </Text>
                        <Image style={{ height: 17.5 / 852 * height, width: 17.5 / 393 * width, }}
                            source={QuestionIcon} />
                    </View>
                    <Text style={{ fontSize: 24 / 852 * height, color: "#000" }}>
                    ${loan.calculations.finance_fee}
                    </Text>
                </View>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 15 / 852 * height }}>
                <View style={{ justifyContent: "space-between", flexDirection: "row", height: 54 / 852 * height, borderBottomWidth: 0.3, width: 319 / 393 * width, alignItems: "center", }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 14 / 852 * height, marginRight: 5, color: "#000" }} >
                            Amount finance
                        </Text>
                        <Image style={{ height: 17.5 / 852 * height, width: 17.5 / 393 * width, }}
                            source={QuestionIcon}
                        />
                    </View>
                    <Text style={{ fontSize: 24 / 852 * height, color: "#000" }}>
                        ${loan.calculations.finance_fee}
                    </Text>

                </View>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 15 / 852 * height }}>
                <View style={{ justifyContent: "space-between", flexDirection: "row", height: 54 / 852 * height, borderBottomWidth: 0.3, width: 319 / 393 * width, alignItems: "center", }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 14 / 852 * height, marginRight: 5, color: "#000" }} >
                            Total payment
                        </Text>
                        <Image style={{ height: 17.5 / 852 * height, width: 17.5 / 393 * width, }}
                            source={QuestionIcon}
                        />
                    </View>
                    <Text style={{ fontSize: 24 / 852 * height, color: "#000" }}>
                        ${loan.calculations.principal_amount}
                    </Text>

                </View>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 15 / 852 * height }}>
                <View style={{ justifyContent: "space-between", flexDirection: "row", height: 54 / 852 * height, borderBottomWidth: 0.3, width: 319 / 393 * width, alignItems: "center", }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 14 / 852 * height, marginRight: 5, color: "#000" }} >
                            Number of payments
                        </Text>
                        <Image style={{ height: 17.5 / 852 * height, width: 17.5 / 393 * width, }}
                            source={QuestionIcon}
                        />
                    </View>
                    <Text style={{ fontSize: 24 / 852 * height, color: "#000" }}>
                        01
                    </Text>
                </View>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 15 / 852 * height }}>
                <View style={{ justifyContent: "space-between", flexDirection: "row", height: 54 / 852 * height, borderBottomWidth: 0.3, width: 319 / 393 * width, alignItems: "center", }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 14 / 852 * height, marginRight: 5, color: "#000" }} >
                            Amount of payments
                        </Text>
                        <Image style={{ height: 17.5 / 852 * height, width: 17.5 / 393 * width, }}
                            source={QuestionIcon}
                        />
                    </View>
                    <Text style={{ fontSize: 24 / 852 * height, color: "#000" }}>
                        01
                    </Text>

                </View>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 15 / 852 * height }}>
                <View style={{ justifyContent: "space-between", flexDirection: "row", height: 54 / 852 * height, borderBottomWidth: 0.3, width: 319 / 393 * width, alignItems: "center", }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 14 / 852 * height, marginRight: 5 / 852 * height, color: "#000" }} >
                            When payment is due
                        </Text>
                        <Image style={{ height: 17.5 / 852 * height, width: 17.5 / 393 * width, }}
                            source={QuestionIcon}
                        />
                    </View>
                    <Text style={{ fontSize: 24 / 852 * height, color: "#000" }}>
                        {loan.calculations.estimated_due_date}
                    </Text>

                </View>
            </View>
          
          </ScrollView>




    )
}
export default LoanDetails;