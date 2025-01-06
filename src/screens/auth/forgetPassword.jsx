import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/screenWrapper'
import CommonTextInput from '../../components/textinput'
import CommonButton from '../../components/button'
import { useNavigation } from '@react-navigation/native'

export default function ForgetPassword() {
    const navigation=useNavigation()
  return (
    <ScreenWrapper>
        <View style={{justifyContent:'center',alignItems:'center',flex:1,gap:20}}>
            <Image source={require("../../images/Q.png")} sty/>
            <Text style={{color:'white',fontWeight:'900',fontSize:25,textAlign:'center'}}>Forget Password?</Text>
            <CommonTextInput placeholder="Email" placeholderTextColor="gray" customStyle={styles.input}/>
        </View>
        <CommonButton title="Forget password" containerStyle={{margin:0}} onPress={()=>navigation.navigate("otp")}/>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingHorizontal:1,marginVertical:17}}>
            <Text style={{color:'white'}}>Remembered your password ?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("login2")}>
            <Text style={{color:'#EEFD79'}}>Sign in</Text></TouchableOpacity>
        </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
    input:{
        padding:19,
        width:'100%'
    }
})