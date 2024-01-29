import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { View, Button, Text, Alert, Modal, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, Image, ScrollView, SafeAreaView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DeviceInfo from "react-native-device-info";

const { height, width } = Dimensions.get('window')

const ProfileCircal = require("../assets/American_Finance_App_image/ProfileCircal-3x.png");
const ProfileImage = require("../assets/American_Finance_App_image/ProfileImage-3x.png");
const whiteMarker = require("../assets/American_Finance_App_image/whiteMarker-3x.png");


const fontsize = DeviceInfo.hasNotch() ? 12/852*height:12;

const Test = () => {
  

  return (
    <SafeAreaView style={{ height: height, width: width, }}>
      <View style={{ height: height, width: width, }} showsVerticalScrollIndicator={false} >
        <View style={{ alignItems: "flex-end", marginTop: 10 / 852 * height, marginRight: 22 / 393 * width }} >
          <TouchableOpacity style={{ height: 30 / 852 * height, width: 30 / 852 * height, borderRadius: 15 / 852 * height, justifyContent: "center", alignItems: "center", backgroundColor: "#f3f3f3" }}>
            {/* <View > */}
            <Image style={{ height: 15 / 852 * height, width: 15 / 852 * height }} source={require("../assets/American_Finance_App_image/DeleteIcon-3x.png")} />
            {/* </View> */}
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 29 / 852 * height }}>
          <Text style={{ fontSize: 26 / 852 * height, fontWeight: "700", color: "#000" }}>
            Why do we collect this
          </Text>
          <Text style={{ fontSize: 26 / 852 * height, fontWeight: "700", color: "#000" }}>
            information
          </Text>
        </View>
        <View style={{ marginTop: 18 / 852 * height, marginLeft: 30 / 852 * height, }} >
          <Text style={styles.textStyle}>
            Lorem ipsum dolor sit amet consectetur. Ipsum id aliquam
          </Text>
          <Text style={styles.textStyle}>
            maecenas phasellus facilisis placerat lectus enim quam.
          </Text>
          <Text style={styles.textStyle}>
            Lectus ipsum amet phasellus purus fringilla placerat
          </Text>
          <Text style={styles.textStyle}>
            consequat. Quam egestas varius in eu volutpat bibendum
          </Text>
          <Text style={styles.textStyle}>
            euismod. Nullam tellus sed eu tellus urna risus aliquam
          </Text>
          <Text style={styles.textStyle}>
            elementum.
          </Text>
          <Text style={styles.textStyle} >
            Commodo sit massa volutpat id risus amet gravida
          </Text>
          <Text style={styles.textStyle} >
            massa. Enim montes nunc viverra adipiscing. Urna velit
          </Text>
          <Text style={styles.textStyle} >
            diam risus urna placerat odio. Proin convallis feugiat amet
          </Text>
          <Text style={styles.textStyle} >
            platea vulputate quam neque netus cras. Eget egestas
          </Text>
          <Text style={styles.textStyle} >
            lacus ut laoreet enim tincidunt. Sollicitudin imperdiet
          </Text>
          <Text style={styles.textStyle} >
            donec elementum sed morbi sit. Tortor neque diam diam
          </Text>
          <Text style={styles.textStyle} >
            convallis.
          </Text>

          <Text style={styles.textStyle} >
            Auctor lacus varius nullam integer praesent ultrices in
          </Text>
          <Text style={styles.textStyle} >
            pellentesque molestie. Morbi orci vitae vulputate etiam.
          </Text>
          <Text style={styles.textStyle} >
            Suspendisse ultricies imperdiet ullamcorper nulla aliquet.
          </Text>
          <Text style={styles.textStyle} >
            Urna sociis sagittis pretium a est fringilla. Placerat senectus
          </Text>
          <Text style={styles.textStyle} >
            ornare dapibus sit. Quam viverra vel morbi lorem sapien.
          </Text>
          <Text style={styles.textStyle} >
            Ac tempus viverra vel malesuada dapibus semper nisl quis
          </Text>
          <Text style={styles.textStyle} >
            aliquam.
          </Text>

          <Text style={styles.textStyle} >
            Posuere ac aliquam lacus magna diam etiam quis.
          </Text>
          <Text style={styles.textStyle} >
            Molestie cursus lectus interdum a convallis id in consequat.
          </Text>
          <Text style={styles.textStyle} >
            Id vel nec vitae ac rhoncus. Amet id tellus consectetur
          </Text>
          <Text style={styles.textStyle} >
            elementum neque ultrices nunc massa. Purus sed
          </Text>
          <Text style={styles.textStyle} >
            pellentesque pharetra viverra id fermentum et. Sit iaculis
          </Text>
          <Text style={styles.textStyle} >
            semper quisque feugiat nunc vestibulum posuere amet id.
          </Text>
          <Text style={styles.textStyle} >
            Pulvinar gravida ullamcorper neque orci ullamcorper
          </Text>
          <Text style={styles.textStyle} >
            aliquet scelerisque a nulla. Facilisi metus rhoncus est risus.
          </Text>








          {/* <Text style={{fontSize:12,fontWeight:"500",}}>
                Lorem ipsum dolor sit amet consectetur. Ipsum id aliquam maecenas phasellus facilisis placerat lectus enim quam. Lectus ipsum amet phasellus purus fringilla placerat consequat. Quam egestas varius in eu volutpat bibendum euismod. Nullam tellus sed eu tellus urna risus aliquam elementum.
                </Text> */}
          {/* <Text style={{fontSize:12,fontWeight:"500",}} >
                Commodo sit massa volutpat id risus amet gravida massa. Enim montes nunc viverra adipiscing. Urna velit diam risus urna placerat odio. Proin convallis feugiat amet platea vulputate quam neque netus cras. Eget egestas lacus ut laoreet enim tincidunt. Sollicitudin imperdiet donec elementum sed morbi sit. Tortor neque diam diam convallis.
                </Text> */}
          {/* <Text style={{fontSize:12,fontWeight:"500",}} >
                Auctor lacus varius nullam integer praesent ultrices in pellentesque molestie. Morbi orci vitae vulputate etiam. Suspendisse ultricies imperdiet ullamcorper nulla aliquet. Urna sociis sagittis pretium a est fringilla. Placerat senectus ornare dapibus sit. Quam viverra vel morbi lorem sapien. Ac tempus viverra vel malesuada dapibus semper nisl quis aliquam.
                </Text> */}
          {/* <Text style={{fontSize:12,fontWeight:"500",}} >
                Posuere ac aliquam lacus magna diam etiam quis. Molestie cursus lectus interdum a convallis id in consequat. Id vel nec vitae ac rhoncus. Amet id tellus consectetur elementum neque ultrices nunc massa. Purus sed pellentesque pharetra viverra id fermentum et. Sit iaculis semper quisque feugiat nunc vestibulum posuere amet id.
                Pulvinar gravida ullamcorper neque orci ullamcorper aliquet scelerisque a nulla. Facilisi metus rhoncus est risus.
                </Text> */}
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle:
  { fontSize: fontsize ,
    fontWeight: "500",
    color: "#717171",
   
    // textAlign:"left"
  }
});

export default Test;
