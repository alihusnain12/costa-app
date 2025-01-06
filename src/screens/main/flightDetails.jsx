import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import CommonButton from '../../components/button';

export default function FlightDetails() {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ScreenWrapper>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 1, marginTop: hp(1) }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ borderWidth: 1, borderRadius: 50, padding: 4, borderColor: '#EEFD79' }}
        >
          <Icon name="arrow-back" size={23} color="white" />
        </TouchableOpacity>
        <Text style={{ color: 'white', flex: 1, textAlign: 'center', fontSize: 25, fontWeight: '700' }}>Flight Details</Text>
      </View>
      <ScrollView contentContainerStyle={{paddingBottom:hp(6)}} showsVerticalScrollIndicator={false}>
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
          <TouchableOpacity style={{ borderWidth: 1, borderColor: '#EEFD79', borderRadius: 10, width: "100%", marginTop: hp(2), padding: hp(1.2) }}>
            <Text style={{ color: '#EEFD79', textAlign: 'center', fontSize: 20, fontWeight: '600' }}>Flight Status</Text>
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
          <TouchableOpacity style={{ borderWidth: 1, borderColor: '#EEFD79', borderRadius: 10, width: "100%", marginTop: hp(2), padding: hp(1.2) }}>
            <Text style={{ color: '#EEFD79', textAlign: 'center', fontSize: 20, fontWeight: '600' }}>Flight Status</Text>
          </TouchableOpacity>
        </View>
        {/* Passenger Information */}
        <Text style={{ color: 'white', fontWeight: "900", fontSize: 20, marginTop: hp(2) }}>Passenger Information</Text>
        <View style={styles.passengerInfoContainer}>
          <View style={styles.passengerInfoRow}>
            <Text style={styles.passengerText}>Passenger Name</Text>
            <CheckBox
              value={isChecked}
              onValueChange={setIsChecked}
              tintColors={{ true: '#EEFD79', false: 'gray' }}
            />
            
          </View><Text style={{color:'gray',marginTop:2}}>Passport Number</Text>
        </View>
        <View style={styles.passengerInfoContainer}>
          <View style={styles.passengerInfoRow}>
            <Text style={styles.passengerText}>Passenger Name</Text>
            <CheckBox value={isChecked} onValueChange={() => setIsChecked(!isChecked)} tintColors={{ true: '#EEFD79', false: 'gray' }} boxType="square" />
            
          </View><Text style={{color:'gray',marginTop:2}}>Passport Number</Text>
        </View>
        <TouchableOpacity style={{borderWidth:1,borderColor:'#EEFD79',borderRadius:10,padding:hp(1.3),width:"100%",marginTop:hp(2)}} onPress={()=>navigation.navigate("TravellorInfo")}>
          <Text style={{textAlign:'center',color:'#EEFD79',fontSize:20}}>Add New Passenger</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={{backgroundColor:'rgba(80, 78, 79, 0.8)',borderRadius:10,padding:hp(2),width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{color:'white',fontSize:14}}>Round Trip Per Person</Text>
        <Text style={{color:'#EEFD79'}}>$1200</Text>
      </View>
      <CommonButton title="Pay & Continue" containerStyle={{margin:0,marginVertical:hp(2)}}/>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
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
    gap: 10,
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
    gap: 10,
  },
  passengerInfoContainer: {
    backgroundColor: 'rgba(80, 78, 79, 0.8)',
    padding: hp(2),
    borderRadius: 10,
    marginTop: hp(3),
  },
  passengerInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 1,
  },
  passengerText: {
    color: 'white',
    fontSize: 16,
  },
});
