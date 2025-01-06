import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/screenWrapper'
import CommonButton from '../../components/button'
import { useNavigation } from '@react-navigation/native'

export default function TourConfirmed() {
    const navigation=useNavigation()
  return (
    <ScreenWrapper>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={require("../../images/tick.png")}/>
            <Text style={{color:'white',marginTop:8,fontSize:25,fontWeight:'900'}}>Tour Confirmed</Text>
        </View>
        <CommonButton title="Continue" containerStyle={{margin:0,marginVertical:10}} onPress={()=>navigation.navigate("drawer")}/>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({})