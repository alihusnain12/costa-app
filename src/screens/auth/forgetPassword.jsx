import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {setCode, setToken} from '../../redux/forgotSlice';
import ScreenWrapper from '../../components/screenWrapper';
import CommonTextInput from '../../components/textinput';
import CommonButton from '../../components/button';
import axios from 'axios';
import { heightPercentageToDP } from 'react-native-responsive-screen';

// Validation schema with Yup
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
});

export default function ForgetPassword() {
  const navigation = useNavigation();
  const[loading,setLoading]=useState(false)
  const dispatch = useDispatch();

  const handleForget = async values => {
    setLoading(true)
    try {
      const res = await axios.post(
        'https://qostabackend.onrender.com/api/users/forget-password',
        values,
      );
      const {token,code} = res.data;
      dispatch(setToken(token));
      dispatch(setCode(code));
      ToastAndroid.show('Email sent!', ToastAndroid.SHORT);
      console.log(res.data);
      navigation.navigate('otp');
    } catch (error) {
      console.error('Error sending email:', error);
      ToastAndroid.show('Failed to send email.', ToastAndroid.SHORT);
    }finally{
      setLoading(false)
    }
  };

  return (
    <ScreenWrapper>
      <Formik
        initialValues={{email: ''}}
        validationSchema={validationSchema}
        onSubmit={handleForget}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.container}>
              <Image source={require('../../images/Q.png')} />
              <Text style={styles.heading}>Forget Password?</Text>
              <CommonTextInput
                placeholder="Email"
                placeholderTextColor="gray"
                customStyle={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>
             {loading ? (
                    <ActivityIndicator size="large" color="white" />
                  ) : (
                    <CommonButton title="Continue" containerStyle={{ backgroundColor: 'gray' }} onPress={handleSubmit} />
                  )}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Remembered your password?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('login2')}>
                <Text style={styles.footerLink}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', flex: 1, gap: 20},
  heading: {
    color: 'white',
    fontWeight: '900',
    fontSize: 25,
    textAlign: 'center',
  },
  input: {padding: heightPercentageToDP(2), width: '100%'},
  errorText: {color: 'red', marginTop: 5},
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 1,
    marginVertical: 17,
  },
  footerText: {color: 'white'},
  footerLink: {color: '#EEFD79'},
});
