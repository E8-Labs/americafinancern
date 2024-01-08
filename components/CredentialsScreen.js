import React from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "./GlobalStyles";

const { height, width } = Dimensions.get('window');

const CredentialsScreen = () => {
    return (
            <View>
                <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../assets/buttonImage.png')}
                        style={{ height: 17 / 852 * height, width: 17 / 393 * width, resizeMode: 'contain', borderRadius: 9, }}
                    />
                    <Text style={{ fontSize: 10, fontWeight: '500' }}>
                        Plaid
                    </Text>

                </View>

                <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 85 / 852 * height, marginLeft: 10 }}>
                    Enter your credentials
                </Text>
                <View style={{ flexDirection: 'row',gap:5,alignItems:'center',justifyContent:'center' }}>
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#a7a7a7', marginTop: 10 }}>
                        By providing your
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 10  }}>
                        Goldman Sachs
                    </Text>
                    <Text style = {{fontSize:12,fontWeight:'500',color:'#a7a7a7',marginTop:10}}>
                        credentials, 
                    </Text>
                </View>
                <Text style = {{fontSize:12,fontWeight:'500',color:'#a7a7a7',textAlign:'center'}}>
                    to plaid, you are enabling Plaid to retrieve your
                </Text>
                <Text style = {{fontSize:12,fontWeight:'500',color:'#a7a7a7',marginLeft:15}}>
                    financial data
                </Text>


                <TextInput placeholder="User ID"
                    style = {[globalStyles.inputStyle,{marginLeft:15,}]}
                />
                 <TextInput placeholder="Password"
                    style = {[globalStyles.inputStyle,{marginLeft:15,}]}
                />
                <View style = {{marginTop:50/852*height,alignItems:'center'}}>
                    <TouchableOpacity style ={[globalStyles.capsuleButton,{backgroundColor:'#000'}]}>
                        <Text style = {{fontSize:10,fontWeight:'500',color:'#fff'}}>
                            Connect
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default CredentialsScreen;