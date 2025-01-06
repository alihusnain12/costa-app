import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyDrawer from './drawer';
import Qosta1 from '../screens/main/qosta1';
import EditProfile from '../screens/main/editProfile';
import ProfileInfo from '../screens/main/profileInfo';
import AddNewCard from '../screens/main/AddNewCard';
import CardSuccess from '../screens/main/cardSuccess';
import FlightDetails from '../screens/main/flightDetails';
import TravellorInfo from '../screens/main/travellorInfo';
import TourConfirmed from '../screens/main/tourConfirmed';
import Currency from '../screens/main/currency';
import Language from '../screens/main/language';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="drawer" component={MyDrawer} />
      <Stack.Screen name="qosta1" component={Qosta1} />
      <Stack.Screen name='editProfile' component={EditProfile}/>
      <Stack.Screen name='profileInfo' component={ProfileInfo}/>
      <Stack.Screen name='AddNewCard' component={AddNewCard}/>
      <Stack.Screen name='CardSuccess' component={CardSuccess}/>
      <Stack.Screen name='FlightDetails' component={FlightDetails}/>
      <Stack.Screen name='TravellorInfo' component={TravellorInfo}/>
      <Stack.Screen name='TourConfirmed' component={TourConfirmed}/>
      <Stack.Screen name='Currency' component={Currency}/>
      <Stack.Screen name='Language' component={Language}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
