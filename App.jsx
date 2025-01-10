import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Index from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Index />
    </NavigationContainer></Provider>
  );
}

const styles = StyleSheet.create({});
