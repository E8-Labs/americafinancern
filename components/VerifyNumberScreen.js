import React, { useRef,useState } from "react";
import { View, Image, Dimensions, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native";
import { globalStyles } from "./GlobalStyles";


const { height, width } = Dimensions.get('window');

const callIcon = require('../assets/call2.png');
const arrowBotton = require('../assets/arrow.png');





const VerifyNumberScreen = ({ navigation, route }) => {

    const user =  route.params.user
    const[number,setNumber] = useState(user.phone)
    const nextButtonAction = () => {
       
        console.log("number is ")
        console.log(number);
    

        navigation.navigate('FaceIdScreen', {
            user:user
            
        })
    }

    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);

    const handelInputChange = (text, ref) => {
        if (text.length === 1 && ref) {
            ref.current.focus()
        }
    };


    return (
 
        <View style={globalStyles.container}>
            <View style={{
                height: 307 / 852 * height, width: 393 / 393 * width, borderBottomLeftRadius: 300/852*height,
                borderBottomRightRadius: 300/852*height, backgroundColor: '#2468E8', alignItems: 'center', 
            }}>

                <View style={{ alignItems: 'flex-start', width: width }}>
                    <TouchableOpacity style={{ marginTop: 60 / 852 * height, marginLeft: 17 / 393 * width }} onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../assets/backArrow.png')}
                            style={{ height: 32 / 852 * height, width: 32 * width / 393 }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 15/852 *height, alignItems: 'center' }}>
                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#fff" }}></View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#fff", marginRight: 9, marginLeft: 6 }}></View>

                    <View style={{
                        height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5/852*height, borderWidth: 1.5, alignSelf: "center", justifyContent: 'center', borderColor: '#fff'
                    }}>
                        <Image source={callIcon}
                            style={{
                                height: 19 / 852 * height, width: 19 / 393 * width, resizeMode: 'contain',
                                alignSelf: 'center', justifyContent: 'center',
                            }}
                        />
                    </View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#fff", marginRight: 9, marginLeft: 6 }}></View>
                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#fff" }}></View>

                </View>

                <Text style={{ fontSize: 26/852 *height, fontWeight: '500', marginTop: 12/852 *height, color: '#fff' }}>
                    Verify Your Phone Number
                </Text>

                <Text style={{ fontSize: 16/852 *height, fontWeight: '500', color: '#fff', marginTop: 13/852 *height }}>
                    Enter the verification code sent to
                </Text>
                <Text style={{ fontSize: 16/852 *height, fontWeight: '500', color: '#fff', }}>
                    sent to {number}
                </Text>

                <View style={{ flexDirection: 'row', marginTop: 109 / 852 * height, gap: 10/393 *width }}>

                    <TextInput placeholder="0"
                        autoFocus={true}
                        secureTextEntry={true}
                        style={styles.inputStyle}
                        keyboardType="numeric"
                        maxLength={1}
                        ref={input1Ref}
                        onChangeText={(text) => handelInputChange(text, input2Ref)}
                    />

                    <TextInput placeholder="0"
                        secureTextEntry={true}
                        style={styles.inputStyle}
                        keyboardType="numeric"
                        maxLength={1}
                        ref={input2Ref}
                        onChangeText={(text) => handelInputChange(text, input3Ref)}
                    />
                    <TextInput placeholder="0"
                        secureTextEntry={true}
                        style={styles.inputStyle}
                        keyboardType="numeric"
                        maxLength={1}
                        ref={input3Ref}
                        onChangeText={(text) => handelInputChange(text, input4Ref)}
                    />
                    <TextInput placeholder="0"
                        secureTextEntry={true}
                        style={styles.inputStyle}
                        keyboardType="numeric"
                        maxLength={1}
                        ref={input4Ref}
                        onChangeText={(text) => handelInputChange(text, null)}
                    />
                </View>

                <View style={{ marginTop: 45 / 852 * height }}>
                    <TouchableOpacity style={[globalStyles.shadowStyle,{ marginTop: 20/852*height, }]}
                        onPress={nextButtonAction}
                    >
                        <View style={globalStyles.arrowBotton}>
                            <Image source={arrowBotton}
                                style={{ height: 24 / 853 * height, width: 24 / 383 * width, resizeMode: "contain" }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20/852*height, gap: 5/852*height }}>
                    <Text style={{ fontSize: 14/852 *height, fontWeight: '500', color: '#7e7c7e' }} >
                        Didn’t receive code?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 14/852 *height, fontWeight: '500', color: '#000' }} >
                            Resend
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View >

    )
}

export default VerifyNumberScreen;

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: '#f2f2f2',
        height: 58 / 852 * height,
        width: 64 / 393 * width,
        paddingLeft: 20/393*width,
        paddingRight: 20/393*width,
        backgroundColor: '#ececec',
        borderRadius: 15/852*height,
        alignItems: 'center',
    }

})