import React, { useState } from "react";
import { View, Text, Image, Dimensions,  } from "react-native";


const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const RejectDetailView = () => {

    return (
        <View style={{ height: height, width: width,alignItems:"center" }}>


            <View style={{ marginTop: 50 / 852 * height, height: 171 / 852 * height, width: 330 / 393 * width, backgroundColor: "#fafafa", borderRadius: 25 / 852 * height }}>
                <View style={{ paddingTop: 18 / 852 * height, paddingBottom: 18 / 852 * height, paddingLeft: 16 / 393 * width, paddingRight: 16 / 393 * width }}>
                    <Text style={{ fontSize: 18 / 852 * height, color: '#000', fontFamily: "PoppinsMedium" }}>
                        This loan was rejected for the
                    </Text>
                    <Text style={{ fontSize: 18 / 852 * height, color: '#000', fontFamily: "PoppinsMedium" }}>
                        following reason. The content can
                    </Text>
                    <Text style={{ fontSize: 18 / 852 * height, color: '#000', fontFamily: "PoppinsMedium" }}>
                        come here and replace the
                    </Text>
                    <Text style={{ fontSize: 18 / 852 * height, color: '#000', fontFamily: "PoppinsMedium" }}>
                        payment schedule we have for
                    </Text>
                    <Text style={{ fontSize: 18 / 852 * height, color: '#000', fontFamily: "PoppinsMedium" }}>
                        loans in progress or loan closed
                    </Text>
                </View>
            </View>
        </View>








    )
}
export default RejectDetailView;