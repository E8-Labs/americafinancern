import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native";
import { globalStyles } from "./GlobalStyles";


const { height, width } = Dimensions.get('window')


const CongratesScreen = (props) => {

    const nextButtonAction = () => {
        props.navigation.navigate("ActivePaydayLoans")
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={globalStyles.container}>
            <Text style={[globalStyles.uperMainText, { marginTop: 92 / 853 * height, fontSize: 32 / 852 * height }]}>
                Congratulations
            </Text>
            <Image source={require('../assets/AFImage.png')}
                style={{ height: 109 / 853 * height, width: 96 / 393 * width, marginTop: 67 / 853 * height }}
            />
                <Text style={{ fontSize: 24/852 *height, fontWeight: '500', color:"#000" }}>
                    You're all set to start
                </Text>
                <Text style={{ fontSize: 24/852 *height, fontWeight: '500',  color:"#000"}}>
                    your new loan with us.
                </Text>
                <TouchableOpacity style={[globalStyles.capsuleButton, { marginTop: 136 / 853 * height }]}
                    onPress={nextButtonAction}>
                    <Text style={{ color: '#fff', fontSize: 16/852*height, fontWeight: '500' }}>
                        Start Loan
                    </Text>
                </TouchableOpacity>

                <Text style={[globalStyles.bottomText, { marginTop: 147 / 853 * height,}]}>
                    For more information and resources regarding
                </Text>

                <Text style={globalStyles.bottomText}>
                    PayDay loans, please visit
                </Text>

                <TouchableOpacity>
                    <Text style={[globalStyles.bottomText, { color: '#2468E8' }]}>
                        www.AmericaFinance.com
                    </Text>

                </TouchableOpacity>
            </View>
            </SafeAreaView>
    );
}

export default CongratesScreen;