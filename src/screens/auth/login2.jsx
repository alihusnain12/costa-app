import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import CommonTextInput from '../../components/textinput';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import CommonButton from '../../components/button';
import { useNavigation } from '@react-navigation/native';

export default function Login2() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
        <Image source={require("../../images/Q.png")} />
        <Text style={{ fontSize: 26, fontWeight: '800', color: 'white' }}>Welcome Back!</Text>
        <CommonTextInput placeholder="Enter username" placeholderTextColor="white" customStyle={styles.email} />
        <CommonTextInput placeholder="Enter password" placeholderTextColor="white" customStyle={styles.password} />
        <TouchableOpacity style={{ justifyContent: 'flex-end', alignItems: 'flex-end', width: '100%', paddingHorizontal: heightPercentageToDP(2) }} onPress={()=>navigation.navigate("ForgetPassword")}>
          <Text style={{ color: '#EEFD79' }}>Forget Password</Text>
        </TouchableOpacity>
      </View>
      
      <CommonButton title="Continue" onPress={() => navigation.navigate("main")} containerStyle={{ margin: 0 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: heightPercentageToDP(3) }}>
        <Text style={{ color: 'white' }}>Don't have an account!</Text>
        <TouchableOpacity onPress={() => navigation.navigate("signup")}>
          <Text style={{ color: 'rgba(39, 217, 245, 0.8)' }}>Signup</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  email: {
    width: "100%",
    padding: heightPercentageToDP(2),
    color: 'white',
  },
  password: {
    width: "100%",
    padding: heightPercentageToDP(2),
    color: 'white',
  },
});
