import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native";

const Test = () => {

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

  return (
    <View>
      <Text>
        hi
      </Text>
      <TouchableOpacity style={styles.dropdownContainer}
        onPress={() => setIsClicked(!isClicked)}
      >
        <Text>{slectedState}</Text>
        {isClicked ? (
          <Image source={require("../assets/upArrow.png")}
            style={{ height: 24, width: 24 }}
          />
        ) : (
          <Image source={require("../assets/downArrow.png")}
            style={{ height: 24, width: 24 }}
          />
        )}
      </TouchableOpacity>
      {isClicked ? <View style={styles.dropdownArea}>
        <FlatList data={states}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={styles.stateItem}
                onPress={() => {
                  setSelectedState(item.name);
                  setIsClicked(false);
                }}
              >
                <Text>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )
          }}
        />
      </View> : null}
    </View>
  )
};

export default Test;

const styles = StyleSheet.create({
  dropdownContainer: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: 'space-between',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#ececec'
  },
  dropdownArea: {
    width: "90%",
    height: 300,
    marginTop: 0,
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
})