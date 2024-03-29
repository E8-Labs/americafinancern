import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Image, Dimensions, ScrollView, StyleSheet, Platform,ImageBackground } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const ProfileCircal = require("../assets/American_Finance_App_image/ProfileCircal-3x.png");
const ProfileImage = require("../assets/American_Finance_App_image/ProfileImage-3x.png");
const whiteMarker = require("../assets/American_Finance_App_image/whiteMarker-3x.png");
const RedRewardView = require("../assets/American_Finance_App_image/RedRewardView-3x.png");
const ParpalRewardView = require("../assets/American_Finance_App_image/ParpalRewardView-3x.png");
const OrangeRewardView = require("../assets/American_Finance_App_image/OrangeRewardView-3x.png");
const RightArrowIcon = require("../assets/American_Finance_App_image/RightArrowIcon-3x.png");
const ProfileCircleIcon = require("../assets/American_Finance_App_image/ProfileCircleBlac.png");
const BankCardIcon = require("../assets/American_Finance_App_image/BankCardIcon-3x.png");
const DocumentIcon = require("../assets/American_Finance_App_image/DocumentIcon-3x.png");
const Jobbagicon = require("../assets/American_Finance_App_image/jobbagicon-3x.png");
const HashtagIcon = require("../assets/American_Finance_App_image/HashtagIcon-3x.png");
const HeadphoneIcon = require("../assets/American_Finance_App_image/HeadphoneIcon-3x.png");
const MessageIcon = require("../assets/American_Finance_App_image/MessageIcon-3x.png");
const TicketIcon = require("../assets/American_Finance_App_image/TicketIcon-3x.png");
const LogoutIcon = require("../assets/American_Finance_App_image/LogoutIcon-3x.png");
const Hosingicon = require("../assets/American_Finance_App_image/HousingIcon-3x.png")

const ProfileMainScreen = (props) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const getProfile = async () => {
            const data = await AsyncStorage.getItem("USER")
            if (data) {
                let d = JSON.parse(data)
                setUser(d)
                console.log("get profile data", d)
            }
        };
        getProfile();
    }, [])
    const logoutUser = async () => {

        try {
            await AsyncStorage.clear()
        } catch (e) {
            console.log('user could not logged in')
        }

        props.navigation.replace('SplashScreen1')
        console.log('Done.')

    };

    const manageAccountHandle = () =>{
        props.navigation.navigate('ManageAccountProfile')
    }



    return (
        <ScrollView style={{ height: height, width: width, backgroundColor: "#fff" }} showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: "center", marginTop: 70 / 852 * height, }}>

                <View style={{
                    ...Platform.select({
                        ios: {
                            shadowColor: 'Blue',
                            shadowOffset: { height: 1, width: -1 },
                            shadowRadius: 10,

                        },
                        android: {
                            elevation: 5,
                        }
                    })
                }}>
                    <ImageBackground style={{ height: 172 / 852 * height, width: 172 / 852 * height, alignItems: "center", }} source={ProfileCircal}>
                        <TouchableOpacity >
                            <ImageBackground style={{ height: 140 / 852 * height, width: 140 / 852 * height, marginBottom: -20 / 852 * height, marginTop: 11 / 852 * height }} source={ProfileImage} >
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 44 / 852 * height, width: 44 / 852 * height, borderRadius: 22 / 852 * height, backgroundColor: "#2468E8", justifyContent: "center", alignItems: "center", }}>
                            <Image style={{ height: 24 / 852 * height, width: 24 / 852 * height }} source={whiteMarker} />
                        </TouchableOpacity>

                    </ImageBackground>


                </View>
                <View style={{ marginTop: 6 / 852 * height, flexDirection: "row", gap: 10 / 852 * height, marginBottom: 3 / 852 * height }}>
                    <Text style={{ fontSize: 25 / 852 * height, fontWeight: "500", color: "#000" }}>
                        {user ? user.user.firstname : ''} {user ? user.user.lastname : ''}
                    </Text>

                </View>
                <Text style={{ fontSize: 14 / 852 * height, color: "#000", }} >
                    Dona Elquita
                </Text>
                <Text style={{ fontSize: 14 / 852 * height, fontWeight: "500", justifyContent: "space-between", marginBottom: 3 / 852 * height }}>
                    San Francisco, {user ? user.user.state : ''}
                </Text>
            </View>

            <View style={{ width: width, paddingBottom: 0, padding: 13 / 852 * height }}>
                <Text style={{ fontSize: 14 / 852 * height, fontWeight: "500", color: "#000" }} >
                    Rewards
                </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
                <ScrollView horizontal={true} style={{ margin: 13 / 852 * height, marginBottom: 0, }} showsHorizontalScrollIndicator={false} >

                    <View>
                        <Image style={styles.RewardImageStyle} source={RedRewardView} />
                        <View style={{ position: "absolute", top: 70 / 852 * height, margin: 12 / 852 * height }}>
                            <Text style={{ fontSize: 14 / 852 * height, color: "#fff" }}>
                                Badge
                            </Text>
                            <Text style={{ fontSize: 14 / 852 * height, color: "#fff" }}>
                                Name 1
                            </Text>
                        </View>
                    </View>

                    <View style={{ marginLeft: 16 / 852 * height }} >
                        <Image style={styles.RewardImageStyle} source={ParpalRewardView} />
                        <View style={{ position: "absolute", top: 70 / 852 * height, margin: 12 / 852 * height }}>
                            <Text style={{ fontSize: 14 / 852 * height, color: "#fff" }}>
                                Badge
                            </Text>
                            <Text style={{ fontSize: 14 / 852 * height, color: "#fff" }}>
                                Name 2
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 16 / 852 * height }} >
                        <Image style={styles.RewardImageStyle} source={OrangeRewardView} />
                        <View style={{ position: "absolute", top: 70 / 852 * height, margin: 12 / 852 * height }}>
                            <Text style={{ fontSize: 14 / 852 * height, color: "#fff" }}>
                                Reward
                            </Text>
                            <Text style={{ fontSize: 14 / 852 * height, color: "#fff" }}>
                                Name 3
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 16 / 852 * height }} >
                        <Image style={styles.RewardImageStyle} source={RedRewardView} />
                        <View style={{ position: "absolute", top: 70 / 852 * height, margin: 12 / 852 * height }}>
                            <Text style={{ fontSize: 14 / 852 * height, color: "#fff" }}>
                                Badge
                            </Text>
                            <Text style={{ fontSize: 14 / 852 * height, color: "#fff" }}>
                                Name 1
                            </Text>
                        </View>
                    </View>

                    <View style={{ marginLeft: 16 / 852 * height }} >
                        <Image style={styles.RewardImageStyle} source={ParpalRewardView} />
                        <View style={{ position: "absolute", top: 70 / 852 * height, margin: 12 / 852 * height }}>
                            <Text style={{ fontSize: 14 / 852 * height, color: "#fff" }}>
                                Badge
                            </Text>
                            <Text style={{ fontSize: 14 / 852 * height, color: "#fff" }}>
                                Name 2
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 16 / 852 * height }} >
                        <Image style={styles.RewardImageStyle} source={OrangeRewardView} />
                        <View style={{ position: "absolute", top: 70 / 852 * height, margin: 12 / 852 * height }}>
                            <Text style={{ fontSize: 14 / 852 * height, color: "#fff" }}>
                                Reward
                            </Text>
                            <Text style={{ fontSize: 14 / 852 * height, color: "#fff" }}>
                                Name 3
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 16 / 852 * height }}>
                        <Image style={styles.RewardImageStyle} source={RedRewardView} />
                        <View style={{ position: "absolute", top: 70 / 852 * height, margin: 12 / 852 * height }}>
                            <Text style={{ fontSize: 14 / 852 * height, color: "#fff" }}>
                                Badge
                            </Text>
                            <Text style={{ fontSize: 14 / 852 * height, color: "#fff" }}>
                                Name 1
                            </Text>
                        </View>
                    </View>

                    <View style={{ marginLeft: 16 / 852 * height }} >
                        <Image style={styles.RewardImageStyle} source={ParpalRewardView} />
                        <View style={{ position: "absolute", top: 70 / 852 * height, margin: 12 / 852 * height }}>
                            <Text style={{ fontSize: 14 / 852 * height, color: "#fff" }}>
                                Badge
                            </Text>
                            <Text style={{ fontSize: 14 / 852 * height, color: "#fff" }}>
                                Name 2
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 16 / 852 * height }} >
                        <Image style={styles.RewardImageStyle} source={OrangeRewardView} />
                        <View style={{ position: "absolute", top: 70 / 852 * height, margin: 12 / 852 * height }}>
                            <Text style={{ fontSize: 14 / 852 * height, color: "#fff" }}>
                                Reward
                            </Text>
                            <Text style={{ fontSize: 14 / 852 * height, color: "#fff" }}>
                                Name 3
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

            <View style={{ marginTop: 20 / 852 * height, }}>
                <View style={styles.secondViewStyle}>
                    <TouchableOpacity style={styles.BouttonViewStyle} 
                        onPress={manageAccountHandle}
                    >
                        <View style={styles.ThirdViewStyle}>

                            <Image style={styles.ImageStyle}
                                source={ProfileCircleIcon}
                            />
                            <Text style={styles.textStyle} >
                                Manage account
                            </Text>
                        </View>
                        <View style={styles.forthViewStyle}>
                            <Image style={styles.ImageStyle}
                                source={RightArrowIcon}
                            />
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={styles.secondViewStyle}>
                    <TouchableOpacity style={styles.BouttonViewStyle}>
                        <View style={styles.ThirdViewStyle}>

                            <Image style={styles.ImageStyle}
                                source={BankCardIcon}
                            />
                            <Text style={styles.textStyle} >
                                Bank account
                            </Text>
                        </View>
                        <View style={styles.forthViewStyle}>
                            <Image style={styles.ImageStyle}
                                source={RightArrowIcon}
                            />
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={styles.secondViewStyle}>
                    <TouchableOpacity style={styles.BouttonViewStyle}>
                        <View style={styles.ThirdViewStyle}>

                            <Image style={styles.ImageStyle}
                                source={DocumentIcon}
                            />
                            <Text style={styles.textStyle} >
                                My Documents
                            </Text>
                        </View>
                        <View style={styles.forthViewStyle}>
                            <Image style={styles.ImageStyle}
                                source={RightArrowIcon}
                            />
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={styles.secondViewStyle}>
                    <TouchableOpacity style={styles.BouttonViewStyle}>
                        <View style={styles.ThirdViewStyle}>

                            <Image style={styles.ImageStyle}
                                source={Jobbagicon}
                            />
                            <Text style={styles.textStyle} >
                                Income Details
                            </Text>
                        </View>
                        <View style={styles.forthViewStyle}>
                            <Image style={styles.ImageStyle}
                                source={RightArrowIcon}
                            />
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={styles.secondViewStyle}>
                    <TouchableOpacity style={styles.BouttonViewStyle}>
                        <View style={styles.ThirdViewStyle}>

                            <Image style={styles.ImageStyle}
                                source={HashtagIcon}
                            />
                            <Text style={styles.textStyle} >
                                Financial details
                            </Text>
                        </View>
                        <View style={styles.forthViewStyle}>
                            <Image style={styles.ImageStyle}
                                source={RightArrowIcon}
                            />
                        </View>

                    </TouchableOpacity>
                </View>
                <View style={styles.secondViewStyle}>
                    <TouchableOpacity style={styles.BouttonViewStyle}>
                        <View style={styles.ThirdViewStyle}>

                            <Image style={styles.ImageStyle}
                                source={Hosingicon}
                            />
                            <Text style={styles.textStyle} >
                                Housing Details
                            </Text>
                        </View>
                        <View style={styles.forthViewStyle}>
                            <Image style={styles.ImageStyle}
                                source={RightArrowIcon}
                            />
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={styles.secondViewStyle}>
                    <TouchableOpacity style={styles.BouttonViewStyle}>
                        <View style={styles.ThirdViewStyle}>

                            <Image style={styles.ImageStyle}
                                source={HeadphoneIcon}
                            />
                            <Text style={styles.textStyle} >
                                Customer support
                            </Text>
                        </View>
                        <View style={styles.forthViewStyle}>
                            <Image style={styles.ImageStyle}
                                source={RightArrowIcon}
                            />
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={styles.secondViewStyle}>
                    <TouchableOpacity style={styles.BouttonViewStyle}>
                        <View style={styles.ThirdViewStyle}>

                            <Image style={styles.ImageStyle}
                                source={MessageIcon}
                            />
                            <Text style={styles.textStyle} >
                                Contact Team
                            </Text>
                        </View>
                        <View style={styles.forthViewStyle}>
                            <Image style={styles.ImageStyle}
                                source={RightArrowIcon}
                            />
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={styles.secondViewStyle}>
                    <TouchableOpacity style={styles.BouttonViewStyle}>
                        <View style={styles.ThirdViewStyle}>

                            <Image style={styles.ImageStyle}
                                source={TicketIcon}
                            />
                            <Text style={styles.textStyle} >
                                Collections
                            </Text>
                        </View>
                        <View style={styles.forthViewStyle}>
                            <Image style={styles.ImageStyle}
                                source={RightArrowIcon}
                            />
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={styles.secondViewStyle}>
                    <TouchableOpacity style={styles.BouttonViewStyle} onPress={logoutUser}>
                        <View style={styles.ThirdViewStyle}>

                            <Image style={styles.ImageStyle}
                                source={LogoutIcon}
                            />
                            <Text style={styles.textStyle} >
                                Logout
                            </Text>
                        </View>
                        <View style={styles.forthViewStyle}>
                            <Image style={styles.ImageStyle}
                                source={RightArrowIcon}
                            />
                        </View>

                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ margin: 20 / 852 * height, alignItems: "center", flexDirection: "row", gap: 23 / 852 * height, alignSelf: "center", }}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 14 / 852 * height }}>
                        Terms
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: 14 / 852 * height }}>
                        Privacy
                    </Text>
                </TouchableOpacity>
            </View>




        </ScrollView>



    )
}
const styles = StyleSheet.create({
    RewardImageStyle: {
        height: 136 / 852 * height,
        width: 113 / 852 * height
    },
    BouttonViewStyle: {
        borderRadius: 20 / 852 * height,
        backgroundColor: "#fafafa",
        justifyContent: "space-between",
        flexDirection: "row",
        height: 76 / 852 * height,
        width: 370 / 393 * width,
        alignItems: "center",


    },
    secondViewStyle: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15 / 852 * height
    },
    ThirdViewStyle: {
        margin: 10 / 852 * height,
        flexDirection: "row",
        alignItems: "center"
    },
    ImageStyle: {
        height: 24 / 852 * height,
        width: 24 / 393 * width,
        resizeMode: "contain"
    },
    textStyle: {
        marginLeft: 10 / 852 * height,
        fontSize: 18 / 852 * height,
        color: "#000"

    },
    forthViewStyle: {
        marginRight: 10 / 852 * height,
        height: 44 / 852 * height,
        width: 44 / 852 * height,
        borderRadius: 22 / 852 * height,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",

        ...Platform.select({
            ios: {
                shadowColor: 'grey',
                shadowOffset: { height: 1, width: 0 },
                shadowRadius: 5,
                shadowOpacity: .2

            },
            android: {
                elevation: 5,
            }
        })

    },


})
export default ProfileMainScreen;