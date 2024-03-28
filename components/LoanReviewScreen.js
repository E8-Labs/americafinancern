import React, { useEffect, useState } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView, StyleSheet, FlatList, } from "react-native";
import { globalStyles } from "./GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native";
import Apis from "../Api/apipath";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");


const Solardocument = require("../assets/American_Finance_App_image/solar_document-3x.png");
const QuestionIcon = require("../assets/American_Finance_App_image/QuestionIcon-3x.png");
const blackcheckiconBold = require("../assets/American_Finance_App_image/blackcheckiconBold-3x.png");
const whitecheckiconBold = require("../assets/American_Finance_App_image/whitecheckiconBold-3x.png");
const Arrowicon = require("../assets/American_Finance_App_image/whiteArrowicon-3x.png");


const jobIconviewHeight = 80 / 852 * height;
const viewborderHeight = 65 / 852 * height;
const blackcheckiconHeight = 21 / 852 * height;
const blackcheckiconWidth = 21 / 412 * width;
const whitecheckiconHeight = 21 / 852 * height;
const whitecheckiconWidth = 21 / 412 * width;
const smallcircleIconHeight = 34 / 852 * height;
// const smallcircleIconWidth = 34;
const largecircleIconHeight = 60 / 852 * height;
const whiteArrowiconHeight = 24 / 852 * height;
const whiteArrowiconWidth = 24 / 412 * width;


const LoanReviewScreen = ({ navigation, route }) => {
  const amount = route.params;
  console.log("amount is ", amount.LoanAmount)


  const [selectedItems, setSelectedItems] = useState([]);
  const [calculationData, setCalculationData] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getLoanCalculations = async () => {

      const data = await AsyncStorage.getItem("USER")

      if (data) {

        let u = JSON.parse(data)
        setUser(u)
        console.log("user get data", u)

        let token = u.token;
        let b = JSON.stringify({ "amount": amount.LoanAmount })

        const result = await fetch(Apis.ApiGetLoanCalculations, {
          method: 'Post',
          headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
          body: b,
        })

        if (result) {
          let json = await result.json();
          if (json.status === true) {
            console.log('Loan calculations are ', json)
            setCalculationData(json.data)
          }
        }
      }
    };
    getLoanCalculations();
  }, [])


  const sndLoanRqust = async () => {

    const fromTabBar = route.params.fromTabBar;
    console.log("From tabbar ", fromTabBar)

    const data = await AsyncStorage.getItem("USER")

    if (data) {

      let u = JSON.parse(data)
      setUser(u)
      console.log("user get data", u)
      console.log("user id ", u.user.id)

      let b = JSON.stringify({ "amount_requested": amount.LoanAmount })

      console.log('amount requested is', b)

      const token = u.token;
      console.log("token is ", u.token)
      //const url = "http://178.16.143.212:8002/api/loans/request_loan";
      const result = await fetch(Apis.ApiRequestLoan, {
        method: 'post',
        headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
        body: b
      });
      console.log("Result is ", result)
      if (result) {
        const json = await result.json()
        console.log("Data is ", json)
        if (json.status === true) {
          if (fromTabBar == true) {
            console.log("here go back")
            navigation.navigate("DashboardBase")
          } else {
            navigation.navigate("NotificationScreen")
          }
        }
      }
      else {
        console.log("Result is null")
      }
    }
  };


  const handleItemPress = (item) => {
    const index = selectedItems.indexOf(item);

    if (index !== -1) {
      // Item is already selected, so deselect it
      const updatedSelectedItems = [...selectedItems];
      updatedSelectedItems.splice(index, 1);
      setSelectedItems(updatedSelectedItems);
    } else {
      // Item is not selected, so select it
      setSelectedItems([...selectedItems, item]);
    }
  };

  const data = ['Electronic Communication Consent Policy', 'CA Privacy Policy', 'America Finance Loan Term',];


  return (
    <SafeAreaView style={{ flex: 1 }} >

      <ScrollView showsVerticalScrollIndicator = {false}>

        <View style={{ flexDirection: "column", alignItems: "center", }}>
          <View style={{ flexDirection: 'row', width: width, paddingHorizontal: 12 / 393 * width, justifyContent: 'space-between', alignItems: 'center', }}>
            <TouchableOpacity style={{ alignSelf: 'flex-start', }} onPress={() => navigation.goBack()} >
              <Image
                source={require('../assets/blackArrowicon-3x.png')}
                style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain', }}
              />
              {/* error */}
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 12 / 852 * height, color: "#000", fontWeight: '500', }}>
                Account Details
              </Text>
            </View >
            <View style={{ height: 24 / 852 * height, width: 20 * width / 393, resizeMode: 'contain' }}>

            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 15 / 852 * height, alignItems: 'center', }}>

            <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

            <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>

            <View style={{
              height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5 / 852 * height, borderWidth: 1, alignSelf: "center", justifyContent: "center", alignItems: "center"
            }}>
              <Image source={Solardocument}
                style={{
                  height: 20852 * height, width: 20 / 852 * height, resizeMode: 'contain', alignSelf: 'center', justifyContent: 'center'
                }}
              />
            </View>

            <View style={{ width: 6 / 852 * height, height: 6 / 852 * height, borderRadius: 3, backgroundColor: "#000", marginRight: 9 / 852 * height, marginLeft: 6 / 852 * height }}></View>
            <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>



          </View>
        </View>


        <Text style={{ marginTop: 8 / 852 * height, textAlign: "center", fontSize: 24 / 852 * height, color: "#000" }}>Review Loan Details</Text>

        <Text style={{ color: '#717171', textAlign: "center", fontFamily: "PoppinsMedium", fontSize: 18 / 852 * height, marginLeft: 6 / 852 * height, marginRight: 6 / 852 * height, marginTop: 6 / 852 * height, color: "#000" }} >Loan Terms</Text>
        <View style={{ alignItems: "center" }}>



          <View style={{ alignItems: "center", justifyContent: "center", marginTop: 15 / 852 * height }}>
            <View style={{ justifyContent: "space-between", flexDirection: "row", height: 54 / 852 * height, borderBottomWidth: 0.3, width: 319 / 393 * width, alignItems: "center" }}>
              <Text style={{ fontSize: 14 / 852 * height, color: "#000" }} >
                Annual percentage rate
              </Text>
              <Text style={{ fontSize: 24 / 852 * height, color: "#000" }}>
                {calculationData ? calculationData.apr : ''} %
              </Text>

            </View>
          </View>

          <View style={{ alignItems: "center", justifyContent: "center", marginTop: 15 / 852 * height }}>
            <View style={{ justifyContent: "space-between", flexDirection: "row", height: 54 / 852 * height, borderBottomWidth: 0.3, width: 319 / 393 * width, alignItems: "center", }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 14 / 852 * height, marginRight: 5, color: "#000" }} >
                  Finance charge
                </Text>
                <Image style={{ height: 17.5 / 852 * height, width: 17.5 / 393 * width, }}
                  source={QuestionIcon}
                />
              </View>
              <Text style={{ fontSize: 24 / 852 * height, color: "#000" }}>
                ${calculationData ? calculationData.finance_fee : ''}
              </Text>

            </View>
          </View>

          <View style={{ alignItems: "center", justifyContent: "center", marginTop: 15 / 852 * height }}>
            <View style={{ justifyContent: "space-between", flexDirection: "row", height: 54 / 852 * height, borderBottomWidth: 0.3, width: 319 / 393 * width, alignItems: "center", }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 14 / 852 * height, marginRight: 5, color: "#000" }} >
                  Amount finance
                </Text>
                <Image style={{ height: 17.5 / 852 * height, width: 17.5 / 393 * width, }}
                  source={QuestionIcon}
                />
              </View>
              <Text style={{ fontSize: 24 / 852 * height, color: "#000" }}>
                ${calculationData ? calculationData.principal_amount : ''}
              </Text>

            </View>
          </View>

          <View style={{ alignItems: "center", justifyContent: "center", marginTop: 15 / 852 * height }}>
            <View style={{ justifyContent: "space-between", flexDirection: "row", height: 54 / 852 * height, borderBottomWidth: 0.3, width: 319 / 393 * width, alignItems: "center", }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 14 / 852 * height, marginRight: 5, color: "#000" }} >
                  Total payment
                </Text>
                <Image style={{ height: 17.5 / 852 * height, width: 17.5 / 393 * width, }}
                  source={QuestionIcon}
                />
              </View>
              <Text style={{ fontSize: 24 / 852 * height, color: "#000" }}>
                ${calculationData ? calculationData.total_due : ''}
              </Text>

            </View>
          </View>

          <View style={{ alignItems: "center", justifyContent: "center", marginTop: 15 / 852 * height }}>
            <View style={{ justifyContent: "space-between", flexDirection: "row", height: 54 / 852 * height, borderBottomWidth: 0.3, width: 319 / 393 * width, alignItems: "center", }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 14 / 852 * height, marginRight: 5, color: "#000" }} >
                  Number of payments
                </Text>
                <Image style={{ height: 17.5 / 852 * height, width: 17.5 / 393 * width, }}
                  source={QuestionIcon}
                />
              </View>
              <Text style={{ fontSize: 24 / 852 * height, color: "#000" }}>
                01
              </Text>

            </View>
          </View>

          <View style={{ alignItems: "center", justifyContent: "center", marginTop: 15 / 852 * height }}>
            <View style={{ justifyContent: "space-between", flexDirection: "row", height: 54 / 852 * height, borderBottomWidth: 0.3, width: 319 / 393 * width, alignItems: "center", }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 14 / 852 * height, marginRight: 5, color: "#000" }} >
                  Amount of payments
                </Text>
                <Image style={{ height: 17.5 / 852 * height, width: 17.5 / 393 * width, }}
                  source={QuestionIcon}
                />
              </View>
              <Text style={{ fontSize: 24 / 852 * height, color: "#000" }}>
                01
              </Text>

            </View>
          </View>

          <View style={{ alignItems: "center", justifyContent: "center", marginTop: 15 / 852 * height }}>
            <View style={{ justifyContent: "space-between", flexDirection: "row", height: 54 / 852 * height, borderBottomWidth: 0.3, width: 319 / 393 * width, alignItems: "center", }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 14 / 852 * height, marginRight: 5 / 852 * height, color: "#000" }} >
                  When payment is due
                </Text>
                <Image style={{ height: 17.5 / 852 * height, width: 17.5 / 393 * width, }}
                  source={QuestionIcon}
                />
              </View>
              <Text style={{ fontSize: 24 / 852 * height, color: "#000" }}>
                {calculationData ? calculationData.estimated_due_date : "--/--/--"}
              </Text>

            </View>
          </View>

        </View>



        <View style={{ flexDirection: "column", alignItems: "center", marginTop: 18 / 852 * height }}>

          <Text style={{ fontSize: 14 / 852 * height, color: '#717171', margin: 10 / 852 * height, marginBottom: 0, fontFamily: "PoppinsMedium" }}>America Finance, Inc agrees to loan you the</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 14 / 852 * height, color: '#717171', fontFamily: "PoppinsMedium" }}>
              principal amount sum of
            </Text>
            <Text style={{ marginBottom: 0, fontWeight: "600", fontSize: 18 / 852 * height, color: '#000', fontFamily: "PoppinsMedium" }}> $_ _
            </Text>
            <Text style={{ fontSize: 14 / 852 * height, color: '#717171', fontFamily: "PoppinsMedium" }}>, to bear interest at
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 14 / 852 * height, color: '#717171', fontFamily: "PoppinsMedium" }}>
              a rate of
            </Text>
            <Text style={{ marginBottom: 0, fontWeight: "600", fontSize: 18 / 852 * height, color: '#000', fontFamily: "PoppinsMedium" }}> _ _ %
            </Text>
            <Text style={{ fontSize: 14 / 852 * height, color: '#717171', fontFamily: "PoppinsMedium" }}> per annum until paid in full. The
            </Text>
          </View>
          <Text style={{ fontSize: 14 / 852 * height, color: '#717171', fontFamily: "PoppinsMedium" }}>
            loan is due and payable on date here
          </Text>
        </View>


        <View style={{ flexDirection: "column", alignItems: "center", marginTop: 15 / 852 * height }}>

          <Text style={{ fontSize: 14 / 852 * height, color: '#717171', margin: 10 / 852 * height, marginBottom: 0, fontFamily: "PoppinsMedium" }}>
            By submitting the loan application, you
          </Text>
          <Text style={{ fontSize: 14 / 852 * height, color: '#717171', fontFamily: "PoppinsMedium" }}>
            acknowledge that you have read agreed to the
          </Text>
          <Text style={{ fontSize: 14 / 852 * height, color: '#717171', fontFamily: "PoppinsMedium" }}>
            following:
          </Text>

        </View>

        <View style={styles.container}>
          <View style={{ marginLeft: 15 / 852 * height, gap: 20 / 852 * height, alignItems: "center", flexDirection: "row" }}>

            <TouchableOpacity
              style={[styles.item, { borderColor: selectedItems.includes(data[0]) ? "#2468E8" : "#717171" }]}
              onPress={() => handleItemPress(data[0])}
            >
              <View style={[styles.imageViewSt, { backgroundColor: selectedItems.includes(data[0]) ? '#2468E8' : 'white', }]}>
                <Image
                  source={selectedItems.includes(data[0]) ? whitecheckiconBold : blackcheckiconBold}
                  style={{ height: 9.49 / 852 * height, width: 11.31 / 852 * height, alignSelf: "center" }}
                />
              </View>

            </TouchableOpacity>

            <Text style={styles.textST}>{data[0]}</Text>
          </View>
          <View style={{ marginLeft: 15 / 852 * height, marginTop: 10 / 852 * height, gap: 20 / 852 * height, alignItems: "center", flexDirection: "row", }}>
            <TouchableOpacity
              style={[styles.item, { borderColor: selectedItems.includes(data[1]) ? "#2468E8" : "#717171" }]}
              onPress={() => handleItemPress(data[1])}

            >
              <View style={[styles.imageViewSt, { backgroundColor: selectedItems.includes(data[1]) ? '#2468E8' : 'white', }]}>
                <Image
                  source={selectedItems.includes(data[1]) ? whitecheckiconBold : blackcheckiconBold}
                  style={{ height: 9.49 / 852 * height, width: 11.31 / 852 * height, alignSelf: "center" }}
                />
              </View>

            </TouchableOpacity>
            <Text style={styles.textST}>{data[1]}</Text>
          </View>

          <View style={{ marginLeft: 15 / 852 * height, marginTop: 10 / 852 * height, gap: 20 / 852 * height, alignItems: "center", flexDirection: "row" }}>
            <TouchableOpacity
              style={[styles.item, { borderColor: selectedItems.includes(data[2]) ? "#2468E8" : "#717171" }]}
              onPress={() => handleItemPress(data[2])}
            >
              <View style={[styles.imageViewSt, { backgroundColor: selectedItems.includes(data[2]) ? '#2468E8' : 'white', }]}>
                <Image
                  source={selectedItems.includes(data[2]) ? whitecheckiconBold : blackcheckiconBold}
                  style={{ height: 9.49 / 852 * height, width: 11.31 / 852 * height, alignSelf: "center" }}
                />
              </View>

            </TouchableOpacity>
            <Text style={styles.textST}>{data[2]}</Text>
          </View>
        </View>

        <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
          <TouchableOpacity style={[globalStyles.shadowStyle,{ margin: 20/852*height }]}
            onPress={sndLoanRqust}
          >
            <View style={globalStyles.arrowBotton}>
              <Image source={require('../assets/arrow.png')}
                style={{ height: 24 / 852 * height, width: 24 / 393 * width, resizeMode: 'contain' }}
              />
            </View>
          </TouchableOpacity>
        </View>





      </ScrollView>
    </SafeAreaView>
  )
}
export default LoanReviewScreen;


const styles = StyleSheet.create({

  textViewSt: {

    // height: viewborderHeight,

    borderColor: "#000",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  textST: {
    fontSize: 14 / 852 * height,
  },

  imageViewSt: {

    height: 18 / 852 * height,
    width: 18 / 852 * height,
    borderRadius: 4 / 852 * height,
    justifyContent: "center",
    alignItems: "center",
  },

  imageSt: {
    height: whitecheckiconHeight,
    width: whitecheckiconHeight,
    alignSelf: "center",

  },

  container: {
    flex: 1,
    margin: 17 / 852 * height,
  },
  item: {
    height: 24 / 852 * height,
    width: 24 / 852 * height,
    borderColor: '#2468E8',
    borderWidth: 1,
    borderRadius: 5 / 852 * height,
    justifyContent: "center",
    alignItems: "center"
  },

  Headertext: {
    fontSize: 13 / 852 * height,
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    marginBottom: 10 / 852 * height,
  },

}) 