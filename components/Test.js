import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Test = () => {
  const [text, setText] = useState('');

  const handlePress = (value) => {
    if (value === 'del') {
      setText(text.slice(0, -1));
    } else {
      setText(text + value);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Type here..."
        editable={false} // Disable direct text input
      />

      <View style={styles.keyboard}>
        <TouchableOpacity style={styles.key} onPress={() => handlePress('1')}>
          <Text>1</Text>
        </TouchableOpacity>
        {/* Add more keys as needed */}
        <TouchableOpacity style={styles.key} onPress={() => handlePress('del')}>
          <Text>DEL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
    width: 200,
  },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  key: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Test;
