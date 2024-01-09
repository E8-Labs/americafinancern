import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, KeyboardAvoidingView, Platform, } from "react-native";
import { globalStyles } from "../StylesSheet/GlobalStyles";
import Apis from "../Api/apipath";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OutstandingDebtScreen from "./OutstandingDebtScreen";
import FinancialDetailsDebts from "./FinancialDetailsDebts";


const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


const CloseIcon = require("../assets/American_Finance_App_image/CloseBlackIcon-3x.png");
// const blackArrowicon =require ("../assets/American_Finance_App_image/blackArrowicon-3x.png");



const largecircleIconHeight = 75 / 852 * height;
const largecircleIconWidth = 75 / 412 * height;


const CreditCardDebpt = ({ navigation, route }) => {

    const [user, setUser] = useState('')
    const [landlord, setLandrod] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [balanceAmount, setBalanceAmount] = useState('');

    const obligation = route.params.obligation
    console.log(obligation)



    // const postData = JSON.stringify({
    //     "debt_type": obligation.debt_type,
    //     "monthly_debt_obligation":obligation.monthly_debt_obligation,
    //     "active_pay_day_loan": obligation.active_pay_day_loan,
    //     "active_duty_force": obligation.active_duty_force,
    //     "bankruptcy_min_year": obligation.bankruptcy_min_year,
    //     "bankruptcy_max_year": obligation.bankruptcy_max_year,
    //     "outstanding_debt_type": obligation.outstanding_debt_type,
    //     "lender_name": landlord,
    //     "account_number": accountNumber,
    //     "monthly_payment": monthlyPayment,
    //     "due_date": dueDate,
    //     "total_balance_amount": balanceAmount
    // })


    // const nextBtnAction =async () => {
    //     const data = await AsyncStorage.getItem("USER")

    //     if (data) {

    //         let u = JSON.parse(data)
    //         setUser(u)
    //         console.log("user get data", u)
    //         console.log("user id ", u.user.id)


    //         let token = u.token

    //         //  const url = "https://857e-103-150-238-25.ngrok-free.app/api/houses/add_house";
    //         const result = await fetch(Apis.ApiAddDebt, {
    //             method: 'Post',
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": "Bearer " + token,
    //             },
    //             body: postData,
    //         })

    //         if (result) {
    //             const json = await result.json()
    //             console.log("Data is ", json)
    //             if (json.status === true) {
    //                 console.log('Api called')
    //                  navigation.navigate("FinancialDetailsDebts")
    //             }
    //         }
    //     }

    // }

    return (

        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 10}  >

            <View style={{justifyContent:"flex-end", flexDirection: "row", margin: 17 / 852 * height, marginTop: 32 / 852 * height, marginBottom: 0, gap: 110 / 393 * width }}>
                <Text style={{ color: "#000", fontSize: 12 / 852 * height, fontWeight: "500" }}>
                    Credit card debt
                </Text>
                <View style={{height:30/852*height,width:30/852*height,borderRadius:15/852*height,backgroundColor:"#ececec",justifyContent:"center",alignItems:"center"}}>
                <Image style={{ height: 12 / 852 * height, width: 12 / 393 * width, }} source={CloseIcon} />
            </View>
            </View>

            <View style={{ marginLeft: 15/ 852 * height, marginRight: 15/ 852 * height, marginTop: 35/ 852 * height, }}>
                <TextInput style={globalStyles.textInputSt} autoFocus={true} placeholder="Lender name"
                    value={landlord}
                    onChangeText={(text) => setLandrod(text)}
                />
            </View>

            <View style={{ margin: 15/ 852 * height, }}>
                <TextInput style={globalStyles.textInputSt} placeholder="Account number"
                    value={accountNumber}
                    onChangeText={(text) => setAccountNumber(text)} />
            </View>

            <View style={{ marginLeft: 15/ 852 * height, marginRight: 15/ 852 * height, }} >
                <TextInput style={globalStyles.textInputSt} placeholder="Monthly payment amount"
                    value={monthlyPayment}
                    onChangeText={(text) => setMonthlyPayment(text)} />
            </View>

            <View style={{ margin: 15/ 852 * height, }}>
                <TextInput style={globalStyles.textInputSt} placeholder="Payment due date"
                    value={dueDate}
                    onChangeText={(text) => setDueDate(text)} />
            </View>

            <View style={{ marginLeft: 15/ 852 * height, marginRight: 15/ 852 * height, }}>
                <TextInput style={globalStyles.textInputSt} placeholder="Balance amount"
                    value={balanceAmount}
                    onChangeText={(text) => setBalanceAmount(text)} />
            </View>

            <TouchableOpacity style={[globalStyles.capsuleButton, { marginTop: 135/ 852 * height, marginRight: 13/ 852 * height, alignSelf: "flex-end" }]}
            // onPress={nextBtnAction}
            >
                <Text style={{ color: '#fff', fontSize: 18/ 852 * height, fontWeight: '500', textAlign: 'center' }}>
                    Submit
                </Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>



    )
}

export default CreditCardDebpt;