import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/screenWrapper'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import CommonTextInput from '../../components/textinput';
import CommonButton from '../../components/button';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default function Signup() {
  const navigation=useNavigation()
  return (
    <ScreenWrapper>
       <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 1 }}>
                      <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ borderWidth: 1, borderRadius: 50, padding: 4, borderColor: '#EEFD79' }}
                      >
                        <Icon name="arrow-back" size={23} color="white" />
                      </TouchableOpacity>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',gap:10}}>
                      <Image source={require("../../images/Q.png")}/>
                      <CommonTextInput placeholder="Enter Email" placeholderTextColor="gray" customStyle={styles.input}/>
                      <CommonTextInput placeholder="Enter Password" placeholderTextColor="gray" customStyle={styles.input}/>
                      <CommonTextInput placeholder=" Confirm Password" placeholderTextColor="gray" customStyle={styles.input}/>
                    </View>
                    <CommonButton title="Sign up" containerStyle={{margin:0}}/>
                     <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',padding:heightPercentageToDP(3)}} >
                              <Text style={{color:'white'}}>Already have an account!</Text>
                              <TouchableOpacity onPress={()=>navigation.navigate("login2")} >
                              <Text style={{color:'rgba(39, 217, 245, 0.8)'}}>Login</Text></TouchableOpacity>
                            </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  input:{
    width:"100%",
    padding:19
  }
})