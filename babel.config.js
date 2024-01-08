module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [ 'react-native-reanimated/plugin',]
};



// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ["module:metro-react-native-babel-preset"],
//     plugins: [
//       "@babel/plugin-proposal-unicode-property-regex",
//       "react-native-reanimated/plugin",
//     ],
//   };
// };
