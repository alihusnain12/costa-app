import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../../components/screenWrapper';
import CommonButton from '../../components/button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {GoogleSignin} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";


export default function Login() {
  const navigation = useNavigation();
  useEffect(()=>{
    GoogleSignin.configure({
      webClientId:'502831748613-em3o51bq3u0qadmhm691d58knnqnt0t1.apps.googleusercontent.com'
    })
  })
  
const googleSignin=async()=> {
    // Check if your device supports Google Play
  try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      console.log(response)
      navigation.navigate("main")
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            break;
          default:
        }
      } else {
      }
    }
  
  }

  
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
      <TouchableOpacity style={styles.googleButton} onPress={()=>googleSignin().then(res=>{
        console.log(res)
      }).catch(error=>console.log(error))
      }>
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
