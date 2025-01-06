import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Index from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
