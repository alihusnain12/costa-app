import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/main/home';
import Profile from '../screens/main/profile';
import TourDetails from '../screens/main/tourDetails';
import Settings from '../screens/main/setting';
import Login from '../screens/auth/login2';
import Icon from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import BookingHistory from '../screens/main/bookingHistory';
import Notifications from '../screens/main/notifications';

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.drawerHeader}>
        <Image
          source={require("../images/Q.png")}
          style={styles.drawerImage}
        />
      </View>
      <TouchableOpacity 
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Home')}
      >
        <Icon name="home-outline" size={20} color="white" />
        <Text style={styles.drawerLabel}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Profile')}
      >
        <Icon name="person-outline" size={20} color="white" />
        <Text style={styles.drawerLabel}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Booking')}
      >
        <Icon name="calendar-outline" size={20} color="white" />
        <Text style={styles.drawerLabel}>Booking History</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.drawerItem}
        onPress={() => navigation.navigate('TourDetails')}
      >
        <Icon name="compass-outline" size={20} color="white" />
        <Text style={styles.drawerLabel}>Tour Details</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Settings')}
      >
        <Icon name="settings-outline" size={20} color="white" />
        <Text style={styles.drawerLabel}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Notification')}
      >
        <Icon name="notifications-outline" size={20} color="white" />
        <Text style={styles.drawerLabel}>Notification</Text>
      </TouchableOpacity>
      <View style={styles.borderBottom} />
      <TouchableOpacity 
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Login')}
      >
        <Icon name="log-out-outline" size={20} color="white" />
        <Text style={styles.drawerLabel}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'transparent',
          width: '100%',
        },
        drawerLabelStyle: {
          fontSize: 15, // Made the text smaller
          color: '#ffffff',
        },
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Booking" component={BookingHistory} />
      <Drawer.Screen name="TourDetails" component={TourDetails} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Notification" component={Notifications} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: heightPercentageToDP(15),
    paddingHorizontal: heightPercentageToDP(3),
  },
  drawerHeader: {
    // Add styles for your drawer header here
  },
  drawerImage: {
    // Add styles for your drawer image here
  },
  drawerItem: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerLabel: {
    fontSize: 15, // Made the text smaller
    color: 'white',
    marginLeft: 10,
  },
  borderBottom: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
