import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { globalStyles } from "./GlobalStyles";
import PlaidLink from "react-native-plaid-link-sdk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Apis from "../Api/apipath";

const { height, width } = Dimensions.get('window')


const BankAccountMainScreen = (props) => {


    // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo3LCJmaXJzdG5hbWUiOiJOb2FoIiwibWlkZGxlbmFtZSI6Ik5haG9tIiwibGFzdG5hbWUiOiJOZWdhIiwicGhvbmUiOm51bGwsImVtYWlsIjoibm9haGRldmVsb3BlcnJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkT1ZENmlOSEFQTGlHek1JN0F6SEYydXRRSDFSVUM5VDVoQlFoOTBpazVreDlINlBhWXNqMGkiLCJiaW8iOm51bGwsInByb2ZpbGVfaW1hZ2UiOiIiLCJmY21fdG9rZW4iOm51bGwsInBsYWlkX2FjY2Vzc190b2tlbiI6bnVsbCwicGxhaWRfdXNlcl90b2tlbiI6InVzZXItc2FuZGJveC01M2JmMzY2Yy03Y2M1LTRmMzUtYTBjOS0zMmQ3ZGI3ZWMzYTAiLCJjcmVhdGVkQXQiOiIyMDIzLTEyLTIzVDE0OjEzOjUxLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTEyLTIzVDE0OjEzOjUzLjAwMFoifSwiaWF0IjoxNzAzNDAyNjU4LCJleHAiOjE3MzQ5Mzg2NTh9.SxYwrrmkAYY8bCeSMkRTOOkUlbY4SDAGSV6LfJlGv2E"
    const [user, setUser] = useState(null)
    const [linkToken, setLinkToken] = useState("");
    const address = 'eb16-154-81-245-244.ngrok-free.app'//Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';
// 
    // usePlaidEmitter((event) => {
    //   console.log("Plaid Event")
    //   console.log(event);
    // });

    // useEffect(()=>{
    //   const userdata = Settings.get('LocalSavedUser');

    //      if(userdata !== null){
    //       try{
    //         const u = JSON.parse(userdata);
    //         console.log(u)
    //         if(u){
    //           // getUserProfile(u)
    //           console.log("User already logged in")
    //           setUser(u)

    //         }
    //         else{
    //           //show tutorial screen
    //           setUser(null)
    //           // setUserLoaded(true)
    //         }
    //       }
    //       catch(error){
    //         setUser(null)
    //         // setUserLoaded(true)
    //         console.log("No user data saved ", error)
    //       }
    //      }
    // })

    //
    const createLinkToken = useCallback(async () => {
        console.log("Creating Link Token")
        const data = await AsyncStorage.getItem("USER")
        // console.log("Getting user " ,data)
        if (data) {

            let user = JSON.parse(data)
            console.log("data is ", user)
            setUser(user)
            await fetch(Apis.ApiCreateLinkToken, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user.token,
                },
                body: JSON.stringify({ address: address, platform: Platform.OS })
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setLinkToken(data.data.link_token);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [setLinkToken])

    const exchangePublicToken = async (token) => {
        console.log("Exchanging public token")
        await fetch(Apis.ApiExchangePublicToken, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + user.token,
            },
            body: JSON.stringify({ public_token: token, token_type: "Auth" })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("data is ", data)
                if (data.status === true) {
                    props.navigation.navigate("ApplicationDetailsScreen")
                }
                // setLinkToken(data.data.link_token);
            })
            .catch((err) => {
                console.log('error is ', err);
            });
    }

    useEffect(() => {
        if (linkToken == null || linkToken == "") {
            createLinkToken();
        }
        console.log("Link token is ", linkToken)
    }, [linkToken]);



    return (
        <View>
            <View style={globalStyles.container}>
                <View style={{ flexDirection: 'row', marginTop: 36 / 852 * height, width: width, marginLeft: 20 / 852 * height }}>
                    <TouchableOpacity style={{ alignItems: 'flex-start', }} onPress={() => props.navigation.goBack()}>
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

                <Image source={require("../assets/bankIcon.png")}
                    style={{ height: 146 / 852 * height, width: 146 / 393 * width, marginTop: 140 / 852 * height, resizeMode: 'contain' }}
                />

                <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 50 / 852 * height }}>
                    Click The Button Below To

                </Text>
                <Text style={{ fontSize: 15, fontWeight: '500', }}>
                    Manually Enter Bank Details
                </Text>

                <PlaidLink

                    tokenConfig={{
                        token: linkToken,
                        logLevel: 'Debug',
                        noLoadingState: false
                    }}
                    onSuccess={(success) => {
                        let suc = JSON.stringify(success)
                        let ptoken = success.publicToken;
                        exchangePublicToken(ptoken);
                        console.log(suc);
                    }}
                    onExit={(exit) => {
                        console.log(exit);
                    }}
                >
                    <View style={[globalStyles.capsuleButton, { flexDirection: 'row', backgroundColor: '#000', marginTop: 40 / 852 * height }]}>
                        <Image source={require('../assets/buttonImage.png')}
                            style={{ height: 31 / 852 * height, width: 31 / 393 * width, resizeMode: 'contain' }}
                        />
                        <Text style={{ color: '#fff', fontSize: 10, fontWeight: '500' }}>
                            Login to My Bank
                        </Text>
                    </View>
                </PlaidLink>
            </View>
        </View>
    );
}


export default BankAccountMainScreen;




