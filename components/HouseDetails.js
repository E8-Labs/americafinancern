import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Dimensions, TouchableOpacity, Image, Alert, Modal } from "react-native";
import { globalStyles } from "./GlobalStyles";
import Snackbar from "react-native-snackbar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Apis from "../Api/apipath";
import { Calendar } from 'react-native-calendars';
import { SafeAreaView } from "react-native";
import moment from 'moment';

const { height, width } = Dimensions.get('window')

const HouseDetails = ({ navigation, route }) => {


    const [showFromClalender, setShowFromCalender] = useState(false);
    const [selectedFromDate, setSelectedFromDate] = useState(null);
    const [selectedToDate, setSelectedToDate] = useState(null);
    const [showToClalender, setShowToCalender] = useState(false);
    const [address, setAddress] = useState(null);
    const [zipCode, setZipCode] = useState(null);
    const [landlord, setLandlord] = useState(null);
    const [number, setnumber] = useState(null);
    const [maxSelectableDate, setMaxSelectableDate] = useState(moment().format('YYYY-MM-DD'));
    const [getData, setGetData] = useState(null);
    const [data, setData] = useState(null)
    const [user,setUser] =useState(null)


    useEffect(() => {

       let dat = route.params.house;
       setGetData(dat)
        
        setGetData(dat)
        // console.log(housingData)
        console.log("Rent Amount is", dat.rentAmount)
        console.log("Housing data is", dat.max_living_year)

        setData(dat)
        // Update maxSelectableDate when needed
        setMaxSelectableDate(moment().format('YYYY-MM-DD'));
    }, []);



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

        // if (address === null || !zipCode || !selectedFromDate || !selectedToDate || !number || !landlord) {
        //     Snackbar.show({
        //         text: 'Please enter all cridentials',
        //         duration: Snackbar.LENGTH_SHORT,
        //         backgroundColor: 'red',
        //         marginBottom: 10,
        //     })


        // } else {

            console.log("btn press")

            //         navigation.navigate("RecentHousingHistory", {
            //             housingData:housingData
            // ,
            // })
            const postData = JSON.stringify({
                "ownership_status":getData? getData.housing_situation:'',
                "onwership_status_other": getData?getData.onwership_status_other:'',
                "rent_paid": getData.rentAmount,
                "min_living_year":getData.minYears,
                "max_living_year": getData?getData.maxYears:'',
                "address": address,
                "zipcode": zipCode,
                "from_year": selectedFromDate,
                "to_year": selectedToDate,
                "landlord_name": landlord,
                "contact_number": number
            })
            console.log("Post Data ", postData)
            console.log("recived  Data ", getData.max_living_year)


            try{
                const data = await AsyncStorage.getItem("USER")

            if (data) {

                let u = JSON.parse(data)
                setUser(u)
                console.log("user get data", u)
                console.log("user id ", u.user.id)

                let token = u.token
                // console.log("Token recieved from apiis", token)

                //  const url = "https://857e-103-150-238-25.ngrok-free.app/api/houses/add_house";
                const result = await fetch(Apis.ApiAddHouse, {
                    method: "post",
                    headers: { "Content-Type": "application/json",
                            "Authorization": "Bearer " +token ,
                },
                    body: postData,
                })
                // console.log("User token recieved from api is", token)
                console.log ("Token recieved from api is ", u.token)

                console.log("result true")

                if (result) {
                    const json = await result.json()
                    console.log("House Added is ", json)
                    if (json.status === true) {
                        navigation.navigate("RecentHousingHistory")
                    }
                }
                else {
                    console.log("result false")
                }
            }
            }catch (error) {
                console.log("Error is", error)
            }
        // }

    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={globalStyles.container}>

                {/* <View style={{ flexDirection: 'row', marginTop: 36 / 852 * height, width: width, marginLeft: 20 / 852 * height }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: width, marginLeft: -40 }}>
                    <Text style={{ fontSize: 12 / 852 * height, color: "#000", fontWeight: '500', }}>
                       {data?data.duration:'null'}
                    </Text>
                </View>
                <TouchableOpacity style={{ alignItems: 'flex-start', }} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../assets/crossButton.png')}
                        style={{ height: 30 / 852 * height, width: 30 * width / 393, resizeMode: 'contain', }}
                    />
                </TouchableOpacity>

            </View> */}

                <View style={{ flexDirection: 'row', width: width, paddingHorizontal: 12 / 393 * width, justifyContent: 'space-between', alignItems: 'center', }}>

                    <View style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain' }}>

                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 12 / 852 * height, color: "#000", fontWeight: '500', }}>
                            {data ? data.duration : 'null'}
                        </Text>
                    </View >
                    <TouchableOpacity style={{ alignSelf: 'flex-start', }} onPress={() => navigation.goBack()} >
                        <Image
                            source={require('../assets/crossButton.png')}
                            style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain', }}
                        />
                        {/* error */}
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
                <TouchableOpacity style={[globalStyles.shadowStyle,{ alignSelf: 'flex-end', marginEnd: 12, marginTop: 30 / 852 * height }]}
                    onPress={nextBtnAction}
                >
                    <View style={globalStyles.arrowBotton}>
                        <Image source={require('../assets/arrow.png')}
                            style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: 'contain' }}

                        />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HouseDetails;