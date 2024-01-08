import React, { useState } from "react";
import { View, Text, TextInput, Dimensions, TouchableOpacity, Image } from "react-native";
import { globalStyles } from "./GlobalStyles";

const { height, width } = Dimensions.get('window');

const OtherHousingSituition = (props) => {

    const [input,setInput] = useState('')

    const nextBtnAction = () =>{

        props.navigation.navigate("HouseDetails",{
            housingSuition : input
        })
    }

    return (
        <View style={globalStyles.container}>
           
           <View style={{ flexDirection: 'row', marginTop: 36 / 852 * height, width: width, marginLeft: 20 / 852 * height }}>
                <TouchableOpacity style={{ alignItems: 'flex-start', }} onPress={() => props.navigation.goBack()}>
                    <Image
                        source={require('../assets/blackArrowicon-3x.png')}
                        style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain', }}
                    />
                </TouchableOpacity>
                <View style={{ alignItems: 'center', width: width, marginLeft: -30 }}>
                    <Text style={{ fontSize: 12 / 852 * height, color: "#000", fontWeight: '500', }}>
                        Account Details
                    </Text>
                </View>
            </View>
            <Text style={{ fontSize: 26, fontWeight: '800', marginTop: 26/852 *height,color:'#000' }}>
                Please Specify Other
            </Text>

            <View style={{ height: 199 / 852 * height, width: 360 / 393 * width, backgroundColor: '#ececec', borderRadius: 13, marginTop: 50 / 852 * height }}>
                <TextInput placeholder="Type here"
                    autoFocus={true}
                    value={input}
                    onChangeText={(text) => setInput(text)}
                    multiline
                    maxLength={500}
                    numberOfLines={11}
                    textAlignVertical="top"
                    style={{
                        fontSize: 12, fontWeight: '500', padding: 10
                    }}
                />
            </View>


            <View style={{ width: width, alignItems: 'flex-end', marginRight: 20, marginTop: 75 / 852 * height }}>
                <TouchableOpacity onPress={nextBtnAction}>
                    <View style={globalStyles.arrowBotton}>
                        <Image source={require('../assets/arrow.png')} 
                        
                        style = {{height:24/852*height,width:24/393*width,resizeMode:'contain'}}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OtherHousingSituition;