import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../../components/screenWrapper';
import CommonButton from '../../components/button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Login() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image source={require("../../images/Q.png")} />
        <Text style={{color:'white',fontSize:hp(4),marginTop:hp(2),textAlign:'center'}}>
          Hi, I am QOSTA<Text style={{color:'#EEFD79'}}>AI</Text>, your AI travel companion
        </Text>
      </View>
      <CommonButton title="Continue" buttonText2Style={{color:'black'}} onPress={() => navigation.navigate("login2")}/>
        <View style={{justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity style={styles.googleButton} onPress={() => navigation.navigate("SignupGoogle")}>
        <Image source={require("../../images/Google.png")} style={styles.googleIcon}/>
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity></View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  googleButton: {
    backgroundColor: 'gray',
    borderRadius: 10,
    width: "94%",
    padding: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(2),
  },
  googleIcon: {
    width: hp(3),
    height: hp(3),
  },
  googleButtonText: {
    color: 'white',
    padding: hp(1),
  },
});
