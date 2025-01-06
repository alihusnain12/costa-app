import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import CommonButton from '../../components/button';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function CardSuccess() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require("../../images/tick.png")} />
        <Text style={{ color: 'white', fontWeight: '900', fontSize: 25, textAlign: 'center', marginTop: heightPercentageToDP(2) }}>Card Added</Text>
        <Text style={{ color: 'white', fontWeight: '900', fontSize: 25, textAlign: 'center' }}>Successfully</Text>
      </View>
      <CommonButton title="Continue" onPress={() => navigation.navigate("drawer")} />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  // Add your styles here
});
