import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, Dimensions, TextInput, TouchableOpacity, Platform } from 'react-native';
import { globalStyles } from './GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from "react-native";
import Apis from '../Api/apipath';


const { height, width } = Dimensions.get('window');


const inputHeight = 60 / 852 * height;

const afimage = require('../assets/AFImage.png')
const arrowIcon = require('../assets/arrow.png')


const Main = (props) => {


  // const[loaded, error] = useFonts({
  //   PoppinsMedium :require ('../assets/Fonts/Poppins-Medium.ttf'),
  //   PoppinsSemiBold: require('../assets/Fonts/Poppins-SemiBold.ttf'),
  //   testfont : require('../assets/Fonts/test/Ephesis-Regular.ttf')

  // });

  // useEffect(()=> {
  //   if(loaded){
  //     console.log("Fonts loaded")
  //   }
  //   if (error){
  //     console.log("Error loading font")
  //   }

  // }, [loaded])

  // if(!loaded){
  //   return <View> 
  //       <Text>Loading ....</Text>
  //      </View>;
  // };


  return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor:'#fff'}}>

    <View style={[globalStyles.container,{backgroundColor:'#fff'}]}>
      {/* <View style={{ flex: 5 }}> */}
        <Image source={afimage}
          style={[globalStyles.logoImageStyle, { marginTop: 114 / 852 * height }]}
        />

        <View style={{ flexDirection: 'column', marginTop: 70 * 852 / height }}>
          <Text style={styles.mainTextStyle}>
            Get the loan you
          </Text>
          <Text style={styles.mainTextStyle}>
            need in no time.
          </Text>
        </View>
      {/* </View> */}
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between',alignItems:'center',
        borderLeftWidth: 4, borderLeftColor: '#2468E8', height: 74/852*height,width:width-30,marginTop:100/852*height,
       }}>
        <Text
          style={{
            fontSize: 18 / 852 * height, fontWeight: '500', padding: 10,color:"#000"
          }}>
          Already A Member? Sign In
        </Text>

        <TouchableOpacity style = {globalStyles.shadowStyle}
          onPress={() => props.navigation.navigate('SignInScreen')}
        >
          <View style={globalStyles.arrowBotton}>
            <Image source={arrowIcon}
              style={{ height: 24/852*height, width: 24/852*height, resizeMode: 'contain' }}
            />
          </View>
        </TouchableOpacity>
      </View>

        <View style={{
          flexDirection: 'row', justifyContent: 'space-between',
          borderLeftWidth: 4/393*width, borderLeftColor: '#2468E8', height: 74/852*height,alignItems:'center', marginTop: 40/852*height,width:width-30
        }}>
          <Text
            style={{       
              fontSize: 18 / 852 * height, fontWeight: '500', padding: 10/852 * height,color:"#000"
            }}>
            New Member? Apply Now
          </Text>
          <TouchableOpacity style = {globalStyles.shadowStyle}
            onPress={() => props.navigation.navigate('NameDetails')}
          >
            <View style={globalStyles.arrowBotton}>
              <Image source={arrowIcon}
                style={{ height: 24/852*height, width: 24/852*height, resizeMode: 'contain' }}
              />
            </View>
          </TouchableOpacity>
        </View>
     
      <View style={{
        alignItems: 'center', flexDirection: 'column',marginTop:23/852*height
           }}>
        <Text style={globalStyles.bottomText}>
          By creating an account, you agree to the
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <TouchableOpacity>
            <Text style={[globalStyles.bottomText, { color: '#2468E8' ,fontWeight:'700'       }]}>
              Terms & Conditions
            </Text>
          </TouchableOpacity>
          <Text style={globalStyles.bottomText}> and </Text>
          <TouchableOpacity>
            <Text style={[globalStyles.bottomText, { color: '#2468E8',fontWeight:'700' }]}>
              Privacy Policy
            </Text>
          </TouchableOpacity>

        </View>
        <Text style={globalStyles.bottomText}>
          of America Finance
        </Text>
      </View>
    </View>
    </SafeAreaView>
  );
}
export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  mainTextStyle: {
    fontSize: 32/852*height,
    color: 'black',
    fontWeight: '700',
   // fontFamily: 'testfont',
    textAlign: 'center',
    // marginTop: 60,
    // height: 60,
    flexDirection: 'column'
    // backgroundColor: 'red',
  }
});

