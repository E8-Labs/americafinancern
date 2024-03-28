import React from "react";

import NameDetails from "./components/NameDetails";
import Main from "./components/Main";
import SignInScreen from "./components/SignInScreen";
import EmailDetails from "./components/EmailDetails";
import VerifyEmailScreen from "./components/VerifyEmailScreen";
import PhoneNumberScreen from "./components/PhoneNumberScreen";
import VerifyNumberScreen from "./components/VerifyNumberScreen";
import FaceIdScreen from "./components/FaceIdScreen";
import PasswordScreen from "./components/PasswordScreen";
import CongratesScreen from "./components/CongratesScreen";

import StateScreen from "./components/StateScreen";
import WaitListScreen from "./components/OtherStateScreen";
import HomeAddressScreen from "./components/HomeAddressScreen";
import NotificationScreen from "./components/NotificationScreen";
import BankAccountMainScreen from "./components/BankAcountMainScreen";
import BankDetails from "./components/BankDetails";
import SelectBank from "./components/SelectBank";
import CredentialsScreen from "./components/CredentialsScreen";
import BankAccountDetails from "./components/BankAccountDetails";
import LoanRequest from "./components/LoanRequest";
import VerifyIdentityScreen from "./components/VerifyIdentityScreen";
import LicenseDetailsScreen from "./components/LicenseDetailsScreen";
import VerifyLicenseScreen from "./components/VerifyLicenseScreen";
import SelfieWithID from "./components/SelfieWithID";
import HousingSituition from "./components/HousingSituition";
import HouseRentAmount from "./components/HouseRentAmount";
import HousingDurationScreen from "./components/HousingDurationScreen";
import RecentHousingHistory from "./components/RecentHousingHistory";
import OtherHousingSituition from "./components/OtherHousingSituiting";
import DOBScreen from "./components/DOBScreen";
// import Test f rom "./components/Test";
import HouseDetails from "./components/HouseDetails";
import Dropdown from "./components/Dropdown";
import OtherStateScreen from "./components/OtherStateScreen";
import SplashScreen1 from "./splashScreens/SplashScreen1";
import SplashScreen2 from "./splashScreens/SplashScreen2";
import SplashScreen3 from "./splashScreens/SplashScreen3";
import SplashScreen4 from "./splashScreens/SplashScreen4";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoanReviewScreen from "./components/LoanReviewScreen";
import DashboardScreen from "./tabNavigation/DashboardScreen";
import DashboardBase from "./tabNavigation/DashboardBase";
import LoanShedule from "./tabNavigation/LoanShedule";
import ActivePaydayLoans from "./Debt-Obligation/ActivePaydayLoans";
import ApplicationDetailActiveDuty from "./Debt-Obligation/ApplicationDetailActiveDuty";
import ApplicationDetailsScreen from "./Debt-Obligation/ApplicationDetailsScreen";
import BankruptcyPetition from "./Debt-Obligation/BankruptcyPetition";
import FinancialDetailsDebts from "./Debt-Obligation/FinancialDetailsDebts";
import FinancialDetailsScreen from "./Debt-Obligation/FinancialDetailsScreen";
import MonthlyDebtObligation from "./Debt-Obligation/MonthlyDebtObligation";
import OthersDebtObligation from "./Debt-Obligation/OthersDebtObligation";
import OutstandingDebtScreen from "./Debt-Obligation/OutstandingDebtScreen";
import CreditCardDebpt from "./Debt-Obligation/CreditCardDebpt";
import { View } from "react-native";
import { SafeAreaView, Dimensions } from "react-native";
import LoanProgressViewScreen from "./tabNavigation/LoanProgressViewScreen";
import DebtFlowMainScreen from "./Debt-Obligation/DebtFlowMainScreen";
import LoanDetails from "./tabNavigation/LoanDetails";
import ProfileMainScreen from "./profileFlow/ProfileMainScreen";
import Bank_account_information from "./profileFlow/Bank_account_Information";
import BankInformatin from "./profileFlow/BankInformatin";
import Manage_account_password from "./profileFlow/Manage_account_password";
import ManageAccountProfile from "./profileFlow/ManageAccountProfile";
import MyDocumentsScreen from "./profileFlow/MyDocumentsScreen";
import IncomeDetails from "./profileFlow/IncomDetails";
import Manage_account from "./profileFlow/Manage_account";
import IdentityConnectionScreen from "./components/IdentityConnectionScreen";
import IdentityConnectionFailed from "./components/IdenditityConnectionFailed";
import OnbordingFailScreen from "./Debt-Obligation/OnbordingFailScreen";
import IncomeVerification from "./components/IncomeVerification";


const Stack = createNativeStackNavigator();
const { height, width } = Dimensions.get('window');

const App = () => {

  return (
  
      <NavigationContainer>
        <Stack.Navigator initialRouteName="IncomeVerification" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen1" component={SplashScreen1} />
          <Stack.Screen name="SplashScreen2" component={SplashScreen2} />
          <Stack.Screen name="SplashScreen3" component={SplashScreen3} />
          <Stack.Screen name="SplashScreen4" component={SplashScreen4} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="NameDetails" component={NameDetails} />
          <Stack.Screen name="EmailDetails" component={EmailDetails} />
          <Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen} />
          <Stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} />
          <Stack.Screen name="VerifyNumberScreen" component={VerifyNumberScreen} />
          <Stack.Screen name="FaceIdScreen" component={FaceIdScreen} />
          <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
          <Stack.Screen name="CongratesScreen" component={CongratesScreen} />
          <Stack.Screen name="StateScreen" component={StateScreen} />
          <Stack.Screen name="OtherStateScreen" component={OtherStateScreen} />
          <Stack.Screen name="HomeAddressScreen" component={HomeAddressScreen} />
          <Stack.Screen name="LoanRequest" component={LoanRequest} />
          <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
          <Stack.Screen name="BankAccountMainScreen" component={BankAccountMainScreen} />
          <Stack.Screen name="DebtFlowMainScreen" component={DebtFlowMainScreen} />
          <Stack.Screen name="BankDetails" component={BankDetails} />
          <Stack.Screen name="BankAccountDetails" component={BankAccountDetails} />
          <Stack.Screen name="SelectBank" component={SelectBank} />
          <Stack.Screen name="HousingSituition" component={HousingSituition} />
          <Stack.Screen name="OtherHousingSituition" component={OtherHousingSituition} />
          <Stack.Screen name="HouseDetails" component={HouseDetails} />
          <Stack.Screen name="HouseRentAmount" component={HouseRentAmount} />
          <Stack.Screen name="HousingDurationScreen" component={HousingDurationScreen} />
          <Stack.Screen name="RecentHousingHistory" component={RecentHousingHistory} />
          <Stack.Screen name="LoanReviewScreen" component={LoanReviewScreen} />
          <Stack.Screen name="DashboardBase" component={DashboardBase} />
          <Stack.Screen name="LoanProgressViewScreen" component={LoanProgressViewScreen} />
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
          <Stack.Screen name="LoanDetails" component={LoanDetails} />
          <Stack.Screen name="LoanShedule" component={LoanShedule} />
          <Stack.Screen name="Manage_account_password" component={Manage_account_password} />
          <Stack.Screen name="Bank_account_information" component={Bank_account_information} />
          <Stack.Screen name="BankInformatin" component={BankInformatin} />
          <Stack.Screen name="ManageAccountProfile" component={ManageAccountProfile} />
          <Stack.Screen name="MyDocumentsScreen" component={MyDocumentsScreen} />
          <Stack.Screen name="ProfileMainScreen" component={ProfileMainScreen} />
          <Stack.Screen name="IncomeDetails" component={IncomeDetails} />
          <Stack.Screen name="Manage_account" component={Manage_account} />

          <Stack.Screen name="ActivePaydayLoans" component={ActivePaydayLoans} />
          <Stack.Screen name="OnbordingFailScreen" component={OnbordingFailScreen} />
          <Stack.Screen name="ApplicationDetailActiveDuty" component={ApplicationDetailActiveDuty} />
          <Stack.Screen name="ApplicationDetailsScreen" component={ApplicationDetailsScreen} />
          <Stack.Screen name="BankruptcyPetition" component={BankruptcyPetition} />
          <Stack.Screen name="CreditCardDebpt" component={CreditCardDebpt} />
          <Stack.Screen name="FinancialDetailsDebts" component={FinancialDetailsDebts} />
          <Stack.Screen name="FinancialDetailsScreen" component={FinancialDetailsScreen} />
          <Stack.Screen name="MonthlyDebtObligation" component={MonthlyDebtObligation} />
          <Stack.Screen name="OthersDebtObligation" component={OthersDebtObligation} />
          <Stack.Screen name="OutstandingDebtScreen" component={OutstandingDebtScreen} />
          <Stack.Screen name="IdentityConnectionScreen" component={IdentityConnectionScreen} />
          <Stack.Screen name="IdentityConnectionFailed" component={IdentityConnectionFailed} />
          <Stack.Screen name="IncomeVerification" component={IncomeVerification} />
        </Stack.Navigator>
      </NavigationContainer>
    // <View>
    //   {/* <FinancialDetailsDebts/> */}
    //   {/* <Bank_account_information/> */}
    //   {/* <BankInformatin/> */}
    //   {/* <IncomeDetails/> */}
    //   {/* <Manage_account_password/> */}
    //   {/* <Manage_account/> */}
    //     {/* <ManageAccountProfile/> */}
    //     {/* <MyDocumentsScreen/> */}
    //   {/* <ActivePaydayLoans/> */}
    //   {/* <Test/> */}
    //   {/* <IdentityConnectionScreen/> */}
    //   <IdentityConnectionFailed/>
    //   {/* <BankAccountMainScreen/> */}
    // </View>


    // <LoanShedule />
    // <BlankSplashScreen/>
    // <SplashScreen1/>
    // <SplashScreen2/>
    // <SplashScreen3/>
    // <SplashScreen4/>
    // <ReviewScreen/>
    //<NotificationScreen />
    // <BankAccountMainScreen />
    // <BankDetails/>
    // <SelectBank />
    // <CredentialsScreen />
    // <BankAccountDetails />
    // <LoanRequest />
    // <VerifyIdentityScreen />
    // <LicenseDetailsScreen />
    // <VerifyLicenseScreen />
    // <SelfieWithID />
    // <HousingSituition />
    // <HouseRentAmount />
    // <HousingDurationScreen />
    // <RecentHousingHistory />
    // <OtherHousingSituition />
    // <DOBScreen />
    // <HouseDetails />
    // <Test />
    // <Dropdown />
    // <StateScreen />
    // <HomeAddressScreen />
    // <CongratesScreen />
    // <NameDetails />
    // <Main />
    // <PhoneNumberScreen />
    // <EmailDetails/>
    // <VerifyEmailScreen/>
    // <OtherStateScreen />
    // <SignInScreen/>
    // <DashboardScreen/>
    // <ActivePaydayLoans/>
    // <ApplicationDetailActiveDuty/>
    // <ApplicationDetailsScreen/>
    // <BankruptcyPetition/>
    // <FinancialDetailsDebts/>
    // <FinancialDetailsScreen/>
    // <MonthlyDebtObligation/>
    // <OthersDebtObligation/>
    // <OutstandingDebtScreen/>
    // <DashboardScreen/>
    // <LoanProgressViewScreen/>
    // <DebtFlowMainScreen/>
    // <LoanReviewScreen/>
  )
}
export default App;