import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { globalStyles } from "./GlobalStyles";
import PlaidLink from "react-native-plaid-link-sdk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native";
import Apis from "../Api/apipath";

const { height, width } = Dimensions.get('window')


const IdentityConnectionScreen = (props) => {

    // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo3LCJmaXJzdG5hbWUiOiJOb2FoIiwibWlkZGxlbmFtZSI6Ik5haG9tIiwibGFzdG5hbWUiOiJOZWdhIiwicGhvbmUiOm51bGwsImVtYWlsIjoibm9haGRldmVsb3BlcnJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkT1ZENmlOSEFQTGlHek1JN0F6SEYydXRRSDFSVUM5VDVoQlFoOTBpazVreDlINlBhWXNqMGkiLCJiaW8iOm51bGwsInByb2ZpbGVfaW1hZ2UiOiIiLCJmY21fdG9rZW4iOm51bGwsInBsYWlkX2FjY2Vzc190b2tlbiI6bnVsbCwicGxhaWRfdXNlcl90b2tlbiI6InVzZXItc2FuZGJveC01M2JmMzY2Yy03Y2M1LTRmMzUtYTBjOS0zMmQ3ZGI3ZWMzYTAiLCJjcmVhdGVkQXQiOiIyMDIzLTEyLTIzVDE0OjEzOjUxLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTEyLTIzVDE0OjEzOjUzLjAwMFoifSwiaWF0IjoxNzAzNDAyNjU4LCJleHAiOjE3MzQ5Mzg2NTh9.SxYwrrmkAYY8bCeSMkRTOOkUlbY4SDAGSV6LfJlGv2E"
    const [user, setUser] = useState(null)
    const [linkToken, setLinkToken] = useState("");
    // var customToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozOSwiZmlyc3RuYW1lIjoiTGVzbGllIiwibGFzdG5hbWUiOiJLbm9wZSIsIm1pZGRsZW5hbWUiOiIiLCJlbWFpbCI6Imxlc2xpZTRAZ21haWwuY29tIiwicHJvZmlsZV9pbWFnZSI6IiIsInBhc3N3b3JkIjoiJDJiJDEwJHpKNk14enZrN1E5YUp1ZXlmLmpRbmU2d2N6SkRLQ3JvWHpuN1FBR21LUWRzZi9pTTNFUlVDIiwicm9sZSI6InVzZXIiLCJ0aWVyIjowLCJsaWFiaWxpdGllc19hZGRlZCI6ZmFsc2UsInVwZGF0ZWRBdCI6IjIwMjQtMDItMTZUMDc6NDY6MjUuMjE3WiIsImNyZWF0ZWRBdCI6IjIwMjQtMDItMTZUMDc6NDY6MjUuMjE3WiJ9LCJpYXQiOjE3MDgwNjk1ODUsImV4cCI6MTczOTYwNTU4NX0.bL8tLcD9MhdWD7pqfG6nuYbwRyNfh682XYJQpyBfA4c"
    // const address = 'eb16-154-81-245-244.ngrok-free.app'//Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';
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

    const createLinkToken = useCallback(async () => {
        console.log("Creating Link Token")
        const data = await AsyncStorage.getItem("USER")
        // console.log("Getting user " ,data)
        if (data) {

            let user = JSON.parse(data)
            console.log("data is ", user)
            setUser(user)
            console.log("Platform is ", Platform.OS)
            // user.token = customToken//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozNCwiZmlyc3RuYW1lIjoiTmFob20iLCJtaWRkbGVuYW1lIjoiIiwibGFzdG5hbWUiOiJOZWdhIiwicGhvbmUiOm51bGwsImVtYWlsIjoibmFob21uZWdhMjNAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkZzBjZ05jbVRPWlpDNFRDWGd2QVRndUM5VE9lbU9LU281Lm1BekE0YzBPNlc0Nmc3dEJaWjIiLCJiaW8iOm51bGwsInByb2ZpbGVfaW1hZ2UiOiIiLCJjaXR5IjpudWxsLCJzdGF0ZSI6bnVsbCwiZmNtX3Rva2VuIjpudWxsLCJwbGFpZF9hY2Nlc3NfdG9rZW4iOm51bGwsInBsYWlkX3VzZXJfdG9rZW4iOiJ1c2VyLXNhbmRib3gtN2E2YmE0MDktYWY3ZS00ODE5LTlhMGYtYTZhODAxNDdiYjQyIiwibGlhYmlsaXRpZXNfYWRkZWQiOmZhbHNlLCJiYW5rcnVwdGN5X3N0YXR1cyI6bnVsbCwiYWN0aXZlX3BheWRheV9sb2FuIjpudWxsLCJyb2xlIjoidXNlciIsInRpZXIiOiIwIiwiY3JlYXRlZEF0IjoiMjAyNC0wMi0xMlQxNzozMTozOS4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNC0wMi0xMlQxNzozMTo0MC4wMDBaIn0sImlhdCI6MTcwNzc1OTIzNSwiZXhwIjoxNzM5Mjk1MjM1fQ.ZqviOgrlO6LZVPY3uwR6ZXUd7RMv7gQZ_-rULjghfwM"
            await fetch(Apis.ApiCreateLinkToken, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user.token//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyOSwiZmlyc3RuYW1lIjoiSHVzc25haW4iLCJtaWRkbGVuYW1lIjoiTGF0aWYiLCJsYXN0bmFtZSI6Ikp1dHQiLCJwaG9uZSI6bnVsbCwiZW1haWwiOiJIdXNzbmFpbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRPcVNuTDZOT0FRVGNQTWE3RE5JVnZPMTdNLmlGckYwY3RULlRFTXZuMzhLSzhVY0pkTE1rbSIsImJpbyI6bnVsbCwicHJvZmlsZV9pbWFnZSI6IiIsImNpdHkiOm51bGwsInN0YXRlIjoiTWlzc291cmkiLCJmY21fdG9rZW4iOm51bGwsInBsYWlkX2FjY2Vzc190b2tlbiI6bnVsbCwicGxhaWRfdXNlcl90b2tlbiI6InVzZXItc2FuZGJveC05YWM3NDdiOS05MWFjLTRhOTUtYmFlMy00OGQyNDVjYjk5YTUiLCJsaWFiaWxpdGllc19hZGRlZCI6ZmFsc2UsImJhbmtydXB0Y3lfc3RhdHVzIjpudWxsLCJhY3RpdmVfcGF5ZGF5X2xvYW4iOm51bGwsInJvbGUiOiJ1c2VyIiwidGllciI6IjAiLCJjcmVhdGVkQXQiOiIyMDI0LTAxLTI3VDE3OjIzOjEwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDI0LTAxLTI3VDE3OjI0OjA3LjAwMFoifSwiaWF0IjoxNzA3NDkxNzU4LCJleHAiOjE3MzkwMjc3NTh9.rt5uaA1IRXSwKO6lKwU9MRCxqvmjMnNgDOL2jhsU0qo",
                },
                body: JSON.stringify({ platform: Platform.OS, token_type: "IdentityVerification" })
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

    // create get profile api function

    const getUserLatestProfile = async () => {
        let data = await AsyncStorage.getItem("USER")
        // console.log(data)
        if (data) {
            let d = JSON.parse(data)
           

            //console.log("user stored data is ", user)
            console.log("user token  is ", d.token)
            //check bank contected      
            const result = await fetch(Apis.ApiUserStatus, {
                method: 'Post',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + d.token,
                },
                body: JSON.stringify({}),
            })
            if (result) {
                let json = await result.json();
                console.log("udated data is ", json)
                let newUser = json.data;
                d.user = newUser;
                 await AsyncStorage.setItem("USER", JSON.stringify(d))
                console.log("Saved user data ", d)
            }
        }
    };



    const getIdentityData = async (token) => {
        const data = await AsyncStorage.getItem("USER")
        console.log("Getting user " ,token)
        if (data) {

            let user = JSON.parse(data)
            console.log("Exchanging public token", token)
            // user.token = customToken
            await fetch(Apis.ApiIdentityUpdated, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user.token,
                },
                body: JSON.stringify({ identity_verification_id: token })
            })
                .then((response) => response.json())
                .then((d) => {
                    let data = d.data
                    console.log("data is ", d)
                    if (d.status === true) {
                        if (data.kyc_check_status === "success" && data.documentary_verification_status === "success" && data.risk_check_status === "success") {
                            //call get profile api
                            getUserLatestProfile()
                            props.navigation.navigate("BankAccountMainScreen")
                        } else {
                            props.navigation.navigate("IdentityConnectionFailed")
                        }
                    }
                    // setLinkToken(data.data.link_token);
                })
                .catch((err) => {
                    console.log('error is ', err);
                });
        }
    }

    useEffect(() => {
        if (linkToken == null || linkToken == "") {
            createLinkToken();
        }
        console.log("Link token is ", linkToken)
    }, [linkToken]);


    const logoutUser = async () => {

        try {
            await AsyncStorage.clear()
        } catch (e) {
            console.log('user could not logged in')
        }

        props.navigation.replace('SplashScreen1')
        console.log('Done.')

    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={globalStyles.container}>
                {/* <View style={{ flexDirection: 'row', width: width, paddingHorizontal: 12 / 393 * width, justifyContent: 'space-between', alignItems: 'center', }}> */}
                <TouchableOpacity style={{ alignSelf: 'flex-start', marginLeft: 12 }} onPress={() => {
                    logoutUser()
                }} >
                    <Text>Logout</Text>

                </TouchableOpacity>


                <View style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain' }}>

                </View>
                {/* </View> */}
                <Image source={require("../assets/bankIcon.png")}
                    style={{ height: 146 / 852 * height, width: 146 / 393 * width, marginTop: 140 / 852 * height, resizeMode: 'contain', }}
                />

                <Text style={{ fontSize: 18 / 852 * height, fontWeight: '500', marginTop: 50 / 852 * height, height: 20 / 852 * height }}>
                    Click The Button Below To

                </Text>
                <Text style={{ fontSize: 18 / 852 * height, fontWeight: '500', height: 20 / 852 * height }}>
                    Start Identity Verification
                </Text>

                <PlaidLink

                    tokenConfig={{
                        token: linkToken,
                        logLevel: 'Debug',
                        noLoadingState: false
                    }}
                    onSuccess={(success) => {
                        console.log("On success")
                        let suc = JSON.stringify(success)
                        let verification_id = success.metadata.linkSessionId;
                        getIdentityData(verification_id);
                        console.log(suc);
                    }}
                    onExit={(exit) => {
                        console.log("On exit")
                        console.log(exit);
                    }}
                >
                    <View style={[globalStyles.capsuleButton, { flexDirection: 'row', backgroundColor: '#000', marginTop: 40 / 852 * height }]}>
                        <Image source={require('../assets/buttonImage.png')}
                            style={{ height: 31 / 852 * height, width: 31 / 393 * width, resizeMode: 'contain' }}
                        />
                        <Text style={{ color: '#fff', fontSize: 14 / 852 * height, fontWeight: '500' }}>
                            Start Verification
                        </Text>
                    </View>
                </PlaidLink>
            </View>
        </SafeAreaView>
    );
}


export default IdentityConnectionScreen;