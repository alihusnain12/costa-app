import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Notifications() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 1,
          marginTop: hp(2),
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            borderWidth: 1,
            borderRadius: 50,
            padding: 4,
            borderColor: '#EEFD79',
          }}>
          <Icon name="arrow-back" size={23} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            flex: 1,
            textAlign: 'center',
            fontSize: 25,
            fontWeight: '700',
          }}>
          Notifications
        </Text>
      </View>
      <ScrollView>
      <View style={{ marginTop: hp(4), flexDirection: 'row', alignItems: 'center', paddingHorizontal: 1, gap: 10 }}>
        <Text style={{ color: 'white', fontSize: 17 }}>Today</Text>
        <View style={{ borderWidth: 1, borderColor: 'gray', flex: 1, marginTop: hp(1) }}></View>
      </View>
      <View style={{ backgroundColor: '#3a3939cc', marginTop: hp(2), padding: hp(2), borderRadius: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 1 }}>
          <TouchableOpacity style={{ backgroundColor: 'rgba(246, 215, 127, 0.43)', borderRadius: 100, padding: hp(1) }}>
            <Icon name="notifications-outline" size={24} color="#EEFD79" />
          </TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 19 }}>Trip Completion!</Text>
          <Text style={{ color: 'gray' }}>9min ago</Text>
        </View>
        <Text style={{ color: '#B8B8B8', marginTop: hp(3), textAlign: 'justify', paddingLeft: hp(5), paddingRight: hp(5) }}>
          You spent 5 days in Tokyo, visited 12 locations, and walked 40 kilometers. Would you like to share your trip on
          Instagram?
        </Text>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp(2) ,marginLeft:hp(2)}}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Image source={require("../../images/Vector.png")} />
            <Text style={{ color: '#EEFD79' }}>Share on Instagram</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* 2 */}
      <View style={{backgroundColor: '#3a3939cc', marginTop: hp(2), padding: hp(2), borderRadius: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 1 }}>
          <TouchableOpacity style={{ backgroundColor: 'rgba(246, 215, 127, 0.43)', borderRadius: 100, padding: hp(1) }}>
            <Icon name="notifications-outline" size={24} color="#EEFD79" />
          </TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 19 }}>Flight delay!</Text>
          <Text style={{ color: 'gray' }}>9min ago</Text>
        </View>
        <Text style={{ color: '#B8B8B8', marginTop: hp(3), textAlign: 'justify', paddingLeft: hp(5), paddingRight: hp(5) }}>
        Your flight has been delayed for an hour,
        New flight time is 13:40.
        </Text>
      </View>
      <View style={{ marginTop: hp(4), flexDirection: 'row', alignItems: 'center', paddingHorizontal: 1, gap: 10 }}>
        <Text style={{ color: 'white', fontSize: 17 }}>Yesterday</Text>
        <View style={{ borderWidth: 1, borderColor: 'gray', flex: 1, marginTop: hp(1) }}></View>
      </View>
      {/* 2 */}
      <View style={{backgroundColor: '#3a3939cc', marginTop: hp(2), padding: hp(2), borderRadius: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 1 }}>
          <TouchableOpacity style={{ backgroundColor: 'rgba(246, 215, 127, 0.43)', borderRadius: 100, padding: hp(1) }}>
            <Icon name="notifications-outline" size={24} color="#EEFD79" />
          </TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 19 }}>Flight delay!</Text>
          <Text style={{ color: 'gray' }}>9min ago</Text>
        </View>
        <Text style={{ color: '#B8B8B8', marginTop: hp(3), textAlign: 'justify', paddingLeft: hp(5), paddingRight: hp(5) }}>
        Your flight has been delayed for an hour,
        New flight time is 13:40.
        </Text>
      </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({});
