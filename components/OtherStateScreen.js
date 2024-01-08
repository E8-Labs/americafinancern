import React, { useState, } from "react";
import { Dimensions, View, Image, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from "react-native";
import { globalStyles } from "./GlobalStyles";
import Snackbar from "react-native-snackbar";



const { height, width } = Dimensions.get('window')

const OtherStateScreen = (props) => {

    const [email, setEmail] = useState('');

    const [slectedState, setSelectedState] = useState('Please Slect Your State');
    const [isClicked, setIsClicked] = useState(false);


    const states = [
        { name: "Texas" },
        { name: "New York" },
        { name: "Ohio" },
        { name: "virginia" },
        { name: "Huwaii" },
        { name: "Gorgea" },
        { name: "Arizona" },
        { name: "Washington" },
        { name: "New Jersy" },
        { name: "Colorado" },

    ]


    submitBtnAction = () => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validEmail = emailRegex.test(email);

        if (!validEmail) {
            Snackbar.show({
                text: 'Ivalide Email',
                backgroundColor: 'red',
                marginBottom: 10,
                duration: Snackbar.LENGTH_LONG,
            })
        } else {
            props.navigation.navigate('LoanRequest')
        }
    };

    return (
        <View style={globalStyles.container}>
            <Image source={require('../assets/veiwColor.png')}
                style={{ height: 270 / 853 * height, }}
            />
            <View style={{ alignItems: 'flex-start', width: width , marginTop: -300 / 852 * height, }}>
                <TouchableOpacity style={{ marginTop: 60 / 852 * height, marginLeft: 17 / 393 * width }} onPress={() => props.navigation.goBack()}>
                    <Image
                        source={require('../assets/backArrow.png')}
                        style={{ height: 32 / 852 * height, width: 32 * width / 393 }}
                    />
                </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 24/852 *height, fontWeight: '800', color: '#fff',marginTop:15/852 *height }}>
                Uh Oh!
            </Text>
            <Text style={styles.upperText}>
                America Finance does not currently
            </Text>
            <Text style={styles.upperText}>
                offer loans in your state. Please join our
            </Text>
            <Text style={styles.upperText}>
                waitlist and we'll notify you once your
            </Text>
            <Text style={styles.upperText}>
                state has been added.
            </Text>

            <TouchableOpacity style={styles.dropdownContainer}
                onPress={() => setIsClicked(!isClicked)}
            >
                <Text>{slectedState}</Text>
                {isClicked ? (
                    <Image source={require("../assets/upArrow.png")}
                        style={{ height: 24/852 *height, width: 24/852 *height }}
                    />
                ) : (
                    <Image source={require("../assets/downArrow.png")}
                        style={{ height: 24/852 *height, width: 24/852 *height }}
                    />
                )}
            </TouchableOpacity>
            {isClicked ? <View style={styles.dropdownArea}>
                <FlatList data={states}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.stateItem}
                                onPress={() => {
                                    setSelectedState(item.name);
                                    setIsClicked(false);
                                }}
                            >
                                <Text style={{ fontSize: 11/852 *height, fontWeight: '500' }}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View> : null}


            <TextInput
                placeholder="Join our waitlist by entering your email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={globalStyles.inputStyle}
            />
            <View style={{ width: width, alignItems: 'flex-end', marginRight: 26/852 *height }}>
                <TouchableOpacity style={[globalStyles.capsuleButton, { marginTop: 25, width: 139 / 393 * width }]}
                    onPress={submitBtnAction}
                >
                    <Text style={{ color: '#fff', fontSize: 12, fontWeight: '500' }}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default OtherStateScreen;

const styles = StyleSheet.create({
    upperText: {
        fontSize: 18/852 *height,
        fontWeight: '500',
        height: 25,
        color: "#fff",
    },

    dropdownContainer: {
        width: "90%",
        height: 45,
        borderRadius: 10,
        alignSelf: "center",
        justifyContent: 'space-between',
        marginTop: 70 / 852 * height,
        marginBottom:15/852 *height,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#ececec'
    },
    dropdownArea: {
        width: "90%",
        height: 300 / 852 * height,
        marginTop: 10/852 *height,
        elevation: 3,
        alignSelf: "center",
        backgroundColor: '#fff',
        borderRadius: 10
    },
    stateItem: {
        width: '85%',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        alignSelf: 'center',
        justifyContent: 'center'

    }
});

