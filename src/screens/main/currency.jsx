import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/screenWrapper'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function Currency() {
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
                <Text style={{ color: 'white', flex: 1, textAlign: 'center', fontSize: 25, fontWeight: '700' }}>Currency</Text>
              </View>
              {/*  */}
              <View style={{backgroundColor:'#3a3939cc',borderRadius:10,padding:hp(1),flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:hp(5)}}>
                <TextInput placeholder='search language' placeholderTextColor="gray" style={{ color:'white'}}/>
                <Icon name="search" size={20} color="#EEFD79"/>
              </View>
              <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginTop:hp(3)}}>Choose preferred currency</Text>
              <View style={{backgroundColor:'#3a3939cc',borderRadius:10,padding:hp(2), marginTop:hp(2)}}>
                <Text style={{color:'white'}}>Dollars</Text>
              </View>
              <View style={{backgroundColor:'#3a3939cc',borderRadius:10,padding:hp(2), marginTop:hp(2)}}>
                <Text style={{color:'white'}}>Dollars</Text>
              </View>
              <View style={{backgroundColor:'#3a3939cc',borderRadius:10,padding:hp(2), marginTop:hp(2)}}>
                <Text style={{color:'white'}}>Dollars</Text>
              </View>
              <View style={{backgroundColor:'#3a3939cc',borderRadius:10,padding:hp(2), marginTop:hp(2)}}>
                <Text style={{color:'white'}}>Dollars</Text>
              </View>
              <View style={{backgroundColor:'#3a3939cc',borderRadius:10,padding:hp(2), marginTop:hp(2)}}>
                <Text style={{color:'white'}}>Dollars</Text>
              </View>
              <View style={{backgroundColor:'#3a3939cc',borderRadius:10,padding:hp(2), marginTop:hp(2)}}>
                <Text style={{color:'white'}}>Dollars</Text>
              </View>
              <View style={{backgroundColor:'#3a3939cc',borderRadius:10,padding:hp(2), marginTop:hp(2)}}>
                <Text style={{color:'white'}}>Dollars</Text>
              </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({})