import React from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import { globalStyles } from "./GlobalStyles";
import BankAccountMainScreen from "./BankAcountMainScreen";
import IdentityConnectionScreen from "./IdentityConnectionScreen";
import DashboardBase from "../tabNavigation/DashboardBase";

const { height, width } = Dimensions.get('window')

const NotificationScreen = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={globalStyles.container}>
            <View style = {{width:width-20,alignItems:'flex-start',margin:20,}}>
            <TouchableOpacity  onPress={() => props.navigation.goBack()}>
                <Image
                    source={require('../assets/blackArrowicon-3x.png')}
                    style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain', }}
                />
            </TouchableOpacity>
            </View>
            <Text style={[globalStyles.uperMainText, { marginTop: 35/852*height }]}>
                Notifications
            </Text>

            <Image source={require('../assets/bellIcon.png')}
                style={{ height: 237 / 852 * height, width: 315 / 393 * width, marginTop: 10 }}
            />
            <Text style={{ color: '#a7a7a7', fontSize: 10, fontWeight: '500' }}>
                Allow America Finance to show
            </Text>
            <Text style={{ color: '#a7a7a7', fontSize: 10, fontWeight: '500' }}>
                you notifications regarding the
            </Text>
            <Text style={{ color: '#a7a7a7', fontSize: 10, fontWeight: '500' }}>
                status of your loan?
            </Text>

            <TouchableOpacity style={[globalStyles.capsuleButton, { marginTop: 100 / 852 * height }]}
                onPress={() => props.navigation.navigate("DashboardBase")}
            >
                <Text style={{ fontSize: 10, fontWeight: '500', color: '#fff',fontSize:16/852*height }}>
                    Allow Permission
                </Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
}

export default NotificationScreen;