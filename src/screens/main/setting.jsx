import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Setting() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ borderWidth: 1, borderRadius: 50, padding: 4, borderColor: '#EEFD79' }}
        >
          <Icon name="arrow-back" size={23} color="white" />
        </TouchableOpacity>
        <Text style={{ color: 'white', flex: 1, textAlign: 'center', fontSize: 25, fontWeight: '700' }}>Settings</Text>
      </View>
      <Text style={{ color: 'white', fontSize: 22, fontWeight: '700', marginTop: hp(3) }}>Account</Text>
      {/* 1 */}
      <Pressable style={{ backgroundColor: '#3a3939cc', borderRadius: 10, padding:wp(4), marginTop: hp(1) }} onPress={()=>navigation.navigate("Currency")}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{ color: 'white', fontSize: 16 }}>Currency</Text>
        <Icon name="chevron-forward-outline" size={20} color="#EEFD79"  />
        </View>
        <Text style={{color:'gray',marginTop:hp(1)}}>Dollar ($)</Text>
      </Pressable>
      {/* 2 */}
      <Pressable style={{ backgroundColor: '#3a3939cc', borderRadius: 10, padding:wp(4), marginTop: hp(1) }} onPress={()=>navigation.navigate("Language")}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{ color: 'white', fontSize: 16 }}>Language</Text>
        <Icon name="chevron-forward-outline" size={20} color="#EEFD79"  />
        </View>
        <Text style={{color:'gray',marginTop:hp(1)}}>English</Text>
      </Pressable>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({});
