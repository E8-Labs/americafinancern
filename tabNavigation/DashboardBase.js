// Import necessary libraries
import React ,{useState}from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native';
import DashboardScreen from './DashboardScreen';
import LoanRequest from '../components/LoanRequest';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfileScreen from './ProfileScreen';



const homeIcon = require('../assets/American_Finance_App_image/HiconLinear-3x.png');
const Documenticon = require('../assets/American_Finance_App_image/HiconLinearhome3-3x.png');
const AddCircleIcon = require('../assets/American_Finance_App_image/AddCircleIcon-3x.png');
const NotifacationIcon = require('../assets/American_Finance_App_image/NotifacationBall-3x.png');
const ProfileCircleIcon = require('../assets/American_Finance_App_image/ProfileCircleIcon-3x.png');


const { height, width } = Dimensions.get('window');

const homeIconHight = 24 / 852 * height;
const homeIconWidth = 24 / 393 * width;


const Tab = createBottomTabNavigator();
function DashboardBase(props) {

  // const [fromTabBar,setFromTabBar] = useState(false)



  return (
    <Tab.Navigator initialRouteName='Dashboard' screenOptions={{

      headerShown: false, tabBarStyle:
      {
        height: 78 / 852 * height,

      },
      // tabBarActiveTintColor: '#19999A',
    }
    }
    >
      <Tab.Screen name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={homeIcon}
              style={{
                width: homeIconWidth,
                height: homeIconHight,
                resizeMode: "center",
                tintColor: focused ? '#2468E8' : '#717171',
              }}
            />
          ),
        }}
      />
      <Tab.Screen name='Documents'
        component={DocumentScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={Documenticon}
                style={{
                  width: homeIconWidth,
                  height: homeIconHight,
                  resizeMode: 'contain',
                  tintColor: focused ? '#2468E8' : '#717171',
                }}
              />
            );
          }
        }}
      />
      <Tab.Screen name='Loans'
        component={LoanRequest}
        listeners={({navigation}) => (
          {
            tabPress: (e) => {
              e.preventDefault();
              console.log("Tab bar pressed")
              props.navigation.push("LoanRequest",{
                fromTabBar: true
              })
            }
          }
        )}
        options={{
          tabBarShowLabel:false,

          tabBarIcon: ({focused}) => {
            
              return (
                // <TouchableOpacity onPress={() => {
                //   props.navigation.push("LoanRequest")
                //  }}>
                  <Image source={AddCircleIcon}
                    style={{
                      height: 100 / 852 * height,
                      width: 100 / 393 * width,
                      marginTop: 10,
    
                    }} />  
                // </TouchableOpacity>
              )
            
          }

        }}
      />
      <Tab.Screen name='Notifications'
        component={NotificationScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={NotifacationIcon}
                style={{
                  height: homeIconHight,
                  width: homeIconWidth,
                  resizeMode: 'contain',
                  tintColor: focused ? '#2468E8' : '#717171',
                }}
              />
            )
          }
        }}

      />
      <Tab.Screen name='Profile'
        component={ProfileScreen}

        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={ProfileCircleIcon}
                style={{
                  height: homeIconHight,
                  width: homeIconWidth,
                  resizeMode: 'contain',
                  tintColor: focused ? '#2468E8' : '#717171',
                }}
              />
            )
          }
        }}

      />
    </Tab.Navigator>
  );
};


const DocumentScreen = () => {
  return <View style={{ justifyContent: "center", alignSelf: "center" }}>
    <Text >
      404 | NOT FOUND
    </Text>
  </View>
}
const CalcolaterScreen = () => {
  return <View style={{ justifyContent: "center", alignSelf: "center" }}>
    <Text>
      404 | NOT FOUND
    </Text>
  </View>
}
const NotificationScreen = () => {
  return <View style={{ justifyContent: "center", alignSelf: "center" }}>
    <Text>
      404 | NOT FOUND
    </Text>
  </View>
}


export default DashboardBase;
const styles = StyleSheet.create({
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: 'cover', // Adjust the resizeMode as needed
  },
});
