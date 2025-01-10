import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import { OtpInput } from "react-native-otp-entry";
import CommonButton from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export default function Otp() {
  const [timer, setTimer] = useState(60); 
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { email, password, name } = useSelector(state => state.user);
  const { token } = useSelector(state => state.forgot);
  const dispatch = useDispatch();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  useEffect(() => {
    if (email) {
      sendEmailForOtp();
    } 
  }, [email]);

  const sendEmailForOtp = async () => {
    const data = { "email": email };

    try {
      await axios.post('https://qostabackend.onrender.com/api/users/send-code', data, {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error('Failed to send OTP email', error);
    }
  };

  const verifyOtpAndSignup = async () => {
    setLoading(true);
    try {
      const otpVerificationData = {
        "email": email,
        "code": otp
      };

      await axios.post('https://qostabackend.onrender.com/api/users/verify-otp/registration', otpVerificationData, {
        headers: { 'Content-Type': 'application/json' }
      });

      const signupData = {
        "name": name,
        "password": password,
        "email": email
      };

      await axios.post('https://qostabackend.onrender.com/api/users/signup', signupData, {
        headers: { 'Content-Type': 'application/json' }
      });

      navigation.navigate("login2");
    } catch (error) {
      console.error('OTP verification or signup failed', error);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtpAndNavigateToNewPassword = async () => {
    setLoading(true);
    try {
      const otpVerificationData = {
        "token": token,
        "code": otp
      };

      await axios.post('https://qostabackend.onrender.com/api/users/verify-otp/forget-password', otpVerificationData, {
        headers: { 'Content-Type': 'application/json' }
      });
navigation.navigate("NewPassword", { token, code: otp });

    } catch (error) {
      console.error('OTP verification for forgot password failed', error);
    } finally {
      setLoading(false);
    }
  };

  const handleContinue = () => {
    if (token) {
      verifyOtpAndNavigateToNewPassword();
    } else {
      verifyOtpAndSignup();
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Image source={require("../../images/Q.png")} />
        <Text style={styles.title}>Verification Code</Text>
        <OtpInput
          style={styles.otpInput}
          numberOfDigits={4}
          autoFocusOnLoad
          onTextChange={(e) => setOtp(e)}
          theme={{ pinCodeContainerStyle: styles.inputs }}
        />
        {timer > 0 ? (
          <Text style={styles.timer}>00:{timer < 10 ? `0${timer}` : timer}</Text>
        ) : (
          <TouchableOpacity onPress={() => { setTimer(60); sendEmailForOtp(); }}>
            <Text style={styles.resend}>Resend OTP</Text>
          </TouchableOpacity>
        )}
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <CommonButton title="Continue" containerStyle={{ backgroundColor: 'gray' }} onPress={handleContinue} />
      )}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Set the background to black
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
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
  inputs: {
    backgroundColor: 'gray',
    borderRadius: 200,
    margin: 0,
  },
});
