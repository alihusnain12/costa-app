import { ActivityIndicator, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ScreenWrapper from '../../components/screenWrapper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CommonTextInput from '../../components/textinput';
import CommonButton from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setName } from '../../redux/userSlice';
import axios from 'axios';

// Validation schema with Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
});

export default function SignupGoogle() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleContinue = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post("https://qostabackend.onrender.com/api/users/check-name", values);
      if (response.data.exists) {
        ToastAndroid.show('Name already exists. Please choose a different one.', ToastAndroid.SHORT);
      } else {
        dispatch(setName(values.name));
        navigation.navigate("otp");
      }
    } catch (error) {
      ToastAndroid.show('Error checking name', ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper>
      <Formik
        initialValues={{ name: '' }}
        validationSchema={validationSchema}
        onSubmit={handleContinue}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.heading}>What should I call you?</Text>
              <CommonTextInput
                customStyle={styles.input}
                placeholder="Enter preferred name"
                placeholderTextColor="gray"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
            </View>
            <View style={styles.footer}>
              {loading ? (
                <ActivityIndicator color="white" size="large" />
              ) : (
                <CommonButton title="Continue" onPress={handleSubmit} />
              )}
            </View>
          </View>
        )}
      </Formik>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: hp(3),
  },
  input: {
    width: '100%',
    marginTop: hp(2),
    color: "white",
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#22212fbf',
    fontWeight: '700',
  },
  errorText: {
    color: 'red',
    fontSize: hp(2),
    marginTop: hp(1),
  },
  footer: {
    padding: 20,
  },
});
