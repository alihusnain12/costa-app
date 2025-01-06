import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CommonTextInput from '../../components/textinput';
import CommonButton from '../../components/button';

export default function SignupGoogle() {
  const [name,setName]=useState("")
  return (
    <ScreenWrapper>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.heading}>
          What should I call you?
        </Text>
        <CommonTextInput
          customStyle={styles.input}
          placeholder="Enter preferred name"
          placeholderTextColor="white"
          onChangeText={(e)=>setName(e)}
          value={name}
        />
      </View>
      <CommonButton title="Continue"/>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: hp(3),
  },
  input: {
    width: '100%',
    marginTop: hp(2),
    color: "#FFFFFF",
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor:'#22212fbf',
    fontWeight:'700'
  },
});
