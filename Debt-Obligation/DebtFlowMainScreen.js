import React,{useState,useEffect} from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { globalStyles } from "../components/GlobalStyles";
import Apis from "../Api/apipath";
import { SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const { height, width } = Dimensions.get('window')

const DebtFlowMainScreen = () =>{

    const [user,setUser] = useState(null)

        const nextBtnAction = async () => {
            const data = await AsyncStorage.getItem("USER")

            if (data) {

                let u = JSON.parse(data)
                setUser(u)
                console.log("user get data", u)

                const token = u.token;

                const result = await fetch(Apis.ApiLiabilities, {
                    method: "get",
                    headers:
                    {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + token,
                    },
                })

                if (result) {
                    let json = await result.json()
                    console.log("get data is ", json)


                    if (json.status === true) {
                       console.log('Api Called')
                    }
                }
            }
        } ;
 
    return(

        <SafeAreaView style={{ flex: 1 }}>
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
                    Manually Enter Debt Details
                </Text>


                    <TouchableOpacity style={[globalStyles.capsuleButton, { flexDirection: 'row', backgroundColor: '#000', marginTop: 40 / 852 * height }]}
                        onPress={nextBtnAction}
                    >
                        <Image source={require('../assets/buttonImage.png')}
                            style={{ height: 31 / 852 * height, width: 31 / 393 * width, resizeMode: 'contain' }}
                        />
                        <Text style={{ color: '#fff', fontSize: 10, fontWeight: '500' }}>
                            Login to Debt
                        </Text>
                    </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default DebtFlowMainScreen ;
