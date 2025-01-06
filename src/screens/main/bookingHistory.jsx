import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function BookingHistory() {
  const [currentButton, setCurrentButton] = useState("All");
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 1, marginTop: hp(1) }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ borderWidth: 1, borderRadius: 50, padding: 4, borderColor: '#EEFD79' }}
        >
          <Icon name="arrow-back" size={23} color="white" />
        </TouchableOpacity>
        <Text style={{ color: 'white', flex: 1, textAlign: 'center', fontSize: 25, fontWeight: '700' }}>Bookings</Text>
      </View>
      <View style={styles.container}>
        {["All", "Active", "Cancelled"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.button,
              currentButton === item && styles.selectedButton,
              { flex: 1 },
            ]}
            onPress={() => setCurrentButton(item)}
          >
            <Text
              style={[
                styles.buttonText,
                currentButton === item && styles.selectedButtonText
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Booking Details */}
      <ScrollView contentContainerStyle={{paddingBottom:hp(4)}} showsVerticalScrollIndicator={false}>
      <View style={styles.bookingDetailContainer}>
        {/* Details Row */}
        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>Depart</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>Wed, Nov 13</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>3h 10m</Text>
          </View>
        </View>
        {/* Flight Info */}
        <View style={styles.flightInfo}>
          <View style={styles.flightTime}>
            <Text style={styles.flightText}>17:00</Text>
            <Text style={styles.flightSubText}>3h 10m</Text>
            <Text style={styles.flightText}>12:20</Text>
          </View>
          <View style={styles.borderLeft}></View>
          <View style={styles.flightDetails}>
            <Text style={styles.flightText}>Abu Dhabi International Airport</Text>
            <Text style={styles.flightSubText}>Qatar Airways</Text>
            <Text style={styles.flightText}>ISB Islamabad International Airport</Text>
          </View>
        </View>
        {/* button */}
        <TouchableOpacity style={{borderWidth:1,borderColor:'#EEFD79',borderRadius:10,width:"100%",marginTop:hp(2),padding:hp(1.2)}}>
            <Text style={{color:'#EEFD79',textAlign:'center',fontSize:20,fontWeight:'600'}}>Flight Status</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bookingDetailContainer}>
        {/* Details Row */}
        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>Depart</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>Wed, Nov 13</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>3h 10m</Text>
          </View>
        </View>
        {/* Flight Info */}
        <View style={styles.flightInfo}>
          <View style={styles.flightTime}>
            <Text style={styles.flightText}>17:00</Text>
            <Text style={styles.flightSubText}>3h 10m</Text>
            <Text style={styles.flightText}>12:20</Text>
          </View>
          <View style={styles.borderLeft}></View>
          <View style={styles.flightDetails}>
            <Text style={styles.flightText}>Abu Dhabi International Airport</Text>
            <Text style={styles.flightSubText}>Qatar Airways</Text>
            <Text style={styles.flightText}>ISB Islamabad International Airport</Text>
          </View>
        </View>
        {/* button */}
        <TouchableOpacity style={{borderWidth:1,borderColor:'#EEFD79',borderRadius:10,width:"100%",marginTop:hp(2),padding:hp(1.2)}} onPress={()=>navigation.navigate("FlightDetails")}>
            <Text style={{color:'#EEFD79',textAlign:'center',fontSize:20,fontWeight:'600'}}>Flight Status</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bookingDetailContainer}>
        {/* Details Row */}
        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>Depart</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>Wed, Nov 13</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>3h 10m</Text>
          </View>
        </View>
        {/* Flight Info */}
        <View style={styles.flightInfo}>
          <View style={styles.flightTime}>
            <Text style={styles.flightText}>17:00</Text>
            <Text style={styles.flightSubText}>3h 10m</Text>
            <Text style={styles.flightText}>12:20</Text>
          </View>
          <View style={styles.borderLeft}></View>
          <View style={styles.flightDetails}>
            <Text style={styles.flightText}>Abu Dhabi International Airport</Text>
            <Text style={styles.flightSubText}>Qatar Airways</Text>
            <Text style={styles.flightText}>ISB Islamabad International Airport</Text>
          </View>
        </View>
        {/* button */}
        <TouchableOpacity style={{borderWidth:1,borderColor:'#EEFD79',borderRadius:10,width:"100%",marginTop:hp(2),padding:hp(1.2)}}>
            <Text style={{color:'#EEFD79',textAlign:'center',fontSize:20,fontWeight:'600'}}>Flight Status</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(3),
    backgroundColor: '#363535cc',
    padding: hp(1),
    borderRadius: 10,
  },
  button: {
    paddingVertical: hp(1),
    paddingHorizontal: hp(2),
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  selectedButton: {
    backgroundColor: '#EEFD79',
  },
  selectedButtonText: {
    color: 'black',
  },
  bookingDetailContainer: {
    backgroundColor: 'rgba(80, 78, 79, 0.8)',
    padding: hp(2),
    marginTop: hp(3),
    borderRadius: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  detailItem: {
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: hp(1),
  },
  detailText: {
    color: 'white',
  },
  flightInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 1,
    marginTop: hp(2),
  },
  flightTime: {
    alignItems: 'center',
    gap:10
  },
  flightText: {
    color: 'white',
  },
  flightSubText: {
    color: 'gray',
    fontSize: 14,
  },
  borderLeft: {
    borderLeftWidth: 1,
    borderColor: 'gray',
    height: '100%',
    marginHorizontal: 10,
  },
  flightDetails: {
    flex: 1,
    gap:10
  },
});
