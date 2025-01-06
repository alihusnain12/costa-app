import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default function CommonButton({ onPress, title, buttonText2Style,containerStyle }) {
  return (
    <TouchableOpacity style={[styles.button,containerStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, buttonText2Style]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#EEFD79',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    margin:heightPercentageToDP(1.3)
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    padding:heightPercentageToDP(0.7)
  },
});
