import React, { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, } from "react-native";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


const mediumFonts = ()=>{
    fontFamily:"Poppins-Medium"
} 

const whiteArrowiconHeight =65/852*height;
const DocumentBottonHeight =59/852*height;



export const globalStyles = StyleSheet.create({
  Headertext:{
    fontSize: 13,
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    marginBottom:10

  },
    textSt:{
        fontFamily:"PoppinsMedium", 
        textAlign:"center",
        fontSize:12,
        color:"#000"
    },
    textInputSt:{
        backgroundColor:"#f2f2f2",
        fontFamily:"PoppinsMedium",
        color:"#717171",
        height:49,
        borderRadius:13,
        padding:13,
        fontSize:14,
        backgroundColor:"#ececec",
        
       
    },
    capsuleButton:{
        height:70 / 852 * height,
        width:130 / 393 *width,
        backgroundColor:'#2468E8',
        borderRadius:58/852*height,
        justifyContent:"center",
        alignItems:"center",
       
      },
   
      DocumentBotton:{
        backgroundColor: '#2468E8',
        borderRadius: 30,
        height: DocumentBottonHeight,
        width:DocumentBottonHeight,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode:"contain"
        
        


      },
      arrowBotton:{
        backgroundColor: '#2468E8',
        borderRadius: 35,
        height: whiteArrowiconHeight,
        width:whiteArrowiconHeight,
        alignItems: 'center',
        justifyContent: 'center',
        


      },

})