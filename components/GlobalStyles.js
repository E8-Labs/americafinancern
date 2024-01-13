import { StyleSheet, Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get('window');

const arrowIconHeight = 64 / 852 * height;
const arrowIconWidth = 64 / 852 * height;
const afimageHeight = 106 / 852 * height;
const afimageWidth = 106 / 393 * width;

const globalStyles = StyleSheet.create({

  container :{
    //flex:1,
    height: height,
    width:width,
    alignItems: 'center',
  // justifyContent:'center'
  },
    
  arrowBotton: {
    backgroundColor: '#2468E8',
    borderRadius: 32/852*height,
    height: arrowIconHeight,
    width: arrowIconWidth,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 1, width: -1 },
        shadowRadius: 10,

      },
      android: {
        elevation: 2,
      }
    })
  },
  logoImageStyle: {
    height: afimageHeight,
    width: afimageWidth,
  },

  inputStyle:{
    backgroundColor: "#ececec",
    borderRadius: 13/852*height, 
    paddingLeft: 10/852*width,
    width: 360 / 393 * width ,
    height:55/852*height,
    fontSize:14/852*height,
    fontWeight:'500',
  },
  capsuleButton:{
    height:64 / 852 * height,
    width:178 / 393 *width,
    backgroundColor:'#2468E8',
    borderRadius:58,
    justifyContent:'center',
    alignItems:'center',

    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 1, width: -1 },
        shadowRadius: 10,

      },
      android: {
        elevation: 15,
      }
    })
  },

  bottomText:{
    fontSize: 14/852*height,
    color: '#a7a7a7', 
    fontWeight: '500', 
   
  },
  uperMainText:{
    fontSize: 26/852 * height,
     fontWeight: '700',
      marginTop: 5/852 * height ,
      color:'#000'
  }

})

export { globalStyles }