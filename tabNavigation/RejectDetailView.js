import React, { useState } from "react";
import { View, Text, Image, Dimensions,  } from "react-native";


const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const RejectDetailView = () => {

    return (
        <View style={{alignItems:"center" }}>


            <View style={{ marginTop: 45 / 852 * height, height: 171 / 852 * height, width: 330 / 393 * width, backgroundColor: "#fafafa", borderRadius: 25 / 852 * height }}>
                <View style={{ paddingTop: 18 / 852 * height, paddingBottom: 18 / 852 * height, paddingLeft: 16 / 393 * width, paddingRight: 16 / 393 * width }}>
                    <Text style={{ fontSize: 18 / 852 * height, color: '#000',  }}>
                        This loan was rejected for the
                    </Text>
                    <Text style={{ fontSize: 18 / 852 * height, color: '#000',  }}>
                        following reason. The content can
                    </Text>
                    <Text style={{ fontSize: 18 / 852 * height, color: '#000',  }}>
                        come here and replace the
                    </Text>
                    <Text style={{ fontSize: 18 / 852 * height, color: '#000',  }}>
                        payment schedule we have for
                    </Text>
                    <Text style={{ fontSize: 18 / 852 * height, color: '#000',  }}>
                        loans in progress or loan closed
                    </Text>
                </View>
            </View>
        </View>








    )
}
export default RejectDetailView;