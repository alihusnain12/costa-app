import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import { OtpInput } from "react-native-otp-entry";
import CommonButton from '../../components/button';
import { useNavigation } from '@react-navigation/native';

export default function Otp() {
  const [timer, setTimer] = useState(60);
  const navigation=useNavigation()
  
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Image source={require("../../images/Q.png")} />
        <Text style={styles.title}>Verification Code</Text>
        <OtpInput
          style={styles.otpInput}
          numberOfDigits={4}
          autoFocusOnLoad
          codeInputFieldStyle={styles.otpInputField}
          codeInputHighlightStyle={styles.otpInputHighlight}
        />
        {timer > 0 ? (
          <Text style={styles.timer}>00:{timer < 10 ? `0${timer}` : timer}</Text>
        ) : (
          <TouchableOpacity onPress={() => setTimer(60)}>
            <Text style={styles.resend}>Resend OTP</Text>
          </TouchableOpacity>
        )}
      </View>
      <CommonButton title="Continue" containerStyle={{backgroundColor:'gray'}} onPress={()=>navigation.navigate("NewPassword")}/>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  otpInput: {
    width: '100%',
    height: 60,
  },
  otpInputField: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 100,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 5,
  },
  otpInputHighlight: {
    borderColor: '#00BFFF',
  },
  timer: {
    fontSize: 16,
    color: 'white',
    marginTop: 20,
  },
  resend: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
});
