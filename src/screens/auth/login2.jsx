import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import CommonTextInput from '../../components/textinput';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import CommonButton from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Toast from 'react-native-simple-toast';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

export default function Login2() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post('https://qostabackend.onrender.com/api/auth', {...values,fcmtoken:''}, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response.data);
      Toast.show('Login Successful', Toast.LONG);
      navigation.navigate("main");
    } catch (error) {
      console.log(error?.response?.data?.message);
      Toast.show(error?.response?.data?.message||'Login Failed: Invalid username or password', Toast.LONG);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper>
      <Formik
        initialValues={{ name: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={{ flex: 1 }}>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
            }}>
              <Image source={require('../../images/Q.png')} />
              <Text style={{ fontSize: 26, fontWeight: '800', color: 'white' }}>
                Welcome Back!
              </Text>
              <CommonTextInput
                placeholder="Enter username"
                placeholderTextColor="white"
                customStyle={styles.email}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              {touched.name && errors.name && (
                <Text style={{ color: 'red' }}>{errors.name}</Text>
              )}
              <CommonTextInput
                placeholder="Enter password"
                placeholderTextColor="white"
                customStyle={styles.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {touched.password && errors.password && (
                <Text style={{ color: 'red' }}>{errors.password}</Text>
              )}
              <TouchableOpacity
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  width: '100%',
                  paddingHorizontal: heightPercentageToDP(2),
                }}
                onPress={() => navigation.navigate('ForgetPassword')}
              >
                <Text style={{ color: '#EEFD79' }}>Forget Password</Text>
              </TouchableOpacity>
            </View>
            <View style={{ padding: heightPercentageToDP(3), alignItems: 'center' }}>
              {loading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <CommonButton title="Login" containerStyle={{ backgroundColor: '#EEFD79', width: "100%" }} onPress={handleSubmit} />
              )}

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Don't have an account!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                  <Text style={{ color: '#EEFD79', marginLeft: 5 }}>Signup</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  email: {
    width: '100%',
    padding: heightPercentageToDP(2),
    color: 'white',
  },
  password: {
    width: '100%',
    padding: heightPercentageToDP(2),
    color: 'white',
  },
});
