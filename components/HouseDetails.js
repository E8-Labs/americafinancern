import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Dimensions, TouchableOpacity, Image, Alert, Modal } from "react-native";
import { globalStyles } from "./GlobalStyles";
import Snackbar from "react-native-snackbar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Apis from "../Api/apipath";
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

const { height, width } = Dimensions.get('window')

const HouseDetails = ({ navigation, route }) => {


    const [showFromClalender, setShowFromCalender] = useState(false);
    const [selectedFromDate, setSelectedFromDate] = useState(null);
    const [selectedToDate, setSelectedToDate] = useState(null);
    const [showToClalender, setShowToCalender] = useState(false);
    const [address, setAddress] = useState(null);
    const [zipCode, setZipCode] = useState(null);
    const [shiftingYear, setShiftingYear] = useState(null);
    const [leavingYear, setLeavingYear] = useState(null);
    const [landlord, setLandlord] = useState(null);
    const [number, setnumber] = useState(null);
    const [maxSelectableDate, setMaxSelectableDate] = useState(moment().format('YYYY-MM-DD'));
    const [user, setUser] = useState(null);


    useEffect(() => {
        // Update maxSelectableDate when needed
        setMaxSelectableDate(moment().format('YYYY-MM-DD'));
    }, [/* add dependencies that trigger the update */]);



    const onPressFromHanle = () => {
        setShowFromCalender(!showFromClalender)
    };

    const onPressToHanle = () => {
        setShowToCalender(!showToClalender)
    };
    const handleFromDate = (day) => {
        setSelectedFromDate(day.dateString)
        setShowFromCalender(false)
    };

    const handleToDate = (day) => {
        let d = day.dateString
        setSelectedToDate(d)

        if (selectedFromDate && d < selectedFromDate) {
            Alert.alert('Invalid Selection', '"From" date cannot be less than "To" date.')
        } else {
            setShowToCalender(false)
        }
    };
    //fomate date 

    const formatDate = (dateString) => {
        return moment(dateString).format("MM-DD-YYYY")
    };






    const nextBtnAction = async () => {

        // console.log("Housing details are" ,address)

        if (address===null || !zipCode || !selectedFromDate || !selectedToDate || !number || !landlord) { 
            Snackbar.show({
                text: 'Please enter all cridentials',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: 'red',
                marginBottom: 10,
            })


        } else{
        const housingData = route.params.house;
        // console.log(housingData)
        console.log("Rent Amount is", housingData.rentAmount)
        console.log("Housing data is", housingData)
        //         navigation.navigate("RecentHousingHistory", {
        //             housingData:housingData
        // ,
        // })
        const postData = JSON.stringify({
            "ownership_status": housingData.housing_situation,
            "onwership_status_other": housingData.onwership_status_other,
            "rent_paid": housingData.rentAmount,
            "min_living_year": housingData.minYears,
            "max_living_year": housingData.maxYears,
            "address": address,
            "zipcode": zipCode,
            "from_year": selectedFromDate,
            "to_year": selectedToDate,
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
    }

    };

    return (
        <View style={globalStyles.container}>

            <View style={{ flexDirection: 'row', marginTop: 36 / 852 * height, width: width, marginLeft: 20 / 852 * height }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: width, marginLeft: -40 }}>
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
                style={[globalStyles.inputStyle, { marginTop: 28 / 852 * height }]}
                keyboardType="numeric"
                value={zipCode}
                onChangeText={(text) => setZipCode(text)}
            />


            {/* show calendar */}

            <View style={{ width: width - 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'column' }}>
                    <TouchableOpacity style={{ paddingTop: 17 / 852 * height, paddingBottom: 17 / 852 * height, padding: 15 / 852 * height, borderRadius: 13 / 852 * height, backgroundColor: '#ececec', width: 168 / 852 * height, alignSelf: 'center', marginTop: 30 / 852 * height }}
                        onPress={onPressFromHanle}
                    >
                        <Text style={{ fontSize: 14 / 852 * height, fontWeight: '500' }}>
                            {selectedFromDate ? formatDate(selectedFromDate) : "From"}
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'column' }}>

                    <TouchableOpacity style={{ paddingTop: 17 / 852 * height, paddingBottom: 17 / 852 * height, padding: 15 / 852 * height, borderRadius: 13 / 852 * height, backgroundColor: '#ececec', width: 168 / 852 * height, alignSelf: 'center', marginTop: 30 / 852 * height }}
                        onPress={onPressToHanle}
                    >
                        <Text style={{ fontSize: 14 / 852 * height, fontWeight: '500' }}>
                            {selectedToDate ? formatDate(selectedToDate) : "To"}
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showFromClalender || showToClalender}
                onRequestClose={() => {
                    setShowFromCalender(false);
                    setSelectedToDate(false);
                }}
            >
                <View style={{ height: height, justifyContent: 'center', backgroundColor: '#00000050' }}>
                    <Calendar
                        style={{
                            borderWidth: 1,
                            borderColor: '#fff',
                            height: 350
                        }}
                        theme={{
                            backgroundColor: 'pink',
                            calendarBackground: '#fff',
                            textSectionTitleColor: '#ececec',
                            selectedDayBackgroundColor: '#2468E8',
                            selectedDayTextColor: '#fff',
                            todayTextColor: 'blue',
                            dayTextColor: '#000',
                            textDisabledColor: '#ececec',
                        }}
                        onDayPress={(day) => (showFromClalender ? handleFromDate(day) : handleToDate(day))}
                        markedDates={{ [showFromClalender ? selectedFromDate : selectedToDate]: { selected: true, selectedColor: 'blue' } }}
                        maxDate={maxSelectableDate}
                    />
                </View>
            </Modal>


            <TextInput placeholder="Landlord Name"
                style={[globalStyles.inputStyle, { marginTop: 28 / 852 * height }]}
                value={landlord}
                onChangeText={(text) => setLandlord(text)}
            />
            <TextInput placeholder="Contact Number"
                style={[globalStyles.inputStyle, { marginTop: 28 / 852 * height }]}
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