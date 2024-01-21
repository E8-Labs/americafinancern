import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import { globalStyles } from "./GlobalStyles";
import Apis from "../Api/apipath";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Snackbar from "react-native-snackbar";
import HouseDetails from "./HouseDetails";

const { height, width } = Dimensions.get('window');
const CloseIcon = require("../assets/American_Finance_App_image/CloseIcon-3x.png")

const RecentHousingHistory = (props) => {

    const [user, setUser] = useState(null)
    const [houses, setHouses] = useState([])

    const nextBtnAction = () => {
        if (houses.length < 2) {
            Snackbar.show({
                text: "Please enter minimum three houses history",
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: 'red',
                marginBottom: 10,
            })
        }
        else {
            props.navigation.navigate('DashboardBase')

        }
    }
    useEffect(() => {
        const getHouseList = async () => {
            const data = await AsyncStorage.getItem("USER")

            if (data) {

                let u = JSON.parse(data)
                setUser(u)
                console.log("user get data", u)

                const token = u.token;

                const result = await fetch(Apis.ApiGetHouseList, {
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
                        console.log("house data got")
                        console.log(json.data[0].address)
                        let houses = json.data
                        houses.push({})
                        setHouses(houses)
                        // props.navigation.navigate('')
                    }
                }
            }
        }
        getHouseList();
    }, [])

    const [selectedOption, setSelectedOption] = useState("");
    const [showModal, setShowModal] = useState(false)


    return (
        <View style={globalStyles.container}>
            <View style={{ flexDirection: 'row', marginTop: 36 / 852 * height, width: width, marginLeft: 20 / 852 * height }}>
                <TouchableOpacity style={{ alignItems: 'flex-start', }} onPress={() =>props.navigation.goBack("HouseDetails")}>
                    <Image
                        source={require('../assets/blackArrowicon-3x.png')}
                        style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain', }}
                    />
                </TouchableOpacity>
                <View style={{ alignItems: 'center', width: width, marginLeft: -30 }}>
                    <Text style={{ fontSize: 12 / 852 * height, color: "#000", fontWeight: '500', }}>
                        Application Details
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>

                <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>

                <View style={{
                    height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                }}>
                    <Image source={require('../assets/home.png')}
                        style={{
                            height: 20 / 852 * height, width: 20 / 852 * height, alignSelf: 'center', justifyContent: 'center'
                        }}
                    />
                </View>

                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>
            </View>
            <Text style={{ fontSize: 24 / 852 * height, fontWeight: '700', marginTop: 10 / 852 * height, color: '#000' }}>
                Housing
            </Text>
            <Text style={{ fontSize: 14 / 852 * height, fontWeight: '500', color: '#a7a7a7' }}>
                Please submit at least 3 years of your most
            </Text>
            <Text style={{ fontSize: 14 / 852 * height, fontWeight: '500', color: '#a7a7a7' }}>
                recent Housing history
            </Text>

            <ScrollView style={{ flex: 2.5 }}>


                {
                    houses.map((item, index) =>
                        index < houses.length - 1 ? (
                            
                            SinglueHouseView(item, setShowModal)
                        )
                            :
                            (
                                <TouchableOpacity key={1212321} style={{ margin: 30,alignSelf:"center" }}
                                    onPress={() => props.navigation.navigate("HousingSituition")}
                                >
                                    <View style={[globalStyles.arrowBotton, { backgroundColor: 'skyblue' }]}>
                                        <Image source={require('../assets/blueAddIcon.png')}
                                            style={{ height: 20 / 852 * height, width: 20 / 393 * width, }}
                                        />
                                    </View>
                                </TouchableOpacity>
                            )
                    )
                }
            </ScrollView>
            <View style={{ flex: 0.6, alignItems: 'center', width: width, marginRight: 20 }}>

                <TouchableOpacity style={{ alignSelf: 'flex-end', }}
                    onPress={nextBtnAction}
                >
                    <View style={globalStyles.arrowBotton}>
                        <Image source={require('../assets/arrow.png')}
                            style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: 'contain' }}

                        />
                    </View>
                </TouchableOpacity>

                <Text style={{ fontSize: 14 / 852 * height, color: '#a7a7a7', fontWeight: '500', height: 18, marginTop: 20 / 852 * height }}>
                    For more information and resources regarding
                </Text>

                <Text style={{ fontSize: 14 / 852 * height, color: '#a7a7a7', fontWeight: '500', height: 18 }}>
                    PayDay loans, please visit
                </Text>

                <TouchableOpacity>
                    <Text style={{ fontSize: 14 / 852 * height, fontWeight: '600', color: '#2468E8', height: 18 }}>
                        www.AmericaFinance.com
                    </Text>

                </TouchableOpacity>
            </View>


            <Modal
                transparent={true}
                visible={showModal}

            >
                <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: '#00000050' }}>
                    <View style={{ elevation: 5, shadowColor: "#000", height: 189 / 852 * height, width: 359 / 393 * width, alignSelf: "center", backgroundColor: "#fff", borderRadius: 23, marginTop: 26, alignItems: "center" }}>
                        <Text style={{ fontSize: 14 / 852 * height, fontWeight: "500", color: "#000", margin: 17 / 852 * height }}>
                            More Options
                        </Text>
                        <TouchableOpacity style={{ height: 55 / 852 * height, width: 253 / 393 * width, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: 18 / 852 * height, fontWeight: "500", color: "#000" }}>
                                Edit
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: 55 / 852 * height, width: 253 / 393 * width, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: 18 / 852 * height, fontWeight: "500", color: "#ff124b" }}>
                                Delete
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ elevation: 5, shadowColor: "#000" }} >
                        <TouchableOpacity onPress={() => setShowModal(false)} style={{ height: 81 / 852 * height, width: 81 / 852 * height, backgroundColor: "#fff", justifyContent: "center", alignItems: "center", alignSelf: "center", borderRadius: 40.5 / 852 * height, margin: 13 / 852 * height }}>
                            <View >
                                <Image
                                    source={CloseIcon} style={{ height: 24 / 852 * height, width: 24 / 852 * height }} />

                            </View>
                        </TouchableOpacity>

                    </View>
                </View>


            </Modal>
        </View>
    )

}

export default RecentHousingHistory;

function SinglueHouseView(item, setShowModal) {
    return <View  style={{
        width: 350 / 393 * width, borderColor: '#ececec', borderWidth: 1, borderRadius: 20,
        flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 / 852 * height
    }} key={item.id}>
        <View style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 15, paddingRight: 23 }}>
            <Text style={{ fontSize: 18 / 852 * height, fontWeight: '600', color: '#000' }}>
                {item.address}
            </Text>
            <Text style={{ fontSize: 14 / 852 * height, fontWeight: '500', color: '#000' }}>
                {item.state}   |  {item.zipcode}
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 3, gap: 3, alignItems: 'center' }}>
                <Text style={{ fontSize: 12 / 852 * height, fontWeight: '500', color: '#000' }}>
                    {item.from_year} - {item.to_year}
                </Text>
                <Text style={{ fontSize: 12 / 852 * height, fontWeight: '500', color: '#a7a7a7' }}>
                    (  {(item.to_year - item.from_year)}yr)
                </Text>
            </View>
        </View>
        <TouchableOpacity onPress={() => setShowModal(true)}>
            <Image source={require('../assets/moreIcon.png')}
                style={{ height: 34 / 852 * height, width: 34 / 393 * width, resizeMode: 'contain', margin: 10, padding: 2 }} />
        </TouchableOpacity>
    </View>;
}
