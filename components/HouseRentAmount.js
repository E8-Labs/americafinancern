import React, { useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, TextInput } from "react-native";
import { globalStyles } from "./GlobalStyles";
import Snackbar from "react-native-snackbar";

const { height, width } = Dimensions.get('window');

const HouseRentAmount = ({ navigation, route }) => {

    const nextBtnAction = () => {

        if (rentAmount == null) {
            Snackbar.show({
                text: 'Please enter all cridentials',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: 'red',
                marginBottom: 10,
            })
            return

        }
        const housingData = route.params.house;
        housingData.rentAmount = rentAmount,
            console.log(housingData)
            console.log("house ",housingData)
        navigation.navigate("HousingDurationScreen", {
            house: housingData,
        })
    };

    const [rentAmount, setRentAmount] = useState(null)

    return (
        <View style={globalStyles.container}>
            <Text style={{ fontSize: 10, fontWeight: '500' }}>
                Application Details
            </Text>
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
            <Text style={{ fontSize: 17, fontWeight: '700', marginTop: 10 }}>
                Housing
            </Text>

            <TextInput placeholder="How much do you pay monthly?"
                style={[globalStyles.inputStyle, { marginTop: 35/852*height}]}
                autoFocus={true}
                keyboardType="numeric"
                value={rentAmount}
                onChangeText={(text) => setRentAmount(text)}
            />
            <View style={{ width: width, alignItems: 'flex-end', marginRight: 20, marginTop: 20 }}>
                <TouchableOpacity onPress={nextBtnAction}>
                    <View style={globalStyles.arrowBotton}>
                        <Image source={require('../assets/arrow.png')}
                            style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: 'contain' }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default HouseRentAmount;