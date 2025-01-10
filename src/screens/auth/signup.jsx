import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import CommonTextInput from '../../components/textinput';
import CommonButton from '../../components/button';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {setEmail, setPassword} from '../../redux/userSlice';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default function Signup() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSignup = values => {
    setLoading(true);
    try {
      dispatch(setEmail(values.email));
      dispatch(setPassword(values.password));
      navigation.navigate('SignupGoogle');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 1,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            borderWidth: 1,
            borderRadius: 50,
            padding: 4,
            borderColor: '#EEFD79',
          }}>
          <Icon name="arrow-back" size={23} color="white" />
        </TouchableOpacity>
      </View>
      <Formik
        initialValues={{email: '', password: '', confirmPassword: ''}}
        validationSchema={validationSchema}
        onSubmit={handleSignup}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 20,
              }}>
              <Image source={require('../../images/Q.png')} />
              <Text style={{color: 'white', fontWeight: '800', fontSize: 25}}>
                Sign up to Continue
              </Text>
              <CommonTextInput
                placeholder="Enter Email"
                placeholderTextColor="gray"
                customStyle={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {touched.email && errors.email && (
                <Text style={{color: 'red'}}>{errors.email}</Text>
              )}
              <CommonTextInput
                placeholder="Enter Password"
                placeholderTextColor="gray"
                customStyle={styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {touched.password && errors.password && (
                <Text style={{color: 'red'}}>{errors.password}</Text>
              )}
              <CommonTextInput
                placeholder="Confirm Password"
                placeholderTextColor="gray"
                customStyle={styles.input}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={{color: 'red'}}>{errors.confirmPassword}</Text>
              )}
            </View>
            <View
              style={{padding: heightPercentageToDP(2), alignItems: 'center'}}>
              <CommonButton
                title={
                  loading ? <ActivityIndicator color="black" /> : 'Sign up'
                }
                onPress={handleSubmit}
                containerStyle={{
                  marginBottom: heightPercentageToDP(2),
                  width: '100%',
                }}
                disabled={loading}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: heightPercentageToDP(2),
                }}>
                <Text style={{color: 'white'}}>Already have an account!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('login2')}>
                  <Text
                    style={{color: 'rgba(39, 217, 245, 0.8)', marginLeft: 5}}>
                    Login
                  </Text>
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
  input: {
    width: '100%',
    padding: 19,
  },
});
