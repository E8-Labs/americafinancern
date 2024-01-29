import React, { useEffect, useState } from "react"
import { View, Image, Dimensions } from "react-native"
import { globalStyles } from "../components/GlobalStyles"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Apis from "../Api/apipath"



const SplashScreen1 = (props) => {

    const [user, setUser] = useState(null)

    const { height, width } = Dimensions.get("window")
    useEffect(() => {

        const getUser = async () => {
            let data = await AsyncStorage.getItem("USER")
            // console.log(data)
            if (data) {
                let u = JSON.parse(data)
                setUser(u)

                //console.log("user stored data is ", user)
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
                        // console.log(json.data.state)
                        // if (json.data.state === null || json.data.state === "") {
                        //     props.navigation.replace("StateScreen")
                        // } else if (json.data.bank_connected === true) {

                        //     if (json.data.liabilities_added === true) {

                        //         if (json.data.active_payday_loan === null) {
                        //             props.navigation.replace("ActivePaydayLoans")


                        //         } else {
                        //             props.navigation.replace("DashboardBase")

                        //         }

                        //     } else {
                        //         props.navigation.replace("ActivePaydayLoans")
                        //     }
                        // }
                        // else {
                        //     props.navigation.replace("BankAccountMainScreen")
                        // }
                    // } else {
                        props.navigation.replace("SplashScreen2")
                        //props.navigation.replace("HousingSituition")
                    }
                }
            } else {
                props.navigation.replace("SplashScreen2")
            }
        };
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