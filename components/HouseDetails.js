import React, { useState } from "react";
import { View, Text, TextInput, Dimensions, TouchableOpacity, Image } from "react-native";
import { globalStyles } from "./GlobalStyles";
import Snackbar from "react-native-snackbar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Apis from "../Api/apipath";

const { height, width } = Dimensions.get('window')

const HouseDetails = ({ navigation, route }) => {

    const [user, setUser] = useState(null)

    const nextBtnAction = async () => {

        // console.log("Housing details are" ,address)

        if (!address || !zipCode || !shiftingYear || !leavingYear || !number || !landlord) {
            Snackbar.show({
                text: 'Please enter all cridentials',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: 'red',
                marginBottom: 10,
            })

        }


        const housingData = route.params.house;
        // console.log(housingData)
        console.log("Rent Amount is", housingData.rentAmount)
        console.log("Housing data is", housingData)
        //         navigation.navigate("RecentHousingHistory", {
        //             housingData:housingData
        // ,
        //         })

        const postData = JSON.stringify({
            "ownership_status": housingData.housing_situation,
            "onwership_status_other": housingData.onwership_status_other,
            "rent_paid": housingData.rentAmount,
            "min_living_year": housingData.minYears,
            "max_living_year": housingData.maxYears,
            "address": address,
            "zipcode": zipCode,
            "from_year": shiftingYear,
            "to_year": leavingYear,
            "landlord_name": landlord,
            "contact_number": number
        })

        const data = await AsyncStorage.getItem("USER")

        if (data) {

            let u = JSON.parse(data)
            setUser(u)
            console.log("user get data", u)
            console.log("user id ", u.user.id)


            let token = u.token

            //  const url = "https://857e-103-150-238-25.ngrok-free.app/api/houses/add_house";
            const result = await fetch(Apis.ApiAddHouse, {
                method: 'Post',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                },
                body: postData,
            })

            if (result) {
                const json = await result.json()
                console.log("Data is ", json)
                if (json.status === true) {
                     navigation.navigate("RecentHousingHistory")
                }
            }
        }

    };

    const [address, setAddress] = useState(null);
    const [zipCode, setZipCode] = useState(null);
    const [shiftingYear, setShiftingYear] = useState(null);
    const [leavingYear, setLeavingYear] = useState(null);
    const [landlord, setLandlord] = useState(null);
    const [number, setnumber] = useState(null);

    return (
        <View style={globalStyles.container}>

            <View style={{ flexDirection: 'row', marginTop: 36 / 852 * height, width: width, marginLeft: 20 / 852 * height }}>
                <View style={{ alignItems: 'center',justifyContent:'center', width: width, marginLeft: -40 }}>
                    <Text style={{ fontSize: 12 / 852 * height, color: "#000", fontWeight: '500', }}>
                        Between 2 - 3 years
                    </Text>
                </View>
                <TouchableOpacity style={{ alignItems: 'flex-start', }} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../assets/crossButton.png')}
                        style={{ height: 30 / 852 * height, width: 30 * width / 393, resizeMode: 'contain', }}
                    />
                </TouchableOpacity>

            </View>
            {/* <Text style={{ fontSize: 10, fontWeight: '500' }}>
                Between 2 - 3 years
            </Text> */}
            <TextInput placeholder="Address"
                style={[globalStyles.inputStyle, { marginTop: 40 / 852 * height }]}
                autoFocus={true}
                value={address}
                onChangeText={(text) => setAddress(text)}
            />
            <TextInput placeholder="Zip Code"
                style={[globalStyles.inputStyle,{marginTop:28/852*height}]}
                keyboardType="numeric"
                value={zipCode}
                onChangeText={(text) => setZipCode(text)}
            />
            <View style={{ flexDirection: 'row', gap: 25 / 393 * width ,marginTop:28/852*height}}>
                <TextInput placeholder="From"
                    keyboardType="numeric"
                    style={[globalStyles.inputStyle, { paddingLeft:10,width: 168 / 393 * width }]}
                    value={shiftingYear}
                    onChangeText={(text) => setShiftingYear(text)}
                />
                <TextInput placeholder="To"
                    style={[globalStyles.inputStyle, {paddingLeft:10, width: 168 / 393 * width }]}
                    keyboardType="numeric"
                    value={leavingYear}
                    onChangeText={(text) => setLeavingYear(text)}
                />

            </View>
            <TextInput placeholder="Landlord Name"
                style={[globalStyles.inputStyle,{marginTop:28/852*height}]}
                value={landlord}
                onChangeText={(text) => setLandlord(text)}
            />
            <TextInput placeholder="Contact Number"
                style={[globalStyles.inputStyle,{marginTop:28/852*height}]}
                keyboardType="numeric"
                value={number}
                onChangeText={(text) => setnumber(text)}
            />
            <TouchableOpacity style={{ alignSelf: 'flex-end', marginEnd: 12, marginTop: 30 / 852 * height }}
                onPress={nextBtnAction}
            >
                <View style={globalStyles.arrowBotton}>
                    <Image source={require('../assets/arrow.png')}
                        style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: 'contain' }}

                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default HouseDetails;