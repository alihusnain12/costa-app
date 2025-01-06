import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import OnboardingScreen from '../screens/onboardingScreen';
import Auth from './auth';
import Main from './main';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="onboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="auth" component={Auth} />
      <Stack.Screen name="main" component={Main} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
