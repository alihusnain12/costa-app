import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/login';
import Signup from '../screens/auth/signup';
import SignupGoogle from '../screens/auth/signupGoogle';
import Login2 from '../screens/auth/login2';

const Stack = createNativeStackNavigator();
export default function Auth() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="login2" component={Login2} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="SignupGoogle" component={SignupGoogle} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
