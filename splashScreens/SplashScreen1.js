import React, { useEffect, useState } from "react"
import { View, Image, Dimensions } from "react-native"
import { globalStyles } from "../components/GlobalStyles"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Apis from "../Api/apipath"


const SplashScreen1 = (props) => {

    const [user, setUser] = useState(null)

    const { height, width } = Dimensions.get("window")
    useEffect(() => {
        // AsyncStorage.setItem("USER", null)
        const getUser = async () => {
            let data = await AsyncStorage.getItem("USER")
            // console.log(data)
            if (data) {
                let u = JSON.parse(data)
                setUser(u)

                console.log("user stored data is ", u)
                console.log("user token  is ", u.token)
                //check bank contected      
                const result = await fetch(Apis.ApiUserStatus, {
                    method: 'Post',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + u.token,
                    },
                    body: JSON.stringify({}),
                })
                if (result) {
                    let json = await result.json();
                    console.log("udated data is ", json)
                    let newUser = json.data;
                    u.user = newUser;
                    const saved = await AsyncStorage.setItem("USER", JSON.stringify(u))
                    console.log("Saved user data ", u)
                    if (json.status === true) {

                        if (json.data.active_payday_loan === null || json.data.active_payday_loan === true) {
                            props.navigation.replace("ActivePaydayLoans")

                        } else if (json.data.active_duty_manual === null || json.data.active_duty_manual !== "None") {
                            props.navigation.replace("ActivePaydayLoans")

                        } else if (json.data.active_duty_manual === null || json.data.bankruptcy_status !== 0) {
                            props.navigation.replace("ActivePaydayLoans")

                        } else if (json.data.state === null || json.data.state === "") {
                            props.navigation.replace("StateScreen")
                        } else if (json.data.identity_connected === "failed") {
                            props.navigation.replace("IdentityConnectionFailed")
                        } else if (json.data.identity_connected === 'pending' || json.data.identity_connected === null) {
                            props.navigation.replace("IdentityConnectionScreen")
                        } else if (json.data.bank_connected === false) {
                            props.navigation.replace("BankAccountMainScreen")
                        } else if (json.data.liabilities_added === false) {

                            props.navigation.replace("BankAccountMainScreen")
                        } else if (json.data.payment_source_added === true) {
                            if (json.data.active_loan === null) {

                                props.navigation.replace("LoanRequest", { fromTabBar: false })
                            } else {
                                props.navigation.replace("DashboardBase")

                            }
                        } else {
                            props.navigation.replace("DashboardBase")

                        }
                    }
                }
            } else {
                props.navigation.replace("SplashScreen2")

            }
        }
        getUser();
        // console.log("user stored data is ", user)
    }, [])



    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Image source={require('../assets/splashLogo.png')}
                style={{ height: 248 / 852 * height, width: 152 / 393 * width, resizeMode: 'contain' }}
            />
        </View>
    )
}

export default SplashScreen1;