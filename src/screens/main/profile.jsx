import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Profile() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 1 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ borderWidth: 1, borderRadius: 50, padding: 4, borderColor: '#EEFD79' }}
          >
            <Icon name="arrow-back" size={23} color="white" />
          </TouchableOpacity>
          <Text style={{ color: 'white', flex: 1, textAlign: 'center', fontSize: 25, fontWeight: '700' }}>Profile</Text>
        </View>
        <Text style={{ fontSize: 20, marginTop: hp(2.5), color: 'white', fontWeight: '700' }}>Account Information</Text>
        <View style={{ backgroundColor: '#434142cc', borderRadius: 10, marginTop: hp(5), padding: hp(2) }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>Username</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("editProfile")}>
            <Icon name="chevron-forward" color="#EEFD79" size={20} />
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: 'gray', borderRadius: 10, padding: 5, marginTop: hp(2), width: wp(32) }}>
            <Text style={{ color: 'white', padding: 2 }}>email@gmail.com</Text>
          </View>
          <Text style={{ marginTop: hp(3), color: '#B8B8B8' }}>Password : *****</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 1, marginTop: hp(2) }}>
          <Text style={{ color: 'white', fontWeight: '800', fontSize: 22 }}>Travellers Information</Text>
          <Text style={{ color: '#EEFD79' }}>Add New</Text>
        </View>
        <View style={{ backgroundColor: '#434142cc', borderRadius: 10, marginTop: hp(3), padding: hp(2) }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>Gabrial John</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("profileInfo")}>
            <Icon name="chevron-forward" color="#EEFD79" size={20} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', paddingHorizontal: 1, gap: 10, alignItems: 'center', marginTop: hp(2) }}>
            <View style={{ backgroundColor: 'gray', padding: 5, borderRadius: 10 }}>
              <Text style={{ color: 'white' }}>Male</Text>
            </View>
            <View style={{ backgroundColor: 'gray', padding: 5, borderRadius: 10 }}>
              <Text style={{ color: 'white' }}>United Kingdom</Text>
            </View>
          </View>
          <Text style={{ marginTop: hp(3), color: '#B8B8B8' }}>Passport No : CY6******67</Text>
        </View>
        {/*  */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 1, marginTop: hp(2) }}>
          <Text style={{ color: 'white', fontWeight: '800', fontSize: 22 }}>Payment Information</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("AddNewCard")}>
          <Text style={{ color: '#EEFD79' }}>Add New</Text></TouchableOpacity>
        </View>
        {/* 3 */}
        <View style={{ backgroundColor: '#434142cc', borderRadius: 10, marginTop: hp(3), padding: hp(2) }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 1 }}>
            <Text style={{ color: 'white' }}>Card Number</Text>
            <Icon name="trash-bin" color="#EEFD79" size={20} />
          </View>
          <Text  style={{ marginTop: hp(.5), color: '#B8B8B8' }}>Master card</Text>
        </View>
        <View style={{ backgroundColor: '#434142cc', borderRadius: 10, marginTop: hp(2), padding: hp(2) }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 1 }}>
            <Text style={{ color: 'white' }}>Card Number</Text>
            <Icon name="trash-bin" color="#EEFD79" size={20} />
          </View>
          <Text  style={{ marginTop: hp(.5), color: '#B8B8B8' }}>Visa Card</Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({});
