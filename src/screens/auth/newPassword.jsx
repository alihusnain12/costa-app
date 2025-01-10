import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import CommonTextInput from '../../components/textinput';
import CommonButton from '../../components/button';
import { useNavigation, useRoute } from '@react-navigation/native';
import Modal from "react-native-modal";
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default function NewPassword() {
  const navigation = useNavigation();
  const route = useRoute(); // Use useRoute to get the navigation parameters
  const { token, code } = route.params; // Destructure token and code from the parameters

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Handle form submission
  const handleSubmit = async (values) => {
    if (!token || !code) {
      console.error('Token or code is missing');
      return;
    }

    let data = {
      password: values.password,
      token: token,
      code: code
    };

    try {
      const response = await axios.put("https://qostabackend.onrender.com/api/users/update-password", data);
      console.log(response.data);
      if (response.status === 200) {
        toggleModal();
      }
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  };

  return (
    <ScreenWrapper>
      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
              <Image source={require("../../images/Q.png")} />
              <Text style={{ color: 'white', fontWeight: '900', fontSize: 25, textAlign: 'center' }}>
                Create A New Password
              </Text>
              <CommonTextInput
                placeholder="Password"
                placeholderTextColor="gray"
                customStyle={styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {touched.password && errors.password && (
                <Text style={{ color: 'red' }}>{errors.password}</Text>
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
                <Text style={{ color: 'red' }}>{errors.confirmPassword}</Text>
              )}
            </View>
            <CommonButton title="Reset Password" onPress={handleSubmit} containerStyle={{ margin: 0 }} />
          </>
        )}
      </Formik>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 1, marginVertical: 17 }}>
        <Text style={{ color: 'white' }}>Remembered your password?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("login2")}>
          <Text style={{ color: '#EEFD79' }}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Image source={require("../../images/Q.png")} />
          <Text style={{ color: 'white', fontWeight: '800', fontSize: 20, marginTop: 6 }}>Changed Successfully</Text>
          <Text style={styles.modalText}>Your password has been changed successfully!</Text>
          <CommonButton title="Sign in" containerStyle={{ width: "100%" }} onPress={() => navigation.navigate("login2")} />
        </View>
      </Modal>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 19,
    width: "100%",
  },
  modalContent: {
    backgroundColor: 'black',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: "#EEFD79",
    borderWidth: 1,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 12,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
});
