import React, { useState } from "react";
import { View,Text,Image, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { globalStyles } from "./GlobalStyles";
import Snackbar from "react-native-snackbar";

const {height,width} = Dimensions.get('window')

const selectedImage = require('../assets/slectedIcon.png');
const unSelectedImage = require('../assets/unslectedIcon.png');


const BankDetails = (props) =>{

    const [acuntnmber,setAcuntNmber] = useState('');
    const [confirmAcuntNumber,setConfirmAcuntNumber] = useState('');
    const [bank,setBank] = useState('');
    const [routingNmber,setRoutingnmber] = useState('');
    const [selectedIcon,setSelectedIcon] = useState(false)


    const nextBtnAction = () => {
        if(!acuntnmber || !confirmAcuntNumber || !routingNmber || !bank) {
            Snackbar.show({
                text:"Please fill all Boxes",
                backgroundColor:'red',
                marginBottom:10,
                duration:Snackbar.LENGTH_SHORT,

            })
        } else{
            props.navigation.navigate("SelectBank")
        }
    }

    return(
        <View>
            <View style = {globalStyles.container}>
                <View style = {{flexDirection:'row',justifyContent:'space-between',width:width}}>
                    <Text style = {{fontSize:10,fontWeight:'500',marginLeft:130 / 393 * width,}}>
                        Add Bank Details
                    </Text>
                    <TouchableOpacity>
                    <Image  source={require('../assets/crossButton.png')}
                        style = {{height :30/852*height,width:30/393*width,marginRight:20}}
                    />
                    </TouchableOpacity>
                </View>

                <View style = {{marginTop:20}}>
                    <TextInput placeholder="Account number"
                        style = {globalStyles.inputStyle}
                        keyboardType="numeric"
                        autoFocus = {true}
                        value={acuntnmber}
                        onChangeText={(text)=>setAcuntNmber(text)}
                    />
                    <TextInput placeholder="Confirm account number"
                        keyboardType="numeric"
                        style = {globalStyles.inputStyle}
                        value={confirmAcuntNumber}
                        onChangeText={(text)=>setConfirmAcuntNumber(text)}
                    />
                    <TextInput placeholder="Bank name"
                        style = {globalStyles.inputStyle}
                        value={bank}
                        onChangeText={(text)=>setBank(text)}
                    />
                    <TextInput placeholder="Routing number"
                        style = {globalStyles.inputStyle}
                        value={routingNmber}
                        onChangeText={(text)=>setRoutingnmber(text)}
                    />
                </View>

                   <TouchableOpacity 
                        onPress={() =>setSelectedIcon(!selectedIcon)}
                   >
                        <View  style = {{flexDirection:'row',margin:20,gap:8,width:width,alignSelf:'center'}}>
                            <Image source={selectedIcon? selectedImage:unSelectedImage}
                                style = {{height:26/852*height,width:26/393*width,resizeMode:'contain',marginLeft:10}}
                            />
                            <Text style = {{fontSize:10,fontWeight:'500'}}>
                                Save as my prefered bank for withdrawals
                            </Text>    
                        </View>
                   </TouchableOpacity>

                   <TouchableOpacity style ={{marginTop:20}} 
                        onPress={nextBtnAction}
                   >
                   <View style={globalStyles.arrowBotton}>
                            <Image source={require('../assets/tick.png')}
                                style= {{height:14/852*height,width:20/393*width,resizeMode:'contain'}}
                            />
                        </View>
                   </TouchableOpacity>
                  
            </View>
        </View>
    )
}

export default BankDetails ;