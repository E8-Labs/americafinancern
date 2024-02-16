import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Dimensions, ScrollView, KeyboardAvoidingView, Modal, StyleSheet, Switch, SafeAreaView } from "react-native";
import ToggleSwitch from 'toggle-switch-react-native'



const blackArrowicon = require("../assets/American_Finance_App_image/blackArrowicon-3x.png");
const Profileimage = require("../assets/American_Finance_App_image/ProfileImage.png")
const TickIcone = require("../assets/American_Finance_App_image/TickIcone-3x.png");
const CloseIcon = require("../assets/American_Finance_App_image/CloseIcon-3x.png");
const RightArrowIcon = require("../assets/American_Finance_App_image/RightArrowIcon-3x.png");

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");




const ManageAccountProfile = () => {

    const [selectedOption, setSelectedOption] = useState("");
    const [showModal, setShowModal] = useState(false);

    const [switchOn, setSwitchOn] = useState(false);

  const onToggle = () => {
    setSwitchOn(!switchOn);
    // Handle the toggle switch change event here
    if (!switchOn) {
      // Switch is ON
      console.log('Switch is ON');
    } else {
      // Switch is OFF
      console.log('Switch is OFF');
    }
  };

    return (
        <SafeAreaView style={{height:height,width:width}}>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} style={{ height: height, width: width }}>
            <View style={{ marginLeft: 17 / 852 * height,}}>
                <TouchableOpacity style={{ height: 30 / 852 * height, width: 30 / 852 * height, justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 24 / 852 * height, width: 20 / 393 * width, resizeMode: "contain" }} source={blackArrowicon} />
                </TouchableOpacity>
                <Text style={{ marginTop: -20 / 852 * height, alignSelf: "center", alignItems: "center", color: "#000", fontSize: 12 / 852 * height, fontWeight: "500" }}>
                    Manage Account
                </Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 22 / 852 * height }}>
                <Image source={Profileimage} style={{ height: 68 / 852 * height, width: 68 / 852 * height }} />
                <Text style={{ marginTop: 22 / 852 * height, fontSize: 14 / 852 * height, color: "#2468E8", fontWeight: "500" }} >
                    Update Profile
                </Text>
            </View>

            <View style={{ marginTop: 59 / 852 * height, marginLeft: 31 / 393 * width, marginRight: 31 / 393 * height, justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                <View style={{ alignItems: "center", flexDirection: "row", }}>
                    <Text style={{ color: "#000", fontSize: 18 / 852 * height, fontWeight: "500" }} >
                        Noah Nega
                    </Text>
                    <Text style={{ fontSize: 14 / 852 * height, fontWeight: "500" }}>  (Alias Name)
                    </Text>
                </View>
                <TouchableOpacity>
                <Text style={{ color: "#2468E8", fontSize: 14 / 852 * height, fontWeight: "500" }} >
                    Edit
                </Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 50 / 852 * height, alignItems: "center", marginLeft: 17 / 393 * width, marginRight: 17 / 393 * height }}>
                <TextInput style={{ backgroundColor: "#ececec", width: 360 / 393 * width, borderRadius: 13 / 852 * height, padding: 14 / 852 * height }} fontSize={18 / 852 * height} placeholder="hello@e8-labs.com" />
            </View>
            <View style={{ marginTop: 20 / 852 * height, alignItems: "center", marginLeft: 17 / 393 * width, marginRight: 17 / 393 * height }}>
                <TextInput style={{ backgroundColor: "#ececec", width: 360 / 393 * width, borderRadius: 13 / 852 * height, padding: 14 / 852 * height }} fontSize={18 / 852 * height} placeholder="+1 202-688-5500" />
            </View>
            <View style={{ marginTop: 20 / 852 * height, alignItems: "center", marginLeft: 17 / 393 * width, marginRight: 17 / 393 * height }}>
                <TextInput style={{ backgroundColor: "#ececec", width: 360 / 393 * width, borderRadius: 13 / 852 * height, padding: 14 / 852 * height }} fontSize={18 / 852 * height} placeholder="San Francisco, CA" />
            </View>
            <View style={{ marginTop: 20 / 852 * height, alignItems: "center", marginLeft: 17 / 393 * width, marginRight: 17 / 393 * height }}>
                <TextInput style={{ backgroundColor: "#ececec", width: 360 / 393 * width, borderRadius: 13 / 852 * height, padding: 14 / 852 * height }} fontSize={18 / 852 * height} placeholder="SSN/ITIN" />
            </View>
            <TouchableOpacity style={{ alignItems: "center", marginTop: 33 / 852 * height }} onPress={() => setShowModal(true)} >
                <Text style={{ color: "#2468E8", fontSize: 18 / 852 * height, fontWeight: "500" }} >
                    Password And Security
                </Text>
            </TouchableOpacity>

            <Modal
                transparent={true}
                visible={showModal}



            >
                <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: '#00000050' }}>
                    <View style={{ elevation: 5, shadowColor: "#000", height: 235 / 852 * height, width: 369 / 393 * width, alignSelf: "center", backgroundColor: "#fff", borderRadius: 23 / 852 * height, alignItems: "center" }}>
                        <Text style={{ fontSize: 14 / 852 * height, fontWeight: "500", color: "#000", marginTop: 17 / 852 * height }}>
                            Password And Security
                        </Text>
                        <View style={{ paddingLeft: 10 / 393 * width,paddingRight: 10 / 393 * width, marginTop: 25 / 852 * height,marginLeft:22/393*width,marginRight:22/393*width ,borderRadius: 20 / 852 * height, justifyContent: "space-between", flexDirection: "row", width: 343 / 393 * width, alignItems: "center", }}>
                            <Text style={{ color: "#000", fontSize: 18 / 852 * height, fontWeight: "500", }}>
                                Enable Face ID Security
                            </Text>

                            <ToggleSwitch 
                                isOn={switchOn}
                                onColor="#2468E8"
                                offColor="#d0d0d0"
                                size="medium"
                                onToggle={onToggle}
                            />
                        </View>

                        <TouchableOpacity style={styles.BouttonViewStyle}>
                            <Text style={styles.textStyle} >
                                Update Password
                            </Text>

                            <View style={styles.forthViewStyle}>
                                <Image style={styles.ImageStyle}
                                    source={RightArrowIcon}
                                />
                            </View>

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

        </KeyboardAvoidingView>
        </SafeAreaView>
    )
};
export default ManageAccountProfile;

const styles = StyleSheet.create({
    BouttonViewStyle: {
        marginTop: 21 / 852 * height,
        borderRadius: 20 / 852 * height,
        backgroundColor: "#ececec",
        justifyContent: "space-between",
        flexDirection: "row",
        height: 76 / 852 * height,
        width: 343 / 393 * width,
        alignItems: "center",
    },

    textStyle: {
        paddingLeft: 10 / 852 * height,
        fontSize: 18 / 852 * height,
        color: "#000"

    },
    ImageStyle: {
        height: 24 / 852 * height,
        width: 24 / 393 * width,
    },
    forthViewStyle: {
        marginRight: 10 / 852 * height,
        height: 44 / 852 * height,
        width: 44 / 852 * height,
        borderRadius: 22 / 852 * height,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
})