import { StyleSheet, Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get('window');

const arrowIconHeight = 64 / 852 * height;
const arrowIconWidth = 64 / 852 * height;
const afimageHeight = 106 / 852 * height;
const afimageWidth = 106 / 393 * width;

const globalStyles = StyleSheet.create({

  container :{
    // flex:1,
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
   
  },
  logoImageStyle: {
    height: afimageHeight,
    width: afimageWidth,
  },

  inputStyle:{
    backgroundColor: "#f2f2f2",
    borderRadius: 13/852*height, 
    paddingLeft: 10/852*width,
    width: 360 / 393 * width ,
    height:55/852*height,
    fontSize:14/852*height,
    fontWeight:'500',
    paddingLeft:15/852*height
  },
  capsuleButton:{
    height:64 / 852 * height,
    width:178 / 393 *width,
    // padding:20,
    borderRadius:58/852*height,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#2468E8',

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

  shadowStyle :{
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

  bottomText:{
    fontSize: 14/852*height,
    color: '#a7a7a7', 
    fontWeight: '500', 
   
  },
  uperMainText:{
    fontSize: 26/852 * height,
     fontWeight: '700',
      marginTop: 10/852 * height ,
      color:'#000',
  }

})

export { globalStyles }