import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Dimensions, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { useHandler } from "react-native-reanimated";


const blackArrowicon = require("../assets/American_Finance_App_image/blackArrowicon-3x.png");
const Arrowicon = require("../assets/American_Finance_App_image/whiteArrowicon-3x.png");



const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const Manage_account_password = () => {

    const [password, setpassword] = useState('')

    const [showpassword, setshowpassword] = useState(false)

    const [Newpassword, setNewpassword] = useState('')

    const [showNewpassword, setshowNewpassword] = useState(false)

    const [Retypenewpassword, setRetypenewpassword] = useState('')

    const [showRetypenewpassword, setshowRetypenewpassword] = useState(false)



    return (




        <SafeAreaView style={{height:height,width:width}} >
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
          <View style={{ marginLeft: 17 / 852 * height,}}>
                <TouchableOpacity style={{ height: 30 / 852 * height, width: 30 / 852 * height,  justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 24 / 852 * height, width: 20 / 393 * width, resizeMode: "contain" }} source={blackArrowicon} />
                </TouchableOpacity>
                <Text style={{ marginTop: -20 / 852 * height, alignSelf: "center", alignItems: "center", justifyContent: "Center", color: "#000", fontSize: 12 / 852 * height, fontWeight: "500" }}>
                Update Password
                </Text>
            </View>

            <View style={{ marginTop: 57 / 852 * height, alignSelf: "center",height:55/852*height, flexDirection: 'row', backgroundColor: '#ececec', width: 360 / 393 * width, borderRadius: 13 / 852 * height,}}>
                <TextInput placeholder="Old password" placeholderTextColor={"#000"} style={{ flex: 1, fontSize: 14 / 852 * height, paddingLeft: 10 / 852 * height }}
                    value={password} onChangeText={(text) => setpassword(text)} secureTextEntry={!showpassword} autoFocus={true} />

                <TouchableOpacity style={{ alignSelf: 'center', marginRight: 20 / 852 * height }} onPress={() => { setshowpassword(!showpassword) }}>
                    <Text style={{ color: '#2468E8', fontSize: 14 / 852 * height, fontWeight: '500' }}>
                        Show
                    </Text>
                </TouchableOpacity>

            </View>


            <View style={{ marginTop: 20 / 852 * height, alignSelf: "center",height:55/852*height, flexDirection: 'row', backgroundColor: '#ececec', width: 360 / 393 * width, borderRadius: 13 / 852 * height, }}>
                <TextInput placeholder="New password"
                    placeholderTextColor={"#000"}
                    style={{ flex: 1, fontSize: 14 / 852 * height, paddingLeft: 10 / 852 * height }}
                    value={Newpassword} onChangeText={(text) => setNewpassword(text)} secureTextEntry={!showNewpassword} autoFocus={true} />
                <TouchableOpacity style={{ alignSelf: 'center', marginRight: 20 / 852 * height }} onPress={() => { setshowNewpassword(!showNewpassword) }}>
                    <Text style={{ color: '#2468E8', fontSize: 14 / 852 * height, fontWeight: '500' }}>
                        Show
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 20 / 852 * height, alignSelf: "center", flexDirection: 'row', backgroundColor: '#ececec',height:55/852*height, width: 360 / 393 * width, borderRadius: 13 / 852 * height,}}>
                <TextInput placeholder="Re-type new password" placeholderTextColor={"#000"}
                    style={{ flex: 1, fontSize: 14 / 852 * height,paddingLeft:10/852*height  }}
                    value={Retypenewpassword} onChangeText={(text) => setRetypenewpassword(text)} secureTextEntry={!showRetypenewpassword} autoFocus={true} />
                <TouchableOpacity style={{ alignSelf: 'center', marginRight: 20 / 852 * height }} onPress={() => { setshowRetypenewpassword(!showRetypenewpassword) }}>
                    <Text style={{ color: '#2468E8', fontSize: 14 / 852 * height, fontWeight: '500'}}>
                        Show
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 45/852*height,borderRadius:32/852*height, marginRight: 25/852*height, }} >
                    <View style={styles.arrowBotton}>
                        <Image source={Arrowicon}
                        style={{height:24/852*height, width:24/852*height , resizeMode:"center"}}
                        />
                    </View>
                </TouchableOpacity>
        </KeyboardAvoidingView>
        </SafeAreaView>



    );
}
const styles = StyleSheet.create({
    arrowBotton:{
        backgroundColor: '#2468E8',
        borderRadius: 35,
        height: 65/852*height,
        width:65/852*height,
        alignItems: 'center',
        justifyContent: 'center',
        


      },
})
export default Manage_account_password;
