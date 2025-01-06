import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../../components/screenWrapper'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CommonTextInput from '../../components/textinput';
import CommonButton from '../../components/button';

export default function EditProfile() {
  const navigation = useNavigation();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <ScreenWrapper>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ borderWidth: 1, borderRadius: 50, padding: 4, borderColor: '#EEFD79' }}
        >
          <Icon name="arrow-back" size={23} color="white" />
        </TouchableOpacity>
        <Text style={{ color: 'white', flex: 1, textAlign: 'center', fontSize: 25, fontWeight: '700' }}>Edit</Text>
      </View>
      {/* 1 */}
      <ScrollView>
      <View style={{ marginTop: hp(4) }}>
        <Text style={{ color: '#B8B8B8', marginBottom: hp(1) }}>Username</Text>
        <CommonTextInput placeholder="Enter your username" placeholderTextColor="#FBFAF7" customStyle={styles.input} />
      </View>
      {/* heading */}
      <Text style={{ fontSize: 20, fontWeight: '600', color: 'white', marginTop: hp(5) }}>Edit Password</Text>
      {/* 2 */}
      <View style={{ marginTop: hp(4), position: 'relative' }}>
        <Text style={{ color: '#B8B8B8', marginBottom: hp(1) }}>Current Password</Text>
        <CommonTextInput 
          placeholder="Enter your current password" 
          placeholderTextColor="#FBFAF7" 
          customStyle={styles.input} 
          secureTextEntry={!showCurrentPassword}
        />
        <TouchableOpacity
          onPress={() => setShowCurrentPassword(!showCurrentPassword)}
          style={{ position: 'absolute', right: 10, top: hp(5) }}
        >
          <Icon name={showCurrentPassword ? "eye-off" : "eye"} size={23} color="#EEFD79" />
        </TouchableOpacity>
      </View>
      {/* 3 */}
      <View style={{ marginTop: hp(2), position: 'relative' }}>
        <Text style={{ color: '#B8B8B8', marginBottom: hp(1) }}>New Password</Text>
        <CommonTextInput 
          placeholder="Enter your new password" 
          placeholderTextColor="#FBFAF7" 
          customStyle={styles.input} 
          secureTextEntry={!showNewPassword}
        />
        <TouchableOpacity
          onPress={() => setShowNewPassword(!showNewPassword)}
          style={{ position: 'absolute', right: 10, top: hp(5) }}
        >
          <Icon name={showNewPassword ? "eye-off" : "eye"} size={23} color="#EEFD79" />
        </TouchableOpacity>
      </View>
      {/* 4 */}
      <View style={{ marginTop: hp(2), position: 'relative' ,}}>
        <Text style={{ color: '#B8B8B8', marginBottom: hp(1) }}>Confirm Password</Text>
        <CommonTextInput 
          placeholder="Confirm your new password" 
          placeholderTextColor="#FBFAF7" 
          customStyle={styles.input} 
          secureTextEntry={!showConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          style={{ position: 'absolute', right: 10, top: hp(5) }}
        >
          <Icon name={showConfirmPassword ? "eye-off" : "eye"} size={23} color="#EEFD79" />
        </TouchableOpacity>
      </View>
      </ScrollView>
      <CommonButton title="Update"/>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: hp(2),
    color: 'white'
  }
});
